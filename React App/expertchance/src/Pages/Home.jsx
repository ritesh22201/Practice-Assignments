import React, { useEffect } from 'react';
import HeroSection from '../Components/HeroSection';
import { AppContext } from '../Context';
import { useContext } from 'react';
import Services from './Services';
import Contact from './Contact';

export default function Home() {

    const {updateHomePage} = useContext(AppContext);

    useEffect(() => {
        updateHomePage();
    }, [])
    
    const data = {
        name : 'Ritesh Goswami',
        image : './images/hero.svg'
    }
  return (
    <div>
        <HeroSection {...data}/>
        <Services/>
        <Contact/>
    </div>
  )
}

