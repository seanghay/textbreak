use icu_segmenter::{
    options::{LineBreakOptions, SentenceBreakInvariantOptions, WordBreakInvariantOptions},
    GraphemeClusterSegmenter as IcuGraphemeClusterSegmenter,
    GraphemeClusterSegmenterBorrowed as IcuGraphemeClusterSegmenterBorrowed,
    LineSegmenter as IcuLineSegmenter, LineSegmenterBorrowed as IcuLineSegmenterBorrowed,
    SentenceSegmenter as IcuSentenceSegmenter,
    SentenceSegmenterBorrowed as IcuSentenceSegmenterBorrowed, WordSegmenter as IcuWordSegmenter,
    WordSegmenterBorrowed as IcuWordSegmenterBorrowed,
};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct SentenceSegmenter {
    segmenter: IcuSentenceSegmenterBorrowed<'static>,
}

#[wasm_bindgen]
impl SentenceSegmenter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> SentenceSegmenter {
        let options = SentenceBreakInvariantOptions::default();
        let segmenter = IcuSentenceSegmenter::new(options);
        SentenceSegmenter { segmenter }
    }

    #[wasm_bindgen]
    pub fn segment(&self, text: &str) -> Vec<usize> {
        self.segmenter
            .segment_str(text)
            .map(|pos| text[..pos].chars().count())
            .collect()
    }
}

#[wasm_bindgen]
pub struct GraphemeClusterSegmenter {
    segmenter: IcuGraphemeClusterSegmenterBorrowed<'static>,
}

#[wasm_bindgen]
impl GraphemeClusterSegmenter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> GraphemeClusterSegmenter {
        let segmenter = IcuGraphemeClusterSegmenter::new();
        GraphemeClusterSegmenter { segmenter }
    }

    #[wasm_bindgen]
    pub fn segment(&self, text: &str) -> Vec<usize> {
        self.segmenter
            .segment_str(text)
            .map(|pos| text[..pos].chars().count())
            .collect()
    }
}

#[wasm_bindgen]
pub struct WordSegmenter {
    segmenter: IcuWordSegmenterBorrowed<'static>,
}

#[wasm_bindgen]
impl WordSegmenter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WordSegmenter {
        let options = WordBreakInvariantOptions::default();
        let segmenter = IcuWordSegmenter::new_auto(options);
        WordSegmenter { segmenter }
    }

    #[wasm_bindgen]
    pub fn segment(&self, text: &str) -> Vec<usize> {
        self.segmenter
            .segment_str(text)
            .map(|pos| text[..pos].chars().count())
            .collect()
    }
}

#[wasm_bindgen]
pub struct LineSegmenter {
    segmenter: IcuLineSegmenterBorrowed<'static>,
}

#[wasm_bindgen]
impl LineSegmenter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> LineSegmenter {
        let options = LineBreakOptions::default();
        let segmenter = IcuLineSegmenter::new_auto(options);
        LineSegmenter { segmenter }
    }

    #[wasm_bindgen]
    pub fn segment(&self, text: &str) -> Vec<usize> {
        self.segmenter
            .segment_str(text)
            .map(|pos| text[..pos].chars().count())
            .collect()
    }
}
