import React from 'react';
import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react';
import { render } from "@testing-library/react";
import Blog from './Blog';
import { useSelector, useDispatch } from "react-redux";


/*
    Attempting to write tests to see if:
        1) the Blog component renders the main title correctly'
        2) the Blog component renders with props
        3) the Blog component can reach the redux store.
        NOTE: These tests are currently not working.
*/

test("Blog component renders title correctly", () => {
    // pull in testing properties - add rerender
    // render the component without a prop
    const { getByLabelText, getByRole, queryByRole, rerender } = render(
      <Blog />
    );
    const input = getByLabelText(/Welcome to TheBlogTm/i);
    // test component
    //const user = useSelector((state) => state.userReducer.id);
    rerender(<Blog props={user} />)
    // assert that the error message is NOT being rendered (optional)
    //expect(queryByRoll("alert")).toBeNull();
    rtl.expect(input).toEqual("Welcome to TheBlogTm");
  });