import { HAGUXINE_TO_ENGLISH, Word } from "./words.js";

// const h = (level, content, id = "") =>
//     `<h${level} ${id ? 'id="' + id + '"' : ""}>${content}</h${level}>`;
const p = (content, id = "") => `<p ${id ? 'id="' + id + '"' : ""}>${content}</p>`;
const a = (href, content, id = "") =>
    `<a ${id ? 'id="' + id + '"' : ""} href="${href}">${content}</a>`;

const webSection = function(title, content, level = 2) {
    return `<div class="section">
                    <h${level} id="${title.split("<em")[0].replace('"', "").trim()}">${title}</h${level}>
                    <div>${content}</div>
                </div>`;
};

outline.innerHTML += Array.from(HAGUXINE_TO_ENGLISH)
    .map(
        ([haguxine]) =>
            `<li><a href="#${haguxine.word}">${haguxine.word}</a></li>`
    )
    .join("\n");

content.innerHTML += webSection(
    "World Building",
    [
        p("The speakers of this language primarily reside in non-snowy tundra and forest areas, overshadowed by large mountains and leading out into large plains and cold savannahs."),
        p("Their main source of food is small-medium game animals, small poultry, and limited fruit and veg, primarily in the form of berries and roots."),
        p(`They often keep either ${a("https://en.wiktionary.org/wiki/cervine", "cervine")}- or canine-like animals that live in the surrounding areas at pets. Occasionally, someone will take a bird as a pet, but usually nothing more flamboyant than that.`),
    ].join("\n"),
);

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
