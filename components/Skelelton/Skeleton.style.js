import styled from 'styled-components'

const Skeleton = styled.div`
    max-width:1200px;
    margin:20px auto;

    > div {
        background:#f01b29;
        border-radius:4px;
        margin:20px 0;
    }
`

const Banner = styled.div`
    padding:12% 0;
`

const Header = styled.div`
    padding:15px 0;
    max-width:100%;
`

const Content = styled.div`
    padding:8px 0;
    max-width:1000px;
`

export {
    Skeleton, Banner, Header, Content
}