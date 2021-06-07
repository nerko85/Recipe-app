import styled from 'styled-components'
import Link from "next/link"
import Image from "next/image"

import Button from '../../containers/Button'

export default function RecipeCard({recipe}){
    // console.log(recipe)
    const {title, slug, cookingTime, thumbnail} = recipe.fields;
    return (
        <Card>
            <div className="featured">
                <Image src={`https:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Takes approx { cookingTime }</p>
                </div>
                <Button type="primary" url={slug}>
                    Cook this
                </Button>
            </div>
        </Card>
    )
}

const Card = styled.div`
    transform: rotateZ(-1deg);

    .featured {
        height:300px;
        width:100%;
        overflow:hidden;
        
        img {
            width:100%;
            height:100%;
        }
    }

    .content {
        background: #fff;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
        margin: 0;
        position: relative;
        top: -40px;
        left: -10px;
        padding:2rem;
    }

    .info {
        h4 {
            text-transform: uppercase;
            margin-top:0;
        }

        p {
            margin: 0;
            color: #777;
        }
      }
`


