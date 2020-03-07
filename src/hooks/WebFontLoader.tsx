import { useEffect, useState } from 'react'
import WebFontLoader from 'webfontloader'
import fonts from '../components/constants/fonts'

export const useFontLoad = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Fetch necessary fonts.
    WebFontLoader.load({
      google: {
        families: fonts,
      },
      fontactive: () => {
        setLoaded(true)
      },
    })
  }, [])
  return loaded
}
