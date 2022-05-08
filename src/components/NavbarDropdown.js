import { Button, Navbar, Nav, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';


function NavbarDropdownRecipes({ recipes }) {
    console.log(recipes);
    return <NavDropdown.Item href={recipes.fields.routePath}>{recipes.fields.recipeName}</NavDropdown.Item>
}

function NavbarDropdownWines({ recipes }) {
    const recipesWine = recipes.fields.wine.fields;
    return <NavDropdown.Item href={recipes.fields.routePath}>{recipesWine.winePairingName}</NavDropdown.Item>
}

export { NavbarDropdownRecipes, NavbarDropdownWines };

