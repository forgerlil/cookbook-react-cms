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
    select: 'fields.recipeDescription,fields.recipeName,fields.recipePicture,fields.recipeShortDescription'
  })
  return allRecipes.items;
}

const getWines = async () => {
  const allWines = await client.getEntries({
    content_type: 'winePairing'
  })
  return allWines.items;
}

const getPhotos = async () => {
  const allPhotos = await client.getEntries({
    
  })
  return allPhotos
}

export { 
  getAllData,
  getRecipes,
  getWines,
  getPhotos
}