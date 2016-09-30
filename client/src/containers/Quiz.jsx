import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { answerQuestion, postQuestionListInput } from '../actions/quizActions';
import { fetchAirbnbListings } from '../actions/airbnbActions';
import QuizOption from '../components/QuizOption';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.renderQuiz = this.renderQuiz.bind(this);
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  onAnswerClicked(answer) {
    this.props.answerQuestion(answer, this.props);
  }

  renderQuestion() {
    if (this.props.quizData.length === this.props.questionIndex) {
      if (this.props.coordinates.latitude && this.props.userInputForm.budget) {
        this.props.postQuestionListInput(this.props);
      }

      return (
        <div>
          <p>Congratulations!</p>
        </div>
      );
    }

    const question = this.props.quizData[this.props.questionIndex].question;

    return (
      <h6><strong>{question}</strong></h6>
    );
  }

  renderQuiz() {
    if (this.props.quizData.length === this.props.questionIndex) {
      if(this.props.quizAnswers[1].option.option === 'Airbnb') {
        console.log('*** FETCHING AIRBNB LISTINGS ***');
        this.props.fetchAirbnbListings(this.props);
      }

      if (this.props.coordinates.latitude && this.props.userInputForm.budget) {
        this.props.postQuestionListInput(this.props);
      }

      return (
        <div>
          <p>You have completed the quiz!</p>
        </div>
      );
    }

    const arr = this.props.quizData[this.props.questionIndex].options;

    return arr.map((q) => {
      return (
        <QuizOption
          key={q.id}
          option={q.option}
          src={q.imageUrl}
          onAnswerClicked={this.onAnswerClicked}
        />
      );
    });
  }

  render() {
    return (
      <div className="quiz">
        <h5>Preferences Quiz</h5>
        {this.renderQuestion()}
        {this.renderQuiz()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizData: state.quiz.quizData,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers,
    coordinates: state.coordinates.coordinates,
    userInputForm: state.userInput.userInputForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ answerQuestion, postQuestionListInput, fetchAirbnbListings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
