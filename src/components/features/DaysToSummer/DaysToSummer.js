import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {

  timeToSummer(){
    const currentDate = new Date();
    const summerDay = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));

    if(currentDate.getUTCMonth() > 8 || (currentDate.getUTCMonth() === 8 && currentDate.getUTCDate() >= 23)){
      summerDay.setUTCFullYear(summerDay.getUTCFullYear()+1);
    }

    const daysToSummer = Math.round((summerDay.getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24));

    if (daysToSummer > 1) {
      return daysToSummer + ' days to summer!';
    }
    if (daysToSummer === 1 ) {
      return '1 day to summer!';
    }
    return '';
  }

  render(){
    const summerCountTitle = this.timeToSummer();
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{summerCountTitle}</h2>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  summerCountTitle: PropTypes.node,
};

export default DaysToSummer;
