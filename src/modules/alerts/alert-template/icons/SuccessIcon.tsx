import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import BaseIcon from './BaseIcon';

const styles = () => createStyles({
  icon: {
    stroke: '#31B404'
  }
});

type SuccessIconProps = {
  classes: any,
  className?: string
}

const SuccessIcon:React.FC<SuccessIconProps> = ({ classes, className: classNameProps }) => (
  <BaseIcon classes={{ icon: classes.icon }} className={classNameProps}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </BaseIcon>
);
SuccessIcon.defaultProps = {
  className: ''
};

export default withStyles(styles)(SuccessIcon);
