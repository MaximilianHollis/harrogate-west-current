import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Courgette",
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default function Types() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2" gutterBottom>
          Harrogate West
        </Typography>
        <Typography variant="h6" gutterBottom>
          Since 2011, we’ve been breeding our small flock of Registered 100% RR Katahdins in Sykesville, Maryland.
        </Typography>
        <div className={classes.buttons}>
          <Button variant="outlined" color="primary">
            Phone: 410-262-5599
          </Button>
          <Button variant="outlined" color="secondary">
            Email: harrogatewest@verizon.net
          </Button>
        </div>
      </div>
    </div>
  );
}
