import React, { Component } from 'react';

import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-wrapper">
            <a  href="https://facebook.com/techtrix.rcciit" target="_blank"  className="fa fa-facebook"></a>
            <a href="https://twitter.com/techtrix_rcciit" target="_blank" className="fa fa-twitter"></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCZCiBjecFOBEyGTjHXUJcWw" className="fa fa-youtube"></a>
            <a href="https://instagram.com/techtrix.rcciit" target="_blank" className="fa fa-instagram"></a>
            <a href="https://github.com/swc-rcciit" target="_blank" className="fa fa-github"></a>
        
        </div>
    );
  }
}

export default Footer;
