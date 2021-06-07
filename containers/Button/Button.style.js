import styled from 'styled-components'

const Button = styled.div`
    display: flex;
    justify-content: flex-end;

    a {
        background: ${(props) => (props.type === "primary" ? "#f01b29" : "gray")};
        color: ${(props)=>(props.type === "primary" ? "#fff" :"#000")};
        padding: 1rem 3rem;
        text-decoration: none;
    }
`

export {
    Button
}