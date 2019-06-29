import React, { Component } from 'react';

class Smurf extends Component {
  render() {
    return (
        <div className="Smurf">
                <h3><strong>Name: </strong>{this.props.name}</h3>
                <p><strong>Height : </strong>{this.props.height} tall </p>
                <p><strong>Age: </strong>{this.props.age} smurf years old</p>
                <div className="SmurfActions">
                  <p title="Update" className="UpdateButton" onClick={() => this.props.editHandler(this.props)}>Update</p>
                  <p title="Delete" className="DeleteButton" onClick={() => this.props.deleteHandler(this.props.id)}>Delete</p>  
                </div>
        </div>
    );
  } 
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

