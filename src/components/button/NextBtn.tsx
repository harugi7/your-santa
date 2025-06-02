import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

function NextBtn(props: Props) {
  return <StyledNextBtn onClick={props.onClick}>NEXT</StyledNextBtn>;
}
export default NextBtn;

const StyledNextBtn = styled.button`
  position: relative;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  transition: 0.4s;
  padding: 0.75em 1.5em;
  font-size: 1rem;
  overflow: hidden;
  margin-top: 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ffffff;
    opacity: 0;
    transform: scaleX(0);
    transition: 0.4s ease-in-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &:hover {
    letter-spacing: 5px;
    color: #ffffff;
    background: transparent;

    &::before,
    &::after {
      opacity: 1;
      transform: scaleX(1.2);
    }
  }
`;
