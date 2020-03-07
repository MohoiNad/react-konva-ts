import React, { FunctionComponent } from 'react'
import Button from '@material-ui/core/Button'
import fonts from './constants/fonts'
import images from './constants/images'


interface Props {
  contextMenu: 'text' | 'image' | 'none';
  fontSwitch: number;
  imageSwitch: number;
  handleImageSwitch: (i: number) => void;
  handleFontSwitch: (i: number) => void;
}

export const Sidebar: FunctionComponent<Props> = ({
  contextMenu,
  fontSwitch,
  imageSwitch,
  handleFontSwitch,
  handleImageSwitch,
}) => {
  switch (contextMenu) {
    case 'text':
      return (
        <div>
          <p>
            Font {fontSwitch + 1} of {fonts.length}
          </p>
          <ul>
            {fonts.map((e, i) => {
              return (
                <li>
                  <Button
                    disabled={fontSwitch === i}
                    key={e}
                    onClick={() => {
                      handleFontSwitch(i)
                    }}
                  >
                    {e}
                  </Button>
                </li>
              )
            })}
          </ul>
        </div>
      )
    case 'image':
      return (
        <div>
          <p>
            Images {imageSwitch + 1} of {images.length}
          </p>

          <ul>
            {images.map((e, i) => {
              return (
                <li>
                  <Button
                    disabled={imageSwitch === i}
                    key={e}
                    onClick={() => {
                      handleImageSwitch(i)
                    }}
                  >
                    {'Image №' + (i + 1)}
                  </Button>
                </li>
              )
            })}
          </ul>
        </div>
      )
    case 'none':
      return <React.Fragment />
  }
}
