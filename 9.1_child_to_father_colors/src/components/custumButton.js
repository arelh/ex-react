import React from 'react'

export const CustumButton = ({color, colorByClick}) => {
  return (
    <button onClick={()=>colorByClick(color)} style={{backgroundColor: color}}>{color}</button>
  )
}


