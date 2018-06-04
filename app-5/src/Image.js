import React from 'react';

function Image( props ) {
  return (
    <div>
      <img src={ props.placeHolderImage } alt="" />
    </div>
  )
}

export default Image;