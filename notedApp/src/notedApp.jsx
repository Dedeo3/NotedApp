import react from "react";
import { data } from "./util/dataDummy.js";
import NotedHeader from "./component/notedHeader.jsx";
import Input from "./component/notedInput.jsx";
import ListNote from "./component/listNote.jsx";
import ListNoteArchive from "./component/listNoteArchive.jsx";


export default class NotedApp extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data(),
            searchResult: null
        }
        console.log("type data", typeof this.state.data)
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onMoveHandler= this.onMoveHandler.bind(this)
        this.searchData= this.searchData.bind(this)
    }

    searchData(title) {
        this.setState((prevState) => {
            console.log("Current state data:", prevState.data);

            const foundData = prevState.data.filter((data) =>
                data.title === title['title']
            );
            console.log('akses object ', title['title'])
            console.log("title dicari:", title, "| tipe:", typeof title);
            console.log("title di data:", prevState.data.map((d) => `${d.title} | tipe: ${typeof d.title}`));

            console.log("Data yang ada:", prevState.data.map((d) => d.title));
            if(title['title'] === ''){
                return {searchResult:null}
            }
            
            if (foundData) {
                console.log("Data yang ditemukan:", foundData);
            } else {
                console.log("Data tidak ditemukan.", title,"dan data yg ada", data.title);

            }
            
            return {searchResult:foundData};
        });
    }
    

    onMoveHandler(id) {
        this.setState((prevData) => {
            const move = prevData.data.map((data) => {
                if (data.id === id) {
                    console.log("title yang dimove:", data.title)
                    return { ...data, archive: false };

                }
                return data
            })

            return {
                data: move
            }
        })
    }
    onAddHandler({ title, text }) {
        this.setState((prevState) => {
            console.log("prev data", prevState)
            return {
                data: [
                    ...prevState.data,
                    {
                        id: new Date(),
                        text: text,
                        title: title,
                        archive: false,
                        createAt: new Date(),
                    }
                ]
            }
        }, () => {
            console.log("data yang di add:", this.state.data)
        });
    }

    onDeleteHandler(id) {
        const newData = this.state.data.filter(data => data.id !== id);
        console.log("data yang di delete idnya", id)
        console.log('new data delete', newData)
        this.setState({
            data: newData
        })
    }

    onArchiveHandler(id) {
        this.setState((prevData) => {
            const archive = prevData.data.map((data) => {
                if (data.id === id) {
                    console.log("title yang diarchive:", data.title)
                    return { ...data, archive: true };

                }
                return data
            })

            return {
                data: archive
            }
        })
    }

    render() {
        console.log("Rendering NotedApp with state data:", this.state.data);
        const unArchiveData = this.state.searchResult
            ? this.state.searchResult.filter((data) => !data.archive)
            : this.state.data.filter((data) => !data.archive);
    
        const archiveData = this.state.searchResult
            ? this.state.searchResult.filter((data) => data.archive)
            : this.state.data.filter((data) => data.archive);
    
        return (
            <>
                <NotedHeader searchData={this.searchData} />
                <Input addData={this.onAddHandler} />
                <h3 className="title-list">List Note</h3>
                <ListNote
                    dataNoted={unArchiveData}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <h3 className="title-list-archive">Archive Note</h3>
                <ListNoteArchive
                    dataNoted={archiveData}
                    onDelete={this.onDeleteHandler}
                    onMove={this.onMoveHandler}
                />
            </>
        );
    }
    
}