import styled from 'styled-components'

const StyledHeader = styled.header`
    height:60px;
    margin-bottom:2rem;

    .header-inner {
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Logo = styled.h1`
    display:inline-block;
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
