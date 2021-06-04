import { styled, Tooltip } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import { useAppSelector, useServerSelector } from '../../redux/hooks';

export default function ServerStatusIcon() {
  const { status } = useAppSelector(useServerSelector);
  return status ? (
    <CustomTooltip
      title="서버가 닫혀있습니다. 사물함 예약이 불가능합니다."
      placement="bottom"
      arrow
    >
      <CustomClearTwoToneIcon color="secondary" />
    </CustomTooltip>
  ) : (
    <CustomTooltip
      title="서버가 열려있습니다. 사물함 예약이 가능합니다."
      placement="bottom"
      arrow
    >
      <CustomCheckCircleOutlineTwoToneIcon style={{ color: green[500] }} />
    </CustomTooltip>
  );
}

const CustomClearTwoToneIcon = styled(ClearTwoToneIcon)({
  fontSize: '6vh  !important',
  left: '80px',
  position: 'absolute',
});

const CustomCheckCircleOutlineTwoToneIcon = styled(
  CheckCircleOutlineTwoToneIcon,
)({
  fontSize: '6vh !important',
  left: '80px',
  position: 'absolute',
});

const CustomTooltip = styled(Tooltip)({
  fontSize: '2vh',
});
