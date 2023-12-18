import styled from "styled-components";

export default function InputField({ label, ...rest }) {
  return (
    <StInputField>
      <InputFieldLabel>
        {label}
        <b>*</b>
      </InputFieldLabel>
      <InputFieldInput {...rest} />
    </StInputField>
  );
}

const StInputField = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;

const InputFieldLabel = styled.label`
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 300;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.925rem;
    color: red;
  }
`;

const InputFieldInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 18px;
  border-radius: 2px;
  border: 1px solid #d7e0e6;
  box-sizing: border-box;
  outline: none;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 60px;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;
