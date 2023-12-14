import { useLocation } from "react-router-dom";

export default function usePathname() {
  const { pathname } = useLocation();

  const getActive = (target) => {
    if (pathname === target) return "active";

    return "";
  };

  const getRoutes = () => {
    if (pathname.includes("category")) {
      return "홈  >  카테고리";
    }

    if (pathname.includes("posts")) {
      return "홈  >  카테고리  >  커뮤니티";
    }

    if (pathname.includes("write")) {
      return "홈  >  글 남기기";
    }
  };

  return [getActive, getRoutes];
}
