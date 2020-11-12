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
  font-family: 'Anton';
  width: 100%;
`;

const StatusValue = styled.div`
  margin: 0 1vw 0 1vw;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    overflow: 'hidden',
  },
  button: {
    border: '3px solid #00d145',
    padding: theme.spacing(1),
    fontFamily: 'Anton',
    width: '6vw',
    textAlign: 'center',
    fontSize: '1vw',
    color: 'rgb(30,30,30)',
    '&:hover': {
      backgroundColor: '#00d145',
      color: 'white',
    },
  },
  button2: {
    border: '3px solid gray',
    textAlign: 'center',
    padding: theme.spacing(1),
    fontFamily: 'Anton',
    width: '6vw',
    color: 'white',
    fontSize: '1vw',
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'rgb(255,20,20)',
      border: '3px solid rgb(255,20,20)',
    },
  },
  button3: {
    textAlign: 'center',
    fontFamily: 'Anton',
    border: '3px solid lightgray',
    padding: theme.spacing(1),
    width: '6vw',
    color: 'white',
    fontSize: '1vw',
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
  const [select, setSelect] = useState('-');

  const countStatus = () => {
    const count = [0, 0, 0];

    for (let i = 0; i < column.length; i += 1) {
      if (column[i] === 0) {
        count[0] += row.length;
      } else if (column[i] === 1) {
        count[1] += row.length;
      } else {
        count[2] += row.length;
      }
    }

    return count;
  };
  const [_status, setStatus] = useState(countStatus());

  const loadGridRow = (i) => {
    return column.map((v, index) => {
      console.log(width);
      if (v === 0) {
        return (
          <Grid item xs={1}>
            <Button
              className={classes.button}
              onClick={() => setSelect(index + 1 + i * width)}
            >
              {index + 1 + i * width}
            </Button>
          </Grid>
        );
      }
      if (v === 1) {
        return (
          <Grid item xs={1}>
            <Button className={classes.button2}>{index + 1 + i * width}</Button>
          </Grid>
        );
      }
      return (
        <Grid item xs={1}>
          <Button className={classes.button3} disabled>
            수리중
          </Button>
        </Grid>
      );
    });
  };

  const showGridColumn = () => {
    return row.map((v, i) => (
      <Grid container spacing={1}>
        {loadGridRow(i)}
      </Grid>
    ));
  };

  const showGridRow = () => {
    return <div style={{ flexGrow: 1 }}>{showGridColumn()}</div>;
  };

  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '3vw',
          marginTop: '0',
          fontFamily: 'Anton',
        }}
      >
        <div>{title}</div>
        <div
          style={{
            fontSize: '1rem',
            display: 'flex',
            flexDirection: 'row',
            marginRight: '2vw',
            alignItems: 'flex-start',
          }}
        >
          <StatusValue>✅ : {_status[0]} </StatusValue>
          <StatusValue>❌ : {_status[1]}</StatusValue>
          <StatusValue>🚧 : {_status[2]}</StatusValue>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Content>
          <div className={classes.root}>{showGridRow()}</div>
        </Content>
        <div
          style={{
            marginRight: '1vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              fontFamily: 'Anton',
              fontSize: '2rem',
              margin: '0 3vw 0 0',
            }}
          >
            {select}
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: '2vh 3vw 0 0',
        }}
      >
        <Button style={{ backgroundColor: 'black', color: 'white' }}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Cabinet;
