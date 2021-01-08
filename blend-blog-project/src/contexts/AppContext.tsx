import React from 'react';

export const AppContext = React.createContext({ 
  authenticated: true,
  blogs: [],
  user: "",
  favorites: [],
  token: ""

});