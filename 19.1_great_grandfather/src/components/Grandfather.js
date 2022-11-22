import React,{createContext, useState, } from 'react'
import Father from './Father';

React.createContext("father")
export const MainContextFromGrandfather=createContext();


function Grandfather() {
  const [gift,setGift]=useState([])

  return (
    <MainContextFromGrandfather.Provider value={{gift,setGift}}>
      <div><Father/></div>
    </MainContextFromGrandfather.Provider>
    )
  }
  
export default Grandfather