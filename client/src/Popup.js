export default function Popup(properties) {
    return (
        <div
            className="popup"
            onClick={() =>
                document.getElementById(properties.id).classList.remove("shown")
            }
            {...properties}
        >
            {properties.children}
        </div>
    );
}
