import PropTypes from "prop-types";

// const headingStyle = { color: "red", backgroundColor: "yellow" };

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>
          {/* style={headingStyle} */}
          {props.title}
        </h1>
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
