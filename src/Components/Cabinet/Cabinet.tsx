import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Container } from '@material-ui/core';
import { database } from '../../config/firebase.config';
import media from '../../lib/styles/media';
import CabinetButtons from '../CabinetButtons';

export type CabinetProps = {};

const data = {
  currentCabinets: [
    {
      width: 10,
      height: 10,
      title: 'CAB-A',
      item: {
        1: {
          status: 1,
          uuid: 'dasndalsndlaksd',
          studentId: '15011145',
          name: '허균',
        },
        2: {
          status: 1,
          uuid: 'dasndalsndlaksd',
          studentId: '15011145',
          name: '허균',
        },
        3: {
          status: 1,
          uuid: 'dasndalsndlaksd',
          studentId: '15011145',
          name: '허균',
        },
        4: {
          status: 1,
          uuid: 'dasndalsndlaksd',
          studentId: '15011145',
          name: '허균',
        },
        5: {
          status: 1,
          uuid: 'dasndalsndlaksd',
          studentId: '15011145',
          name: '허균',
        },
      },
    },
    { width: 10, height: 10, title: 'CAB-B' },
    { width: 3, height: 3, title: 'CAB-C' },
    { width: 6, height: 6, title: 'CAB-D' },
    { width: 10, height: 6, title: 'CAB-E' },
    { width: 12, height: 6, title: 'CAB-F' },
    { width: 6, height: 6, title: 'CAB-G' },
    { width: 10, height: 10, title: 'CAB-H' },
    { width: 10, height: 10, title: 'CAB-I' },
    { width: 10, height: 10, title: 'CAB-J' },
    { width: 10, height: 10, title: 'CAB-K' },
    { width: 10, height: 10, title: 'CAB-L' },
    { width: 10, height: 10, title: 'CAB-A' },
    { width: 10, height: 10, title: 'CAB-B' },
    { width: 10, height: 10, title: 'CAB-C' },
    { width: 10, height: 10, title: 'CAB-D' },
    { width: 10, height: 10, title: 'CAB-E' },
    { width: 10, height: 10, title: 'CAB-F' },
    { width: 10, height: 10, title: 'CAB-G' },
    { width: 10, height: 10, title: 'CAB-H' },
    { width: 10, height: 10, title: 'CAB-I' },
    { width: 10, height: 10, title: 'CAB-J' },
    { width: 10, height: 10, title: 'CAB-K' },
    { width: 10, height: 10, title: 'CAB-L' },
    { width: 10, height: 10, title: 'CAB-M' },
  ],
};

const cabinetNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const tabWidth = 100 / cabinetNames.length;

export default function Cabinet({}: CabinetProps) {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (value: number) => {
    setIndex(value);
  };

  const handleChange = (e: any, newValue: number) => {
    setIndex(newValue);
  };

  const LoadContents = () => {
    return cabinetNames.map((i, v) => {
      return <CabinetButtons key={v} data={data.currentCabinets[v]} />;
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
    return cabinetNames.map((i) => {
      return (
        <CabinetTab
          key={data.currentCabinets[i].title}
          label={data.currentCabinets[i].title}
        />
      );
    });
  };

  const showTabs = () => {
    return <CabinetTabs onChange={handleChange}>{loadTabs()}</CabinetTabs>;
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
  height: '80vh',
  width: '100vw',
  backgroundColor: 'gray',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'visible',
});

const TabsContainer = styled('div')({
  width: '80%',
  backgroundColor: 'rgba(255,0,0,0.3)',
  height: '9vh',

  [`${media.medium}`]: {
    width: '100%',
  },
});

const CabinetTabs = styled(Tabs)({
  height: 'auto',
  width: '100%',
});

const CabinetTab = styled(Tab)({
  fontSize: `2vw`,
  letterSpacing: '0.1px',
  borderRadius: '10px',
  fontFamily: 'Anton',
  minWidth: `${tabWidth}%`,

  [`${media.medium}`]: {
    maxWidth: `${tabWidth}%`,
    fontSize: `${tabWidth / 20}vw`,
  },
});

const CabinetSwipeableViews = styled(SwipeableViews)({
  marginTop: '5vh',
  border: '0.5vh solid lightgray',
  borderRadius: '2vw',
  width: '100%',
});
