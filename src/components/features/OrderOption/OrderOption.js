import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionNumber from './OrderOptionNumber.js';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionCheckboxes from './OrderOptionCheckboxes.js';
import OrderOptionText from './OrderOptionText.js';
import OrderOptionDate from './OrderOptionDate.js';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          id={id}
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOption.propTypes ={
  name: PropTypes.string,
  type: PropTypes.node,
  id: PropTypes.node,
  setOrderOption: PropTypes.func,
};

export default OrderOption;
