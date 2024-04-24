import Row from "./Row";

export default function Col(properties) {
    const SIZES = properties.sizes.split(",");
    let large = 12;
    let medium = 12;
    let small = 12;
    switch (SIZES.length) {
        case 3:
            large = SIZES[0];
            medium = SIZES[1];
            small = SIZES[2];
            break;
        case 2:
            large = SIZES[0];
            medium = SIZES[0];
            small = SIZES[1];
            break;
        case 1:
            large = SIZES[0];
            medium = SIZES[0];
            small = SIZES[0];
            break;
        case 0:
            break;
        default:
            console.error(
                `Too many Col sizes provided: ${SIZES.length} the maximum number is 3.`
            );
            break;
    }

    return (
        <div
            className={`col-${large} col-m-${medium} col-s-${small}`}
            {...properties}
        >
            {properties.children}
        </div>
    );
}

function FullCol(properties) {
    return (
        <Row
            className={"row" + (properties.done ? " finished" : "")}
            {...properties}
        >
            <Col sizes="12">{properties.children}</Col>
        </Row>
    );
}

export { FullCol };
