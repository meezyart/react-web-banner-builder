import { configure } from '@storybook/react';

import React from 'react';



import styled from 'styled-components'
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
