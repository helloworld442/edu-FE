import styled from "styled-components";

export default function TextAreaField({ label, error, ...rest }) {
  return (
    <StTextAreaField>
      <TextAreaFieldLabel>
        {label}
        <b>*</b>
      </TextAreaFieldLabel>
      <TextAreaFieldTextArea {...rest} />
      <TextAreaFieldError>{error}</TextAreaFieldError>
    </StTextAreaField>
  );
}

const StTextAreaField = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;

const TextAreaFieldLabel = styled.label`
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 300;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-size: 0.925rem;
    color: #b8b8b8;
  }

  b {
    font-size: 0.925rem;
    color: red;
  }
`;

const TextAreaFieldTextArea = styled.textarea`
  height: 350px;
  padding: 12px 16px;
  border-radius: 2px;
  border: 1px solid #d7e0e6;
  outline: none;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;
  resize: none;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;

const TextAreaFieldError = styled.h5`
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 300;
  color: red;
`;
