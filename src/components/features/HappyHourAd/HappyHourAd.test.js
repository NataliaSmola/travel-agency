import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

describe('Component HappyHourAd', () => {

  const select = {
    title: '.title',
    promoDescription: '.promoDescription',
  };

  it('Should render without crashing', () =>{
    const component = shallow(<HappyHourAd/>);
    expect (component).toBeTruthy();
  });

  it('has correct compnent with title and countdown timing', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component.exists(select .title)).toEqual(true);
    expect(component.exists(select .promoDescription)).toEqual(true);
  });
});
