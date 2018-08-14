import React from "react";
import TextInputBEM from "cc-ss-components/TextInputBEM";

/** Required TextInputBEM with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputBEM
            htmlId="example-required"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required." />
        )
    }
}