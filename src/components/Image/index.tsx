import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import * as S from './styles'

export type ImageSrc = {
  url: string
}

export type ImageProps = {
  image: IGatsbyImageData | ImageSrc
}

const Image = ({ image }: ImageProps) => {
  return (
    <>
      {(image as ImageSrc).url ? (
        <S.Image src={(image as ImageSrc).url} alt="" />
      ) : (
        <S.GImage
          image={image as IGatsbyImageData}
          objectFit={'cover'}
          alt=""
        />
      )}
    </>
  )
}

export default Image
