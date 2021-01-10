import React from 'react';

import {useHistory, Link} from 'react-router-dom';
import { logoutUser } from '../../redux/actions/userActions';
import { useSelector, useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(logoutUser(history));

  }


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <Link to="/home"><Button size="small">Home</Button></Link>

  <Link to="/createblogpost"><Button size="small">Create New Post +
        </Button></Link>
        {/* Using this button as a temporary spacer for createpost and mypost buttons*/}
        <Link to="/myposts"><Button size="small">My Posts</Button></Link>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Button disabled={true}/>
        <Button variant="outlined" size="small" onClick={handleLogOut}>
          Log out
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};