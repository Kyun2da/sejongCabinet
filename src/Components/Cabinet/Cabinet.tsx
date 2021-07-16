import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Container } from '@material-ui/core';
import { database } from '../../config/firebase.config';
import media from '../../lib/styles/media';
import CabinetContents from '../CabinetContents';
import { useCabinetSelector, useAppSelector } from '../../redux/hooks';
import type {
  CabinetTabType,
  CabinetItemType,
} from '../../redux/cabinet/cabinetSlice';

export type CabinetProps = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Cabinet({ index, setIndex }: CabinetProps) {
  const { cabinet } = useAppSelector(useCabinetSelector);

  const handleChangeIndex = (value: number) => {
    setIndex(value);
  };

  const handleChange = (e: object, newValue: number) => {
    setIndex(newValue);
  };

  const LoadContents = () => {
    if (cabinet)
      return cabinet
        .map((v: CabinetTabType, i: number) => {
          return (
            <CabinetContents key={v.title + 'Contents'} data={v} index={i} />
          );
        })
        .filter((v: object) => v);
  };

  const showContents = () => {
    return (
      <CabinetSwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        animateHeight
      >
        {LoadContents()}
      </CabinetSwipeableViews>
    );
  };

  const loadTabs = () => {
    if (cabinet)
      return cabinet
        .map((v: CabinetTabType) => {
          return <CabinetTab key={v.title + 'Tab'} label={v.title} wrapped />;
        })
        .filter((v: object) => v);
  };

  const showTabs = () => {
    return (
      <CabinetTabs
        value={index}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
      >
        {loadTabs()}
      </CabinetTabs>
    );
  };

  return (
    <CabinetContainer>
      <TabsContainer>
        {showTabs()}
        {showContents()}
      </TabsContainer>
    </CabinetContainer>
  );
}

const CabinetContainer = styled('div')({
  marginTop: '12vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
});

const TabsContainer = styled('div')({
  width: '90%',

  [`${media.medium}`]: {
    width: '100%',
  },
});

const CabinetTabs = styled(Tabs)({
  height: 'auto',
  width: '100%',
});

const CabinetSwipeableViews = styled(SwipeableViews)({
  marginTop: '3.5vh',
  border: '0.5vh solid lightgray',
  borderRadius: '2vw',
  padding: '2vh 0 3vh',
  overflow: 'hidden',
  marginBottom: '2vh',
  minHeight: '70%',

  [`${media.medium}`]: {
    border: 'none',
    marginTop: '0',
    padding: '2vh 0',
    minHeight: 'auto',
  },
});

const CabinetTab = styled(Tab)({
  fontSize: `2vw`,
  letterSpacing: '0.1px',
  borderRadius: '10px',
  fontFamily: 'Anton,Noto Sans KR',
  minWidth: '20%',
  maxWidth: '100%',
  padding: '1.5vh 2vw',

  [`${media.medium}`]: {
    minWidth: '25%',
    fontSize: '1.2rem',
    padding: '0 3vw',
  },

  [`${media.fold}`]: {
    fontSize: '0.7rem',
  },
});
