import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label
        key={value.id}>
        <input type='checkbox'
          value={value.id}
          checked={currentValue.includes(value.id)}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}
        {formatPrice(value.price)}
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes ={
  values: PropTypes.array,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;