export default function WordSection(properties) {
    let filteredProperties = Object.assign({}, properties);
    delete filteredProperties.className;
    delete filteredProperties.id;
    return (
        <div className={"word-section " + properties.className} id={properties.title} {...filteredProperties}>
            <h2>{properties.title}</h2>
            <p className="pronunciation">{`/${properties.pronunciation}/`}</p>
            <p className="translation">{properties.translation}</p>
            <p className="definition">
                {properties.definition
                    ? properties.definition
                    : "No definition available"}
            </p>
        </div>
    );
}
