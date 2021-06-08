import Head from 'next/head'
import styled from 'styled-components'
import {createClient} from 'contentful'
import RecipeCard from '../components/RecipeCard/RecipeCard';

export default function Home({recipes}) {
  return (
    <>
      <Head>
        <title>Recipes page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="My recipe page" key="title" />
        <meta name="description" content="Here you can find all of the recipes you need to make your food taste good." key="description"/>
        <meta name="keywords" content="recipes, food, cooking, meal, taste" key="keywords"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <RecipeList>
      {recipes.map(recipe=> (
          <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        ))}
      </RecipeList>
    </>
    )
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

console.log(size.tablet)

const RecipeList = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap: 1rem 2rem;

  @media(max-width: ${size.laptopL}){
    grid-template-columns:repeat(2, 1fr);
    grid-gap: 1rem 2rem;
  }

  @media(max-width: ${size.tablet}){
    grid-template-columns: 1fr;
    grid-gap: 2rem 0;
  }
`

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const {items} = await client.getEntries({
    content_type:"recipe"
  });

  return {
    props:{
      recipes:items
    }
  }

}
