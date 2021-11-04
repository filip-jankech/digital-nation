import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

type Props = {
  gridItems: GridItem[];
}

export type GridItem = {
  alt: string;
  childImageSharp: any;
  style: {}; 
  image: {} | string;
  text:string;
}

const FeatureGrid = ({ gridItems }: Props) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

export default FeatureGrid
