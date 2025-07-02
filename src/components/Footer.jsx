// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
//       <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
//         <div className='w-full md:w-1/3 mb-8 md:mb-0'>
//             <img src={assets.logo_dark} alt="" />
//             <p className='text-gray-400 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non magni iusto quaerat placeat quisquam vel consequuntur possimus. Tempora, voluptate ipsa officiis iure ea harum voluptatem incidunt fuga fugiat porro. Numquam!</p>
//         </div>
//         <div className='w-full md:w-1/5 mb-8 md:mb-0'>
//             <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
//             <ul className='flex flex-col gap-2 text-gray-400'>
//                 <a href="#Header" className='hover:text-white'>Home</a>
//                 <a href="#About" className='hover:text-white'>About Us</a>
//                 <a href="#Contact" className='hover:text-white'>Contact Us</a>
//                 <a href="#" className='hover:text-white'>Privacy Policy</a>
//             </ul>
//         </div>
//         <div className='w-full md:w-1/3 mb-8 md:mb-0'>
//             <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
//             <p className='text-gray-400 mb-4 max-w-80'>Stay updated with our latest news and offers</p>
//             <div className='flex flex-row gap-2'>
//                 <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none' />
//                 <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
//             </div>
//         </div>
//       </div>
//       <div className='border-t border-gray-700 mt-10 pt-4 text-center text-gray-500'>
//         Copyright 2025 &copy; Elite Haven. All rights reserved.
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-8 px-4 md:px-20 lg:px-32 w-full' id='Footer'>
      <div className='container mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-6'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <img src={assets.logo_dark} alt="Elite Haven" className='mb-3 h-8' />
            <p className='text-gray-400 text-sm leading-relaxed max-w-md'>
              Delivering excellence in every project. We're committed to providing innovative solutions 
              that drive success for our clients worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className='text-white font-semibold mb-3 text-sm uppercase tracking-wide'>Company</h4>
            <ul className='space-y-1.5'>
              <li><a href="#Header" className='text-gray-400 hover:text-white transition-colors text-sm'>Home</a></li>
              <li><a href="#About" className='text-gray-400 hover:text-white transition-colors text-sm'>About Us</a></li>
              <li><a href="#Contact" className='text-gray-400 hover:text-white transition-colors text-sm'>Contact</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white transition-colors text-sm'>Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className='text-white font-semibold mb-3 text-sm uppercase tracking-wide'>Stay Connected</h4>
            <p className='text-gray-400 text-sm mb-3'>Get updates on our latest news</p>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input 
                type="email" 
                placeholder='Your email' 
                className='flex-1 px-3 py-2 text-sm bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors' 
              />
              <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className='border-t border-gray-800 pt-4 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs'>
          <p>&copy; 2025 Elite Haven. All rights reserved.</p>
          <div className='flex space-x-4 mt-2 sm:mt-0'>
            <a href="#" className='hover:text-gray-300 transition-colors'>Terms</a>
            <a href="#" className='hover:text-gray-300 transition-colors'>Privacy</a>
            <a href="#" className='hover:text-gray-300 transition-colors'>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer