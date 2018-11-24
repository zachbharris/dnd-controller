const initState = {
  authError: null,
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        authError: {
          code: action.err.code,
          message: action.err.message
        },
        isLoading: false
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
        isLoading: false
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
