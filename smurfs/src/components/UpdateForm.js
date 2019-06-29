import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatingSmurfAction } from '../actions';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      height: this.props.height
    };
  }

  updateSmurf = event => {
    event.preventDefault();
    // add code to update the smurf using the api
    this.props
      .updatingSmurfAction(this.state)
      .then(res  => this.props.updateState(this.state.id, res))
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
      <p>Update A Smurf To Village</p>
        <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.age}
            name="age"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.height}
            name="height"
          /> <br/>
          <button type="submit" className="button">Update to the village</button>
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
    { updatingSmurfAction }
  )(UpdateForm)
);

