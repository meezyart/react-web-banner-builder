import React, { Component } from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'
import { TimelineLite, TweenMax} from 'gsap'



const Main = styled.div`
    margin: 0;
    width: 320px;
    height: 480px;
    background-color: ${(props) => props.backgroundColor};
    border-color: #ecf0f1;
    border-style: solid;
    border-width: 1px;
    text-align: center;
    display:inline-block;
    position:relative;
    overflow:hidden;
`;

const Image = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background: url('./images/${(props) => props.image}') no-repeat;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index:0;
`;
const Logo = styled.img`
    position: absolute;
    display:block;
    left: 15px;
    top: 15px;
    z-index:140;
`;

const Button = styled.button`
    background-color: black;
    display: table;
    padding: 13px 18px 7px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    bottom: 40px;
    position: absolute;
    left: 15px;
    font-size: 15px;
    cursor: pointer;
    z-index:100;
    font-family: "CalibreMedium";
`;

const Title = styled.p`
  z-index: 20;
  position: absolute;
  white-space: pre-line;
  top: ${(props) => props.topPos}px;
  left: 15px;
  text-transform: uppercase;
  font-size: 25px;
  font-weight:500;
  text-align: left;
  line-height: 2rem;
  display: block;
`;

const Terms = styled.p`
    z-index: 20;
    font-size: 11px;
    display: inline;
    position: absolute;
    text-transform: uppercase;
    left: 15px;
    bottom: ${(props) => props.bottomPos}px;
`;

class WebBanner extends Component {


  componentDidMount() {
    console.log(this.logo,this.title)

    this.tl = new TimelineLite({ onComplete: this.animateIn });// eslint-disable-line
    this.tl.add(TweenMax.from(this.logo,  1 ,{ // eslint-disable-line
      autoAlpha:0,left: 50
    }));

    this.tl.add(TweenMax.from(this.mainImage, 2, { // eslint-disable-line
      autoAlpha:0,left: 40
    }));

    this.tl.add(TweenMax.from(this.title, 1, { // eslint-disable-line
      autoAlpha:0,left: 20
    }, '-=0.5'));

    this.tl.from(this.cta, 1, { autoAlpha:0});
    this.tl.add(TweenMax.from(this.terms, 1, { // eslint-disable-line
      autoAlpha:0,left: 20
    }, '-=0.5'));
    // this.tl.restart();
  }

  animateIn = () =>{

  }
  render() {
    const {terms,cta,title,mainImage,logo,banner} = this.props;
    return (

        <Main backgroundColor={banner.backgroundColor}>
          <Logo innerRef={el => this.logo = el} src={`./images/${logo.src}`} width={logo.width} height={logo.height} alt="logo"/>
          <Title innerRef={el => this.title = el} topPos={title.topPos}>{title.text}</Title>
          <Button innerRef={el => this.cta = el} >{cta.text}</Button>
          <Terms innerRef={el => this.terms = el} bottomPos={terms.bottomPos}>
          {terms.text}
          </Terms>
          <Image  innerRef={el => this.mainImage = el} alt="image" image={mainImage.src} width={mainImage.width} height={mainImage.height}/>
        </Main>

    )
  }
}

WebBanner.propTypes = {

    banner: {
      width: PropTypes.string,
      height: PropTypes.string,
      backgroundColor: PropTypes.string
    },
    logo: {
      src: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
    },
    title: {
      text: PropTypes.string,
      topPos: PropTypes.string
    },
    terms: {
      text: PropTypes.string,
      bottomPos: PropTypes.string
    },
    mainImage: {
      src: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
    },
    cta: {
      text: PropTypes.string
    }

}

export default WebBanner;


