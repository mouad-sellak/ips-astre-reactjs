import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.nav}>
      <CssBaseline />
      <Toolbar >
        <Typography variant="h4" className={classes.logo}>
          Indicateurs du choix ASTRE/IPS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
