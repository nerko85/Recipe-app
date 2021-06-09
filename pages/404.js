import Link from 'next/link'
import styled from 'styled-components'


import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function NotFound(){
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 3000)
    },[])
    
    return (
        <StyledNotFound>
            <h1>404</h1>
            <h2>Ooops! The page cannot be found :(</h2>
            <p>Redirectiong to <Link href="/">Homepage</Link> for more recipes...</p>
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div`
    padding:3rem;
    box-shadow:1px 5px 10px rgba(0,0,0,0.1);
    transform:rotateZ(-1deg);

    h1 {
        font-size:3rem;
        margin-top:0;
    }

`