import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import Col, { FullCol } from "./Col.js";
import Row from "./Row.js";
import IconAnchor from "./IconAnchor.js";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FullCol done id="topbar">
            <p>
                <IconAnchor
                    faType="brands"
                    faIcon="github"
                    faSize="2xl"
                    href="https://github.com/Frank-Hudson/haguxine/"
                    title="GitHub Repository"
                    id="topbar-github-repo"
                />
            </p>
            <p>
                <IconAnchor
                    faType="solid"
                    faIcon="share-nodes"
                    faSize="2xl"
                    title="Share (copy link)"
                    id="topbar-share"
                />
            </p>
        </FullCol>

        <Row done id="page">
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
                        is my made up (or constructed) language, also known as a
                        "
                        <a href="https://en.wikipedia.org/wiki/Conlang">
                            conlang
                        </a>
                        ".
                    </p>
                    <p>
                        It currently has no real purpose, other than making a
                        (in my opinion) nice language.
                    </p>
                </div>
            </Col>
            <Col sizes="3,12">&nbsp;</Col>
        </Row>

        <FullCol done id="bottombar">
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
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
