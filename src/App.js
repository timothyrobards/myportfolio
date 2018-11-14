import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

constructor() {
  super();
  this.state = {
    screenIsbig: true
  };
}

handleResize() {
  if(window.innerWidth < 1024) {
    this.setState({screenIsbig: false})
  } else {
    this.setState({screenIsbig: true});
  }
}

componentDidMount() {
  window.addEventListener('resize', this.handleResize.bind(this));
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize.bind(this));
}

// https://stackoverflow.com/questions/31536467/how-to-hide-drawer-upon-user-click
// https://stackoverflow.com/questions/37176295/react-material-design-lite-how-to-close-navigation-drawer-when-menu-link-is?rq=1
hideToggle() {
    let layout = document.getElementsByClassName('mdl-layout')[0];
    layout.MaterialLayout.drawerToggleHandler_();
}
  
render() {
    let renderThis;

    if (this.state.screenIsbig) {
      renderThis = <Link to = "/resume" onClick={() => this.hideToggle()}> 
      <i className="fa fa-file" aria-hidden="true" style={{paddingRight: '13px', fontSize: '18px'}} />
      Resume </Link> 
    }

    let navLink = {color: '#fff'};

    if(window.location.pathname !== "/") {
      navLink = {color: '#4F00BC'};
    }
    
    return (
      <div className = "demo-big-content">
        <Layout>
          <Header transparent className="header-color" title = {<Link style={{textDecoration: 'none', color: '#fff'}} to="/"></Link>} scroll>
            <Navigation>
              <Link to = "/" style={navLink}><span className="underline">Home</span></Link>
              <Link to = "/about" style={navLink}><span className="underline">About</span></Link> 
              <Link to = "/projects" style={navLink}><span className="underline">Projects</span></Link> 
              <Link to = "/resume" style={navLink}><span className="underline">Resume</span></Link> 
            </Navigation> 
          </Header> 
          <Drawer>

            <Navigation>

              <Link to = "/" onClick={() => this.hideToggle()}>
                <i className="fa fa-home" aria-hidden="true" style={{paddingRight: '12px', fontSize: '18px'}} />
                Home</Link>  

              <Link to = "/about" onClick={() => this.hideToggle()}>
                <i className="fa fa-user" aria-hidden="true" style={{paddingRight: '16px', fontSize: '18px'}} />
                About</Link>  

              <Link to = "/projects" onClick={() => this.hideToggle()}>
              <i className="fa fa-code" aria-hidden="true" style={{paddingRight: '9px', fontSize: '18px'}} />
              Projects</Link> 

              {renderThis}

              <a href="https://github.com/timothyrobards" target="_blank" rel="noopener noreferrer" style={{borderTop: '1px dotted grey', paddingTop: '25px', marginTop: '10px'}} onClick={() => this.hideToggle()}>
                <i className="fa fa-github" aria-hidden="true" style={{paddingRight: '13px', fontSize: '18px'}} />
              Github</a>

              <a href="https://codepen.io/trobes/" target="_blank" rel="noopener noreferrer" onClick={() => this.hideToggle()}>
                <i className="fa fa-codepen" aria-hidden="true" style={{paddingRight: '11px', fontSize: '18px'}} />
              CodePen</a>

              <a href="https://twitter.com/TimJRob" target="_blank" rel="noopener noreferrer" onClick={() => this.hideToggle()}>
                <i className="fa fa-twitter" aria-hidden="true" style={{paddingRight: '12px', fontSize: '18px'}} />
              Twitter</a>

              <a href="https://www.linkedin.com/in/timothy-robards/" target="_blank" rel="noopener noreferrer" onClick={() => this.hideToggle()}>
                <i className="fa fa-linkedin-square" aria-hidden="true" style={{paddingRight: '14px', fontSize: '18px'}} />
              LinkedIn</a>

            </Navigation> 
          </Drawer> 
          <Content>
            <div className = "page-content" />
            <Main/>
          </Content> 
        </Layout> 
      </div>
    );
  }
}

export default App;
