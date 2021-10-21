import React, { Component } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import s from './App.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onBtnGoodClick = () => {
  //   this.setState({
  //     good: this.state.good + 1,
  //   });
  // };

  // onBtnGoodClick = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };

  // handleClick = event => {
  //   this.setState(prevState => {
  //     console.log(prevState);
  //     console.log(event);
  //   });
  // };

  // добавляет +1 отзыв в блок статистики по клике на кнопки
  leaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  // определяет общее количество отзывов
  getTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  // определяет процент положительных отзывов
  getPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.getTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.getTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.getTotalFeedback()}
              positivePercentage={this.getPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
