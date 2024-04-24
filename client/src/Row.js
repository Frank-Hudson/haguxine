export default function Row(properties) {
    return (
        <div className={"row" + properties.isDone ? " finished" : ""} {...properties}>
            {properties.children}
        </div>
    );
}
