
import Image from "next/image"
import {Card} from './RecipeCard.style'

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
                    <p>Takes approx { cookingTime } mins to make</p>
                </div>
                <Button type="primary" url={slug}>
                    Cook this
                </Button>
            </div>
        </Card>
    )
}