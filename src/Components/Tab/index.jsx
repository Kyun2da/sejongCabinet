import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Tabstyle } from './styles';

const CabinetTab = (props) => {
  const { index, handleChange, cabinetNames } = props;
  const data = useSelector((state) => state.cabinet.currentCabinets);
  return (
    <Tabs
      value={index}
      fullwidth="true"
      onChange={handleChange}
      style={Tabstyle.tabs}
      textColor="inherit"
      indicatorColor="primary"
      centered
    >
      {cabinetNames.map((i) => {
        return (
          <Tab
            key={data.currentCabinets[i].title}
            label={data.currentCabinets[i].title}
            style={Tabstyle.tab_pc}
          />
        );
      })}
    </Tabs>
  );
};

export default CabinetTab;
