import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { gettingSmurfsAction , deletingSmurfAction } from '../actions';
import Smurf from './Smurf';
import UpdateForm from './UpdateForm';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editList: []
    };
  }

  componentDidMount() {
    this.props.gettingSmurfsAction();
  }

  deleteHandler = id => {
    this.props
      .deletingSmurfAction(id)
      .then(() => this.props.history.push("/"));
  }

  editHandler = smurf => {
    this.setState({editList:  this.state.editList.concat(smurf.id)});
  }

  updateState = (id, res) => {
    console.log(res.data);
    this.setState({ smurfs: res.data, editList: this.state.editList.filter(editId => editId !== id) });
  }

  render() {
    return (
      <div className="Smurfs">
        <h1 className="Header">Smurf Village</h1>
        {
          !this.props.gettingSmurfs 
          ? 
            <ul>
              <div className="SmurfLayout">
                { 
                  this.props.smurfs.map(smurf => { 
                    return (
                      this.state.editList.findIndex(editId => editId === smurf.id) === -1 
                      ?
                        <Smurf
                          deleteHandler = {this.deleteHandler}
                          editHandler = {this.editHandler}
                          name = {smurf.name}
                          id = {smurf.id}
                          age = {smurf.age}
                          height = {smurf.height}
                          key = {smurf.id}                          
                        />
                      :
                        <UpdateForm
                          name = {smurf.name}
                          id = {smurf.id}
                          age = {smurf.age}
                          height = {smurf.height}
                          key = {smurf.id}
                          updateState = {this.updateState}
                        />
                    );
                  })
                }
              </div>
            </ul>
          : <h4>Fetching smurfs ...</h4>
        }
        {
          this.props.error && <p className="error"> { 
            this.props.error
          } </p> 
        }
      </div>
    );
  }
}
   
const mapStateToProps = ({ smurfs , gettingSmurfs , error }) => ({
  smurfs,
  gettingSmurfs,
  error
});

export default withRouter(
  connect(
    mapStateToProps,
    { gettingSmurfsAction , deletingSmurfAction }
  )(Smurfs)
);
