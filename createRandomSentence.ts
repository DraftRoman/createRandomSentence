import {
  nouns,
  adjectives,
  adverbs,
  places,
  verbs,
  timeWords,
  structures,
  Tense,
  Verb
} from "./data";

function getRandomWord<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomTense(): Tense {
  const tenses: Tense[] = ["present", "past", "future"];
  return getRandomWord(tenses);
}

function createRandomSentence(): string {
  const tense: Tense = getRandomTense();
  const verb: Verb = getRandomWord(verbs);
  const template: string = getRandomWord(structures[tense]);
  const time: string = getRandomWord(timeWords[tense]);

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

const sentenceEl = document.getElementById("sentence") as HTMLElement | null;
const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement | null;



function displaySentence(): void {
  if (!sentenceEl) return;
  sentenceEl.textContent = createRandomSentence();
}

displaySentence();
generateBtn?.addEventListener("click", displaySentence);
