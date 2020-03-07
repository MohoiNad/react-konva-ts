import React, { FunctionComponent } from 'react'
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import {
  Stage,
  Layer,
} from 'react-konva'
import {Text} from '../components/Text';

const mockFunction = () => {
  return "text"
}

describe('Text', function() {
  class App extends React.Component {
    render() {
      return (
        <Stage width={300} height={300}>
          <Layer>
            <Text setContextMenu={mockFunction} />
          </Layer>
        </Stage>
      );
    }
  }
  it('should render correctly', () => {
    const wrapper = mount(<App />);
    console.table(wrapper)
    expect(wrapper.find(Text)).to.have.lengthOf(1)
  });

});

