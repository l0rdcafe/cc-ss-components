import React from "react";
import TextInputCSSModules from "cc-ss-components/TextInputCSSModules";

/** Required TextInputCSSModules with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputCSSModules
              htmlId="example-required"
              label="First Name"
              name="firstname"
              onChange={() => {}}
              error="First name is required."
              required />
        )
    }
}