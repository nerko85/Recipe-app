import Head from 'next/head'
import styled from 'styled-components'
import {createClient} from 'contentful'
import RecipeCard from '../components/RecipeCard/RecipeCart';

export default function Home({recipes}) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RecipeList>
      {recipes.map(recipe=> (
          <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        ))}
      </RecipeList>
    </>
    )
}

const RecipeList = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 1rem 2rem;
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
