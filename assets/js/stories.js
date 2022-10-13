//* Story objects *// 

var stories = [
    { 
        narration: "In the light of the moon a little egg lay on a leaf. One Sunday morning the warm sun came up... CRACK! Out of the egg came a tiny and very hungry...",
        answer: {
          option1: "Caterpillar"
        }
    },    

    {
      narration: "He started to look for some food. On Monday, he...",
      answer: {
        option1: "Ate ONE apple. But he was still hungry."
      }

    },
    
    {
      narration: "On Tuesday, he...",
        answer: {
          option1: "Ate TWO pairs. But he was still hungry."
        }

    },

    {
      narration: "On Wednesday, he...",
      answer: {
        option1: "Ate through THREE plums. But he was still hungry."
      }
    }, 

    {
      narration: "On Thursday, he...",
      answer: {
        option1: "Ate FOUR strawberries. But he was still hungry."
      }
    },

    {
      narration: "On Friday, he... ",
      answer: {
        option1: "Ate through FIVE oranges. But was still hungry."
      }
    },
    
    {
      narration: "On Saturday he... ",
      answer: {
        option1: "He ate through, one piece of chocolate cake, one ice cream, one pickle, one slice of swiss cheese, one slice of salami, one lolipop, one piece of cherry pie, one sausauge, one cupcake, and one slice of watermelon"
      }
    }, 

    {
      narration: "That night he had stomach-ache! The next day was Sunday again.",
      answer: {
        option1: "The caterpillar ATE through one nice green leaf, and after that he felt much better..."
      }
    },

    {
      narration: "Now he wasn't hungry anymore and he wasnt a little caterpillar anymore.",
      answer: {
        option1: "He was a BIG, FAT caterpillar..."
      }
    },

    {
      narration: "He built a small house, called a COCOON, around himself.",
      answer: {
        option1: "He stayed inside for more than two weeks..."
      }
    },

    {
      narration: "Then he nibbled a hole in the cocoon, pushed his way out...",
      answer: {
        option1: "He was a BEAUTIFUL butterfly!"
      }
    }
]


// Question Objects

const questions = [
  { 
    question: 'On Tuesday what did the Caterpillar eat?',
    answers: [ 
      { text: 'Pears', correct: true},
      { text: 'Oranges', correct: false}, 
      { text: 'Strawberries', correct: false},
      { text: 'Apple', correct: false}
    ]
  }, 

  { 
    question: 'What day did the Caterpillar become a butterfly?',
    answers: [ 
      { text: 'Monday', correct: false},
      { text: 'Tuesday', correct: false}, 
      { text: 'Friday', correct: false},
      { text: 'Sunday', correct: true}
    ]
  }, 

  {
    question: 'The Caterpillar ate how many strawberries on Thursday?',
    answers: [ 
      { text: '5', correct: false},
      { text: '4', correct: true}, 
      { text: '6', correct: false},
      { text: '3', correct: false}
    ]
  },

  {
    question: 'What did the Caterpillar hatch from?',
    answers: [
      { text: 'Apple', correct: false},
      { text: 'Leaf', correct: false}, 
      { text: 'egg', correct: true},
      { text: 'Pair', correct: false}
    ]
  }, 

  {
    question: 'On Friday Mr. Caterpillar ate what fruit?',
    answers: [
      { text: 'Oranges', correct: true},
      { text: 'Apple', correct: false}, 
      { text: 'Plums', correct: false},
      { text: 'Strawberries', correct: false}
    ]
  }
]