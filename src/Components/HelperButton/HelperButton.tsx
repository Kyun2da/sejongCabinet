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
        <HelpOutlineIcon
          style={{
            fontSize: '3.0vw',
          }}
        />
      </Button>
    </Tooltip>
  );
}

const Button = styled(IconButton)({
  left: '1.5vw',
  position: 'absolute',
  width: 'auto',
  fontSize: '3.0vw',
  color: 'white',
});

function HelpTooltip() {
  return <div style={{ fontSize: '1vw' }}>도움말</div>;
}
