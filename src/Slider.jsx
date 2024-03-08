import React, { useContext, useState } from 'react';
import Slider from '@mui/material/Slider';
import '@mui/material/styles';
import Context from "./components/Context";
import { useReducer } from "react";

function MySlider() {
  const [sliderValue,  setSliderValue] = useState(0);
  const {
        state: {image, sliderRate},
        dispatch,
      } = useContext(Context)

      const handleChange = (event, value) => {
        dispatch({
          type: "image/sliderRate",
          payload: value
        })
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
    <>
    Slide to change image size
    <Slider defaultValue={sliderRate} aria-label="Default" valueLabelDisplay="auto" onChangeCommitted={handleChange} />
    </>
  );
}

export default MySlider;