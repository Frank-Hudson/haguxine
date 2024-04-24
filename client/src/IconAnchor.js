export default function IconAnchor(properties) {
    return (
        <a {...properties}>
            <i
                className={`fa-${properties.fatype} fa-${properties.faicon} fa-${properties.fasize}`}
            ></i>
        </a>
    );
}
