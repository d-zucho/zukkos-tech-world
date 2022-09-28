import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

//? link sanity to nextjs with the following:

//create and export samity client
export const client = sanityClient({
  // find this data in sanity dashboard
  projectId: '5slzvcj6',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  // for security purposes, use environment variables for api keys
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  // if you navigate to sanity directory in terminal, you can run the following command to be taken to the dashboard:
  //sanity manage
})

// create image builder
const builder = imageUrlBuilder(client)
/**
 * @param {object} client - client is the image object from sanity
 * @returns {string} - returns the url of the image
 */

// export function to get url of image
export const urlFor = (client) => builder.image(client)
/**
 * build.image is a function that takes in an image object and returns the url of the image
 */
