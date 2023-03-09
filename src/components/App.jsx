import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statictic/Statistic';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';
// import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
   this.setState(prevState => ({
        [option]: prevState[option] + 1
      }));
  };


  //вычисляемые данные
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    const positive = this.state.good;
    const persentage = Math.round((positive / total) * 100);

    return persentage || 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onClick={this.onLeaveFeedback}></FeedbackOptions>

          {this.countTotalFeedback() > 0 ? (
            <Statistic
              state={this.state}
              total={this.countTotalFeedback()}
              persentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
