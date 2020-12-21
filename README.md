# react-flashcard

> Flashcard React Component

[![NPM](https://img.shields.io/npm/v/react-flashcard.svg)](https://www.npmjs.com/package/react-flashcard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-flashcard
```

## Demo

You can view a demo for this package on both desktop and mobile environments.

[Click here to view demo!](https://ozuit.github.io/react-flashcard/)

## Usage

```jsx
import React, { Component } from 'react'

import FlashcardComponent from 'react-flashcard'

const cardData = [
  {
    front: {
      text: "living outside, often in a tent",
      image: "https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg",
    },
    back: {
      text: "Camping",
    }
  }
]

class Example extends Component {
  render() {
    return <FlashcardComponent dataSource={cardData} />
  }
}
```

## Properties

| Props         | Type   | Description                                                                                    | Default            |
|---------------|--------|------------------------------------------------------------------------------------------------|--------------------|
| dataSource    | array  | The field is required. This includes text and image for the card content.                      | [ ]                 |
| flipDirection | string | Direction of the card flip ('horizontal' or 'vertical' )                                       | horizontal         |
| onChange      | func   | This event is triggered by whenever change side (front/back) or navigation (prev/next)         | (step, size) => {} |
| onFinish      | func   | This event is triggered when the user completes all question and click on the "Finish" button. | () => {}           |
| onSound       | func   | This event is triggered when the user clicks on the sound icon.                                | (text) => {}       |

## License

MIT © [ozuit](https://github.com/ozuit)
