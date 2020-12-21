import React from 'react'

import { FlashcardComponent } from 'react-flashcard'

const cardData = [
  {
    front: {
      text: "living outside, often in a tent",
      image: "https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg",
    },
    back: {
      text: "Camping",
    }
  },
  {
    front: {
      text: "the cultivation of plants",
    },
    back: {
      text: "Gardening",
    }
  },
  {
    front: {
      text: "make 'kite' then show it floating around",
      image: "https://o.quizlet.com/DNSK53oa86VTpPMo18ov4A.jpg",
    },
    back: {
      text: "Flying a kite",
    }
  },
]

const App = () => {
  return <FlashcardComponent dataSource={cardData} onChange={(step, side) => console.log(step, side)} onSound={(text) => console.log(text)} onFinish={() => console.log("Finish!")} />
}

export default App
