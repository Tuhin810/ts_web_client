import React from 'react'
import { NavBar } from '../../../shared/navbar/NavBar'
import { Hero } from '../Hero/Hero'
import { Features } from '../features/Features'
import { Testimonials } from '../testimonials/Testimonials'
import { Stats } from '../stats/Stats'
import { Footer } from '../../../shared/footer/Footer'

export const Layout = () => {
  return (

        	<body className="bg-white dark:bg-gray-900 w-full">
		<NavBar/>
		<Hero/>
		<Features/>
		<Stats/>
		<Testimonials/>
		<Footer/>
	</body>
  
  )
}
