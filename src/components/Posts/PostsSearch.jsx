import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass-solid.svg";
import { device } from "../../utils/media";

export default function PostsSearch() {
  return (
    <PostSearchForm>
      <PostSearchButton />
      <PostSearchInput placeholder="제목을 입력해주세요" />
    </PostSearchForm>
  );
}

const PostSearchForm = styled.form`
  width: 100%;
  height: 62px;
  padding: 0 18px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #d7e0e6;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PostSearchButton = styled(SearchIcon)`
  width: 1.15rem;
  height: 1.15rem;
  fill: rgb(102, 103, 171, 0.8);
`;

const PostSearchInput = styled.input`
  width: 650px;
  border: none;
  outline: none;
  font-size: 0.975rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;

  &::placeholder {
    color: rgb(157, 167, 174);
  }

  @media ${device.mobile} {
    width: 200px;
  }
`;
