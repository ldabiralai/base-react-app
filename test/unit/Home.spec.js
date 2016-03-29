import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'

import Home from '../../js/components/Home.react'
import HelloWorld from '../../js/components/HelloWorld.react'

describe('Home', () => {
  
  it('should render hello world component', () => {
    const component = shallow(<Home/>);
    expect(component.find(HelloWorld)).to.be.length(1);
  });

});
