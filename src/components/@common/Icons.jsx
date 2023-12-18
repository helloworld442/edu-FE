import { useState } from "react";
import { ReactComponent as Tag } from "../../assets/hashtag-solid.svg";
import { ReactComponent as Bold } from "../../assets/bold-solid.svg";
import { ReactComponent as Italic } from "../../assets/italic-solid.svg";

export function TagIcon({ name, value, onChange }) {
  const [active, onClickIcon] = useHightLightInput({
    name,
    value,
    onChange,
    action: "TAG",
  });

  return <Tag className={active ? "active" : null} onClick={onClickIcon} />;
}

export function BoldIcon({ name, value, onChange }) {
  const [active, onClickIcon] = useHightLightInput({
    name,
    value,
    onChange,
    action: "BOLD",
  });

  return <Bold className={active ? "active" : null} onClick={onClickIcon} />;
}

export function ItalicIcon({ name, value, onChange }) {
  const [active, onClickIcon] = useHightLightInput({
    name,
    value,
    onChange,
    action: "ITALIC",
  });

  return <Italic className={active ? "active" : null} onClick={onClickIcon} />;
}

function useHightLightInput({ name, value, onChange, action }) {
  const [active, setActive] = useState(false);

  const onClickIcon = (e) => {
    e.target.name = name;

    switch (action) {
      case "BOLD":
        !active
          ? (e.target.value = "**" + value + "**")
          : (e.target.value = value.replaceAll("**", ""));
        break;
      case "ITALIC":
        !active
          ? (e.target.value = "~~" + value + "~~")
          : (e.target.value = value.replaceAll("~~", ""));
        break;
      case "TAG":
        !active
          ? (e.target.value = "#" + value)
          : (e.target.value = value.replaceAll("#", ""));
        break;
    }

    onChange(e);

    setActive(!active);
  };

  return [active, onClickIcon];
}
