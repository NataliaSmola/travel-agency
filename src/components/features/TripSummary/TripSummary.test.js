import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe ('Component TripSummary', () => {
  it ('should render link to correct address', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const expectedImg = 'image.jpg';
    const expectedAltImg = 'text';
    const component = shallow (<TripSummary
      id={expectedId}
      src={expectedImg}
      alt={expectedAltImg}/>
    );
    expect (component.find('.link').prop('to')).toEqual(expectedLink);
    expect (component.find('img').prop('src')).toEqual(expectedImg);
    expect (component.find('img').prop('alt')).toEqual(expectedAltImg);
  });
  it('shoud render correct props name, cost and days', () => {
    const expectedName = 'text';
    const expectedCost = '$10';
    const expectedDays = 1;
    const component = shallow(<TripSummary
      name = {expectedName}
      cost = {expectedCost}
      days = {expectedDays}/>
    );
    expect (component.find('.title').text()).toEqual(expectedName);
    expect (component.find('.details').text()).toEqual(expectedDays);
    expect (component.find('.details').text()).toEqual(expectedDays);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary/>)).toThrow();
  });
  it('should render tags in proper order', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary
      tags= {expectedTags}/>
    );
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });
  it('should not render span if the tags is false', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary
      tags={expectedTags}/>
    );
    expect(component.hasClass('tags')).toBe(false);
  });
});
