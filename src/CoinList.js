import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '20px',
  },
});

function CoinList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {props.coins.map((coin) => (
            <ListItem button onClick={(e)=>{props.onSelect(coin.symbol)}}>
              <ListItemText primary={coin.symbol} />
            </ListItem>
            )
        )}
      </List>
    </div>
  );
}

CoinList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoinList);