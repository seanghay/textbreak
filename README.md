# textbreak

WebAssembly binding for Rust icu_segmenter.

```bash
npm install textbreak
```

## Usage

```javascript
import init, { WordSegmenter, SentenceSegmenter, LineSegmenter, GraphemeClusterSegmenter } from 'textbreak';

// Initialize the WASM module
await init({
  module_or_path // wasm buffer
});

// Word segmentation - works with multiple languages
const wordSegmenter = new WordSegmenter();
const wordBreaks = wordSegmenter.segment("Hello world! សួស្តី ពិភពលោក!");
wordSegmenter.free();

// Sentence segmentation
const sentenceSegmenter = new SentenceSegmenter();
const sentenceBreaks = sentenceSegmenter.segment("Hello! How are you? សួស្តី! តើអ្នកសុខសប្បាយទេ?");
sentenceSegmenter.free();

// Line segmentation
const lineSegmenter = new LineSegmenter();
const lineBreaks = lineSegmenter.segment("This is a long line that might need breaking. នេះគឺជាបន្ទាត់វែងដែលអាចត្រូវការកាត់។");
lineSegmenter.free();

// Grapheme cluster segmentation - handles complex characters
const graphemeSegmenter = new GraphemeClusterSegmenter();
const graphemeBreaks = graphemeSegmenter.segment("👨‍👩‍👧‍👦 Hello កុំព្យូទ័រ 🌍");
graphemeSegmenter.free();
```

## API

Each segmenter returns a `Uint32Array` containing the byte indices where breaks occur in the input text.

### WordSegmenter
Segments text into words following Unicode word boundary rules.

### SentenceSegmenter
Segments text into sentences following Unicode sentence boundary rules.

### LineSegmenter
Segments text into lines following Unicode line breaking rules.

### GraphemeClusterSegmenter
Segments text into grapheme clusters (user-perceived characters), handling complex cases like emoji and combining characters.

## Memory Management

Remember to call `free()` on segmenter instances when done to prevent memory leaks.
