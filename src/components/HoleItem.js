//Styling
import holes from "../holes";
// import guacamole from "../guacamole";
import { HoleImage, AvocadoImage } from "../styles";

import React, { useState, useEffect } from "react";
// const toggleguacamole = () => {
//   const [currentGuac, setCurrentGuac] = useState(false);
// };

const HoleItem = (props) => {
  const [currentImage, setCurrentImage] = useState(false);
  const hole = props.hole;

  useEffect(() => {
    const timer = setInterval(function () {
      if (hole.id === Math.round(Math.random() * holes.length))
        setCurrentImage(true);
      else setCurrentImage(false);
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  if (currentImage)
    return (
      <HoleImage key={hole.id}>
        <AvocadoImage src="https://cdn3.vectorstock.com/i/thumb-large/59/57/kawaii-avocado-cartoon-design-vector-26515957.jpg" />
      </HoleImage>
    );
  else return <HoleImage />;
};

export default HoleItem;

//Return part
// onClick={toggleguacamole}
// guacamole image: "https://webstockreview.net/images/avocado-clipart-guacamole-18.jpg",
// const toggleguacamole = (guacamoleimage) => {
//   return (src =
//     "https://webstockreview.net/images/avocado-clipart-guacamole-18.jpg");
// };
