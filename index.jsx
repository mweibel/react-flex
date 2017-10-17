/**
 * Copyright 2015-present Zippy Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { render, findDOMNode } from 'react-dom';

React.findDOMNode = findDOMNode; // for backwards compat for react-slide

import Slide from 'react-slide';

import './index.scss';
import './example.css';

import { Flex, Item } from './src';

const Slider = props => {
  const handleStyle = {
    width: 20,
    height: 20,
    borderRadius: 10,
    background: '#3ABBEC'
  };

  const renderHandle = props => {
    return (
      <div {...props}>
        <span
          style={{
            marginLeft: 10,
            position: 'absolute',
            left: '100%',
            visibility: props.mouseDown ? 'visible' : 'hidden'
          }}
        >
          {props.value}
        </span>
      </div>
    );
  };

  return (
    <div>
      <Slide
        {...props}
        handleFactory={renderHandle}
        style={{ marginTop: 10 }}
        orientation="vertical"
        handleStyle={handleStyle}
        trackRadius={5}
        startValue={1}
        endValue={12}
      />
    </div>
  );
};

const values = {
  side: 2,
  content: 5
};

const change = name => {
  return value => {
    console.log(name, value);
    values[name] = value;
    renderApp();
  };
};

const border = '3px solid #00B8FF';

const App = props => {
  return (
    <Flex column alignItems="stretch">
      <div style={{ padding: 50, borderBottom: border }}>
        Drag slider handle to change flex value
      </div>

      <Flex column inline flex={1} alignItems="stretch">
        <Item
          display="inline-flex"
          flex={values.side}
          style={{ background: '#E5F2F7', padding: 10 }}
        >
          Sidebar - flex {values.side}
          <Slider value={values.side} onChange={change('side')} />
        </Item>
        <Item
          display="flex"
          flex={values.content}
          alignItems="stretch"
          style={{ background: '#D0FFD7', padding: 10, borderLeft: border }}
        >
          Content - flex {values.content}
          <Slider value={values.content} onChange={change('content')} />
        </Item>
      </Flex>

      <div style={{ padding: 50, borderTop: border }}>Footer</div>
    </Flex>
  );
};

const renderApp = () => {
  render(<App />, document.getElementById('content'));
};

renderApp();
