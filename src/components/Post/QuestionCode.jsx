import styled from "styled-components";
import "highlight.js/styles/atom-one-light.min.css";
import useHightlightCode from "../../hooks/useHightLightCode";

export default function QuestionCode({ post }) {
  const hightlightedCode = useHightlightCode(post.code);

  return (
    <QuestionPostCode>
      <ul className="code-number">
        {post.code.split("\n")?.map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
      <pre className="code-core javascript">
        <code dangerouslySetInnerHTML={{ __html: hightlightedCode }} />
      </pre>
    </QuestionPostCode>
  );
}

const QuestionPostCode = styled.div`
  position: relative;
  right: 0;
  width: 100%;
  min-height: 300px;
  margin-bottom: 24px;
  border: none;
  outline: none;
  background: rgb(247, 246, 243);
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: #eee;
  z-index: 1;
  display: flex;
  justify-content: flex-start;

  .code-number {
    width: 5%;
    padding: 14px 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.15rem;
    font-weight: 400;
    font-family: monospace;
    color: #888;
    background: rgb(247, 246, 243);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    white-space: pre-wrap;
    overflow-y: hidden;
    line-height: 1.5rem;
  }

  .code-core {
    width: 95%;
    padding: 14px 12px;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    font-family: monospace;
    color: #333;
    caret-color: #333;
    white-space: pre-wrap;
    overflow-y: hidden;
    line-height: 1.5rem;
  }
`;
