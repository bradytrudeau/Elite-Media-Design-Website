import React, {useState} from 'react';
import './Clients.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import BestBuy from '../../images/bestbuy.png';
import Walmart from '../../images/walmart.png';
import Clam from '../../images/clam.png';
import BlackFish from '../../images/blackfish.png';
import FleetFarm from '../../images/fleetfarm.png';




function Clients() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img className='client-photos' src={BestBuy} onDragStart={handleDragStart} />,
    <img className='client-photos' src={Walmart} onDragStart={handleDragStart} />,
    <img className='client-photos' src={FleetFarm} onDragStart={handleDragStart} />,
    <img className='client-photos' src={Clam} onDragStart={handleDragStart} />,
    <img className='client-photos' src={BlackFish} onDragStart={handleDragStart} />,
  ];
  return (
    <div id='clients' className='clients'>
      <h2>Trusted By</h2>
      <AliceCarousel items={items} disableButtonsControls={true}>
      </AliceCarousel>
    </div>
  );
} 



export default Clients;