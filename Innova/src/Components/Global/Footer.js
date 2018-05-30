//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './CSS/Footer.css';

class Footer extends Component {

  static propTypes = {
    copyright: PropTypes.string
  };

  render() {
  	const { copyright = '&copy; Innova 2018'} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;
