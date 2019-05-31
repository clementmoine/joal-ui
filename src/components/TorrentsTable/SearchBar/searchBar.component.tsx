import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import classnames from 'classnames';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});

type SearchBarProps = {
  classes: any,
  className?: any,
  searchFilter?: string,
  onFilterTextChange: (text: string) => void
};

const SearchBar: React.FC<SearchBarProps> = ({
  classes, className, searchFilter, onFilterTextChange
}) => (
  <Paper className={classnames(classes.root, className)} elevation={1}>
    <InputBase value={searchFilter} onChange={e => onFilterTextChange(e.target.value)} className={classes.input} placeholder="Filter by name" />
    <IconButton className={classes.iconButton} aria-label="Search">
      <SearchIcon />
    </IconButton>
  </Paper>
);
SearchBar.defaultProps = {
  searchFilter: '',
  className: ''
};

export default withStyles(styles)(SearchBar);
