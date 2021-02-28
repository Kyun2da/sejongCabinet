import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12vh;
  height: 80%;
  width: 100%;
`;

export const TabCabinetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &::-webkit-scrollbar: {
    display: none;
  }
`;
