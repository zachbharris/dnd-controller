const initState = {
  campaigns: [
    { id: '1', title: 'for the horde', content: 'ripski'},
    { id: '2', title: 'lorderon', content: 'i am foresaken'}
  ]
}

const campaignReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create campaign success', action.project)
      return state;
    case 'CREATE_PROJECT_FAILURE':
      console.log('create campaign failure', action.err)
      return state;
    default:
      return state;
  }
}

export default campaignReducer;
