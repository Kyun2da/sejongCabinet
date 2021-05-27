import React, { useEffect, useState } from 'react';
import {
  styled,
  Button,
  Container,
  Grid,
  Tooltip,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core';
import AppLayout from '../AppLayout';

export type CabinetData = {
  data: {
    width: number;
    height: number;
    title: string;
  };
};

export default function CabinetButtons({
  data: { title, width, height },
}: CabinetData) {
  const [descriptionMode, setDescriptionMode] = useState('number');

  const handleDescriptionMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescriptionMode(event.target.value);
    console.log(descriptionMode);
  };

  const showGridRow = () => {
    return <div style={{ flexGrow: 1 }}>{showGridColumn()}</div>;
  };

  const showGridColumn = () => {
    return [...Array(height)].map((v, i) => (
      <Grid container spacing={1} key={i}>
        {loadGridRow(i)}
      </Grid>
    ));
  };

  const loadGridRow = (i: number) => {
    return [...Array(width)].map((v, index) => {
      const arrIdx = i * width + index + 1;
      return (
        <Grid item xs={1} key={arrIdx}>
          <AvailableButton onClick={(e) => console.log(arrIdx)}>
            {arrIdx}
          </AvailableButton>
        </Grid>
      );
    });
  };

  return (
    <Container>
      <CabinetButtonsContainer>
        <CabinetTitle>{title}</CabinetTitle>
        <CabinetInfoContainer>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                label="사물함 번호"
                labelPlacement="bottom"
                control={
                  <Radio
                    checked={descriptionMode === 'number'}
                    onChange={handleDescriptionMode}
                    value="number"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'number' }}
                  />
                }
              />
              <FormControlLabel
                label="이름으로 보기"
                labelPlacement="bottom"
                control={
                  <Radio
                    checked={descriptionMode === 'name'}
                    onChange={handleDescriptionMode}
                    value="name"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'name' }}
                  />
                }
              />
              <FormControlLabel
                label="학번으로 보기"
                labelPlacement="bottom"
                control={
                  <Radio
                    checked={descriptionMode === 'studentID'}
                    onChange={handleDescriptionMode}
                    value="studentID"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'studentID' }}
                  />
                }
              />
            </RadioGroup>
          </FormControl>
          <CabinetStatusContainer>
            <CabinetStatusTooltip
              title={<TooltipTitle>신청 가능</TooltipTitle>}
              placement="left"
              arrow
            >
              <CabinetStatusValue>✅ : {width * height}</CabinetStatusValue>
            </CabinetStatusTooltip>
            <CabinetStatusTooltip
              title={<TooltipTitle>신청 불가</TooltipTitle>}
              placement="left"
              arrow
            >
              <CabinetStatusValue>❌ : {0}</CabinetStatusValue>
            </CabinetStatusTooltip>
            <CabinetStatusTooltip
              title={<TooltipTitle>신청 고장</TooltipTitle>}
              placement="left"
              arrow
            >
              <CabinetStatusValue>🚧 : {0}</CabinetStatusValue>
            </CabinetStatusTooltip>
          </CabinetStatusContainer>
        </CabinetInfoContainer>
      </CabinetButtonsContainer>
      {showGridRow()}
    </Container>
  );
}

const CabinetButtonsContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Anton',
  fontSize: '3vw',
});

const CabinetTitle = styled(Container)({
  marginTop: '1vh',
});

const CabinetInfoContainer = styled(Container)({
  fontSize: '1rem',
  marginRIght: '2vw',
});

const CabinetStatusContainer = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  textAlign: 'left',
});

const TooltipTitle = styled('div')({
  fontSize: '0.8rem',
});

const CabinetStatusValue = styled('div')({
  margin: '0 1w',
  width: '3.2vw',
});

const CabinetStatusTooltip = styled(Tooltip)({
  fontSize: '1rem',
});

const AvailableButton = styled(Button)({
  border: '3px solid #00d145',
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
});
