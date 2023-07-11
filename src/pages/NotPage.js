import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NotPage() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Navbar/>
      <div className="flex justify-between">
        <div></div>
        <Link to="/">
          <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-10 mb-2 mt-2">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-grow justify-center">
        <span>404 NOT FOUND</span>
      </div>
      <Footer/>
    </div>
  )
}

export default NotPage