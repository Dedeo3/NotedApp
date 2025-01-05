import React from "react";
import NotedButton from "./notedButton.jsx";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            errorMessage: "",
            archived: false,
            createAt: new Date(),
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onInputChange = (event) => {
        const { name, value } = event.target;
        const charCount = this.countCharacters(value);

        if (name === "title" && charCount > 50) {
            this.setState({
                errorMessage: "Max character for title is 50",
            });
        } else {
            this.setState({
                [name]: value,
                errorMessage: "", // Reset pesan error jika valid
            });
        }
    };



    onSubmit(event) {
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        this.props.addData(this.state);
        console.log('Form submitted:', this.state); 
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
    countCharacters(word) {
        let count = 0;
        for (let char of word) {
            count++;
        }
        return count;
    }


    render() {

        return (
            <form className="formAdd" onSubmit={this.onSubmit}>
                <h3 className='titleAdd'>Create a notes</h3>
                {this.state.errorMessage && (
                    <p className="wordLimit">{this.state.errorMessage}</p>
                )}
                <p className="countWord">your character on title {this.countCharacters(this.state.title)} / 50
                </p>
                <input
                    type="text"
                    name="title"
                    className={this.getClassName('inputJudul')}
                    placeholder="Enter a title"
                    value={this.state.title}
                    onChange={this.onInputChange}
                />
                <textarea
                    type="text"
                    name="text"
                    className={this.getClassName('inputContent')}
                    placeholder="Enter a content"
                    value={this.state.text}
                    onChange={this.onInputChange}
                />
                <NotedButton typeButton="add" action="add" />
            </form>
        );
    }
}
