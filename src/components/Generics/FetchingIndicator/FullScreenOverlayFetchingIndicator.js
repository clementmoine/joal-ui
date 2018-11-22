// @flow
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  container: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(200, 200, 200, 0.63)',
    zIndex: 1200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

type Props = {
  classes: {},
  style?: {},
  containerStyle?: {},
  active: boolean
};

const FullScreenOverlayFetchingIndicator = (props: Props) => {
  const {
    classes, style, containerStyle, active, ...rest
  } = props;
  if (!active) {
    return (<div style={{ width: 0, height: 0, position: 'absolute' }} />);
  }
  return (
    <div className={classes.container} style={Object.assign({}, containerStyle)}>
      {active && <CircularProgress {...rest} style={style} />}
    </div>
  );
};
FullScreenOverlayFetchingIndicator.defaultProps = {
  style: {},
  containerStyle: {}
};

export default withStyles(styles)(FullScreenOverlayFetchingIndicator);
