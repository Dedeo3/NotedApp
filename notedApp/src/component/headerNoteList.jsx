import React from "react";

export default function HeaderListNote({ title, createAt }) {
    return (
        <div className="header-list-note">
            <h2 className="title">{title}</h2>
            <p className="create-at">{createAt}</p>
        </div>
    );
}
