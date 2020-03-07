import React, { FunctionComponent } from 'react'
import { Image } from 'react-konva';
import useImage from 'use-image';
import images from './constants/images'

interface Props {
  contextMenu?:  "text" | "image" | "none";
  setContextMenu: (contextMenu:  "text" | "image" | "none")=> void
  imageSwitch: number
}

export const HookImage: FunctionComponent<Props> = ({setContextMenu, imageSwitch}) => {

  const [image,status] = useImage(images[imageSwitch]);
  const [failedImage] = useImage(process.env.PUBLIC_URL + '/Cansel.svg')
  return (
    <>
      <Image
        onClick={(e) => setContextMenu("image")}
        image={status === "failed" ? failedImage : image}
        />
    </>
  )
};