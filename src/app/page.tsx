"use client"
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from "@/components/WhyChooseUs"
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0,96] bg-grid-white/[0.06]'>
<HeroSection/>
<FeaturedCourses/>
<FeaturedWebinars/>
<WhyChooseUs/>

    </main>
  )
}

export default page
