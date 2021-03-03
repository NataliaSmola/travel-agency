import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {

  getCountdownDate(){
    const currentDate = new Date();
    const summerDay = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));

    if(currentDate.getUTCMonth() > 8 || (currentDate.getUTCMonth() === 8 && currentDate.getUTCDate() >= 23)){
      summerDay.setUTCFullYear(summerDay.getUTCFullYear()+1);
    }

    const daysToSummer = Math.round((summerDay.getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24));

    if (daysToSummer > 1) {
      return daysToSummer + ' days to summer!';
    }
    else if (daysToSummer === 1 ) {
      return '1 day to summer!';
    }
    else {
      return '';
    }
  }

  render(){
    const countDaysDown = this.getCountdownDate();
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{countDaysDown}</h2>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  countDaysDown: PropTypes.string,
};

export default DaysToSummer;
