import react from "react";
import {data, dataArchieve} from "./util/dataDummy.js";
import {notedHeader} from "./component/notedHeader.jsx";


export class notedApp extends react.Component {
    constructor(props) {
        super(props);
        this.state= {
            data: data(),
            dataArchieve:dataArchieve()
        }
    }

    render() {
        return (
            <div>
                <notedHeader/>
                <h1>jadfjafd</h1>
            </div>
        )
    }
}