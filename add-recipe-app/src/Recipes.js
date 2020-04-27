import React, { Component } from 'react';
import AppNav from './AppNav';
import Footer from './Footer';
import './App.css';
import { Link } from 'react-router-dom';

import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recipes: [],
    }
  }

  async componentDidMount() {
    const responseRecipe = await fetch('http://localhost:8080/api/recipes');
    const bodyRecipe = await responseRecipe.json();
    this.setState({
      recipes: bodyRecipe,
      isLoading: false
    });
  }

  async remove(id) {
    await fetch('http://localhost:8080/api/recipex/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedRecipes = [...this.state.recipes].filter(i => i.id !== id);
      this.setState({recipes: updatedRecipes});
    });
  }

  render() {
    const title = <h3 className="pt-2" style={{display: 'flex', justifyContent: 'center'}}>View All Recipes</h3>
    const {recipes, isLoading} = this.state;

    if(isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    let recipeList = recipes.map(recipe =>
      <ListGroup key={recipe.id}>
        <ListGroupItem className="mt-1">
          {recipe.name}
          <Button size="sm" className="float-right ml-1" color="danger" onClick={ () => this.remove(recipe.id) }>Delete</Button>
          <Button size="sm" className="float-right" color="info"
            tag={Link}
            to={{
              pathname: '/show',
              data: {id: recipe.id, name: recipe.name, image: recipe.image, ingredients: recipe.ingredients, preparation: recipe.preparation}
            }}>
            View Recipe
          </Button>
        </ListGroupItem>
      </ListGroup>
    );

    return (
      <div className="Site">
        <AppNav/>
        <div className="Home-image"></div>
        <Container className="Site-content">
          {title}
          {recipeList}
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Recipes;