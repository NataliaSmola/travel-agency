import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};
const mockProps = {
  title: 'Days to Summer',
};

describe('Component DaysToSummer', () => {
  it('Should render without crashing', () =>{
    const component = shallow(<DaysToSummer/>);
    expect (component).toBeTruthy();
  });

  it('should render correct title',() => {
    const component = shallow(<DaysToSummer name = {mockProps.title} />);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(mockProps.title);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct days number at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find(select.title).text();
    expect(renderedDate).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020-05-12', '40 days to summer!');
  checkDescriptionAtDate('2020-06-19', '2 days to summer!');
  checkDescriptionAtDate('2020-06-20', '1 day to summer!');
  checkDescriptionAtDate('2020-06-21', '');
  checkDescriptionAtDate('2020-07-20', '');
  checkDescriptionAtDate('2020-08-20', '');
});
