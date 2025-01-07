import React from "react";
import Search from "./search";

export default class NotedHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="header">
                <h1 className="title-app">NotedApp</h1>
                <Search searchData={this.props.searchData} />
            </div>
        );
    }
}