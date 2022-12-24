import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


 export const client = sanityClient({
    projectId: 'tnmgup0j',
    dataset: 'production',
    apiVersion: '2022-12-17',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

 export const urlFor = (source) => builder.image(source);