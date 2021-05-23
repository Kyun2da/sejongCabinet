import React, { useCallback, useEffect } from 'react';
import { auth } from '../../config/firebase.config';
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, TextField } from '@material-ui/core';
import { styled } from '@material-ui/core';
import media from '../../lib/styles/media';
import getFirebaseErrorMessage from '../../utils/error/firebase';
import useUpadtePassword from '../../hooks/useUpdatePassword';
import customSwal from '../../utils/alert';

type PasswordChangeInputs = {
  currentPassword: string;
  changePassword: string;
  confirmPassword: string;
};

export type PasswordChangeProps = {};

export default function PasswordChangeForm({}: PasswordChangeProps) {
  const { handleSubmit, control, reset, formState, getValues } =
    useForm<PasswordChangeInputs>();

  const [updatePasswordWithNewPassword, loading, error] = useUpadtePassword();

  const user = auth.currentUser;

  const onSubmit = useCallback(async (data: PasswordChangeInputs) => {
    await updatePasswordWithNewPassword(
      user?.email,
      data.currentPassword,
      data.changePassword,
    );
  }, []);

  useEffect(() => {
    if (!error) return;
    customSwal(
      'error',
      '비밀번호 변경 에러입니다.',
      getFirebaseErrorMessage(error?.code),
    );
  }, [error]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      if (!error) {
        customSwal(
          'success',
          '비밀번호 변경 성공',
          '비밀번호가 성공적으로 변경되었습니다!',
        );
      }
      reset({ currentPassword: '', changePassword: '', confirmPassword: '' });
    }
  }, [formState, reset]);
  return (
    <PasswordForm
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      name="passwordChange"
      autoComplete="off"
    >
      <Controller
        name="currentPassword"
        control={control}
        defaultValue=""
        rules={{ required: true, minLength: 6 }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <PasswordChangeTextfield
            label="현재 비밀번호"
            variant="outlined"
            type="password"
            onChange={onChange}
            value={value}
            error={!!error}
            helperText={error ? '현재 비밀번호를 입력해주세요' : null}
          />
        )}
      />
      <Controller
        name="changePassword"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <PasswordChangeTextfield
            label="변경 비밀번호"
            variant="outlined"
            onChange={onChange}
            type="password"
            value={value}
            error={!!error}
            helperText={error ? '6글자 이상의 비밀번호를 입력해주세요' : null}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          minLength: 6,
          validate: (value) => value === getValues('changePassword'),
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <PasswordChangeTextfield
            label="비밀번호 확인"
            variant="outlined"
            type="password"
            onChange={onChange}
            value={value}
            error={!!error}
            helperText={error ? '비밀번호가 일치하지 않습니다.' : null}
          />
        )}
      />
      <PasswordChangeButton variant="contained" type="submit">
        변경하기
      </PasswordChangeButton>
    </PasswordForm>
  );
}

const PasswordForm = styled('form')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '3vh',
  width: '100%',

  [`${media.medium}`]: {
    marginTop: '0',
  },
});

const PasswordChangeTextfield = styled(TextField)({
  width: '25vw',
  margin: '1.5vh 0',
  minHeight: '6vh',

  [`${media.medium}`]: {
    width: '60vw',
    margin: '1vh 0',
    minHeight: '7vh',
  },
});

const PasswordChangeButton = styled(Button)({
  backgroundColor: 'rgb(63,81,181)',
  fontWeight: 'bold',
  color: 'white',
  width: '25vw',
  height: '6vh',
  borderRadius: '0.5vw',
  margin: '1vh 0',
  '&:hover': {
    backgroundColor: '#2036b1',
  },

  [`${media.medium}`]: {
    width: '60vw',
    borderRadius: '0.5rem',
  },
});
