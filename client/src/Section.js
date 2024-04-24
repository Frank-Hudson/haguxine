import React, { JSX } from "react";

export default function Section(properties) {
    const level = properties.level;
    const heading =
        level == 6
            ? React.JSX.IntrinsicElements.h6
            : level == 5
            ? JSX.IntrinsicElements.h5
            : level == 4
            ? JSX.IntrinsicElements.h4
            : level == 3
            ? JSX.IntrinsicElements.h3
            : level == 2
            ? JSX.IntrinsicElements.h2
            : JSX.IntrinsicElements.h1;
    return (
        <div class="section">
            <heading id={properties.title.trim()}>{properties.title}</heading>
            {properties.children}
        </div>
    );
}
