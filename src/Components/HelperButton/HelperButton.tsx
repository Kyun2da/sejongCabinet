import { IconButton, styled, Tooltip } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import React from 'react';

export type HelperButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function HelperButton({ onClick }: HelperButtonProps) {
  return (
    <Tooltip title={<HelpTooltip />} placement="bottom" arrow>
      <Button aria-label="delete" onClick={onClick}>
        <CustomHelpOutlineIcon />
      </Button>
    </Tooltip>
  );
}

const Button = styled(IconButton)({
  left: '0px',
  position: 'absolute',
  width: 'auto',
  color: 'white',
});

const CustomHelpOutlineIcon = styled(HelpOutlineIcon)({
  fontSize: '6vh',
});

function HelpTooltip() {
  return <div style={{ fontSize: '2vh' }}>도움말</div>;
}
