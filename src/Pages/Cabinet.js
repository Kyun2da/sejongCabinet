import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import {
  Button,
  FormControlLabel,
  Grid,
  makeStyles,
  Switch,
  Tooltip,
} from '@material-ui/core';
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
  padding: 4vh 0;
  margin-left: 5vw;
  overflow:hidden;
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
    width: '50vw',
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
    fontFamily: 'Anton',
    border: '3px solid lightgray',
    padding: theme.spacing(1),
    width: '5.5vw',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: 'lightgray',
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'lightgray',
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
  button4: {
    fontFamily: 'Anton',
    border: '3px solid #008000',
    padding: theme.spacing(1),
    width: '5.5vw',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: '#008000',
    '&:hover': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '3px solid #DF1840',
    },
    '&:focus': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '3px solid #DF1840',
    },
  },
  Mbutton: {
    border: '2px solid #00d145',
    fontFamily: 'Anton',
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '10px',
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
    border: '2px solid lightgray',
    fontFamily: 'Anton',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '10px',
    color: 'white',
    outline: 'none',
    backgroundColor: 'lightgray',
    borderRadius: '3px',
  },
  Mbutton3: {
    fontFamily: 'Anton',
    borderRadius: '4px',
    border: '2px solid lightgray',
    color: 'white',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '7px',
    textAlign: 'center',
    backgroundColor: 'lightgray',
    '&:focus': {
      outline: 'none',
    },
  },
  Mbutton4: {
    fontFamily: 'Anton',
    borderRadius: '3px',
    border: '2px solid #008000',
    color: 'white',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '8px',
    backgroundColor: '#008000',
    '&:hover': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '2px solid #DF1840',
      outline: 'none',
    },
    '&:focus': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '2px solid #DF1840',
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
    cabinetNum,
    cabinetEnroll,
    currentUserID,
    cabinetCancel,
    adminType,
    cabinetBreakDown,
    cabinetFix,
  } = props;
  const onClickFunc = () => {
    console.log(adminType, item[select]);
    if (adminType && item[select] === 0) {
      cabinetBreakDown(cabinetNum);
    } else if (adminType && item[select] === 2) {
      cabinetFix(cabinetNum);
    } else if (item[select] !== currentUserID) {
      cabinetEnroll(cabinetNum);
    } else {
      cabinetCancel();
    }
  };
  const [count, setCount] = useState([0, 0, 0]);
  const [toggle, setToggle] = useState(false);
  const toggleChange = (event) => {
    setToggle(event.target.checked);
  };
  useEffect(() => {
    const newCount = [0, 0, 0];
    for (let i = 1; i < item.length; i += 1) {
      if (item[i] === 0) {
        newCount[0] += 1;
      } else if (item[i] === 2) {
        newCount[2] += 1;
      } else {
        newCount[1] += 1;
      }
    }
    setCount(newCount);
  }, [item]);
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
      if (item[arrIdx] === 2) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <Button
              className={classes.button3}
              disabled={!adminType}
              onClick={(e) => {
                e.stopPropagation();
                setSelect(arrIdx);
              }}
            >
              🚧
            </Button>
          </Grid>
        );
      }
      if (item[arrIdx] === currentUserID) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <Button
              className={classes.button4}
              onClick={(e) => {
                e.stopPropagation();
                setSelect(arrIdx);
              }}
              disabled={adminType}
            >
              <CheckOutlinedIcon style={{ fontSize: '1.7vw' }} />
            </Button>
          </Grid>
        );
      }
      return (
        <Grid item xs={1} key={arrIdx}>
          <Tooltip
            title={<div style={{ fontSize: '0.8rem' }}>{item[arrIdx]}</div>}
            fontSize="5vw"
            arrow
          >
            <Button className={classes.button2} disableRipple>
              {toggle ? item[arrIdx] : arrIdx}
            </Button>
          </Tooltip>
        </Grid>
      );
    });
  };

  const MloadGridRow = (i) => {
    return [...Array(width)].map((v, index) => {
      const arrIdx = i * width + index + 1;
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
      if (item[arrIdx] === 2) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <button
              type="button"
              className={classes.Mbutton3}
              disabled={!adminType}
              onClick={(e) => {
                e.stopPropagation();
                setSelect(arrIdx);
              }}
            >
              🚧
            </button>
          </Grid>
        );
      }
      if (item[arrIdx] === currentUserID) {
        return (
          <Grid item xs={1} key={arrIdx}>
            <button
              type="button"
              className={classes.Mbutton4}
              style={{ padding: '0' }}
              disabled={adminType}
              onClick={(e) => {
                e.stopPropagation();
                setSelect(arrIdx);
              }}
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
            className={classes.Mbutton2}
            style={{ padding: '0' }}
            disabled
          >
            {arrIdx}
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
              marginRight: '2vw',
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={toggle}
                  onChange={toggleChange}
                  color="primary"
                  name="toggle"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="학번으로 보기"
              style={{
                marginBottom: '0.8vh',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column',
                textAlign: 'left',
              }}
            >
              <Tooltip
                title={<div style={{ fontSize: '0.8rem' }}>신청 가능</div>}
                fontSize="5vw"
                placement="left"
                arrow
              >
                <StatusValue style={{ width: '3.2vw', fontSize: '0.9vw' }}>
                  ✅ : {count[0]}{' '}
                </StatusValue>
              </Tooltip>
              <Tooltip
                title={<div style={{ fontSize: '0.8rem' }}>신청 불가</div>}
                fontSize="5vw"
                placement="left"
                arrow
              >
                <StatusValue style={{ width: '3.2vw', fontSize: '0.9vw' }}>
                  ❌ : {count[1]}
                </StatusValue>
              </Tooltip>
              <Tooltip
                title={<div style={{ fontSize: '0.8rem' }}>고장</div>}
                fontSize="5vw"
                placement="left"
                arrow
              >
                <StatusValue style={{ width: '3.2vw', fontSize: '0.9vw' }}>
                  🚧 : {count[2]}
                </StatusValue>
              </Tooltip>
            </div>
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
              backgroundColor: select === -1 ? 'gray' : 'black',
              color: 'white',
              width: '7.5vw',
              padding: '1vh 2vw',
              marginRight: '1vw',
              fontFamily: 'Noto Sans KR',
            }}
            onClick={onClickFunc}
            disabled={select === -1}
          >
            {/* eslint-disable-next-line no-nested-ternary */}
            {adminType
              ? item[select] === 0
                ? '고장내기'
                : '고치기'
              : item[select] !== currentUserID
              ? '신청'
              : '취소'}
          </Button>
        </div>
      </Default>
      <Mobile>
        <div style={{height:'100vh',overflow:'hidden'}}>
          <div
            style={{
              display: 'flex',
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1.5vh 0',
              marginLeft: '8vw',
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
              <center>⭕ : {count[0]}</center>
            </div>
            <div style={{ flexGrow: 1, fontFamily: 'Anton' }}>
              <center>❌ : {count[1]}</center>
            </div>
            <div style={{ flexGrow: 1, fontFamily: 'Anton' }}>
              <center>🚧 : {count[2]}</center>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              paddingLeft:'3vw',
            }}
          >
            <MContent>{MshowGridRow()}</MContent>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              position:'fixed',
              width:'100vw',
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
            <div style={{ marginLeft: 0, marginBotto: '2vh' }}>
              <Button
                style={{
                  backgroundColor: select === -1 ? 'gray' : 'black',
                  color: 'white',
                  width: '6vw',
                  fontSize: '12px',
                }}
                onClick={onClickFunc}
                disabled={select === -1}
              >
                {/* eslint-disable-next-line no-nested-ternary */}
                {adminType
                  ? item[select] === 0
                    ? '고장내기'
                    : '고치기'
                  : item[select] !== currentUserID
                  ? '신청'
                  : '취소'}
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
  cabinetEnroll: PropTypes.func.isRequired,
  cabinetNum: PropTypes.string.isRequired,
  currentUserID: PropTypes.string.isRequired,
  cabinetCancel: PropTypes.func.isRequired,
  adminType: PropTypes.bool.isRequired,
  cabinetBreakDown: PropTypes.func.isRequired,
  cabinetFix: PropTypes.func.isRequired,
};

export default Cabinet;
