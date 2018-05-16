import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, color , files , range} from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import  WebBanner  from '../components/WebBanner.js';
import Config  from '../config/index'
import '../index.css';


const stories = storiesOf('WebBanner Knobs', module);

stories.addDecorator(withKnobs);
storiesOf('WebBanner', module).add('with Config', () => (Config && Config.map((config, index) => <WebBanner key={index+12}
banner={config.banner}
logo={config.logo}
title={config.title}
terms={config.terms}
cta={config.cta}
mainImage={config.mainImage}
/>)))

stories.add('with Knobs', () => {
  const options = {
    range: true,
   min: 0,
   max: 420,
   step: 1,
  }
  const config = {
    banner: {
      width: text('Width', '320', 'Banner'),
      height: text('Height', '480', 'Banner'),
      backgroundColor: color('Background Color', '#ddd4c6', 'Banner'),
    },
    logo: {
      src: text('logo', 'logo-black.png', 'Logo'),
      width: '100',
      height: '20',
    },
    title: {
      text: text('Title', 'Her Turn.', 'Title'),
      topPos: number(' Title Top Position', 74, options, 'Title')
    },
    terms: {
      text: text('Terms', '20% off all purchases', 'Terms'),
      bottomPos: number('Terms Position', 18, options, 'Terms')
    },
    mainImage: {
      src: text('Main Image', 'Image3.jpg', 'Main Image'),
      width: '320',
      height: '480',
    },
    cta: {
      text: text('Call to Action', 'gear for mom', 'CTA')
    }
  }
  return(<WebBanner
        banner={config.banner}
        logo={config.logo}
        title={config.title}
        terms={config.terms}
        cta={config.cta}
        mainImage={config.mainImage}
      />) });


