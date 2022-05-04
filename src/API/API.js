import credentials from './credentials.json';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const contentfulClient = require('contentful');

const client = contentfulClient.createClient(credentials);
export default client;

const getAllData = async () => { 
  const allData = await client.getEntries()
  return allData.items;
}

const getRecipes = async () => {
  const allRecipes = await client.getEntries({
    content_type: 'blog',
    select: 'fields.recipeName,fields.routePath,fields.recipeIngredients,fields.recipeDescription,fields.recipePicture,fields.recipeShortDescription,fields.wine',
    order: 'fields.routePath'
  })
  return allRecipes.items;
}


export { 
  getAllData,
  getRecipes
}