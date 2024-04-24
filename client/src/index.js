import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import Col, { FullCol } from "./Col.js";
import Row from "./Row.js";
import IconAnchor from "./IconAnchor.js";

import "./index.css";
import Section from "./Section.js";

function App(properties) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setData(data.message));
    }, []);

    console.log(data);

    return (
        <>
            <FullCol done="true" id="topbar">
                <p>
                    <IconAnchor
                        fatype="brands"
                        faicon="github"
                        fasize="2xl"
                        href="https://github.com/Frank-Hudson/haguxine/"
                        title="GitHub Repository"
                        id="topbar-github-repo"
                    />
                </p>
                <p>
                    <IconAnchor
                        fatype="solid"
                        faicon="share-nodes"
                        fasize="2xl"
                        title="Share (copy link)"
                        id="topbar-share"
                    />
                </p>
            </FullCol>

            <Row done="true" id="page">
                <Col sizes="3,12">
                    <ul id="outline">
                        <h4 id="outline-title">Glossary</h4>
                    </ul>
                </Col>
                <Col sizes="6,12" id="main">
                    <h1 id="title" onClick={() => window.open("./", "_self")}>
                        Haguxine
                    </h1>
                    <div id="content">
                        <p>
                            <span className="new-word" pronunciation="hagɯʃinɛ">
                                Haguxine
                            </span>{" "}
                            is my made up (or constructed) language, also known
                            as a "
                            <a href="https://en.wikipedia.org/wiki/Conlang">
                                conlang
                            </a>
                            ".
                        </p>
                        <p>
                            It currently has no real purpose, other than making
                            a (in my opinion) nice language.
                        </p>

                        <Section title="World Building">
                            <div>
                                <p>
                                    The speakers of this language primarily
                                    reside in non-snowy tundra and forest areas,
                                    overshadowed by large mountains and leading
                                    out into large plains and cold savannahs.
                                </p>
                                <p>
                                    Their main source of food is small-medium
                                    game animals, small poultry, and limited
                                    fruit and veg, primarily in the form of
                                    berries and roots.
                                </p>
                                <p>
                                    They often keep either{" "}
                                    <a href="https://en.wiktionary.org/wiki/cervine">
                                        cervine
                                    </a>
                                    - or canine-like animals that live in the
                                    surrounding areas as pets. Occasionally,
                                    someone will take a bird as a pet, but
                                    usually nothing more flamboyant than that.
                                </p>
                            </div>
                        </Section>
                    </div>

                    <pre>
                        <code>{JSON.stringify(data)}</code>
                    </pre>
                </Col>
                <Col sizes="3,12">&nbsp;</Col>
            </Row>

            <FullCol done="true" id="bottombar">
                <h4>Resources</h4>

                <p>
                    <a href="https://www.ipachart.com/">IPA Chart</a>
                </p>

                <h4>Other Links</h4>

                <p>
                    <a
                        href="https://github.com/Frank-Hudson/haguxine/"
                        title="GitHub Repository"
                    >
                        <i className="fa-brands fa-github fa-2xl"></i> GitHub
                        Repository
                    </a>
                </p>
            </FullCol>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
