import React from "react"
import Link from 'next/link'

import {Logo, Navigation, StyledHeader} from './Header.style'

const Header = ()=>{
    return (  
      <StyledHeader>
      <div class="container">
        <Link href="/">
            <a>
                <Logo>
                    Home
                </Logo>
            </a>
        </Link>
        <Navigation>
            <ul>
                <li>
                    <Link href="/"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/services"><a>Services</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
            </ul>   
        </Navigation>
      </div>
    </StyledHeader>
    )
}

export default Header;