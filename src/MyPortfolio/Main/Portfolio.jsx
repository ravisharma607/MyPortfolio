import React from 'react'
import Aside from '../Home/Aside'
import Profile from '../Home/Profile'
import TopProject from '../Project Carousel/TopProject'
import CarouselData from '../Project Carousel/CarouselData'
import Skills from '../Skills/Skills'
import SkillsData from '../Skills/SkillsData'
import Navbar from '../Navbar/Navbar'
const Portfolio = () => {
  return (
    <>
    <Navbar />
    <Aside />
    <Profile />
    <TopProject imagesData = {CarouselData}/>
    <Skills SkillsData = {SkillsData} />
    </>
  )
}

export default Portfolio