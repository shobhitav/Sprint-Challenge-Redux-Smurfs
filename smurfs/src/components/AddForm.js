import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addingSmurfAction } from '../actions';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the action creator
    this.props
        .addingSmurfAction(this.state)
        .then(this.props.history.push("/"));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <p>Add A Smurf To Village</p>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          /> <br/>
          <button type="submit" className="button">Add to the village</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ error }) => ({
    error
  });
  
export default withRouter(
connect(
    mapStateToProps,
    { addingSmurfAction }
)(AddForm)
);
  