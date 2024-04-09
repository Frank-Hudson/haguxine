class Word {
    constructor(word, description = "", pronunciation = "") {
        this.word = word;
        this.description = description;
        this.pronunciation = pronunciation;
    }
}

const HAGUXINE_TO_ENGLISH = new Map([
    [new Word("kilik", "", "kiɭik"), new Word("fire", "", "")],
    [new Word("xun", "", "ʃɯn"), new Word("water", "", "")],
    [new Word("vikha", "", "viʜa"), new Word("snow", "", "")],
    [new Word("dokan", "", "ɖɔkan"), new Word("wood", "", "")],
    [new Word("ika", "", "ika"), new Word("sweet", "", "")],
    [new Word("dokanika", "", "ɖɔkanika"), new Word("berry", "", "")],
    [new Word("xkuwa", "", "ʃkɯwa"), new Word("juice", "", "")],
    [new Word("xkudokna", "", "ʃkɯɖɔkna"), new Word("berry juice", "", "")],
]);

export { Word, HAGUXINE_TO_ENGLISH };
