import { NavDropdown } from 'react-bootstrap';

// Small file to map all the recipes and generate a Nav dropdown list item component for each recipe/wine
function NavbarDropdownRecipes({ recipes }) {
    console.log(recipes);
    return <NavDropdown.Item href={recipes.fields.routePath}>{recipes.fields.recipeName}</NavDropdown.Item>
}

function NavbarDropdownWines({ recipes }) {
    const recipesWine = recipes.fields.wine.fields;
    return <NavDropdown.Item href={recipes.fields.routePath}>{recipesWine.winePairingName}</NavDropdown.Item>
}

export { NavbarDropdownRecipes, NavbarDropdownWines };

