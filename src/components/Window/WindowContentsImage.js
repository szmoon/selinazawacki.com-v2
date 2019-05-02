import React from 'react';

export default function WindowContentsImage(props) {
  const { image, imageAlt } = props;

  let style = {
    image: {
      position: 'relative',
      width: '100%',
    },
  }

  return (
    <img src={image} alt={imageAlt} style={style.image} />
  );
  
}
