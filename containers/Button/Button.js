import Link from 'next/link'

import {Button as ButtonStyled} from './Button.style'

export default function Button({type, children, url}){
    return (
        <ButtonStyled type={type}>
            <Link href={`/recipes/${url}`}>
                <a>{children}</a>
            </Link>
        </ButtonStyled>        
    )
}