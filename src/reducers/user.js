// Esse reducer será responsável por tratar as informações da pessoa usuária
import { INSERT_FORMS_PERSON } from '../actions';

const INITIAL_STATE = {
  email: '',

};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_FORMS_PERSON:
    console.log('cheguei reducers');
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
