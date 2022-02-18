
export let CONCEPT_TYPE_TITLE = "pureTextTitle"
export let CONCEPT_TYPE_TEXT = "pureTextText"
export let CONCEPT_TYPE_BASIC = "pureText";
export let CONCEPT_TYPE_VIDEO = "video"
export let CONCEPT_TYPE_QUIZ_MCQ = "quiz_mcq"
export let CONCEPT_TYPE_QUIZ_MULTI_MCQ = "quiz_muq_multi"
export let CONCEPT_TEXT_TYPE_URL = "url"
export let CONCEPT_TEXT_TYPE_ABBREVATION = "abbr"
export let CONCEPT_TEXT_TYPE_FOCUS = "kbd"
export let CONCEPT_TEXT_TYPE_CONPUTER_OUTPUT = "samp"
export let CONCEPT_TEXT_TYPE_DETAILS = "detailed"
export let CONCEPT_TYPE_IMAGE = "picture"
export let CONCEPT_TYPE_CODE = "code"
export let CONCEPT_CODE_TYPE_VAR = "var"
export let CONCEPT_CODE_TYPE_STRING = "string"
export let CONCEPT_CODE_TYPE_CONSOLE = "console";
export let CONCEPT_CODE_TYPE_FUNCTIONS = "functions";
export let CONCEPT_CODE_TYPE_COMMENT = "comment";
export let CONCEPT_CODE_TYPE_NEW_LINE ="new line"

/*/ioiycu9ve3ootkcs0ol5i/722am3uad53blbvm30a8zu*/
let courses= {
  "tce9sakrt18h6djei6hm99": {
    ID: "tce9sakrt18h6djei6hm99",
    about: "Front-end Web Development",
    duration: "100",
    cost: "1000",
    authors: ["john dakr", "bella chan"],
    description: "this course is a great course!",
    lessonsID: ["722am3uad53blbvm30a8zu","9ydyvhqas145myvtvwppku"],
  },
  "tce9sakrt18h6djei6hm98": {
    ID: "tce9sakrt18h6djei6hm98",
    about: "baking",
    duration: "10",
    cost: "10",
    authors: ["dakr", "bella chan"],
    description: "this course is a great course!",
    lessonsID: ["722am3uad53blbvm30a8zu","lpejx6ly5mfuc9mb4krv1","19qa4jb55tm4zuzwrdxt7v"]
  },
  "2sq5dns3ex929gz6n5fjq9": {
    ID: "2sq5dns3ex929gz6n5fjq9",
    about: "Back-end Web Developement",
    duration: "100",
    cost: "1000",
    authors: ["Mack lyre", "bella chan"],
    description: "in this course you will learn how to make a back-end web developepment using javaScript node.js and express.",
    lessonsID: ["9ydyvhqas145myvtvwppku"],
  },
  "ioiycu9ve3ootkcs0ol5i": {
    ID: "ioiycu9ve3ootkcs0ol5i",
    about: "Android Development",
    duration: "120",
    cost: "1400",
    authors: ["jack jack"],
    description: "the best course to become and android developer using kotlin! brought to you by jack the jack",
    lessonsID: ["722am3uad53blbvm30a8zu","9ydyvhqas145myvtvwppku"],
  },
  "or54iexi9bl1vhbmvfrrr": {
    ID: "or54iexi9bl1vhbmvfrrr",
    about: "Cloud Computing",
    duration: "150",
    cost: "2000",
    authors: ["ahmed yaser", "matt patt", "patrick black"],
    description: "in this lovely course you will learn how to use cloud computing. just that. it's a big topic",
    lessonsID: ["lpejx6ly5mfuc9mb4krv1","19qa4jb55tm4zuzwrdxt7v","rfyeye1uyhariizquu36ob"],
  },
  "cgbb7m1dabszcfslolvgyd": {
    ID: "cgbb7m1dabszcfslolvgyd",
    about: "Machine Learning",
    duration: "70",
    cost: "1100",
    authors: ["jack black"],
    description: "this course is a great course!",
    lessonsID: ["rfyeye1uyhariizquu36ob","q9u26suru38beo5ta4gv3l"],
  },
  "1bsrloygodr0kirl759fr3q": {
    ID: "1bsrloygodr0kirl759fr3q",
    about: "UI & UX Design",
    duration: "50",
    cost: "1200",
    authors: ["jonathan joestar","estarosa"],
    description: "you will get taught by the JOESTARS themselves! rise to fame JOJOOOOOOOO! yup this is a jojo reference",
    lessonsID: ["q9u26suru38beo5ta4gv3l","rfyeye1uyhariizquu36ob","19qa4jb55tm4zuzwrdxt7v"],
  }
}

let lessons ={
  "722am3uad53blbvm30a8zu": {
    ID: "722am3uad53blbvm30a8zu",
    title: "learn html!",
    lessonPartsID: ["k7z98jepe4z4me788ngdl","x6pxa2ko9cfws0so1s93fm"]
  },
  "q9u26suru38beo5ta4gv3l": {
    ID: "q9u26suru38beo5ta4gv3l",
    title: "learn css!",
    lessonPartsID: ["x6pxa2ko9cfws0so1s93fm","5h7oi0qj8uusehs0gwlvde"]
  },
  "rfyeye1uyhariizquu36ob": {
    ID: "rfyeye1uyhariizquu36ob",
    title: "learn javaSCript!",
    lessonPartsID: ["k7z98jepe4z4me788ngdl","5h7oi0qj8uusehs0gwlvde","4n7a5y8bqjezrojgib058a"]
  },
  "lpejx6ly5mfuc9mb4krv1": {
    ID: "lpejx6ly5mfuc9mb4krv1",
    title: "learn React!",
    lessonPartsID: ["5h7oi0qj8uusehs0gwlvde","x6pxa2ko9cfws0so1s93fm","4n7a5y8bqjezrojgib058a","rsn6ageb05qghzxq4b1z8v"]
  },
  "9ydyvhqas145myvtvwppku": {
    ID: "9ydyvhqas145myvtvwppku",
    title: "learn Redux!",
    lessonPartsID: ["4n7a5y8bqjezrojgib058a","rsn6ageb05qghzxq4b1z8v","zxsp1ig40ztaeh4bs255"]
  },
  "19qa4jb55tm4zuzwrdxt7v": {
    ID: "19qa4jb55tm4zuzwrdxt7v",
    title: "master React!",
    lessonPartsID: ["4n7a5y8bqjezrojgib058a","rsn6ageb05qghzxq4b1z8v"]
  }
}

let lessonParts = {
  "k7z98jepe4z4me788ngdl": {
    ID: "k7z98jepe4z4me788ngdl",
    imgURL: null,
    title: "what is html?",
    description: "here you will learn about what is html!",
    conceptsID: ["ztpmkl1jbsarjzesnu4f9","4s5l0wxi0zm04o9vpkwdgo9",]
  },
  "x6pxa2ko9cfws0so1s93fm": {
    ID: "x6pxa2ko9cfws0so1s93fm",
    imgURL: null,
    title: "mastering html!",
    description: "more foregin tags of html",
    conceptsID: ["ztpmkl1jbsarjzesnu4f9","3jholr1vjukolmiabi8fze"]
  },
  "5h7oi0qj8uusehs0gwlvde": {
    ID: "5h7oi0qj8uusehs0gwlvde",
    imgURL: null,
    title: "what is css?",
    description: "learn about how to style your amazing html file!",
    conceptsID: ["ztpmkl1jbsarjzesnu4f9","tys9gzx9lf4e2d21ii5pi","3jholr1vjukolmiabi8fze"]
  },
  "4n7a5y8bqjezrojgib058a": {
    ID: "4n7a5y8bqjezrojgib058a",
    imgURL: null,
    title: "javascript bacis",
    description: "learn about the main programming language for making the web!",
    conceptsID: ["3jholr1vjukolmiabi8fze"]
  },
  "rsn6ageb05qghzxq4b1z8v": {
    ID: "rsn6ageb05qghzxq4b1z8v",
    imgURL: null,
    title: "React, your first framework!",
    description: "here you will learn about the most beloved framework for making single page web apps!",
    conceptsID: ["q6ezkfn0dvijsuvx8x8fkg","3jholr1vjukolmiabi8fze","qkgu7c9lvyhx3eqosbs21"]
  },
  "zxsp1ig40ztaeh4bs255": {
    ID: "zxsp1ig40ztaeh4bs255",
    imgURL: null,
    title: "REDUX!",
    description: "learn about state managemnt and making a single source of truth in your apps!",
    conceptsID: ["3jholr1vjukolmiabi8fze","4s5l0wxi0zm04o9vpkwdgo9","q6ezkfn0dvijsuvx8x8fkg"]
  }
}

let concepts = {
  ztpmkl1jbsarjzesnu4f9: {
    "ID": "ztpmkl1jbsarjzesnu4f9",
    "description": "html?",
    "conceptList": [
      { "type": "pureTextTitle", "text": "hello there to this concept" },
      {
        "type": "pureTextText",
        "text": [
          "one two three. test text here",
          {
            "type": "url",
            "text": "URL HERE",
            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          "TEST",
          {
            "type": "abbr",
            "text": "WWW",
            "title": "World Wide Web"
          },
          {
            "type": "kbd",
            "text": "Win"
          },
          {
            "type": "samp",
            "text": "Moe Testing"
          },
          {
            "type": "detailed",
            "text": "Deeper Testing",
            "summary": "very Very Deep Testing"
          }
        ]
      },
      {
        "type": "video",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        "type": "quiz_mcq",
        "quiz": {
          "ID": "a",
          "question": "choose an answer! one might be right!",
          "options": [
            "this is a bad decision",
            "this is a very very vey good answer!",
            "pssss here, i am the right answer",
            "you are an idiot if you choose me"
          ],
          "reviews": [
            "1 is right cuz",
            "2 is worng cua",
            "3 i am not so sure",
            "you are an idiot if you picked four"
          ],
          "answerIndex": 0
        }
      }
    ]
  },

  tys9gzx9lf4e2d21ii5pi: {
    "ID": "tys9gzx9lf4e2d21ii5pi",
    "description": "css?",
    "conceptList": [
      { "type": "pureTextTitle", "text": "hello there to this concept" },
      {
        "type": "pureTextText",
        "text": [
          "one two three. test text here",
          {
            "type": "url",
            "text": "URL HERE",
            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          "TEST",
          {
            "type": "abbr",
            "text": "WWW",
            "title": "World Wide Web"
          },
          {
            "type": "kbd",
            "text": "Win"
          },
          {
            "type": "samp",
            "text": "Moe Testing"
          },
          {
            "type": "detailed",
            "text": "Deeper Testing",
            "summary": "very Very Deep Testing"
          }
        ]
      },
      {
        "type": "video",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        "type": "quiz_mcq",
        "quiz": {
          "ID": "a",
          "question": "choose an answer! one might be right!",
          "options": [
            "this is a bad decision",
            "this is a very very vey good answer!",
            "pssss here, i am the right answer",
            "you are an idiot if you choose me"
          ],
          "reviews": [
            "1 is right cuz",
            "2 is worng cua",
            "3 i am not so sure",
            "you are an idiot if you picked four"
          ],
          "answerIndex": 0
        }
      }
    ]
  },
  "4s5l0wxi0zm04o9vpkwdgo9": {
    "ID": "4s5l0wxi0zm04o9vpkwdgo9",
    "description": "why arrays?",
    "conceptList": [
      { "type": "pureTextTitle", "text": "hello there to this concept" },
      {
        "type": "pureTextText",
        "text": [
          "one two three. test text here",
          {
            "type": "url",
            "text": "URL HERE",
            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          "TEST",
          {
            "type": "abbr",
            "text": "WWW",
            "title": "World Wide Web"
          },
          {
            "type": "kbd",
            "text": "Win"
          },
          {
            "type": "samp",
            "text": "Moe Testing"
          },
          {
            "type": "detailed",
            "text": "Deeper Testing",
            "summary": "very Very Deep Testing"
          }
        ]
      },
      {
        "type": "video",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        "type": "quiz_mcq",
        "quiz": {
          "ID": "a",
          "question": "choose an answer! one might be right!",
          "options": [
            "this is a bad decision",
            "this is a very very vey good answer!",
            "pssss here, i am the right answer",
            "you are an idiot if you choose me"
          ],
          "reviews": [
            "1 is right cuz",
            "2 is worng cua",
            "3 i am not so sure",
            "you are an idiot if you picked four"
          ],
          "answerIndex": 0
        }
      }
    ]
  },
  "3jholr1vjukolmiabi8fze": {
    "ID": "3jholr1vjukolmiabi8fze",
    "description": "how are arrays useful?",
    "conceptList": [
      { "type": "pureTextTitle", "text": "hello there to this concept" },
      {
        "type": "pureTextText",
        "text": [
          "one two three. test text here",
          {
            "type": "url",
            "text": "URL HERE",
            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          "TEST",
          {
            "type": "abbr",
            "text": "WWW",
            "title": "World Wide Web"
          },
          {
            "type": "kbd",
            "text": "Win"
          },
          {
            "type": "samp",
            "text": "Moe Testing"
          },
          {
            "type": "detailed",
            "text": "Deeper Testing",
            "summary": "very Very Deep Testing"
          }
        ]
      },
      {
        "type": "video",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        "type": "quiz_mcq",
        "quiz": {
          "ID": "a",
          "question": "choose an answer! one might be right!",
          "options": [
            "this is a bad decision",
            "this is a very very vey good answer!",
            "pssss here, i am the right answer",
            "you are an idiot if you choose me"
          ],
          "reviews": [
            "1 is right cuz",
            "2 is worng cua",
            "3 i am not so sure",
            "you are an idiot if you picked four"
          ],
          "answerIndex": 0
        }
      }
    ]
  },
  q6ezkfn0dvijsuvx8x8fkg: {
    "ID": "q6ezkfn0dvijsuvx8x8fkg",
    "description": "react syntax",
    "conceptList": [
      { "type": "pureTextTitle", "text": "hello there to this concept" },
      {
        "type": "pureTextText",
        "text": [
          "one two three. test text here",
          {
            "type": "url",
            "text": "URL HERE",
            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          "TEST",
          {
            "type": "abbr",
            "text": "WWW",
            "title": "World Wide Web"
          },
          {
            "type": "kbd",
            "text": "Win"
          },
          {
            "type": "samp",
            "text": "Moe Testing"
          },
          {
            "type": "detailed",
            "text": "Deeper Testing",
            "summary": "very Very Deep Testing"
          }
        ]
      },
      {
        "type": "video",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        "type": "quiz_mcq",
        "quiz": {
          "ID": "a",
          "question": "choose an answer! one might be right!",
          "options": [
            "this is a bad decision",
            "this is a very very vey good answer!",
            "pssss here, i am the right answer",
            "you are an idiot if you choose me"
          ],
          "reviews": [
            "1 is right cuz",
            "2 is worng cua",
            "3 i am not so sure",
            "you are an idiot if you picked four"
          ],
          "answerIndex": 0
        }
      }
    ]
  },
  qkgu7c9lvyhx3eqosbs21: {
    "ID": "qkgu7c9lvyhx3eqosbs21",
    "description": "JSX!",
    "conceptList": [
      { "type": "pureTextTitle", "text": "hello there to this concept" },
      {
        "type": "pureTextText",
        "text": [
          "one two three. test text here",
          {
            "type": "url",
            "text": "URL HERE",
            "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          "TEST",
          {
            "type": "abbr",
            "text": "WWW",
            "title": "World Wide Web"
          },
          {
            "type": "kbd",
            "text": "Win"
          },
          {
            "type": "samp",
            "text": "Moe Testing"
          },
          {
            "type": "detailed",
            "text": "Deeper Testing",
            "summary": "very Very Deep Testing"
          }
        ]
      },
      {
        "type": "video",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        "type": "quiz_mcq",
        "quiz": {
          "ID": "a",
          "question": "choose an answer! one might be right!",
          "options": [
            "this is a bad decision",
            "this is a very very vey good answer!",
            "pssss here, i am the right answer",
            "you are an idiot if you choose me"
          ],
          "reviews": [
            "1 is right cuz",
            "2 is worng cua",
            "3 i am not so sure",
            "you are an idiot if you picked four"
          ],
          "answerIndex": 0
        }
      }
    ]
  },
};


let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: '',
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      "am8ehyc8byjqgar0jgpub9": "optionTwo",
      "loxhs1bqm25b708cmbf3g": "optionTwo"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: '',
    answers: {
      "vthrdm985a262al8qx3do": "optionOne",
      "xj352vofupe1dqz9emx13r": "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL: '',
    answers: {
      "xj352vofupe1dqz9emx13r": "optionOne",
      "vthrdm985a262al8qx3do": "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillain"
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic"
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer"
    }
  },
  "vthrdm985a262al8qx3do": {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500"
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift"
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function _getCourses () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...courses}), 1000)
  })
}

export function _getLessons () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...lessons}), 1000)
  })
}

export function _getLessonParts () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...lessonParts}), 1000)
  })
}

export function _getConcepts () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...concepts}), 1000)
  })
}
export function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
