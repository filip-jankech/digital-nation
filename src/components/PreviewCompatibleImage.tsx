import React from 'react'
import Img from 'gatsby-image'

type Props = {
  imageInfo: {
    alt: string;
    childImageSharp?: any;
    image: any;
    style?: {};
  }
}

const PreviewCompatibleImage = ({ imageInfo }: Props) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
