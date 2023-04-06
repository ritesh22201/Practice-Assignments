import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection';
import { AppContext } from '../Context';
import { useContext } from 'react';

export default function About() {
    const {updateAboutPage} = useContext(AppContext);

    useEffect(() => {
        updateAboutPage();
    },[])

    const data = {
        name : 'Ritesh Goswami',
        image : './images/about1.svg'
    }
  return (
    <HeroSection {...data}/>
  )
}
