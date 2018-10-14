export const createCampaign = (campaign) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('campaigns').add({
      ...campaign,
      authorFirstName: 'Zach',
      authorLastName: 'Harris',
      authorId: 12,
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