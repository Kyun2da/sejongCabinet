import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
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
import Cabinet from '../Cabinet';

const CabinetForm = (props) => {
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

  const [count, setCount] = useState([0, 0, 0]);
  const [toggle, setToggle] = useState(false);
  const classes = useStyles();

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

  const showCabinets = () => {
    return (
      <div style={{ flexGrow: 1 }}>
        {[...Array(height)].map((v, heightIndex) => {
          return (
            <Grid container spacing={1} key={heightIndex}>
              {[...Array(width)].map((v, widthIndex) => {
                return (
                  <Cabinet
                    heightIndex={heightIndex}
                    width={width}
                    widthIndex={widthIndex}
                    setSelect={setSelect}
                    toggle={toggle}
                    item={item}
                  />
                );
              })}
            </Grid>
          );
        })}
      </div>
    );
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
            <div className={classes.root}>{showCabinets()}</div>
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

CabinetForm.propTypes = {
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

export default CabinetForm;
