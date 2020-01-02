export const setCurrentUser = user => {
  console.log('actions', user);
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}