import React from 'react'
import { Container,Button } from 'react-bootstrap'
import"../styles/Home.css/"
const Home = () => {
    return(
        <container>
            <h1>Welcome to My Website</h1>
            <p>This is my first website </p>
            <Button variant="primary" type="submit">
               Get Started
            </Button>
        </container>
    )
}
export default Home;