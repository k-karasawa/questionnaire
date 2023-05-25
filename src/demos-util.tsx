/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/

import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

interface DemoBlockProps {
  title: string;
  children?: React.ReactNode; // childrenを追加
}

export const DemoBlock: React.FC<DemoBlockProps> = ({ title, children }) => (
  <div style={{ padding: 16 }}>
    <h3>{title}</h3>
    {children}
  </div>
);