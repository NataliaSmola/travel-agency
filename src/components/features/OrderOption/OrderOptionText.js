import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({id, setOptionValue}) => (
  <div className={styles.input}>
    <input
      className={styles.input}
      type='text'
      placeholder={(id==='name') ? 'Type your name' : 'Type your contact details'}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);
OrderOptionText.propTypes ={
  id: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
