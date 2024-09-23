import React from 'react'
import chamaeleon from '.././assets/images/webp/chamaeleon .webp'


const Header = () => {
    return (
        <div>
           
                <h2 className='justify-content-center d-flex'>Lorem ipsum dolor sit amet.</h2>
          
            <div className='justify-content-center d-flex'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores.</p>
            </div>
            <div className='justify-content-center d-flex'>
                <img className='mx-auto' src={chamaeleon} alt="chamaeleon" />
            </div>
        </div>
    )
}

export default Header
