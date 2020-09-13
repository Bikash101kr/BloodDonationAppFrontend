import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import Login from './Login'
import Register from './Register'


export default function homepage(props) {
    return (
        <div>
                    
            {/* <!-- Header --> */}
			<div id="header">
				<div class="container">
						
					{/* <!-- Logo --> */}
						<h1><a href="#" id="logo">SERVE HUMANITY</a></h1>

					{/* <!-- Banner --> */}
						<div id="banner">
							<div class="container">
								<section>
									<header class="major">
										<h2>Welcome to Serve Humanity!</h2>
										<span class="byline"> Here you can save millions life by donating just single drop of your blood</span>
                                        <h1>DONATE NOW</h1>
									</header>
									<Button color="primary" onClick={() => props.history.push('/login')}>Login</Button>
                                    <Button color="primary" onClick={() => props.history.push('/register')}>Register</Button>
								</section>	
										
							</div>
						</div>

				</div>
			</div>
           
        </div>
           
    )
}
