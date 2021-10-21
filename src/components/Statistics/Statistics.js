import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.statisticsList}>
      <li className={s.statisticsItem}>
        Good: <span>{good}</span>
      </li>
      <li className={s.statisticsItem}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={s.statisticsItem}>
        Bad: <span>{bad}</span>
      </li>
      <li className={s.statisticsItem}>
        Total: <span>{total}</span>
      </li>
      <li className={s.statisticsItem}>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
