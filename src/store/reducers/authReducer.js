const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_FAILURE':
      console.log('login failure');
      return {
        ...state,
        authError: action.err.message
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_FAILURE':
      console.log('signup failure');
      return {
        ...state,
        authError: action.err.message
      }
    case 'SIGNOUT_SUCCESS':
      return state;
    default:
      return state;
  }
}

export default authReducer;
