import styled from 'styled-components'

const StyledHeader = styled.header`
    height:60px;

    > .container {
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Logo = styled.h1`

`

const Navigation = styled.nav`

    ul {
        display:flex;
        gap:2rem;

        li {
            list-style:none;
            
            &:hover > a {
                color:red !important;
            }
        }
    }

`

export {
    Logo,
    Navigation,
    StyledHeader
}
