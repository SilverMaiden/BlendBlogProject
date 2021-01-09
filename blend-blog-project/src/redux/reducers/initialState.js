
// Setting intial state
export const UserInitialState = {
    email: '',
    id: localStorage.getItem('id'),
    events: { active: '' }, 
    locations: [],
    registerUserStart: false,
    registerUserError: false,
    loginUserStart: false,
    loginUserError: false,
    logoutUserStart: false,
    logoutUserError: false,
    tokenPresent: localStorage.getItem('token'), 
  };

  export const BlogInitialState = {
      // TODO
  }

  export const FavoritesInitialState = {
      // TODO
  }