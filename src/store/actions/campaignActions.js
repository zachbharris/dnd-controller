export const createCampaign = (campaign) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('campaigns').add({
        ...campaign,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: 'CREATE_CAMPAIGN_SUCCESS',
          campaign
        });
      })
      .catch((err) => {
        dispatch({
          type: 'CREATE_CAMPAIGN_FAILURE',
          err
        })
      })
  }
};