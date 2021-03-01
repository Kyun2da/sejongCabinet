import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Logo from '../../image/softwareLogo_origin.png';
import '../Fadeout.css';
import {
  LoginContainer,
  MainTitle,
  SubTitle,
  LoginButton,
  GoSignUpButton,
  LoginTextField,
  LoginForm,
  LogoImg,
  GoSignUpWrapper,
} from './styles';

const Login = (props) => {
  const { LoginSubmit, onIdHandler, onPasswordHanlder, toSignUp } = props;
  return (
    <TransitionGroup className="homeTransition">
      <LoginContainer>
        <LogoImg src={Logo} alt="logo" />
        <MainTitle>SEJONG UNIV</MainTitle>
        <SubTitle>소프트웨어학과 사물함</SubTitle>
        <LoginForm
          onSubmit={LoginSubmit}
          name="login"
          noValidate
          autoComplete="off"
        >
          <LoginTextField
            id="id"
            label="학번"
            variant="outlined"
            onChange={onIdHandler}
          />
          <LoginTextField
            id="password"
            label="비밀번호"
            type="password"
            variant="outlined"
            onChange={onPasswordHanlder}
          />
          <LoginButton type="submit" variant="contained" color="primary">
            로그인
          </LoginButton>
        </LoginForm>
        <GoSignUpWrapper>
          계정이 없으신가요?
          <GoSignUpButton onClick={toSignUp}>가입하기</GoSignUpButton>
        </GoSignUpWrapper>
      </LoginContainer>
    </TransitionGroup>
  );
};

Login.propTypes = {
  LoginSubmit: PropTypes.func.isRequired,
  onIdHandler: PropTypes.func.isRequired,
  onPasswordHanlder: PropTypes.func.isRequired,
  toSignUp: PropTypes.func.isRequired,
};
export default React.memo(Login);
