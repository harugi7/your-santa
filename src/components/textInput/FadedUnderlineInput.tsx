import styled from 'styled-components';

interface FadedUnderlineInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FadedUnderlineInput({
  placeholder = '내용을 입력하세요',
  value,
  onChange,
}: FadedUnderlineInputProps) {
  return (
    <Wrapper>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default FadedUnderlineInput;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
    
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    pointer-events: none;
  }
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 8px 12px;
    font-size: 19px;
    font-weight: lighter;
    background-color: transparent;
    border: none;
    color: white;
    text-align: center;

    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
        outline: none;
    }
`;
