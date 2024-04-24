export default function IconAnchor(properties) {
    return (
        <a {...properties}>
            <i
                className={`fa-${properties.faType} fa-${properties.faIcon} fa-${properties.faSize}`}
            ></i>
        </a>
    );
}
