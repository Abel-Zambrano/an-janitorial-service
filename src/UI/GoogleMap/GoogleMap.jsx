import React from 'react';

const GoogleMap = (props) => {

    return (
      <img className={props.styleName} 
      src= {`https://maps.googleapis.com/maps/api/staticmap?center=SanLeandro&zoom=10&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_MAP}`}
      alt="map" />  
    );

};

export default GoogleMap;