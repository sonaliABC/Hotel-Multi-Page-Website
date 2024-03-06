import React from 'react'
import './SinglePage.css'
import HeadTitle from '../Common/HeadTitle/HeadTitle'
import { Link } from 'react-router-dom'
import AllItem from "../Components/Destinations/AllItem"
import { useParams } from "react-router-dom"

const SinglePage = () => {
  return (
	<>
		<HeadTitle/>
		<section className='single-page top'>
			<div className='container'>
				<Link to='/destination' className='primary-btn back'>
					<i className='fasvfa-long-arrow-alt-left'></i>Go Back
					</Link>

				<article className='content flex'>
					<div className='main-content'> 
					<img src={AllItem.image} alt=''/>

					</div>
				</article>	
			</div>
		</section>
	</>
  )
}

export default SinglePage