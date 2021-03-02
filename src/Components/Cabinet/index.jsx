import { Button, Grid, Tooltip } from '@material-ui/core';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from '../CabinetForm/styles';

const Cabinet = (props) => {
  const { heightIndex, widthIndex, setSelect, toggle, item, width } = props;
  const currentUserID = useSelector((state) => state.auth.currentUserID);
  const adminType = useSelector((state) => state.auth.adminType);

  const arrIdx = heightIndex * width + widthIndex + 1;
  const classes = useStyles();
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
  } else if (item[arrIdx] === 2) {
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
  } else if (item[arrIdx] === currentUserID) {
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
  } else {
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
  }
};

export default Cabinet;
