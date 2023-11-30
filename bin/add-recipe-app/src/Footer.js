import React, { Component } from 'react';

class Footer extends Component {
  state = {  }
  render() {
    return (
      <div>
        <hr/>
        <footer className="mt-3"  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'light', color: 'black'}}>
          <p>&#169; <a href="http://www.musocode.com" rel="noopener noreferrer" target="_blank">Sithembiso Gama</a> 2020</p>
        </footer>
      </div>
    );
  }
}

export default Footer;