import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

describe('Component HappyHourAd', () => {

  const select = {
    title: '.title',
    promoDescription: '.promoDescription',
  };
  const mockProps = {
    title: 'Happy Hours',
    promoDescription: 'Time for discount',
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
  it('should render correct title',() => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(mockProps.title);
  });
});
