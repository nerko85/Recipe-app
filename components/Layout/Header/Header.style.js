import styled from 'styled-components'

const StyledHeader = styled.header`
    > .container {
        width:80%;
        height:60px;
        max-width:1200px;
        margin:0 auto;
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
        gap:1rem;

        li {
            list-style:none;
        }
    }

`

export {
    Logo,
    Navigation,
    StyledHeader
}
