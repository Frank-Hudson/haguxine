class Word {
    constructor(word, description = "Undescribed as of yet", pronunciation = "NONE") {
        this.word = word;
        this.description = description;
        this.pronunciation = pronunciation;
    }
}

const HAGUXINE_TO_ENGLISH = new Map([
    [new Word("kilik"), new Word("fire")],
    [new Word("xun"), new Word("water")],
    [new Word("vikha"), new Word("snow")],
    [new Word("dokan"), new Word("wood")],
    [new Word("ika"), new Word("sweet")],
    [new Word("dokanika"), new Word("berry")],
    [new Word("xkuwa"), new Word("juice")],
    [new Word("xkudokna"), new Word("berry juice")],
]);

export { Word, HAGUXINE_TO_ENGLISH };
