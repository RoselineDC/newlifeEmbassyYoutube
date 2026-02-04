import React from 'react'
import Container from './Container'
import Footertop from './Footertop'
import Logo from './Logo'
function Footer() {
  return <footer className='bg-white/90 border-t'>
    <Container>
      <Footertop />
      

       
        
        
     
      <div className='py-8 border-t text-center text-sm text-gray-600'>
        <div>
          ©{new Date().getFullYear()}{" "}
          <Logo className='text-sm' />
          <span className='text-dark group-hover:text-light hoverEffect font-bold'>
              . All rights reserved.
              
          </span>
          
         
        </div>
        </div>
    </Container>
  </footer>
}

export default Footer
