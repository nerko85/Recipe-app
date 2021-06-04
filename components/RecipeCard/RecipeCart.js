export default function RecipeCard({recipe}){
    console.log(recipe)
    return (
        <div>{recipe.fields.title}</div>
    )
}