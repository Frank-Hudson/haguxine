export default function Col(properties) {
    const [large, medium, small] = properties.sizes.split(',');
    return (
        <div className={`col-${large} col-m-${medium} col-s-${small}`} {...properties}>
            {properties.children}
        </div>
    );
}
