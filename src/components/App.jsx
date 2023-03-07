import React, { Component } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statictic/Statistic';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = type => {
    if (type === 'GOOD') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (type === 'NEUTRAL') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (type === 'BAD') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
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
          <Feedback
            onGood={() => {
              this.addFeedback('GOOD');
            }}
            onNeutral={() => {
              this.addFeedback('NEUTRAL');
            }}
            onBad={() => {
              this.addFeedback('BAD');
            }}
          />

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
