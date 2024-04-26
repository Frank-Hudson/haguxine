import React from "react";

export default function Section(properties) {
    const level = properties.level;
    switch (level) {
        case 6:
            return (
                <div className="section">
                    <h6 id={properties.title.trim()}>{properties.title}</h6>
                    {properties.children}
                </div>
            );
        case 5:
            return (
                <div className="section">
                    <h5 id={properties.title.trim()}>{properties.title}</h5>
                    {properties.children}
                </div>
            );
        case 4:
            return (
                <div className="section">
                    <h4 id={properties.title.trim()}>{properties.title}</h4>
                    {properties.children}
                </div>
            );
        case 3:
            return (
                <div className="section">
                    <h3 id={properties.title.trim()}>{properties.title}</h3>
                    {properties.children}
                </div>
            );
        case 1:
            return (
                <div className="section">
                    <h1 id={properties.title.trim()}>{properties.title}</h1>
                    {properties.children}
                </div>
            );
        default:
            return (
                <div className="section">
                    <h2 id={properties.title.trim()}>{properties.title}</h2>
                    {properties.children}
                </div>
            );
    }
}
