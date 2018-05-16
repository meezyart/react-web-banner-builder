import React, { Component } from 'react';
import './App.css';

import WebBanner from './components/WebBanner'
import styled from 'styled-components'
import Config  from './config/index'

const Wrapper = styled.div`
      display: flex;
`

class App extends Component {
  componentDidMount() {

    // this.tl.to(this.logo, 1, { opacity:0});
    // this.tl.from(this.title, 0.5, {opacity:0, left: 380});
    // this.tl.from(this.cta, 1, { scaleX: -1, yoyo: true, repeat: 1 });
    // this.tl.pause();
  }
  mapConfig = (config) =>{
    return (config && config.map((config, index) => <WebBanner key={index+12}
        banner={config.banner}
        logo={config.logo}
        title={config.title}
        terms={config.terms}
        cta={config.cta}
        mainImage={config.mainImage}
    />))
  }
  createBanner = (config) =>{
    return  <WebBanner
        banner={config.banner}
        logo={config.logo}
        title={config.title}
        terms={config.terms}
        cta={config.cta}
        mainImage={config.mainImage}
    />
  }
  render() {
    console.log(Config)
    return (
      <Wrapper className="App">
        {this.mapConfig(Config)}
      </Wrapper>
    );
  }
}

export default App;
