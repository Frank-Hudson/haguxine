class Word {
    constructor(word, pronunciation = "") {
        this.word = word;
        this.pronunciation = pronunciation;
        this.description = "";
    }

    withDescription(description) {
        this.description = description;
        return this;
    }
}

const HAGUXINE_TO_ENGLISH = new Map([
    [new Word("kilik",    "kiɭik"   ), new Word("fire"       )],
    [new Word("xun",      "ʃɯn"     ), new Word("water"      )],
    [new Word("vikha",    "viʜa"    ), new Word("snow"       )],
    [new Word("dokan",    "ɖɔkan"   ), new Word("wood"       )],
    [new Word("ika",      "ika"     ), new Word("sweet"      )],
    [new Word("dokanika", "ɖɔkanika"), new Word("berry"      )],
    [new Word("xkuwa",    "ʃkɯwa"   ), new Word("juice"      )],
    [new Word("xkudokna", "ʃkɯɖɔkna"), new Word("berry juice")],
]);

export { Word, HAGUXINE_TO_ENGLISH };
