import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    } 
    
    toggleCategories() {
        if(this.state.activeTab === 2){
            return(
                <div className="projects-grid animated fadeIn fast">

                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            React YouTube App - Coming Soon!
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='https://github.com/timothyrobards/' rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a target="_blank" href='https://codepen.io/trobes/' rel="noopener noreferrer">CodePen</a></Button>
                            <Button colored><a target="_blank" href='/' rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                    </Card>
                    
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div className="projects-grid animated fadeIn fast">

                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://res.cloudinary.com/trobes/image/upload/v1541526984/portfolio/icalc.png) center / cover'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            My attmept to clone the iPhone Calculator in pure JavaScript.
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='https://github.com/timothyrobards/JS-Calc' rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a target="_blank" href='https://codepen.io/trobes/pen/EerrNd' rel="noopener noreferrer">CodePen</a></Button>
                        </CardActions>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://res.cloudinary.com/trobes/image/upload/v1541528023/portfolio/weather-min.png) center / cover'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            A JavaScript weather widget pulling data from openweathermap.org.
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='https://github.com/timothyrobards/Weather-Widget' rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a target="_blank" href='https://codepen.io/trobes/pen/ZMNmMq' rel="noopener noreferrer">CodePen</a></Button>
                        </CardActions>
                        
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://res.cloudinary.com/trobes/image/upload/v1541528352/portfolio/quoter.png) center / cover'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            Random Quote Generator - displays a random entry from an array of quotes.
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='https://github.com/timothyrobards/Quoter' rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a target="_blank" href='https://codepen.io/trobes/pen/eLQKxO' rel="noopener noreferrer">CodePen</a></Button>
                        </CardActions>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid animated fadeIn fast">

                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://res.cloudinary.com/trobes/image/upload/v1541474736/portfolio/BGFG-logo.png) center / cover no-repeat', backgroundSize: '250px'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            Portfolio site for Montreal-based design studio AtelierBFGF.
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='https://www.atelierbfgf.com/' rel="noopener noreferrer">Live Site</a></Button>
                        </CardActions>
                    </Card>

                {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://res.cloudinary.com/trobes/image/upload/v1541526598/portfolio/GS_PORTFOLIO1-min.jpg) center / cover'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            An informational site built with Bootstrap 4, using PHP/AJAX to handle web forms.
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='http://goldensandsgoa.in' rel="noopener noreferrer">Live Site</a></Button>
                        </CardActions>
                    </Card>

                {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450',  margin: 'auto', marginBottom: '30px'}}>
                        <CardTitle style={{height: '270px', background: 'url(https://res.cloudinary.com/trobes/image/upload/v1541473626/portfolio/MeedLogo.gif) center / cover'}}></CardTitle>
                        <CardText style={{minHeight: '30px'}}>
                            A minimal site for an Ontario-based company. Built without a framework utilising CSS Grid.
                        </CardText>
                        <CardActions border>
                            <Button colored><a target="_blank" href='http://meedpayroll.ca' rel="noopener noreferrer">Live Site</a></Button>
                        </CardActions>
                    </Card>

                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                </Tabs>

               
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Projects;