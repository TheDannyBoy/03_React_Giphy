import React from 'react'

export const GifGridItem = ({ title, url }) => {
  const classes = ['card'];
  return (
    <div className={classes.join(' ')}>
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>
  )
}
