//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

//import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



//Assets
import logo from './Images/logo.svg';
import './CSS/Header.css';


class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

 /* constructor(props){
    super(props)
  };*/

 renderItems(){
   const {items } = this.props;
    
    return items.map((item, key) => {
        const MyLink = props => <Link to={item.url} {...props} />

        return(
          <Button key={key} component={MyLink} color="inherit" className="flex">
            {item.title}
          </Button>
        )
    })
  }

  render() {
    console.log(this.props);
    const { title } = this.props;
    
    /*console.log(this.props);*/

    return (
      <div className="Header">
        <div className="Logo">
           <img src={logo} alt="logo" />
        {/*<h1 className="App-title">Innova</h1>
          <h2>Hello Word React</h2> */}
          <h2>{title}</h2>
          <ul className="root">
                <AppBar position="static">
                  <Toolbar>
                    <div className="flex">
                    <IconButton className="menuButton" color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                        
                          { this.renderItems() }
                    </div>
                        <Button className="loginButton">Login</Button>
                  </Toolbar>
                </AppBar>
          </ul>
        </div>
      </div>
    );
  }
}


export default Header;
