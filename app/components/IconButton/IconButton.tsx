import Icon from "../Icon/Icon";
import "./IconButton.css";

export default function Button() {
  return (
    <button className="icon-button">
      <Icon id="add" size={32} />
    </button>
  );
}
