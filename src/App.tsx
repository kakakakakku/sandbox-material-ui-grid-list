import React from 'react';
import './App.css';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import cat from './images/cat.jpg';
import deer from './images/deer.jpg';
import kingfisher from './images/kingfisher.jpg';
import koala from './images/koala.jpg';
import pelikan from './images/pelikan.jpg';
import rabbit from './images/rabbit.jpg';
import tiger from './images/tiger.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">2018</ListSubheader>
        </GridListTile>
        <GridListTile key="cat" cols="2">
          <img src={cat} alt="cat" />
          <GridListTileBar
            title="Cat"
          />
        </GridListTile>
        <GridListTile key="deer" cols="1">
          <img src={deer} alt="deer" />
        </GridListTile>
        <GridListTile key="kingfisher" cols="1">
          <img src={kingfisher} alt="kingfisher" />
        </GridListTile>
        <GridListTile key="koala" cols="1">
          <img src={koala} alt="koala" />
          <GridListTileBar
            title="Koala"
            subtitle="So Cute !"
          />
        </GridListTile>
        <GridListTile key="pelikan" cols="1">
          <img src={pelikan} alt="pelikan" />
        </GridListTile>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">2019</ListSubheader>
        </GridListTile>
        <GridListTile key="rabbit" cols="1">
          <img src={rabbit} alt="rabbit" />
        </GridListTile>
        <GridListTile key="tiger" cols="2">
          <img src={tiger} alt="tiger" />
          <GridListTileBar
            title="Tiger"
            subtitle="So Cool !"
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      </GridList>
    </div>
  );
}

export default App;
