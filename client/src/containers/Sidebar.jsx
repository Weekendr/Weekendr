import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postQuestionListInput } from '../actions/index';
import SidebarUserInput from '../components/SidebarUserInput';
import SidebarUserSelection from '../components/SidebarUserSelection';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderSidebarUserInput = this.renderSidebarUserInput.bind(this);
    this.renderSidebarUserSelections = this.renderSidebarUserSelections.bind(this);
  }

  renderSidebarUserInput() {
    return (
      <SidebarUserInput
        budget={this.props.userInputForm && this.props.userInputForm.budget}
        numTravelers={this.props.userInputForm && this.props.userInputForm.numTravelers}
        date={this.props.userInputForm && this.props.userInputForm.datePicker}
      />
    );
  }

  renderSidebarUserSelections() {
    return this.props.quizAnswers.map((q, index) => {
      return (
        <SidebarUserSelection
          key={index}
          title={q.title}
          src={q.option.imageUrl}
          answer={q.option.option}
        />
      );
    });
  }

  render() {
    return (
      <div className="sidebar-container">
        <h5>Sidebar</h5>
        <div className="sidebar-user-input">
          {this.renderSidebarUserInput()}
        </div>
        <div className="sidebar-user-selections">
          <h6><strong>Your Trip Preferences:</strong></h6>
          {this.renderSidebarUserSelections()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizData: state.quiz.quizData,
    questionIndex: state.quiz.questionIndex,
    quizAnswers: state.quiz.quizAnswers,
    userInputForm: state.userInput.userInputForm,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postQuestionListInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
