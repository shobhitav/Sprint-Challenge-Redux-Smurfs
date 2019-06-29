/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURFS, GETTING_SMURFS_SUCCESS, GETTING_SMURFS_FAILURE } from "../actions";
import { ADDING_SMURF, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE } from "../actions";
import { DELETING_SMURF, DELETING_SMURF_SUCCESS, DELETING_SMURF_FAILURE } from "../actions";
import { UPDATING_SMURF, UPDATING_SMURF_SUCCESS, UPDATING_SMURF_FAILURE } from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      state = {...state, gettingSmurfs: true};
      break;
    case GETTING_SMURFS_SUCCESS:
      state = {...state, gettingSmurfs: false, smurfs: action.payload};
      break;  
    case GETTING_SMURFS_FAILURE:
      state = {...state, gettingSmurfs: false, error: action.error};
      break;
    case ADDING_SMURF:
      state = {...state, addingSmurf: true};
      break;
    case ADDING_SMURF_SUCCESS:
      state = {...state, addingSmurf: false, smurfs: action.payload};
      break;
    case ADDING_SMURF_FAILURE:
      state = {...state, addingSmurf: false, error: action.error};
      break;
    case DELETING_SMURF:
      state = {...state, deletingSmurf: true};
      break;
    case DELETING_SMURF_SUCCESS:
      state = {...state, deletingSmurf: false, smurfs: action.payload};
      break;
    case DELETING_SMURF_FAILURE:
      state = {...state, deletingSmurf: false, error: action.error};
      break;
    case UPDATING_SMURF:
      state = {...state, updatingSmurf: true};
      break;
    case UPDATING_SMURF_SUCCESS:
      state = {...state, updatingSmurf: false, smurfs: action.payload};
      break;
    case UPDATING_SMURF_FAILURE:
      state = {...state, updatingSmurf: false, error: action.error};
      break;
    default:
      break;
  }
  return state;
};

export default reducer;