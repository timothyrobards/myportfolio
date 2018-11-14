import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
    
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">

                    <Cell col={12}>
                        <div className="banner-text animated fadeIn">
                            <h1>Hello! I'm Timothy Robards</h1>
                            <p>I'm a Montreal-based Aussie, Front-End Web Developer and UI/UX enthusiast</p>
                            <p>Check out some of my <Link to="/projects" style={{color: '#fff'}}>projects</Link></p>
                            <p>Contact me <a href="mailto:timothyrobards@gmail.com" style={{color: '#fff'}}>timothyrobards@gmail.com</a></p>
                            
                            <div className="social-links">

                                {/* Github */}
                                <a href="https://github.com/timothyrobards" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/* Codepen */}
                                <a href="https://codepen.io/trobes/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-codepen" aria-hidden="true" />
                                </a>

                                {/* Twitter */}
                                <a href="https://twitter.com/TimJRob" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/timothy-robards/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                    
                </Grid>
                
            </div>
            
        )
    }
}

export default Landing;