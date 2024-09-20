import React from 'react'
import CurrentLocation from '../components/CurrentLocation'
import RedBar from '../components/RedBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMessage } from '@fortawesome/free-solid-svg-icons';

export default function MyCard() {
  return (
    <div>
        <CurrentLocation />
         <div>
            <RedBar hgt="25px" wdt="8px" spc="10px" clr="red"/>
            <h4>My Card</h4>
         </div>
         <div>
              <h4>YOUR CART IS EMPTY. LET'S START AN ORDER!</h4>
             <div>
                <img src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" alt="" className='img-fluid'/>
             </div>
             <div><button>Start order</button></div>
         </div>
         <div>
            <h4>STILL HAVE A QUESTION?</h4>
            <div>
                <button>
                    <FontAwesomeIcon icon={faPhone} />
                    call us
                    </button>
                <button>
                    <FontAwesomeIcon icon={faMessage}/>
                    cantact us</button>
            </div>
         </div>
    </div>
  )
}