export default function Row(properties) {
    return (
        <div
            className={"row" + (properties.done ? " finished" : "")}
            {...properties}
        >
            {properties.children}
        </div>
    );
}
