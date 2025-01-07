import React from 'react';

import ListArchiveNoteContainer from './listArchiveNoteContainer';

export default function ListNoteArchive({ dataNoted, onDelete, onMove }) {
    console.log("Received data in ListNoteArchive:", dataNoted);
    console.log("on delete di list", onDelete)

    if (dataNoted.length === 0) {
        return <p className='no-data'>No notes available.</p>;
    }

    return (
        <div className="listNoteArchive">
            {dataNoted.map((note) => (
                <ListArchiveNoteContainer
                    key={note.id}
                    id={note.id} 
                    title={note.title}
                    text={note.text}
                    createAt={note.createAt}
                    onDelete={onDelete}
                    onMove={onMove}
                />
            ))}
        </div>
    );
}
