import React from 'react';
import ListNoteContainer from './listNoteContainer';

export default function ListNote({ dataNoted, onDelete, onArchive }) {
    console.log("Received data in ListNote:", dataNoted);
    console.log("on delete di list", onDelete)

    if (dataNoted.length === 0) {
        return <p className='no-data'>No notes available.</p>;
    }

    return (
        <div className="listNote">
            {dataNoted.map((note) => (
                <ListNoteContainer
                    key={note.id}
                    id={note.id} 
                    title={note.title}
                    text={note.text}
                    createAt={note.createAt}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            ))}
        </div>
    );
}
