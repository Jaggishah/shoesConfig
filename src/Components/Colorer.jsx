import React, { useState } from 'react'
import { Sketch } from "@uiw/react-color";
import { whole } from "../valtio"

export default function Colorer() {
    console.log(whole.currentColor)
    return (
      <div className='sketcher'>
        <Sketch
          color={whole.currentColor}
          onChange={(color) => {
            // console.log(color.hex)
            whole.currentColor = color.hex;
          }}
        />
      </div>
    );
  }
  