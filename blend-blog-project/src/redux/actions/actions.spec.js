import * as userActions from './userActions'
import * as actionTypes from './actionTypes'

describe('login start action', () => {
  it('should create an action to login a user', () => {
    const payload = {
      email: "aggy2@gmail.com",
      password: "YummyCookie1*"
    }
    // The following expected action needs to be a lot more in depth
    // following the process of how the actual loginUser action handles things.
    const expectedAction = {
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload
    }
    expect(userActions.loginUser(payload)).toEqual(expectedAction)
  })
})