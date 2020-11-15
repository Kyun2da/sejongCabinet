import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Grid, makeStyles } from '@material-ui/core';
import Swal from 'sweetalert2';
import { Default, Mobile } from '../MediaQuery';

const Content = styled.div`
  font-family: 'Anton';
  width: 100%;
`;

const MContent = styled.div`
  font-family: 'Anton';
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4vh 0 4vh 3vw;
`;

const StatusValue = styled.div`
  margin: 0 1vw 0 1vw;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    overflow: 'hidden',
  },

  mroot: {
    width: '90%',
    paddingLeft: '5vw',
    overflow: 'scroll',
  },
  button: {
    border: '3px solid #00d145',
    padding: theme.spacing(1),
    fontFamily: 'Anton',
    width: '5.5vw',
    textAlign: 'center',
    fontSize: '1vw',
    color: 'rgb(30,30,30)',
    '&:hover': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:active': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:target': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: '#00d145',
      color: 'white',
    },
  },
  button2: {
    border: '3px solid gray',
    textAlign: 'center',
    padding: theme.spacing(1),
    fontFamily: 'Anton',
    width: '5.5vw',
    color: 'white',
    fontSize: '1vw',
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'rgb(255,20,20)',
      border: '3px solid rgb(255,20,20)',
    },
  },
  button3: {
    fontFamily: 'Anton',
    border: '3px solid lightgray',
    padding: theme.spacing(1),
    width: '5.5vw',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: 'lightgray',
  },
  Mbutton: {
    border: '2px solid #00d145',
    fontFamily: 'Anton',
    borderRadius: '5px',
    margin: '0 1rem',
    backgroundColor: 'white',
    width: '2rem',
    height: '2rem',
    fontSize: '12px',
    outline: 'none',
    color: 'rgb(30,30,30)',

    '&:hover': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:active': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:target': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: '#00d145',
      color: 'white',
      outline: 'none',
    },
  },
  Mbutton2: {
    border: '1px solid gray',
    fontFamily: 'Anton',
    width: '2rem',
    margin: '0 1rem',
    height: '2rem',
    color: 'white',
    fontSize: '12px',
    outline: 'none',
    borderRadius: '5px',
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'rgb(255,20,20)',
      border: '2px solid rgb(255,20,20)',
      borderRadius: '3px',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  Mbutton3: {
    fontFamily: 'Anton',
    borderRadius: '3px',
    border: '2px solid lightgray',
    color: 'white',
    margin: '0 1rem',
    height: '2rem',
    width: '2rem',
    fontSize: '10px',
    backgroundColor: 'lightgray',
    '&:focus': {
      outline: 'none',
    },
  },
}));

const Cabinet = (props) => {
  const classes = useStyles();
  const {
    data: { title, width, height, item },
    select,
    setSelect,
  } = props;

  const countStatus = () => {
    const count = [0, 0, 0];

    for (let i = 1; i < item.length; i += 1) {
      if (item[i] === 0) {
        count[0] += 1;
      } else if (item[i] === 1) {
        count[1] += 1;
      } else {
        count[2] += 1;
      }
    }

    return count;
  };
  const [_status] = useState(countStatus());

  const loadGridRow = (i) => {
    return [...Array(width)].map((v, index) => {
      const arrIdx = i * width + index + 1;
      if (item[arrIdx] === 0) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <Button
              className={classes.button}
              onClick={(e) => {
                e.stopPropagation();
                setSelect(arrIdx);
              }}
            >
              {arrIdx}
            </Button>
          </Grid>
        );
      }
      if (item[arrIdx] === 1) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <Button className={classes.button2}>{arrIdx}</Button>
          </Grid>
        );
      }
      return (
        <Grid item xs={1} key={arrIdx}>
          <Button className={classes.button3} disabled>
            🚧
          </Button>
        </Grid>
      );
    });
  };

  const MloadGridRow = (i) => {
    return [...Array(width)].map((v, index) => {
      const arrIdx = i * height + index + 1;
      if (item[arrIdx] === 0) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <button
              type="button"
              className={classes.Mbutton}
              onClick={(e) => {
                e.stopPropagation();
                setSelect(arrIdx);
              }}
              style={{ padding: '0' }}
            >
              {arrIdx}
            </button>
          </Grid>
        );
      }
      if (item[arrIdx] === 1) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <button
              type="button"
              className={classes.Mbutton2}
              style={{ padding: '0' }}
            >
              {arrIdx}
            </button>
          </Grid>
        );
      }
      return (
        <Grid item xs={1} key={arrIdx}>
          <button
            type="button"
            className={classes.Mbutton3}
            style={{ padding: '0' }}
          >
            🚧
          </button>
        </Grid>
      );
    });
  };

  const showGridColumn = () => {
    return [...Array(height)].map((v, i) => (
      <Grid container spacing={1} key={i}>
        {loadGridRow(i)}
      </Grid>
    ));
  };

  const MshowGridColumn = () => {
    return [...Array(height)].map((v, i) => (
      <Grid container spacing={1} key={i}>
        {MloadGridRow(i)}
      </Grid>
    ));
  };

  const showGridRow = () => {
    return <div style={{ flexGrow: 1 }}>{showGridColumn()}</div>;
  };

  const MshowGridRow = () => {
    return <div style={{ flexGrow: 1 }}>{MshowGridColumn()}</div>;
  };

  return (
    <div>
      <Default>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '3vw',
            fontFamily: 'Anton',
          }}
        >
          <div style={{ marginBottom: '1vh' }}>{title}</div>
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
                padding: '0 3vw 0 1vw',
              }}
            >
              <div
                style={{
                  width: '1.5vw',
                  marginRight: '1vw',
                  textAlign: 'left',
                }}
              >
                {select === -1 ? '-' : select}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: '2vh 2vw 0 0',
          }}
        >
          <Button
            style={{
              backgroundColor: 'black',
              color: 'white',
              width: '6vw',
              padding: '2vh 2vw',
              marginRight: '1vw',
            }}
            onClick={() => {
              Swal.fire({
                icon: 'success',
                title: '사물함 신청 성공',
                text: `${title}의 ${select}번 사물함으로 신청되었습니다`,
                showConfirmButton: true,
                width: '25rem',
                timer: 2000,
              });
            }}
          >
            신청
          </Button>
        </div>
      </Default>
      <Mobile>
        <div>
          <center>
            <div
              style={{
                display: 'flex',
                width: '60%',
                flexDirection: 'row',
                MarginLeft: '2rem',
                justifyContent: 'center',
                padding: '1.5vh 2vw',
                border: '2vw solid RGB(240,240,240)',
                backgroundColor: 'white',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  fontFamily: 'Anton',
                }}
              >
                ⭕ : {_status[0]}
              </div>
              <div style={{ flexGrow: 1, fontFamily: 'Anton' }}>
                ❌ : {_status[1]}
              </div>
              <div style={{ flexGrow: 1, fontFamily: 'Anton' }}>
                🚧 : {_status[2]}
              </div>
            </div>
          </center>
          <div
            style={{
              width: '100%',
              backgroudColor: 'black',
            }}
          >
            <MContent>
              <div className={classes.mroot}>{MshowGridRow()}</div>
            </MContent>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '5vw',
                fontFamily: 'Anton',
                fontSize: '2rem',
              }}
            >
              {select === -1 ? '-' : select}
            </div>
            <div style={{ marginLeft: 0 }}>
              <Button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  width: '6vw',
                  fontSize: '12px',
                }}
                onClick={() => {
                  Swal.fire({
                    icon: 'success',
                    title: '사물함 신청 성공',
                    text: `${title}의 ${select}번 사물함으로 신청되었습니다`,
                    showConfirmButton: true,
                    width: '25rem',
                    timer: 2000,
                  });
                }}
              >
                신청
              </Button>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

Cabinet.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    item: PropTypes.arrayOf.isRequired,
  }).isRequired,
  select: PropTypes.number.isRequired,
  setSelect: PropTypes.func.isRequired,
};

export default Cabinet;
