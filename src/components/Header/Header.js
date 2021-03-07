import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';
import EMDLogo from '../../images/image2vector.svg';

const Header = () => {
    // Initializing state
    const [mobile, setMobile] = useState([]);
    // GETs the existing categories from API
//     useEffect(() => {
//       axios({
//         method: 'GET',
//         url: '/categories'
//       }).then(response =>{
//         setCategories(response.data.categories);
//         console.log('Response:', response.data.categories);
        
//       }).catch(err =>{
//         console.log('Error in GET', err);
//       });
//       }, []);
//   if (window.innerWidth < 1250 && this.state.isMobile === false) {
//     this.setState({isMobile: true})
//   }
//     window.addEventListener('resize', () => {
//         this.setState({
//             isMobile: window.innerWidth < 1250
//         });
//     }, false);
// }

  return (
    <div className="header">
      <img src={EMDLogo} className="nav-logo"></img>
      <div className="nav">
        <AnchorLink 
          href='#clients'
          className="nav-link">
            Clients
        </AnchorLink>
        <AnchorLink 
          href='#services'
          className="nav-link">
            Services
        </AnchorLink>
        <AnchorLink 
          href='#categories'
          className="nav-link">
            Categories
        </AnchorLink>
        <AnchorLink 
          href='#contact'
          className="nav-link">
            Contact
        </AnchorLink>
      </div>
    </div>
  );
};

export default Header;