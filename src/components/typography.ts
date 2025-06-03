import styled from "styled-components";

export const CenterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
`;

export const StyledMainText = styled.div`
  color: white;
  font-size: 48px;
  font-family: Georgia, serif;
  white-space: pre-line;
  line-height: 32px;
`;

export const StyledSubText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 300;
  font-family: sans-serif;
  white-space: pre-line;
  line-height: 16px;
`;
