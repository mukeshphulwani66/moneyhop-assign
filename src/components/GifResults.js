import React from 'react'

const GifResults = ({results}) => {
  return (
    <div className="results">
    {results.map(gif => {
      return <img key={gif.id} src={gif.images.preview_gif.url} />
    })}
  </div>
  )
}

export default GifResults