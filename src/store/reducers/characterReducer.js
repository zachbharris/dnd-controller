const initState = { isLoading: false };

const characterReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_CHARACTER_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'CREATE_CHARACTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
      }
    case 'CREATE_CHARACTER_FAILURE':
      return {
        ...state,
        isLoading: false,
        authError: {
          code: action.err.code,
          message: action.err.message
        }
      }
    default:
      return state
  }
}

export default characterReducer;
