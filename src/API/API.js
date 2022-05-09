// This file is meant for fetching the content setup in Contentful. First we import the credentials in a hidden file
import credentials from './credentials.json';

// We create the client and pass the credentials
const contentfulClient = require('contentful');
const client = contentfulClient.createClient(credentials);

// Through getEntries content_type and select we retrieve only the relevant entries from the Contentful fetch.
// Order is being used so the returned array order is a bit more static (it sorts the returned array by publish date by default)
const getRecipes = async () => {
  const allRecipes = await client.getEntries({
    content_type: 'blog',
    select: 'fields.recipeName,fields.routePath,fields.recipeIngredients,fields.recipeDescription,fields.recipePicture,fields.recipeShortDescription,fields.wine',
    order: 'fields.routePath'
  })
  return allRecipes.items;
}

export { 
  getRecipes
}