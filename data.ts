export const nouns: string[] = [
  "dog", "car", "teacher", "computer", "river",
  "child", "city", "book", "house", "cat",
  "bird", "friend", "game", "movie", "song"
];
export const adjectives: string[] = [
  "happy", "blue", "fast", "loud", "strange",
  "bright", "dark", "funny", "serious", "lazy",
  "brave", "calm", "eager", "fierce", "gentle"
];
export const adverbs: string[] = [
  "quickly", "silently", "gracefully", "happily",
  "angrily", "slowly", "eagerly", "sadly",
  "brightly", "calmly"
];
export const places: string[] = [
  "in the park", "at school", "on the mountain",
  "by the river", "in the city", "at home",
  "in the library", "on the beach",
  "in the garden", "at the museum"
];
export type Tense = "present" | "past" | "future";
export interface Verb {
  base: string;
  past: string;
  pp: string;
}
export const verbs: Verb[] = [
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
  { base: "tell", past: "told", pp: "told" },
  { base: "become", past: "became", pp: "become" },
  { base: "show", past: "showed", pp: "shown" },
  { base: "leave", past: "left", pp: "left" },
  { base: "feel", past: "felt", pp: "felt" },
  { base: "put", past: "put", pp: "put" },
  { base: "bring", past: "brought", pp: "brought" },
  { base: "begin", past: "began", pp: "begun" },
  { base: "keep", past: "kept", pp: "kept" },
  { base: "hold", past: "held", pp: "held" },
  { base: "stand", past: "stood", pp: "stood" },
  { base: "hear", past: "heard", pp: "heard" },
  { base: "let", past: "let", pp: "let" },
  { base: "mean", past: "meant", pp: "meant" }
];
export type TimeWords = Record<Tense, string[]>;
export const timeWords: TimeWords = {
  present: [
    "today", "every day", "usually", "often",
    "now", "sometimes", "always", "never"
  ],
  past: [
    "yesterday", "last night", "two days ago",
    "in 2020", "when I was a child",
    "a week ago", "last year", "once",
    "in the past", "recently"
  ],
  future: [
    "tomorrow", "next week", "soon",
    "in the morning", "later",
    "in the future", "next year",
    "someday", "eventually"
  ]
};
export type Structures = Record<Tense, string[]>;
export const structures: Structures = {
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

    
