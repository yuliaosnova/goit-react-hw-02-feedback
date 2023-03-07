import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistic from './Statictic/Statistic';

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

    return persentage;
  };

  render() {
    return (
      <div className="Feedback-section">
        <Feedback
          onGood={this.addGoodFeedback}
          onNeutral={this.addNeutralFeedback}
          onBad={this.addBadFeedback}
        />
        <Statistic
          state={this.state}
          total={this.countTotalFeedback()}
          persentage={this.countPositiveFeedbackPercentage()}
        />

        {/* <div>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback: {this.countPositiveFeedbackPercentage() || 0}%
          </p>
        </div> */}
      </div>
    );
  }
}

export default App;
