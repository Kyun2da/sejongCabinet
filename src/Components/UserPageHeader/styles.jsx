import styled from 'styled-components';

export const UserPageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  width: 100%;
`;

export const BackwardsContainer = styled.div`
  left: 2vw;
  position: absolute;
`;

export const AdminTabContainer = styled.div`
  position: absolute;
  right: 5vw;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5vh 1vw;
  font-family: Noto Sans KR;
`;
