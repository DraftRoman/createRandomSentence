import { nouns, adjectives, adverbs, places, tenses, verbs, timeWords, structures } from './data.js';
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
