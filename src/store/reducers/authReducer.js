const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_FAILURE':
      console.log('login failure');
      return {
        ...state,
        authError: 'Login failed'
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      return state;
    default:
      return state;
  }
}

export default authReducer;
