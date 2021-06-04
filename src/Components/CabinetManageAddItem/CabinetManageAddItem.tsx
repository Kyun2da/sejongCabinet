import { Button, styled, TextField } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import addFirebaseCabinetTab from '../../utils/firebase/addFirebaseCabinetTab';

type CabinetManageAddItemProps = {};

export type AddCabinetInput = {
  title: string;
  width: string;
  height: string;
};

export default function CabinetManageAddItem({}: CabinetManageAddItemProps) {
  const { handleSubmit, control, reset, formState } =
    useForm<AddCabinetInput>();
  const onSubmit = useCallback((data: AddCabinetInput) => {
    const { title, width, height } = data;
    addFirebaseCabinetTab(title, parseInt(width), parseInt(height));
  }, []);
  return (
    <AddCabinetForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CabinetAddTextField
            label="제목"
            variant="outlined"
            onChange={onChange}
            value={value}
            error={!!error}
            helperText="추가하고자 하는 제목을 입력해주세요."
          />
        )}
      />
      <Controller
        name="width"
        control={control}
        defaultValue=""
        rules={{ required: true, max: 10 }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CabinetAddTextField
            label="가로 길이"
            variant="outlined"
            type="number"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={
              error
                ? '10 이내의 가로 길이를 입력해주세요.'
                : '추가하고자 하는 가로 길이를 입력해주세요.'
            }
          />
        )}
      />
      <Controller
        name="height"
        control={control}
        defaultValue=""
        rules={{ required: true, max: 10 }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CabinetAddTextField
            label="세로 길이"
            variant="outlined"
            type="number"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={
              error
                ? '10 이내의 세로 길이를 입력해주세요.'
                : '추가하고자 하는 세로 길이를 입력해주세요.'
            }
          />
        )}
      />
      <CabinetMakeButton type="submit" variant="contained">
        새 사물함 탭 만들기
      </CabinetMakeButton>
    </AddCabinetForm>
  );
}

const AddCabinetForm = styled('form')({
  display: 'flex',
  justifyContent: 'space-evenly',
});

const CabinetAddTextField = styled(TextField)({
  margin: '0 12px 0 0',
});

const CabinetMakeButton = styled(Button)({
  height: '56px',
});
