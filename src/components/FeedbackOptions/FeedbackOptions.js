import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.feedbackOptions}>
      {options.map(item => (
        <button
          className={s.feedbackButton}
          key={item}
          type="button"
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
