import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';
import EMDLogo from '../../images/image2vector.svg';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



class Header extends Component {
  state = {
    isMobile: false,
    anchorEl: false
  }

  componentDidMount() {
    if (window.innerWidth < 1250 && this.state.isMobile === false) {
      this.setState({isMobile: true})
    }
      window.addEventListener('resize', () => {
          this.setState({
              isMobile: window.innerWidth < 1250
          });
      }, false);
  }

   handleClick = () => {
    this.setState({
      anchorEl: true
  });
  };

  handleClose = () => {
    this.setState({
      anchorEl: false
  });
  };

  render() {

    return (
      <div className="header">
        <img src={EMDLogo} className="nav-logo"></img>
        {this.state.isMobile ?
          <div className="nav">
          <Button style={{ verticalAlign: 'baseline' }} aria-controls="simple-menu" aria-haspopup="true" onClick={ this.handleClick }>
            <MenuIcon fontSize={ 'medium' } style={{ color: 'black' }}/>
          </Button>
          <Menu id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={ Boolean(this.state.anchorEl)}
            onClose={ this.handleClose }>
            <MenuItem onClick={ this.handleClose }>
              <AnchorLink 
                href='#clients'
                className="nav-link">
                Clients
              </AnchorLink>
            </MenuItem>
            <MenuItem onClick={ this.handleClose }>
              <AnchorLink 
                href='#services'
                className="nav-link">
                Services
              </AnchorLink>
            </MenuItem>   
            <MenuItem onClick={ this.handleClose }>
              <AnchorLink 
                href='#categories'
                className="nav-link">
                Categories
              </AnchorLink>
            </MenuItem>   
            <MenuItem onClick={ this.handleClose }>
              <AnchorLink 
                href='#contact'
                className="nav-link">
                Contact
              </AnchorLink>
            </MenuItem>               
          </Menu>
        </div>
        :
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
      }
      </div>
    );
  };
}

export default Header;