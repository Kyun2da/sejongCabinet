import { styled } from '@material-ui/core';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Container } from '@material-ui/core';
import { database } from '../../config/firebase.config';

export type CabinetProps = {
  children?: React.ReactNode;
};

const data = {
  currentCabinets: [
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
  ],
};

const cabinetNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const tabWidth = 100 / cabinetNames.length;

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
  return <CabinetTabs>{loadTabs()}</CabinetTabs>;
};

export default function Cabinet({}: CabinetProps) {
  return (
    <CabinetContainer>
      <TabsContainer>{showTabs()}</TabsContainer>
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
  width: '100%',
  backgroundColor: 'rgba(255,0,0,0.3)',
  height: '10vh',
});

const CabinetTabs = styled(Tabs)({
  height: '9vh',
  width: '100%',
});

const CabinetTab = styled(Tab)({
  fontSize: `2vw`,
  letterSpacing: '0.1px',
  borderRadius: '10px',
  fontFamily: 'Anton',
  width: `${tabWidth}%`,
});
