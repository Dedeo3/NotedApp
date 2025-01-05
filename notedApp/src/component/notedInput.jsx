import React from "react";
import {notedButton} from "./notedButton.jsx";

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    onSubmit(event) {
        event.preventDefault();
        this.props.addData(this.state)
        console.log('Form submitted:', this.state); // Debugging atau log data
    }


    getClassName(type) {
        switch (type) {
            case 'inputJudul':
                return 'inputJudul';
            case 'inputContent':
                return 'inputContent';
            default:
                return '';
        }
    }

    render() {
        return (
            <form className="formAdd" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    className={this.getClassName('inputJudul')}
                    placeholder="Enter a title"
                    value={this.state.title}
                    onChange={this.onInputChange}
                />
                <input
                    type="text"
                    name="text"
                    className={this.getClassName('inputContent')}
                    placeholder="Enter a content"
                    value={this.state.text}
                    onChange={this.onInputChange}
                />
                <noteButton typeButton="Add" action="Add"/>
            </form>
        );
    }
}
