import React, { useState } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import s from './App.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // добавляет +1 отзыв в блок статистики при клике на кнопки
  const leaveFeedback = name => {
    switch (name) {
      case 'good':
        return setGood(good + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
    }
  };

  // определяет общее количество отзывов
  function getTotalFeedback() {
    return good + neutral + bad;
  }

  // определяет процент положительных отзывов
  function getPositiveFeedbackPercentage() {
    return Math.round((good / getTotalFeedback()) * 100);
  }

  const key = Object.keys({ good, neutral, bad });
  return (
    <div className={s.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={key} onLeaveFeedback={leaveFeedback} />
      </Section>

      <Section title="Statistics">
        {getTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={getTotalFeedback()}
            positivePercentage={getPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
