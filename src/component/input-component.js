import React , { Component } from 'react';

class InputComponent extends Component {
    render() {
        return (<div>
            <label className="content-label-style">{this.props.label}<font color="red">*</font>
                </label>
                <input type={this.props.type} placeholder={this.props.label} name={this.props.name} onChange={this.props.callback} required />
        </div>);
    }
}

export default InputComponent;