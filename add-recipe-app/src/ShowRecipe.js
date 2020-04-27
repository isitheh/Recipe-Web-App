import React, { Component } from 'react';
import AppNav from './AppNav';
import Footer from './Footer';
import {Container} from 'reactstrap';

class ShowRecipe extends Component {
  render() {
    const { data } = this.props.location;
    const title = <h3 className="pt-3" style={{display: 'flex', justifyContent: 'center'}}>{data.name} Recipe</h3>
    const ingredientsTitle = <h4 className="mt-1 pt-2" style={{display: 'flex', justifyContent: 'left'}}> Ingredients </h4>
    const ingredientsText = <p className="pt-2" style={{display: 'flex', justifyContent: 'left'}}> {data.ingredients} </p>
    const preparationTitle = <h4 className="pt-2" style={{display: 'flex', justifyContent: 'left'}}> Preparation </h4>
    const preparationText = <p className="pt-2" style={{display: 'flex', justifyContent: 'left'}}> {data.preparation} </p>
    const imagePathString = data.image;
    const imageLink = <img className="Recipe-image ml-5 mr-5 mt-2" style={{display: 'flex', justifyContent: 'left'}} src={imagePathString} alt="Test"/>
    return (
      <div className="Site">
      <AppNav/>
      <Container className="Site-content">
        {title}
        <hr className="ml-3 mr-3" />
        <Container className="ml-5 mr-5 mt-4">
          {imageLink}
          {ingredientsTitle}
          {ingredientsText}
          {preparationTitle}
          {preparationText}
        </Container>
      </Container>
      <Footer/>
    </div>
    );
  }
}

export default ShowRecipe;