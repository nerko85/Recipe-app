import styled from 'styled-components'

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

export {
    Card
}