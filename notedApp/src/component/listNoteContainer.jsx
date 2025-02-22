import React from "react";
import HeaderListNote from "./headerNoteList";
import ButtonAction from "./buttonAction";

export default function ListNoteContainer({ title, createAt, text, onDelete, onArchive, id }) {
    console.log("on delete di list container", onDelete)
    return (
        <div className="list-container">
            <HeaderListNote title={title} createAt={createAt.toLocaleString()} />
            <p className="content">{text}</p>
            <ButtonAction typeButton="archive" action="archive" callback={onArchive} id={id} />
            <ButtonAction typeButton="delete" action="delete" callback={onDelete} id={id} />
        </div>
    );
}
