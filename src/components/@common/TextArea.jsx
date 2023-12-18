import styled from "styled-components";
import useHightLightText from "../../hooks/useHightLightText";
import { BoldIcon, ItalicIcon, TagIcon } from "./Icons";

export default function TextArea({ name, value, onChange, width, height }) {
  const hightlightText = useHightLightText(value);

  return (
    <StTextArea width={width} height={height}>
      <TextAreaToggle>
        <BoldIcon name={name} value={value} onChange={onChange} />

        <ItalicIcon name={name} value={value} onChange={onChange} />

        <TagIcon name={name} value={value} onChange={onChange} />
      </TextAreaToggle>
      <TextAreaContent>
        <ContentPreView dangerouslySetInnerHTML={{ __html: hightlightText }} />
        <ContentTextArea
          name={name}
          value={value}
          onChange={onChange}
          spellCheck="false"
        />
      </TextAreaContent>
    </StTextArea>
  );
}

const StTextArea = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d7e0e6;
`;

const TextAreaToggle = styled.div`
  width: 100%;
  padding: 12px 14px;
  box-sizing: border-box;
  background: rgb(252, 252, 253);
  border-bottom: 1px solid #d7e0e6;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    fill: #b0bec4;
  }

  .active {
    fill: rgb(102, 103, 171, 0.8);
  }
`;

const TextAreaContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  textarea,
  pre {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ContentTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  box-sizing: border-box;
  border: none;
  outline: none;
  resize: none;
  z-index: 1;
  color: transparent;
  background: transparent;
  caret-color: #333;
  font-size: 0.95rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
`;

const ContentPreView = styled.pre`
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  box-sizing: border-box;
  border: none;
  outline: none;
  z-index: 0;
  color: #333;
  font-size: 0.95rem;
  font-weight: 400;
  font-family: "Noto Sans KR";

  .hgtext-tag {
    font-weight: 550;
    color: rgb(102, 103, 171, 0.8);
  }

  .hgtext-bold {
    font-weight: 650;
  }

  .hgtext-italic {
    font-style: italic;
  }
`;
