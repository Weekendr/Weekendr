import React from 'react';
import { Link } from 'react-router';

class LandingApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page: 'firstQuestions',
			budget: 400,
			numTravelers : 1,
			modeTransport: null,
			constraints: null
		};

		this.handleBudget = this.handleBudget.bind(this);
		this.handleNumTravelers = this.handleNumTravelers.bind(this);
		this.handleModeTransport = this.handleModeTransport.bind(this);
		this.handleConstraints = this.handleConstraints.bind(this);
		this.handleQuestionnaire = this.handleQuestionnaire.bind(this);
	}

	handleBudget(){
		this.setState({budget: event.target.value});
	}

	handleNumTravelers(){
		this.setState({numTravelers: event.target.value});
	}

	handleModeTransport(){
		this.setState({modeTransport: event.target.value});
	}

	handleConstraints(){
		this.setState({constraints: event.target.value});
	}

	handleQuestionnaire(){
		this.setState({page: 'questionnaire'});
	}

	render(){
		if(this.state.page === 'firstQuestions') {
			return (
				<div className="container-fluid">
					<div className="main-container">
						<div className="blurred-conainer">
							<div className="main-content">
								<p> What is your budget? </p>
								<input type="number" 
											 min="40" 
											 max="9999999999" 
											 name="budget"  
											 value={this.state.budget}
											 onChange={this.handleBudget}
								/>
							</div>
						</div>
						<div className="blurred-conainer">
							<div className="main-content">
								<p> How many total homies are going? </p>
								<input type="number" 
											 min="1" 
											 max="" 
											 name="budget"  
											 value={this.state.numTravelers}
											 onChange={this.handleNumTravelers}/>
							</div>
						</div>
						<div className="blurred-conainer">
							<div className="main-content">
								<p> Preferred Mode of Transport? </p>
							  <select multiple={true} value={['C', 'D']}>
							    <option value="A">Airplane</option>
							    <option value="B">Car</option>
							    <option value="C">Train</option>
							    <option value="D">Bus</option>
							  </select>
							</div>
						</div>					
						<div className="blurred-conainer">
							<div className="main-content">
								<p> What are your interests? </p>
							  <select multiple={true} value={['C', 'D']}>
							    <option value="A">North</option>
							    <option value="B">South</option>
							    <option value="C">East</option>
							    <option value="D">West</option>
							  </select>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
};

export default LandingApp;
