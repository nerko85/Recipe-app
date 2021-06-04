import Head from 'next/head'
import {createClient} from 'contentful'
import RecipeCard from '../components/RecipeCard/RecipeCart';

export default function Home({recipes}) {
  console.log(recipes)
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="recipe-list">
        {recipes.map(recipe=> (
          <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        ))}
      </div>
    </>
    )
}

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type:"recipe"
  });

  return {
    props:{
      recipes:res.items
    }
  }

}
