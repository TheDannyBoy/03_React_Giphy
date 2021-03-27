import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import getGifs from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category).then(setImagesList);
  }, [category]);

  const [imagesList, setImagesList] = useState([]);

  return (
    <>
      <h3>{ category }</h3>
      <div className='card-grid'>
        {
          imagesList.map(image => (
            <GifGridItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string,
}
