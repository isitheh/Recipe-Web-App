import React, { Component } from 'react';
import {Container, Table} from 'reactstrap';
import AppNav from './AppNav';
import Footer from './Footer';
import './App.css';

class Translate extends Component {
  data = [
    ["Cup", "250ml"], ["Spoon", "10ml"], ["Teaspoon", "5ml"]
  ];
  render() {
    const title = <h3 className="pt-2 pb-2" style={{display: 'flex', justifyContent: 'center'}}>Recipe App Information</h3>
    return (
      <div className="Site">
      <AppNav/>
      <div className="Home-image"></div>
      <Container>
        {title}
        <Table className="mt-1" >
          <thead>
            <th>Measurement</th>
            <th>Unit</th>
          </thead>
          <tbody>
          {
            this.data.map((rowInfo, i) => (
              <tr key={i}>
                {
                  rowInfo.map((num, j) =>
                    <td key={j}>{num}</td>
                  )
                }
              </tr>
            ))
          }
          </tbody>
        </Table>
      </Container>
      <Footer/>
    </div>
    );
  }
}

export default Translate;