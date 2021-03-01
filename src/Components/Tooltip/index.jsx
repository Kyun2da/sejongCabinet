import { FormControlLabel, Switch, Tooltip } from '@material-ui/core';
import React from 'react';
import { CabinetTooltipWrapper, StatusValue, TooltipWrapper } from './styles';

const CabinetTooltip = (props) => {
  const { title, toggle, toggleChange, count } = props;
  return (
    <CabinetTooltipWrapper>
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
        <TooltipWrapper>
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
        </TooltipWrapper>
      </div>
    </CabinetTooltipWrapper>
  );
};

export default CabinetTooltip;
