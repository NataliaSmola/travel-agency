import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({id}) => (
  <div className={styles.component}>
    <input
      className={styles.input}
      type='text'
      placeholder={(id==='name') ? 'Type your name' : 'Type your contact details'}
    />
  </div>
);
OrderOptionText.propTypes ={
  id: PropTypes.node,
};

export default OrderOptionText;
