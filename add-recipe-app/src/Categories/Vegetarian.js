import React, { Component } from 'react';
import AppNav from './../AppNav';
import Footer from './../Footer';
import './../App.css';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Vegetarian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recipes: []
    }
  }

  async componentDidMount() {
    const VEG_ENUM = 2;
    const responseRecipe = await fetch('http://localhost:8080/api/recipes');
    const bodyRecipe = await responseRecipe.json();
    let stagedRecipes = 0;
    const vegOnlyRecipe = bodyRecipe.map(validRecipe => {
      if(validRecipe.category.id === VEG_ENUM) {
        //Only add this recipe if it is from the vegetarian category.
        stagedRecipes = validRecipe;
      }
      return stagedRecipes;
    });
    this.setState({
      recipes: vegOnlyRecipe,
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
    const title = <h3 className="pt-2" style={{display: 'flex', justifyContent: 'center'}}>View Vegetarian Recipes</h3>
    const {recipes, isLoading} = this.state;

    if(isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    const localRecipes = [...new Set(recipes.filter(function(number) {
        return number !== 0;
      })
    )];

    let recipeList = localRecipes.map(recipe =>
      <ListGroup key={recipe.id}>
        <ListGroupItem className="mt-1">
          {recipe.name}
          <Button size="sm" className="float-right ml-1" color="danger" onClick={ () => this.remove(recipe.id) }>Delete</Button>
          <Button size="sm" className="float-right" color="info"
            tag={Link}
            to={{
              pathname: './../show',
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

export default Vegetarian;