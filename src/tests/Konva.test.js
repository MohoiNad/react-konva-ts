import React from 'react';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import {
  Stage,
  Layer,
  Text,
} from 'react-konva';
import useImage from 'use-image';

import Konva from 'konva';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test references', function() {
  let instance;
  class App extends React.Component {
    render() {
      return (
        <Stage width={300} height={300} ref={node => (this.stage = node)}>
          <Layer ref={node => (this.layer = node)} />
        </Stage>
      );
    }
  }

  beforeEach(() => {
    const wrapper = mount(<App />);
    instance = wrapper.instance();
  });

  it('can get stage instance', function() {
    console.log(instance)
    const stageRef = instance.stage;
    expect(stageRef.getStage() instanceof Konva.Stage).to.equal(true);
  });

});