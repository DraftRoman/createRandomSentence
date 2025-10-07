const nouns = ["dog", "car", "teacher", "computer", "river", "child", "city"];
const adjectives = ["happy", "blue", "fast", "loud", "strange", "bright", "dark"];
const adverbs = ["quickly", "silently", "gracefully", "happily", "angrily", "slowly"];
const places = ["in the park", "at school", "on the mountain", "by the river", "in the city"];
const tenses = ["present", "past", "future"];
const verbs = [
    { base: "run", past: "ran", pp: "run" },
    { base: "jump", past: "jumped", pp: "jumped" },
    { base: "fly", past: "flew", pp: "flown" },
    { base: "eat", past: "ate", pp: "eaten" },
    { base: "sing", past: "sang", pp: "sung" },
    { base: "sleep", past: "slept", pp: "slept" },
    { base: "build", past: "built", pp: "built" },
    { base: "write", past: "wrote", pp: "written" },
    { base: "read", past: "read", pp: "read" },
    { base: "swim", past: "swam", pp: "swum" },
    { base: "drive", past: "drove", pp: "driven" },
    { base: "walk", past: "walked", pp: "walked" },
    { base: "talk", past: "talked", pp: "talked" },
    { base: "think", past: "thought", pp: "thought" },
    { base: "see", past: "saw", pp: "seen" },
    { base: "come", past: "came", pp: "come" },
    { base: "go", past: "went", pp: "gone" },
    { base: "make", past: "made", pp: "made" },
    { base: "take", past: "took", pp: "taken" },
    { base: "give", past: "gave", pp: "given" },
    { base: "find", past: "found", pp: "found" },
    { base: "think", past: "thought", pp: "thought" },
    { base: "tell", past: "told", pp: "told" },
    { base: "become", past: "became", pp: "become" },
    { base: "show", past: "showed", pp: "shown" },
    { base: "leave", past: "left", pp: "left" },
    { base: "feel", past: "felt", pp: "felt" },
    { base: "put", past: "put", pp: "put" },
    { base: "bring", past: "brought", pp: "brought" }, ,
    { base: "begin", past: "began", pp: "begun" },
    { base: "keep", past: "kept", pp: "kept" }
];

const timeWords = {
    present: ["today", "every day", "usually", "often", "now", "sometimes", "always", "never"],
    past: ["yesterday", "last night", "two days ago", "in 2020", "when I was a child", "a week ago", "last year", "once", "in the past", "recently"],
    future: ["tomorrow", "next week", "soon", "in the morning", "later", "in the future", "next year", "someday", "eventually"]
};

const structures = {
    present: [
        "The ${adjective} ${noun} ${verbBase}s ${adverb}.",
        "Sometimes the ${adjective} ${noun} ${verbBase}s ${place}.",
        "Why does the ${adjective} ${noun} ${verbBase} ${adverb}?",
        "The ${noun} ${verbBase}s ${place} ${time}."
    ],
        past: [
        "The ${adjective} ${noun} ${verbPast} ${adverb}.",
        "Yesterday, the ${noun} ${verbPast} ${place}.",
        "Why did the ${adjective} ${noun} ${verbBase} ${adverb}?",
        "The ${noun} ${verbPast} ${place} ${time}."
    ],
        future: [
        "The ${adjective} ${noun} will ${verbBase} ${adverb}.",
        "Tomorrow, the ${noun} will ${verbBase} ${place}.",
        "Why will the ${adjective} ${noun} ${verbBase} ${adverb}?",
        "The ${noun} will ${verbBase} ${place} ${time}."
    ]
};
    

function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createRandomSentence() {
    const tense = getRandomWord(tenses);
    const verb = getRandomWord(verbs);
    const template = getRandomWord(structures[tense]);
    const time = getRandomWord(timeWords[tense]);
    return template
        .replace(/\${noun}/g, getRandomWord(nouns))
        .replace(/\${adjective}/g, getRandomWord(adjectives))
        .replace(/\${adverb}/g, getRandomWord(adverbs))
        .replace(/\${place}/g, getRandomWord(places))
        .replace(/\${time}/g, time)
        .replace(/\${verbBase}/g, verb.base)
        .replace(/\${verbPast}/g, verb.past)
        .replace(/\${verbPP}/g, verb.pp);
    }
const sentenceEL = document.getElementById("sentence");
const generateBtn = document.getElementById("generateBtn");
console.log(createRandomSentence());

function displaySentence() {
    sentenceEL.textContent = createRandomSentence();
}
displaySentence();
generateBtn.addEventListener('click', displaySentence);
