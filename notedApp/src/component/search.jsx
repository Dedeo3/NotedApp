import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });

    };

    onSubmit(event) {
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        this.props.searchData(this.state);
        console.log('search submitted:', this.state); 
    }

    render() {
        return (
            <form className="form-search" onSubmit={this.onSubmit}>
                <input
                    placeholder="Search a note title"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onInputChange}
                />
                <button className="btn-search" type="submit">Search</button>
            </form>
        );
    }


}