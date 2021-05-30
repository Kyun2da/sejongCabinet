import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import { CabinetTabType } from '../../redux/cabinet/cabinetSlice';
import changeFirebaseCabinetTab from '../../utils/firebase/changeFirebaseCabinetTab';

type CabinetManageItemProps = {
  item: CabinetTabType;
  index: number;
};

export default function CabinetManageItem({
  item,
  index,
}: CabinetManageItemProps) {
  const [title, setTitle] = useState(item.title);
  const [width, setWidth] = useState(item.width);
  const [height, setHeight] = useState(item.height);
  const handleSubmit = () => {
    const isDifferent = width !== item.width || height !== item.height;
    console.log(isDifferent);
    changeFirebaseCabinetTab(index, title, width, height, isDifferent);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <Typography>{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          label="제목"
          defaultValue={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          helperText="변경하고자 하는 제목을 입력해주세요."
          variant="outlined"
        />
        <TextField
          label="가로"
          defaultValue={width}
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setWidth(parseInt(e.target.value));
          }}
          helperText="변경하고자 하는 가로를 입력해주세요."
          variant="outlined"
        />
        <TextField
          label="세로"
          defaultValue={height}
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setHeight(parseInt(e.target.value));
          }}
          helperText="변경하고자 하는 세로를 입력해주세요."
          variant="outlined"
        />
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button size="small" style={{ color: 'red' }}>
          해당 탭의 사물함 초기화하기
        </Button>
        <Button size="small" style={{ color: 'red' }}>
          삭제하기
        </Button>
        <Button size="small" color="primary" onClick={handleSubmit}>
          저장하기
        </Button>
      </AccordionActions>
    </Accordion>
  );
}
