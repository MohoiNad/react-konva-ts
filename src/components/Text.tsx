import { Text as KonvaText } from 'react-konva'
import fonts from './constants/fonts'
import React, { FunctionComponent } from 'react'

interface Props {
  loaded?: Boolean,
  textData?: string,
  fontSwitch?: number | undefined,
  setContextMenu: (contextMenu:  "text" | "image" | "none")=> void
}


export const Text:FunctionComponent<Props> = ({textData, loaded, fontSwitch, setContextMenu}) => {
  return (
    <KonvaText
      text={textData}
      fill={"#339"}
      x={10}
      y={700}
      width={1000}
      opacity={1}
      height={32}
      fontSize={32}
      fontFamily={loaded && fontSwitch ? fonts[fontSwitch] : "Arial"}
      align="center"
      shadowColor={"#333"}
      shadowOffset={{ x: 1, y: 1 }}
      onClick={(e) => setContextMenu('text')}
    />
  )
}
