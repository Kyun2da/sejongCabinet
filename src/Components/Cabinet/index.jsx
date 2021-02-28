import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Tooltip,
} from '@material-ui/core';
import { Default } from '../../MediaQuery';
import { Content, StatusValue, useStyles } from './styles';

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

  const showGridColumn = () => {
    return [...Array(height)].map((v, i) => (
      <Grid container spacing={1} key={i}>
        {loadGridRow(i)}
      </Grid>
    ));
  };

  const showGridRow = () => {
    return <div style={{ flexGrow: 1 }}>{showGridColumn()}</div>;
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
