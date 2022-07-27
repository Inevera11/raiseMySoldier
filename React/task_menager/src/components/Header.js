import PropTypes from "prop-types";
import { Button } from "./Button";

// const headingStyle = { color: "red", backgroundColor: "yellow" };

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1>
          {/* style={headingStyle} */}
          {props.title}
        </h1>
        <Button text="Add" />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "TO DO",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
