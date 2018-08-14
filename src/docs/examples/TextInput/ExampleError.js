import React from "react";
import TextInput from "cc-ss-components/TextInput";

/** Required TextInput with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInput
              htmlId="example-required"
              required label="First Name"
               name="firstname"
               onChange={() => {}}
               error="First name is required." />
        )
    }
}