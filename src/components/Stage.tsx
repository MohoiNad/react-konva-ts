import React, { useState, FunctionComponent } from 'react'
import { Stage as KonvaStage, Layer,  } from 'react-konva'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { TemporaryDrawer } from './Drawer'
import { HookImage as Image } from './Image'
import { Sidebar } from './Sidebar'
import { Text } from './Text'
import { useFontLoad } from '../hooks/WebFontLoader'
import fonts from './constants/fonts'
import images from './constants/images'

interface ContextMenu {
  initialMenu?: 'text' | 'image' | 'none';
}

export const Stage: FunctionComponent<ContextMenu> = ({
  initialMenu = 'none',
}) => {
  const [textData, setTextData] = useState('Test')
  const [fontSwitch, setFontSwitch] = useState(0)
  const [imageSwitch, setImageSwitch] = useState(0)
  const [contextMenu, setContextMenu] = useState(initialMenu)

  // Handle loading effects.
  const loaded = useFontLoad()

  const handleNext = (type: 'image' | 'font') => {
    switch (type) {
      case 'font':
        fontSwitch === fonts.length - 1
          ? setFontSwitch(0)
          : setFontSwitch(fontSwitch + 1)
        break
      case 'image':
        imageSwitch === images.length - 1
          ? setImageSwitch(0)
          : setImageSwitch(imageSwitch + 1)
        break
      default:
        setFontSwitch(0)
        setImageSwitch(0)
        break
    }
  }

  return (
    <div className="App">
      <TemporaryDrawer>
        <Typography variant="h6" noWrap>
      {loaded ? 'Fonts loaded!' : 'Fonts in progress...'}
        </Typography>
        <Input value={textData} onChange={e => setTextData(e.target.value)} />
        <Sidebar
          handleFontSwitch={setFontSwitch}
          handleImageSwitch={setImageSwitch}
          imageSwitch={imageSwitch}
          fontSwitch={fontSwitch}
          contextMenu={contextMenu}
        />
      </TemporaryDrawer>
      <Button onClick={e => handleNext('font')}>Next Font</Button>
      <Button onClick={e => handleNext('image')}>Next Image</Button>
      <KonvaStage scaleX={1} width={1024} height={768}>
        <Layer>
          <Image setContextMenu={setContextMenu} imageSwitch={imageSwitch} />
        </Layer>
        <Layer>
          <Text
            textData={textData}
            setContextMenu={setContextMenu}
            loaded={loaded}
            fontSwitch={fontSwitch}
          />
        </Layer>
      </KonvaStage>
    </div>
  )
}
