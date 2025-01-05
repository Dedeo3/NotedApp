import React from "react";
import HeaderListNote from "./headerNoteList";
import NotedButton from "./notedButton";

export default function ListNoteContainer({ title, createAt, text, onDelete, id }) {
    return (
        <div className="list-container">
            <HeaderListNote title={title} createAt={createAt.toLocaleString()} />
            <p className="content">{text}</p>
            <NotedButton typeButton="archive" action="archive" />
            <NotedButton typeButton="delete" action="delete" callback={onDelete} id={id} />
        </div>
    );
}
