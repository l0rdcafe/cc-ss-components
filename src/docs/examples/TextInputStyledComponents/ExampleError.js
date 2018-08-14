import React from "react";
import TextInputStyledComponents from "cc-ss-components/TextInputStyledComponents";

/** Required TextInput with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputStyledComponents
              htmlId="example-required"
              required
              label="First Name"
              name="firstname"
              onChange={() => {}}
              error="First name is required." />
        )
    }
}