import Image from 'next/image'

import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import styled from "styled-components"
import Skeleton from '../../components/Skelelton/Skeleton'

export default function RecipeDetails({recipe}){

    if(!recipe) return <Skeleton/>

    const{title, featuredImage, cookingTime, ingredients, method} = recipe.fields;
    return(
        <div>
            <Banner>
                <Image
                    src={`https:${featuredImage.fields.file.url}`}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
                <h2>{title}</h2>
            </Banner>
            <Info>
                <p>Takes about {cookingTime} mins to cook.</p>
                <h3>Ingredients:</h3>
                {
                    ingredients.map(ingrediant=>(
                        <span key={ingrediant}>{ingrediant}</span>
                    ))
                }
            </Info>

            <div className="method">
                <h3>Method:</h3>
                <div>{documentToReactComponents(method)}</div>
            </div>
        </div>
    )
}

const Banner = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    height:50vh;

    img {
        object-fit:cover;
    }

    h2 {
        margin: 0;
        background: #fff;
        padding: 20px;
        position: relative;
        top: -60px;
        left: -10px;
        transform: rotateZ(-1deg);
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        align-self:flex-start;
    }
`

const Info = styled.div`
    .info p {
        margin: 0;
    }
    .info span::after {
        content: ", ";
    }
    .info span:last-child::after {
        content: ".";
    }
`

const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function getStaticPaths(){

    const res = await client.getEntries({
        content_type:"recipe"
    });

    const paths = res.items.map(item=>{
        return {
            params:{ slug: item.fields.slug}
        }
    })

    return {
        paths,
        fallback:true
    }

}

export async function getStaticProps({params}){

    const {items} = await client.getEntries({
      content_type:"recipe",
      "fields.slug":params.slug
    });

    if(!items.length) {
        return {
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }
  
    return {
      props:{
        recipe:items[0]
      },
      revalidate:1
    }
  
  }