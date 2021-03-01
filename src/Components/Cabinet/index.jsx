import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { Button, Grid, Tooltip } from '@material-ui/core';
import { Default } from '../../MediaQuery';
import {
  CabinetButton,
  CabinetButtonWrapper,
  Content,
  ContentWrapper,
  SelectedCabinet,
  useStyles,
} from './styles';
import CabinetTooltip from '../Tooltip';

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
        <CabinetTooltip
          title={title}
          toggle={toggle}
          toggleChange={toggleChange}
          count={count}
        />
        <ContentWrapper>
          <Content>
            <div className={classes.root}>{showGridRow()}</div>
          </Content>
          <SelectedCabinet>{select === -1 ? '-' : select}</SelectedCabinet>
        </ContentWrapper>
        <CabinetButtonWrapper>
          <CabinetButton
            style={{
              backgroundColor: select === -1 ? 'gray' : 'black',
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
          </CabinetButton>
        </CabinetButtonWrapper>
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
