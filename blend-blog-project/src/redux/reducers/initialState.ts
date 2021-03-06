// Setting intial state
export const UserInitialState = {
  email: "",
  id: localStorage.getItem("id"),
  blogposts: [],
  locations: [],
  registerUserStart: false,
  registerUserError: false,
  loginUserStart: false,
  loginUserError: false,
  logoutUserStart: false,
  logoutUserError: false,
  tokenPresent: false,
};

export const BlogPostsInitialState = {
  blogposts: [],
  singleBlogPost: {},
  filteredBlogPosts: [],
  favorites: [],
  allBlogPosts: {},
  addBlogPostStart: false,
  addBlogPostError: false,
  addFavoriteStart: false,
  addFavoriteError: false,
  editBlogPostStart: false,
  editBlogPostError: false,
  deleteBlogPostStart: true,
  deleteBlogPostError: false,
  deleteFavoriteStart: false,
  deleteFavoriteError: false,
  getFavoritesStart: false,
  getFavoritesError: false,
  getBlogPostByUserStart: false,
  getBlogPostByUserError: false,
  getSingleBlogPostStart: false,
  getSingleBlogPostError: false,
  getAllBlogPostsStart: false,
  getAllBlogPostsError: false,
};

export const FavoritesInitialState = {
  // TODO
};
