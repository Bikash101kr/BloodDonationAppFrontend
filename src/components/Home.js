import React from 'react'
import { Link } from 'react-router-dom';

export default function homepage(props) {
    return (
        <div>
 {/* <!-- Header --> */}
			<div id="header">
				<div class="container">
						
					{/* <!-- Logo --> */}
						<h1><a href="/#" id="logo">SERVE HUMANITY</a></h1>

					{/* <!-- Banner --> */}
						<div id="banner">
							<div class="container">
								<section>
									<header class="major">
										<h2>Welcome to Serve Humanity!</h2>
										<span class="byline"> Here you can save millions life by donating just single drop of your blood</span>
                                        <h1>DONATE NOW</h1>
									</header>
									<Link class="button alt" onClick={() => props.history.push('/login')}>Login</Link>
									<hr />
									
                    <p className="lead"> New user?      
                    <a href= '/register' color="blue" >   Register Here!  </a>
                    </p>
               
								</section>	
										
							</div>
						</div>

				</div>
			</div>
           
        </div>
           
    )
}
