import React, { useContext, useState } from 'react';
import Slider from '@mui/material/Slider';
import '@mui/material/styles';
import Context from "./components/Context";
import { useReducer } from "react";

function MySlider() {
  const [sliderValue,  setSliderValue] = useState(0);
  const {
        state,
        dispatch,
      } = useContext(Context)


 

      const handleChange = (event, value) => {
        //compare value with the prev state of slider value then set the state to the value
        if (value > sliderValue) {
            increaseSize(value);
            setSliderValue(value);
        } else if (value < sliderValue) {
            decreaseSize(value);
            setSliderValue(value);
        }
      };

      const increaseSize = (value) => {
        dispatch({
            type: "image/increaseSize",
            payload: Number(value/100),
          });
      }
      const  decreaseSize = (value) => {
        dispatch({
            type: "image/decreaseSize",
            payload: Number(value/100),
          });
      }

  return (
    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChangeCommitted={handleChange} />
  );
}

export default MySlider;