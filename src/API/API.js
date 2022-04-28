import credentials from './credentials.json';

const contentful = require('contentful');

const client = contentful.createClient(credentials);
export default client;

const getAllData = async () => { 
  const allData = await client.getEntry()

  console.log('All', allData);
  return allData.items;
}

export { getAllData }