import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import classe from './DashBoard.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(34),
    },
  },
}));

function Dashboard() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
          <Button className={classe.button} color="primary" variant="contained">HOMEWORK</Button>
          <Button className={classe.button} color="primary" variant="contained">TASKS</Button>
        </div>
    );
}
export default Dashboard;