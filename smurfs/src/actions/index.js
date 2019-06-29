import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURFS = "GETTING_SMURFS";
export const GETTING_SMURFS_SUCCESS = "GETTING_SMURFS_SUCCESS";
export const GETTING_SMURFS_FAILURE = "GETTING_SMURFS_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";
export const DELETING_SMURF = "DELETING_SMURF";
export const DELETING_SMURF_SUCCESS = "DELETING_SMURF_SUCCESS";
export const DELETING_SMURF_FAILURE = "DELETING_SMURF_FAILURE";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const UPDATING_SMURF_SUCCESS = "UPDATING_SMURF_SUCCESS";
export const UPDATING_SMURF_FAILURE = "UPDATING_SMURF_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const gettingSmurfsAction = () => dispatch => {
    dispatch({ type: GETTING_SMURFS });
    return axios
                .get("http://localhost:3333/smurfs")
                .then( resp => dispatch({type: GETTING_SMURFS_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: GETTING_SMURFS_FAILURE, error: err.message}) );
};

export const addingSmurfAction = (newSmurf) => dispatch => {
    dispatch({ type: ADDING_SMURF });
    return axios
                .post("http://localhost:3333/smurfs", newSmurf)
                .then( resp => dispatch({type: ADDING_SMURF_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: ADDING_SMURF_FAILURE, error: err.message}) );
};

export const deletingSmurfAction = (id) => dispatch => {
    dispatch({ type: DELETING_SMURF });
    return axios
                .delete(`http://localhost:3333/smurfs/${id}`)
                .then( resp => dispatch({type: DELETING_SMURF_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: DELETING_SMURF_FAILURE, error: err.message}) );
};

export const updatingSmurfAction = (updatedSmurf) => dispatch => {
    dispatch({ type: UPDATING_SMURF });
    return axios
                .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
                .then( resp => dispatch({type: UPDATING_SMURF_SUCCESS, payload: resp.data}) )
                .catch( err => dispatch({type: UPDATING_SMURF_FAILURE, error: err.message}) );
};

