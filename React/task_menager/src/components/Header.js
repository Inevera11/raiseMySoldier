import PropTypes from "prop-types";

// const headingStyle = { color: "red", backgroundColor: "yellow" };

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1>
          {/* style={headingStyle} */}
          {props.title}
        </h1>
        <button className="btn">Add</button>
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
