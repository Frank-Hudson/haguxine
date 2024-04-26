export default function WordSection(properties) {
    return (
        <div
            className="word-section"
            {...properties}
        >
            <h2>{properties.word}</h2>
            <p className="pronunciation">{`/${properties.pronunciation}/`}</p>
            <p className="translation">{properties.translation}</p>
            <p className="definition">{properties.definition ? properties.definition : "No definition available"}</p>
        </div>
    );
}
