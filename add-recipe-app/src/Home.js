import React, { Component } from 'react';
import AppNav from './AppNav';
import Footer from './Footer';
import './App.css';
import {Container, Card, CardImg, CardTitle, CardDeck, CardBody} from 'reactstrap';
import veganImg from './assets/vegan.jpg';
import vegetarianImg from './assets/vegetarian.jpg';
import halalImg from './assets/halal.jpg';

import glutenImg from './assets/gluten.jpg';
import fruitImg from './assets/fruit.jpg';
import foodImg from './assets/food.jpg';

class Home extends Component {
  state = {  }
  render() {
    const title = <h3 className="pt-2 pb-2" style={{display: 'flex', justifyContent: 'center'}}>The Recipe App</h3>
    return (
      <div className="Site">
        <AppNav/>
        <div className="Home-image"></div>
        <Container className="Site-content">
          {title}
          <CardDeck className="row mb-1">
            <a href="/category/vegan" className="col-md">
              <Card>
                <CardImg top width="60%" src={veganImg} alt="Vegan" className="card-img-top"/>
                <CardBody>
                  <CardTitle style={{display: 'flex', justifyContent: 'center'}}><h3>Vegan</h3></CardTitle>
                </CardBody>
              </Card>
            </a>
            <a href="/category/vegetarian" className="col-md">
              <Card>
                <CardImg top width="60%" src={vegetarianImg} alt="Vegetarian" className="card-img-top"/>
                <CardBody>
                  <CardTitle style={{display: 'flex', justifyContent: 'center'}}><h3>Vegetarian</h3></CardTitle>
                </CardBody>
              </Card>
            </a>
            <a href="/category/halal" className="col-md">
              <Card>
                <CardImg top width="60%" src={halalImg} alt="Halal" className="card-img-top"/>
                <CardBody>
                  <CardTitle style={{display: 'flex', justifyContent: 'center'}}><h3>Halal</h3></CardTitle>
                </CardBody>
              </Card>
            </a>
          </CardDeck>

          <CardDeck className="row mt-2">
            <a href="/category/glutenfree" className="col-md">
              <Card>
                <CardImg top width="60%" src={glutenImg} alt="Glutenfree" className="card-img-top"/>
                <CardBody>
                  <CardTitle style={{display: 'flex', justifyContent: 'center'}}><h3>Gluten Free</h3></CardTitle>
                </CardBody>
              </Card>
            </a>
            <a href="/category/fruit" className="col-md">
              <Card>
                <CardImg top width="60%" src={fruitImg} alt="Fruits" className="card-img-top"/>
                <CardBody>
                  <CardTitle style={{display: 'flex', justifyContent: 'center'}}><h3>Fruit</h3></CardTitle>
                </CardBody>
              </Card>
            </a>
            <a href="/category/general" className="col-md">
              <Card>
                <CardImg top width="60%" src={foodImg} alt="General" className="card-img-top"/>
                <CardBody>
                  <CardTitle style={{display: 'flex', justifyContent: 'center'}}><h3>General Diet</h3></CardTitle>
                </CardBody>
              </Card>
            </a>
          </CardDeck>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Home;