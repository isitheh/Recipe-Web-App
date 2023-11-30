import React, { Component } from 'react';
import AppNav from './AppNav';
import Footer from './Footer';
import './App.css';
import {Link} from 'react-router-dom';
import {Container, Button, Form, Input, Label, FormGroup} from 'reactstrap';

class Add extends Component {
  emptyRecipe = {
    id: '104',
    name: 'Default Recipe',
    image: '/recipes/recipe-background-alt.jpg',
    ingredients: 'Rice',
    preparation: 'Boil the rice',
    category: {id: '1', name: 'Vegan'}
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageFilePath: null,
      categories: [],
      recipes: [],
      recipe: this.emptyRecipe
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let recipe = {...this.state.recipe};
    recipe[name] = value;
    this.setState({recipe});
  }

  handleChangeImage(event) {
    const target = event.target;
    const value = target.files[0].name;
    const name = target.name;
    let recipe = {...this.state.recipe};
    recipe[name] = value;
    this.setState({recipe});
  }

  handleChangeCategory(event) {
    const target = event.target;
    const selectedIndex = target.selectedIndex + 1;
    const value = target.value;
    const name = target.name;
    let recipe = {...this.state.recipe};
    recipe[name].id = selectedIndex;
    recipe[name].name = value;
    this.setState({recipe});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {recipe} = this.state;
    await fetch('http://localhost:8080/api/recipex', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(recipe)
    });
    console.log(recipe);
  }

  async componentDidMount() {
    const responseCategory = await fetch('http://localhost:8080/api/categories');
    const bodyCategory = await responseCategory.json();
    this.setState({
      categories: bodyCategory,
      isLoading: false
    });

    const responseRecipe = await fetch('http://localhost:8080/api/recipes');
    const bodyRecipe = await responseRecipe.json();
    this.setState({
      recipes: bodyRecipe,
      isLoading: false
    });
  }

  render() {
    const title = <h3 className="pt-2" style={{display: 'flex', justifyContent: 'center'}}>Add New Recipe</h3>
    const {categories, isLoading} = this.state;

    if(isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    let optionList = categories.map(category => <option id={category.id}> {category.name} </option>);

    return (
      <div className="Site">
        <AppNav/>
        <div className="Home-image"></div>
        <Container className="Site-content">
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Title</Label>
              <Input type="name" name="name" id="name" onChange={this.handleChange} autoComplete="name"/>
            </FormGroup>

            <FormGroup>
              <Label for="image">Select an image: </Label>
              <input className="mt-2 ml-2" type="file" name="image" onChange={this.handleChangeImage} />
            </FormGroup>

            <FormGroup>
              <Label for="category">Category</Label>
              <select className="ml-1" name="category" id="category" onChange={this.handleChangeCategory}>
                {optionList}
              </select>
            </FormGroup>

            <FormGroup>
              <Label for="ingredients">Ingredients</Label>
              <Input type="text" name="ingredients" id="ingredients" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <Label for="preparation">Preparation</Label>
              <Input type="text" name="preparation" id="preparation" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <Button size="sm" color="primary" type="submit">Save Recipe</Button>
              <Button size="sm" className="ml-1" color="secondary" tag={Link} to="/">Cancel</Button>
            </FormGroup>
          </Form>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Add;