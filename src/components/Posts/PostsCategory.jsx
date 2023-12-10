import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export default function PostsCategory() {
  const [categoryId, onToggleActive] = usePostsCategory();

  return (
    <PostsCategoryMenu>
      <PostsCategoryItem>
        <a
          href={"/posts/" + categoryId}
          className={onToggleActive(`/posts/${categoryId}`)}
        >
          전체
        </a>
      </PostsCategoryItem>
      <PostsCategoryItem>
        <a
          href={"/posts/best/" + categoryId}
          className={onToggleActive(`/posts/best/${categoryId}`)}
        >
          인기 글
        </a>
      </PostsCategoryItem>
      <PostsCategoryItem>
        <a
          href={"/posts/question/" + categoryId}
          className={onToggleActive(`/posts/question/${categoryId}`)}
        >
          Q & A
        </a>
      </PostsCategoryItem>
      <PostsCategoryItem>
        <a>나의 활동</a>
      </PostsCategoryItem>
    </PostsCategoryMenu>
  );
}

function usePostsCategory() {
  const { categoryId } = useParams();
  const { pathname } = useLocation();

  const onToggleActive = (target) => {
    if (pathname.includes(target)) return "active";

    return "";
  };

  return [categoryId, onToggleActive];
}

const PostsCategoryMenu = styled.ul`
  margin-top: 24px;
  border-bottom: 1px solid rgb(228, 235, 240);
`;

const PostsCategoryItem = styled.li`
  display: inline-block;
  width: 78px;
  height: 50px;
  margin: 0 6px;
  text-align: center;
  cursor: pointer;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: rgb(157, 167, 174);
  }

  .active {
    border-bottom: 5px solid rgb(102, 103, 171, 0.8);
    color: rgb(102, 103, 171, 0.8);
  }
`;
