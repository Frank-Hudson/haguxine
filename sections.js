import { HAGUXINE_TO_ENGLISH, Word } from "./words.js";

const h = (level, content, id = "") =>
    `<h${level} ${id ? `id="${id}"` : ""}>${content}</h${level}>`;
const p = (content, id = "") => `<p ${id ? `id="${id}"` : ""}>${content}</p>`;
const a = (href, content, id = "") =>
    `<a ${id ? `id="${id}"` : ""} href="${href}">${content}</a>`;

const webSection = function (title, content, level = 2) {
    return `<div id="${title.split("<em")[0].replace('"', "")}" class="section">
                    <h${level}>${title}</h${level}>
                    <div>${content}</div>
                </div>`;
};

content.innerHTML += webSection(
    "Words",
    Array.from(HAGUXINE_TO_ENGLISH)
        .map(([haguxine, english]) =>
            webSection(
                `${haguxine.word} ${
                    haguxine.pronunciation
                        ? `<em style="font-weight:500;">(${haguxine.pronunciation})</em>`
                        : ""
                }`,
                `<p class="translation">translation: ${english.word}</p>
                        <p>${english.description}</p>`,
                3
            )
        )
        .join("\n")
);
