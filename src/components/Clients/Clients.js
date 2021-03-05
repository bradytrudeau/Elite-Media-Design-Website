import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import BestBuy from '../../images/bestbuy.png';
import Walmart from '../../images/walmart.png';
import Clam from '../../images/clam.png';
import BlackFish from '../../images/blackfish.png';
import FleetFarm from '../../images/fleetfarm.png';




function Clients() {

  return (
    <div id='clients' className='clients'>
      <h2>Trusted By</h2>
      <Carousel plugins={['arrows']} animationSpeed='100ms'>
        <img src={BestBuy} />
        <img src={Walmart} />
        <img src={FleetFarm} />
        <img src={Clam} />
        <img src={BlackFish} />
      </Carousel>
    </div>
  );
} 



export default Clients;