import styled, { keyframes } from 'styled-components';
import {useNavigate} from "react-router-dom";

function StartBtn(){
  const navigate = useNavigate();

  function handleBtn() {
    navigate("/warn");
  }

  return (
    <Button>
      <TextWrapper>
        <SlidingText onClick={handleBtn}>기적 일으키러 가기</SlidingText>
      </TextWrapper>
    </Button>
  );
};

export default StartBtn;

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 48px;
  background-color: #ffffff20;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
`;

const SlidingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marquee} 5s linear infinite;
`;

const TextWrapper = styled.div`
  top: 0;           
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
