import { useEffect, useState } from "react";

export default function useHightLightText(value) {
  const [hightlightText, setHightlightText] = useState(value);

  const TAG_REGEX = /#(\w+)/g;
  const BOLD_REGEX = /\*\*(.*)\*\*/g;
  const ITALIC_REGEX = /\~\~(.*)\~\~/g;

  useEffect(() => {
    let text = value;

    text = text.replace(TAG_REGEX, '<span class = "hgtext-tag">#$1</span>');
    text = text.replace(
      BOLD_REGEX,
      '<span class = "hgtext-bold">**$1**</span>'
    );
    text = text.replace(
      ITALIC_REGEX,
      '<span class = "hgtext-italic">~~$1~~</span>'
    );

    setHightlightText(text);
  }, [value]);

  return hightlightText;
}
