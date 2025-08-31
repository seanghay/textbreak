import init, {
	WordSegmenter,
	SentenceSegmenter,
	LineSegmenter,
	GraphemeClusterSegmenter,
} from "./dist/textbreak.js";

import fs from "node:fs/promises";
await init({
	module_or_path: fs.readFile("./dist/textbreak_bg.wasm"),
});

const wordSegmenter = new WordSegmenter();
const wordBreaks = wordSegmenter.segment("Hello world! សួស្តី ពិភពលោក!");
wordSegmenter.free();

const sentenceSegmenter = new SentenceSegmenter();
const sentenceBreaks = sentenceSegmenter.segment(
	"Hello! How are you? សួស្តី! តើអ្នកសុខសប្បាយទេ?",
);

sentenceSegmenter.free();

// Line segmentation
const lineSegmenter = new LineSegmenter();
const lineBreaks = lineSegmenter.segment(
	"This is a long line that might need breaking. នេះគឺជាបន្ទាត់វែងដែលអាចត្រូវការកាត់។",
);
lineSegmenter.free();

const graphemeSegmenter = new GraphemeClusterSegmenter();
const graphemeBreaks = graphemeSegmenter.segment("👨‍👩‍👧‍👦 Hello កុំព្យូទ័រ 🌍");
graphemeSegmenter.free();
