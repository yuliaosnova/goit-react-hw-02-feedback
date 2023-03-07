import React, { Component } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statictic/Statistic';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
      <div className="Feedback-section">
        <Section title="Please leave feedback">
          <Feedback
            onGood={this.addGoodFeedback}
            onNeutral={this.addNeutralFeedback}
            onBad={this.addBadFeedback}
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
