import react from "react";
import {data}  from "./util/dataDummy.js";
import NotedHeader from "./component/notedHeader.jsx";
import Input from "./component/notedInput.jsx";
import ListNote from "./component/listNote.jsx";


export default class NotedApp extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data()
        }
        console.log("type data", typeof this.state.data)
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onDeleteHandler= this.onDeleteHandler.bind(this);
    }
    onAddHandler({ title, text }) {
        this.setState((prevState) => {
            console.log("prev data", prevState)
            return {
                data: [
                    ...prevState.data,
                    {
                        id: new Date(),
                        text:text,
                        title: title,
                        archived: false,
                        createAt: new Date(),
                    }
                ]
            }
        },()=>{
            console.log("data yang di add:",this.state.data)
        })
       ;
        
    }

    onDeleteHandler(id) {
        const newData= this.state.data.filter(data => data.id !== id);
        this.setState({
            data: newData
        })
    }

    render() {
        console.log("Rendering NotedApp with state data:", this.state.data);
        
        return (
            <>
                <NotedHeader />
                <Input addData={this.onAddHandler}/>
                <h3 className="title-list">List Note</h3>
                <ListNote dataNoted={this.state.data} onDelete={this.onAddHandler} />
            </>
        )
    }
}