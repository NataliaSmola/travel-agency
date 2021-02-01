import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({setOptionValue}) => {
  const  [startDate, setStartDate] = useState(new Date());

  const dateChange = (date) =>{
    setStartDate(date);
    setOptionValue(date);
  };
  //console.log(setOptionValue);
  //console.log(setStartDate);
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={dateChange} />
  );
};

OrderOptionDate.propTypes ={
  startDate: PropTypes.node,
  setStartDate: PropTypes.node,
  useState: PropTypes.node,
  setOptionValue: PropTypes.func,

};

export default OrderOptionDate;
