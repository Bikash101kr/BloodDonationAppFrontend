import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import Login from './Login'

export default function Home(props) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                <p className="lead">Be a life saver!!</p>
                    <h1 className='display-3'>Serve Humanity</h1>
                    <p className="lead">through blood donation!!</p>
                    <hr />
                    <Login />
                    <hr />
                    <p className="lead"> New user?
                        <Button color="primary" onClick={() => props.history.push('/register')}>Register</Button>
                        {/* <Link to='/register'>
                            <button className="btn-primary">Register</button>
                        </Link> */}
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
