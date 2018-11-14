import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    
    render() {
        return(
            <div className="about-body" style={{ overflowY: 'auto' }}>
                <Grid className="about-grid">
                    <Cell col={6}>
                        <img className="animated zoomIn faster"
                            src="./assets/imgs/profile-pic-min.jpg"
                            alt="avatar"
                            style={{height: '275px', width: '275px', marginBottom: '2em'}}
                        />

                         
                    </Cell>
                    <Cell col={6} className="animated fadeIn fast" style={{paddingBottom:'3em'}}>

                        <p style={{width: '100%', margin: 'auto', textAlign: 'left'}}>
                        G'Day/Salut! I'm an Australian front-end developer living & working in Montreal. I've recently been working with
                        React, React-Router and Redux. I often utilize Bootstrap 4, MaterializeCSS, Material-UI & Tailwind for UI. 
                        Git and Github for version control. SASS, PUG & BEM for structure. I also have experience with 
                        Wordpress, Drupal and more recently the JAMstack.</p>
                        
                        <p style={{width: '100%', margin: 'auto', textAlign: 'left', paddingTop:'1em'}}>
                        I'm working towards becoming a genuine Full Stack Developer using MongoDB, Express, React, Node.js (MERN). I have a Bachelors
                        degree in Information Technology (University of Newcastle, Australia). I'm also one half of <a href="http://www.atelierbfgf.com" target="_blank" rel="noopener noreferrer">atelier bfgf</a>.
                        </p>

                        <p style={{width: '100%', margin: 'auto', textAlign: 'left', paddingTop:'1em'}}>
                        Get in touch! <a href="mailto:timothyrobards@gmail.com">timothyrobards@gmail.com</a>
                        </p>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent>

                                    {/* Email */}
                                    <a href="mailto:timothyrobards@gmail.com">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </a>

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

                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;