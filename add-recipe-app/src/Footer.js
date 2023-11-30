import React, { Component } from 'react';

class Footer extends Component {
  state = {  }
  render() {
    return (
      <div>
        <hr/>
        <footer className="mt-3"  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'light', color: 'black'}}>
          <p>&#169; <a href="https://www.gamasg.co.za" rel="noopener noreferrer" target="_blank">Sithembiso</a> 2020</p>
        </footer>
      </div>
    );
  }
}

export default Footer;