import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Container } from '@material-ui/core';
import { database } from '../../config/firebase.config';
import media from '../../lib/styles/media';
import CabinetButtons from '../CabinetButtons';

export type CabinetProps = { userData: any };

interface CabinetItem {
  [key: string]: any;
}

export default function Cabinet({ userData }: CabinetProps) {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (value: number) => {
    setIndex(value);
  };

  const handleChange = (e: any, newValue: number) => {
    setIndex(newValue);
  };

  const LoadContents = () => {
    return userData.currentCabinets.map((v: any, i: any) => {
      return <CabinetButtons key={i} data={v} />;
    });
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
    return userData.currentCabinets.map((v: any) => {
      return <CabinetTab key={v.title} label={v.title} wrapped />;
    });
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
  padding: '2vh 0 2vh',
  overflow: 'hidden',

  [`${media.medium}`]: {
    border: 'none',
    marginTop: '0',
  },
});

const CabinetTab = styled(Tab)({
  fontSize: `2vw`,
  letterSpacing: '0.1px',
  borderRadius: '10px',
  fontFamily: 'Anton',
  minWidth: '20%',
  maxWidth: '100%',
  padding: '2vh 0',

  [`${media.medium}`]: {
    minWidth: '25%',
    fontSize: '1.2rem',
  },
});
