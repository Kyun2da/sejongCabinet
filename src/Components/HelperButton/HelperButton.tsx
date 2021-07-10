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
  width: 'auto',
  color: 'white',
});

const CustomHelpOutlineIcon = styled(HelpOutlineIcon)({
  fontSize: '6vh !important',
});

function HelpTooltip() {
  return <div style={{ fontSize: '0.9rem' }}>도움말</div>;
}
