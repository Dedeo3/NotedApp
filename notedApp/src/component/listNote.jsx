import React from 'react';
import ListNoteContainer from './listNoteContainer';

export default function ListNote({ dataNoted, onDelete }) {
    console.log("Received data in ListNote:", dataNoted);

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
                />
            ))}
        </div>
    );
}
