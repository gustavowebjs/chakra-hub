import React from 'react'
import Navigation from './Navigation'
import { Container} from '@chakra-ui/react'

export interface Props{
    children: JSX.Element
}

const Layout = ({children} : Props) => {
    return(
        <div>
            <Navigation />
             <Container maxW="container.xl">
                {children}
            </Container>
        </div>
    )
}

export default Layout