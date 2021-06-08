import {Skeleton as StyledSkeleton, Banner, Header, Content} from './Skeleton.style'

export default function Skeleton(){
    const content = [1,2,3]
    return (
        <StyledSkeleton>
            <Banner/>
            <Header/>
            {
                content.map(item=>(
                    <Content key={item}/>
                ))
            }
        </StyledSkeleton>
    )
}
