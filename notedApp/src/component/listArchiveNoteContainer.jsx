import React from "react";
import HeaderListNote from "./headerNoteList";
import ButtonAction from "./buttonAction";

export default function ListArchiveNoteContainer({ title, createAt, text, onDelete, onMove, id }) {
    console.log("on delete di list archive container", onDelete)
    return (
        <div className="list-Archieve-container">
            <HeaderListNote title={title} createAt={createAt.toLocaleString()} />
            <p className="content">{text}</p>
            <ButtonAction typeButton="move" action="move" callback={onMove} id={id} />
            <ButtonAction typeButton="delete" action="delete" callback={onDelete} id={id} />
        </div>
    );
}
