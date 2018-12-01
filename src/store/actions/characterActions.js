// create character action
export const createCharacter = character => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    dispatch({ type: 'CREATE_CHARACTER_REQUEST' });

    firestore.collection('characters').add({
      ...character,
      authorId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(() =>  dispatch({ type: 'CREATE_CHARACTER_SUCCESS', character }))
      .catch(err => dispatch({ type: 'CREATE_CHARACTER_FAILURE', err }))
  }
}

// get character action
// update character action
// delete character action