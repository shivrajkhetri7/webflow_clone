import React from 'react';
import { Boxes } from './ui/background-boxes';

interface SquareProps {
  title: string;
  bgColor: string;
  textColor?: string;
  paragraph?: string;
}

const Square = (props: SquareProps) => {
  return (
    <div className='squar' style={{ backgroundColor: props?.bgColor, color: props?.textColor }}>
      <Boxes/>
      <div>{props?.title}</div>
      <p style={{ color: props?.textColor }}>{props?.paragraph} <button className='btn'>New World </button></p>
    
    </div>
  )
}

export default Square