import { styled, Tooltip } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import { useAppSelector, useServerSelector } from '../../redux/hooks';

export default function ServerStatusIcon() {
  const { status } = useAppSelector(useServerSelector);
  return status ? (
    <Tooltip title={<ClosedTooltip />} placement="bottom" arrow>
      <CustomClearTwoToneIcon color="secondary" />
    </Tooltip>
  ) : (
    <Tooltip title={<OpenedTooltip />} placement="bottom" arrow>
      <CustomCheckCircleOutlineTwoToneIcon style={{ color: green[500] }} />
    </Tooltip>
  );
}

const CustomClearTwoToneIcon = styled(ClearTwoToneIcon)({
  fontSize: '6vh  !important',
  verticalAlign: 'middle',
});

const CustomCheckCircleOutlineTwoToneIcon = styled(
  CheckCircleOutlineTwoToneIcon,
)({
  fontSize: '6vh !important',
  verticalAlign: 'middle',
});

function ClosedTooltip() {
  return (
    <div style={{ fontSize: '0.8rem' }}>
      서버가 닫혀있습니다. 사물함 예약이 불가능합니다.
    </div>
  );
}

function OpenedTooltip() {
  return (
    <div style={{ fontSize: '0.8rem' }}>
      서버가 열려있습니다. 사물함 예약이 가능합니다.
    </div>
  );
}
