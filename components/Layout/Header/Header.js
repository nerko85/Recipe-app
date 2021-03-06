import React from "react"
import Link from 'next/link'
import Image from 'next/image'

import {Logo, Navigation, StyledHeader} from './Header.style'

const Header = ()=>{
    return (  
        <StyledHeader>
            <div className="container">
                <div className="header-inner">
                <Link href="/">
                    <a>
                        <Logo>
                            <Image src="/images/logo.jpg"
                            width="130px"
                            height="75px"
                            alt="My cooking formula"
                            />
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
            </div>
        </StyledHeader>
    )
}

export default Header;