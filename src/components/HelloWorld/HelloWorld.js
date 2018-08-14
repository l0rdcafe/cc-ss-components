import React from "react";
import PropTypes from "prop-types";

/** A cliche component that says Hello with a custom message. */
function HelloWorld({message}) {
    return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
    /** Displays message */
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: "World"
};

export default HelloWorld;