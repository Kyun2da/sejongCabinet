/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  SwipeableDrawer,
  Button,
  Tabs,
  Tab,
  AppBar,
  TabPanel,
  Grid,
  Paper,
  makeStyles,
} from '@material-ui/core';
import { Default } from '../MediaQuery';

const Content = styled.div`
  position: absolute;
  flex: 10;
  flex-direction: row;
  height: 50vh;
  width: 100%;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(1),
    border: '3px solid #00d145',
    textAlign: 'center',
    width: '6vw',
    color: 'gray',
    '&:hover': {
      backgroundColor: '#00d145',
      color: 'white',
    },
  },
  button2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '6vw',
    color: 'white',
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'rgb(255,50,50)',
    },
  },
  button3: {
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '6vw',
    color: 'white',
    backgroundColor: 'lightgray',
  },
}));

// eslint-disable-next-line react/prop-types
const Cabinet = ({ data }) => {
  const classes = useStyles();
  const { title } = data;
  const { width } = data;
  const { height } = data;
  const { row } = data;
  const { column } = data;
  const num = Number(title);

  const loadGridRow = (i) => {
    return column.map((v, index) => {
      if (v === 0) {
        return (
          <Grid item xs>
            <Button className={classes.button}>
              {index + num + i * height}
            </Button>
          </Grid>
        );
      }
      if (v === 1) {
        return (
          <Grid item xs>
            <Button className={classes.button2}>
              {index + num + i * height}
            </Button>
          </Grid>
        );
      }
      return (
        <Grid item xs>
          <Button className={classes.button3} disabled>
            수리중
          </Button>
        </Grid>
      );
    });
  };

  const showGridColumn = () => {
    return row.map((v, i) => (
      <Grid container spacing={2}>
        {loadGridRow(i)}
      </Grid>
    ));
  };

  const showGridRow = () => {
    return <div style={{ flexGrow: 1 }}>{showGridColumn()}</div>;
  };

  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
      }}
    >
      <p style={{ fontSize: '4rem' }}>{title}</p>
      <Content>
        <div className={classes.root}>{showGridRow()}</div>
      </Content>
    </div>
  );
};

export default Cabinet;
