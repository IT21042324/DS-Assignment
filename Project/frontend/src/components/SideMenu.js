import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SideMenu(props) {
  return (
    <div className="li">
      <Link
        to={props.to}
        style={{ textDecoration: "none", color: "gray", lineHeight: 2 }}
      >
        <FontAwesomeIcon icon={props.icon} />
        &nbsp;&nbsp;{props.label}
      </Link>
    </div>
  );
}

export default SideMenu;
