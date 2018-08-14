import React from "react";
import PasswordInput from "cc-ss-components/PasswordInput";

/** All features enabled */
class ExampleAllFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        };
    }
    getQuality = () => {
        const length = this.state.password.length;
        return length > 10 ? 100 : length * 10;
    }
    render() {
        return (
            <div>
                <PasswordInput
                   htmlId="password-input-example-all-features"
                   name="password"
                   onChange={e => this.setState({password: e.target.value})}
                   value={this.state.password}
                   minLength={10}
                   placeholder="Enter password"
                   showVisibilityToggle
                   quality={this.getQuality()}
                   {...this.props} />
            </div>
        )
    }
}

export default ExampleAllFeatures;