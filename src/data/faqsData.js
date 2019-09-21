module.exports = [
  {
    question:
      "What's the difference between CSS Component Frameworks and CSS Utility Frameworks",
    answer:
      "Component Frameworks limit writing actual CSS because they offer prebuilt components that can be imported. Utility frameworks encourage inline styling by offering prebuilt classes that correlate to CSS attributes.",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 1,
    id: "56h6vqe",
    sources: [
      {
        name: "Vanilla CSS vs Bootstrap vs Tailwind CSS - Which one should you choose?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=vmXIGdP8KN8"
      },
      {
        name: "Tailwind Or Bootstrap?",
        site: "medium",
        url: "https://medium.com/@dolonhunt/tailwind-or-bootstrap-f62c1ac6c0b3"
      },
      {
        name: "Utility-first CSS - You have to try it first!",
        site: "dev",
        url: "https://dev.to/mzanggl/utility-first-css-you-have-to-try-it-first-3m85"
      },
    ],
  },
  {
    question: "What's the difference between TypeScript and JavaScript?",
    answer:
      "TypeScript is a SuperSet of JavaScript created by Microsoft in 2012. TypeScript is strongly-typed which helps identify compilation errors in development.",
    tags: ["javascript", "typescript"],
    type: "comparison",
    number: 2,
    id: "dcfqw4r",
    sources: [
      {
        name: "What is TypeScript and why would I use it in place of JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript"
      },
      {
        name: "TypeScript Basics 4 - TypeScript versus JavaScript",
        sites: "youtube",
        url: "https://www.youtube.com/watch?v=JAT0xC-5_Jk"
      },
      {
        name: "JavaScript vs TypeScript",
        site: "free-code-camp",
        url: "https://guide.freecodecamp.org/typescript/javascript-vs-typescript/"
      }
    ],
  },
  {
    question: "What is the \"this\" keyword in JavaScript?",
    answer:
      '"this" refers to a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.',
    tags: ["javascript"],
    type: "definition",
    number: 3,
    id: "0fg1g5g",
    sources: [
      {
        name: "How does the \"this\" keyword work?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work"
      },
      {
        name: "JavaScript for Developers 38 - Understanding the this keyword",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=URVdQG96MUw"
      },
      {
        name: "What's this? - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch1.md#whats-this"
      }
    ],
  },
  {
    question: 'What is strict mode in JavaScript?',
    answer:
      'The "use strict" string literal was introduced in ESCMScript 5. When included in a scope, errors are thrown for insecure coding practices like assigning values to undeclared variables. The this keyword does not traverse up the functional scope to the global object when it is undefined.',
    tags: ["javascript"],
    type: "definition",
    number: 4,
    id: "wyw25ob",
    sources: [
      {
        name: "What does \"use strict\" do in JavaScript, and what is the reasoning behind it?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it"
      },
      {
          name: "Strict Mode — \"use strict\" - Beau teaches JavaScript",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=uqUYNqZx0qY"
      },
      {
        name: "Strict Mode - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch2.md#strict-mode"
      }
    ]
  },
  {
    question: "What is closure in JavaScript?",
    answer:
      "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.",
    tags: ["javascript", "programming-fundamentals"],
    type: "definition",
    number: 5,
    id: "v8e59bt",
    sources: [
      {
        name: "How do JavaScript closures work?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/111102/how-do-javascript-closures-work"
      },
      {
        name: "Nitty Gritty - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch5.md#nitty-gritty"
      }
    ]
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM is the browsers API that allows a scripting language like JavaScript to manipulate HTML on a webpage.",
    tags: ["dom", "front-end"],
    type: "definition",
    number: 6,
    id: "toxu21t",
    sources: [
      {
        name: "The DOM: What's the Document Object Model? -freeCodeCamp.org",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=80Mr2Z6Qikc"
      },
      {
        name: "HTML DOM",
        site: "free-code0camp",
        url: "https://guide.freecodecamp.org/javascript/html-dom/"
      }
    ]
  },
  {
    question:
      "What's the difference between the var, let, and const keywords in JavaScript?",
    answer:
      "Each are used to declare a variable, but var has been a part of JavaScript since the start while let and const were introduced in ES6. var has functional scope while the others have block scope. const is identical to let but you aren't allowed to redeclare a variable declared with const",
    tags: ["javascript"],
    type: "comparison",
    number: 7,
    id: "bnxjlb1",
    sources: [
      {
        name: "What's the difference between using \"let\" and \"var\"?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var"
      },
      {
        name: "JavaScript Let, Const & Var: A Complete Guide",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=dzEieWaOJE0"
      },
      {
        name: "Function vs. Block Scope Review - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#review-tldr"
      }
    ]
  },
  {
    question: "What is the box model in CSS?",
    answer:
      "The box model is the hierarchy of CSS attributes on elements. Content --> padding --> border --> margin.",
    tags: ["css", "front-end"],
    type: "definition",
    number: 8,
    id: "28b4e2yl",
    sources: [
      {
        name: "The box model for beginners web design tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=MrAnu4zdjjY"
      },
      {
          name: "Learn CSS Box Model In 8 Minutes",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=rIO5326FgPE"
      },
      {
        name: "Introduction to the CSS basic box model - MDN Web Docs",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"
      }
    ]
  },
  {
    question: "What's the difference between == and === in JavaScript?",
    answer:
      "The double equals (==) uses implicit conversion when comparing values. If we compare the number 5 with the string \"5\" (5 == \"5\"), the string will be converted to a number and compared. The triple equals (===) does not implicitly convert so (\"5\" === 5) will return false.",
    tags: ["javascript"],
    type: "comparison",
    number: 9,
    id: "6b1n3qp",
    sources: [
      {
        name: "Which equals operator (== vs ===) should be used in JavaScript comparisons?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons"
      },
      {
        name: "== vs === - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=kVOmc7NK1M0"
      },
      {
        name: "Loose Equals vs. Strict Equals - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch4.md#loose-equals-vs-strict-equals"
      }
    ]
  },
  {
    question: "What's the difference between null and undefined in JavaScript?",
    answer:
      "undefined is given to a variable that has not been assigned a value. null can only be assigned by a developer.",
    tags: ["javascript"],
    type: "comparison",
    number: 10,
    id: "3xi3xlt",
    sources: [
      {
        name: "What is the difference between null and undefined in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript"
      },
      {
        name: "JavaScript for Developers 14 - Difference between undefined and null",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=JM-fQHknjh8"
      },
      {
        name: "JavaScript — Null vs. Undefined",
        site: "medium",
        url: "https://codeburst.io/javascript-null-vs-undefined-20f955215a2"
      }
    ]
  },
  {
    question:
      "What's the difference between undeclared and undefined in JavaScript?",
    answer:
      "Undeclared variables have not been referenced before in the current scope. Undefined variables have been declared but have not been assigned a value.",
    tags: ["javascript"],
    type: "comparison",
    number: 11,
    id: "h6uz3x9",
    sources: [
      {
        name: "variable === undefined vs. typeof variable === \"undefined\"",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/4725603/variable-undefined-vs-typeof-variable-undefined"
      },
      {
        name: "JavaScript for Developers 12 - Understanding undefined",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=oYhyG1M-W-o"
      },
      {
        name: "undefined vs \"undeclared\" - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch1.md#undefined-vs-undeclared"
      }
    ]

  },
  {
    question:
      "What's the difference between the window, screen, and document in the DOM?",
    answer:
      "The window refers to the object that represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. The document is nested in the window object and refers to the actual HTML code of the webpage.",
    tags: ["dom", "front-end", "javascript"],
    type: "comparison",
    number: 12,
    id: "p2y6csz",
    sources: [
      {
        name: "What is the difference between window, screen, and document in Javascript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript"
      },
      {
        name: "Javascript Window vs. Document vs. Screen WHAT??",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=pIBKyooZrJQ"
      },
      {
        name: "Window - MDN",
        site: "medium",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Window"
      }
    ]
  },
  {
    question: "What's the difference between event bubbling and capturing?",
    answer:
      'When a user interacts with a nested element and the event "bubbles" to the top through its ancestor elements. Capturing is the opposite where events are captured down to the deepest target.',
    tags: ["dom", "front-end", "javascript"],
    type: "definition",
    number: 13,
    id: "66ks56e",
    sources: [
      {
        name: "What is event bubbling and capturing?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing"
      },
      {
        name: "Event Bubbling and Capturing in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=sfKDOOJgbSI"
      },
      {
        name: "Event Bubbling and Event Capturing in JavaScript",
        site: "medium",
        url: "https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e"
      }
    ]
  },
  {
    question:
      "What's the difference between the call, apply, and bind functions in JavaScript?",
    answer:
      "Both are function prototypes that call the function while passing in a this object. apply takes in and array of arguments as the second function while call does not require the array and will take an infinite amount of arguments.",
    tags: ["javascript"],
    type: "comparison",
    number: 14,
    id: "z3okrth",
    sources: [
      {
        name: "Javascript call() & apply() vs bind()?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind"
      },
      {
        name: "JavaScript Practical Applications of Call, Apply and Bind functions",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=AYVYxezrMWA"
      },
      {
        name: "Javascript tips — Apply vs. Call vs. Bind",
        site: "medium",
        url: "https://medium.com/@leonardobrunolima/javascript-tips-apply-vs-call-vs-bind-d738a9e8b4e1"
      }
    ]
  },
  {
    question: "What's the difference between a shallow copy and deep copy in JavaScript?",
    answer:
      "Shallow copies do not consider the fields of an object that are references to other objects so it keeps the same memory addresses. Deep copies make a copy of dynamically allocated memory that is pointed to by the fields.",
    tags: ["javascript", "programming-fundamentals"],
    type: "comparison",
    number: 15,
    id: "q0u9qzk",
    sources: [
      {
        name: "What is the difference between a deep copy and a shallow copy?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy"
      },
      {
        name: "Copying Arrays (deep and shallow) - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=EeZBKv34mm4"
      },
      {
        name: "How to differentiate between deep and shallow copies in JavaScript",
        site: "free-code-camp",
        url: "https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/"
      }
    ]
  },
  {
    question: "What is immutability in JavaScript?",
    answer:
      "When we say something is immutable it means it we cannot modify it's value after assignment, we would need to create a copy of it. In JavaScript, numbers and strings are immutable while objects, arrays, functions, classes, sets, and maps are not.",
    tags: [ "javascript", "programming-fundamentals"],
    type: "definition",
    number: 16,
    id: "aplmx6f",
    sources: [
      {
        name: "What does immutable mean?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/3200211/what-does-immutable-mean"
      },
      {
        name: "Programming Terms: Mutable vs Immutable",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=5qQQ3yzbKp8",
      },
      {
        name: "Learn immutability with JavaScript",
        site: "medium",
        url: "https://medium.com/@cristiansalcescu/learn-immutability-with-javascript-6a67e4a48d7f"
      }
    ]
  },
  {
    question:
      "What are the 2 key features of React that set it apart from other frameworks?",
    answer:
      "React features JSX, a syntax extension to JavaScript that is similar to other templating languages but comes with the full power of JavaScript. React also uses a virtual dom which is a lightweight copy of the DOM that allows eliminates the need to constantly update the entire DOM which is slow.",
    tags: ["react-js", "javascript", "front-end"],
    type: "list",
    number: 17,
    id: "tc14j9c",
    sources: [
      {
        name: "What's the purpose of using React.js?",
        site: "quora",
        url: "https://www.quora.com/Whats-the-purpose-of-using-React-js"
      },
      {
        name: "Why React is Awesome",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=SH2tck0pHWI"
      },
      {
        name: "Why React Should Be Your First Choice?",
        site: "medium",
        url: "https://medium.com/swlh/why-react-should-be-your-first-choice-d469fe201c08"
      }
    ]
  },
  {
    question: "What is specificity in CSS?",
    answer:
      "Specificity refers to the weight that is applied to a given CSS declaration. Types < Classes < IDs < !Important keyword.",
    tags: ["css", "front-end"],
    type: "definition",
    number: 18,
    id: "hqwgumk",
    sources: [
      {
        name: "What is the rationale behind how CSS specificity works?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-rationale-behind-how-CSS-specificity-works"
      },
      {
        name: "CSS Basics (Part6) — Specificity",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=fy07HYm-geM"
      },
      {
        name: "CSS Specificity Didn’t Work the Way I Thought",
        site: "medium",
        url: "https://medium.com/@TedYav/css-specificity-didnt-work-the-way-i-thought-752148275033"
      }
    ]
  },
  {
    question:
      "What's the difference between visibility: hidden and display: none in CSS?",
    answer: "Visibility hidden renders in the DOM while display none does not.",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 19,
    id: "p6js7et",
    sources: [
      {
        name: "What is the difference between visibility:hidden and display:none?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone/27939784"
      },
      {
        name: "CSS display none vs visibility hidden",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=xZexBjHWSOs"
      },
      {
        name: "visbility",
        site: "mozilla",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
      }
    ]
  },
  {
    question: "What is a first class function in JavaScript?",
    answer:
      "JavaScript allows functions to be stored in a variable, object, or array and they can be passed into and returned from a other functions.",
    tags: ["javascript", "functional-programming"],
    type: "definition",
    number: 20,
    id: "pclvevr",
    sources: [
      {
        name: "What is meant by 'first class object'?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object"
      },
      {
        name: "First Class Functions in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=4UeWzn4jzwM"
      },
      {
        name: "JavaScript Weekly: An Introduction to First-Class Functions",
        site: "medium",
        url: "https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137"
      }
    ]
  },
  {
    question: "What is npm?",
    answer: "npm (node package manager) is the default package manager for Node.js. It features a CLI for downloading packages from it's online repository at https://www.npmjs.com/.",
    tags: ["node-js", "javascript"],
    type: "definition",
    number: 21,
    id: "kdt45mr",
    sources: [
      {
        name: "When and what is NPM used for?",
        site: "quora",
        url: "https://www.quora.com/When-and-what-is-NPM-used-for?"
      },
      {
        name: "What is npm? In 2 minutes - npm tutorial for beginners",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ZNbFagCBlwo"
      },
      {
        name: "What the heck is npm?",
        site: "medium",
        url: "https://medium.com/@tanya/what-the-heck-is-npm-b8168f61e3b5"
      }
    ]
  },
  {
    question: "What is an arrow function in JavaScript?",
    answer:
      "Arrow functions, new to ES6, are ways to write Lambda (nameless) functions. These functions however, do not have their own this value. They are bound to the enclosing scope.",
    tags: ["javascript", "functional-programming"],
    type: "definition",
    number: 22,
    id: "v3w9mjh",
    sources: [
      {
        name: "What is the arrow function in ES6? Why are we using arrow function?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-arrow-function-in-ES6-Why-are-we-using-arrow-function"
      },
      {
        name: "ARROW FUNCTIONS IN JAVASCRIPT",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=tHT_YdtVEaE"
      },
      {
        name: "ES6 Arrow Function Is Simple, This Article Just Made It Simpler For JS Beginners",
        site: "medium",
        url: "https://medium.com/ph-devconnect/es6-arrow-function-is-simple-this-article-just-made-it-simpler-for-js-beginners-e5a944af7fc6"
      }
    ]
  },
  {
    question: "What are features of a functional programming language?",
    answer:
      "1. First-class functions: functions can be stored in a variable object or array and can be passed in or returned from functions. 2. Higher Order Functions: (Factory Functions in JS) functions that can build other functions by taking a function as an argument. 3. Lambda functions (arrow functions in JS): A nameless function",
    tags: ["functional-programming", "javascript"],
    type: "list",
    number: 23,
    id: "5j07ive",
    sources: [
      {
        name: "Functional programming and non-functional programming",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/24279/functional-programming-and-non-functional-programming"
      },
      {
        name: "Functional Programming & Haskell - Computerphile",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=LnX3B9oaKzw"
      },
      {
        name: "Functional Programming",
        site: "medium",
        url: "https://medium.com/the-renaissance-developer/functional-programming-40dfe049461e"
      }
    ]
  },
  {
    question: "What is a higher order function in JavaScript?",
    answer:
      "These are functions that take a function as an argument and/or return a new function.",
    tags: ["javascript", "functional-programming"],
    type: "definition",
    number: 24,
    id: "qlcklyn",
    sources: [
      {
        name: "What is a simple explanation of higher order functions and callbacks in JavaScript?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-simple-explanation-of-higher-order-functions-and-callbacks-in-JavaScript"
      },
      {
        name: "Higher Order Functions Solution - Programming Languages",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Bci13zZe3yc"
      },
      {
        name: "Higher-order Functions In JavaScript",
        site: "medium",
        url: "https://medium.com/@js_tut/higher-order-functions-in-javascript-732dc7a1952d"
      }
    ]
  },
  {
    question:
      "What's the difference between classical and prototypal inheritance?",
    answer:
      "Classical relies on classes and prototypal relies on prototypes. Classes are immutable, you can't modify or add new methods at runtime while prototypes can be either. Classes may or may not support multiple inheritance where objects can inherit from multiple prototypes.",
    tags: ["object-oriented-programming", "functional-programming", "javascript"],
    type: "comparison",
    number: 25,
    id: "b5yf47h",
    sources: [
      {
        name: "Benefits of prototypal inheritance over classical?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical/16872315"
      },
      {
        name: "[JavaScript Tutorials] 15 Conceptual Aside Classical vs Prototypal Inheritance",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=gX1GMwOXOxk"
      },
      {
        name: "Classical vs. Prototypal Inheritance",
        site: "dev",
        url: "https://dev.to/crishanks/classical-vs-prototypal-inheritance-2o5a"
      }
    ]
  },
  {
    question: "What are the 3 property descriptors in JavaScript?",
    answer:
      "1. configurable: alters ability to change other property descriptors and delete the property. 2. enumerable : changes whether the property is displayed when the object is looped over. 3. writable : whether the value can be changed.",
    tags: ["javascript"],
    type: "list",
    number: 26,
    id: "8ap4fbp",
    sources: [
      {
        name: "JavaScript Object Property Descriptors",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=LD1tQEWsjz4"
      },
      {
        name: "JavaScript — Property Descriptor",
        site: "medium",
        url: "https://codeburst.io/javascript-object-property-attributes-ac012be317e2"
      },
      {
        name: "Property Descriptors - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#property-descriptors"
      }
    ]
  },
  {
    question:
      "What is the purpose of Object.preventExtensions( ) in JavaScript?",
    answer:
      "When an object is passed into this function, an error will be thrown when there is an attempt to define a property on the object.",
    tags: ["javascript"],
    type: "definition",
    number: 27,
    id: "r8jroi9",
    sources: [
      {
        name: "Object.preventExtensions() - MDN Web Docs",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"
      },
      {
        name: "JavaScript Video Tutorial - Preventing Extensions on an Object",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=EzWcVZ1QSM8"
      },
      {
        name: "Prevent Extensions - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#prevent-extensions"
      }
    ]
  },
  {
    question:
      "What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?",
    answer:
      "Object.seal( ): Prevent new properties being added and marks existing properties as non-configurable but they are still writable. Object.freeze( ) Will do same as seal but not have the values be writable. Object.deepFreeze is not a built in function but it means to freeze the properties of objects nested in the main object.",
    tags: ["javascript"],
    type: "comparison",
    number: 28,
    id: "oais0xm",
    sources: [
      {
        name: "Variable immutability with Object freeze, seal and preventExtensions methods",
        site: "medium",
        url: "https://medium.com/@obaranovskyi/variable-immutability-with-object-freeze-seal-and-preventextensions-methods-7e0d2ebfd920"
      },
      {
        name: "Object seal, freeze, and preventExtensions",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ZdF2aOYpIqw"
      },
      {
        name: "Seal, Freeze - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#seal"
      },
    ]
  },
  {
    question:
      "What's the difference between the typeof and instanceof operators in JavaScript?",
    answer:
      "The typeof operator returns a string indicating the type of the operand while the instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.",
    tags: ["javascript"],
    type: "comparison",
    number: 29,
    id: "wbnjha9",
    sources: [
      {
        name: "What is the difference between typeof and instanceof and when should one be used vs. the other?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/899574/what-is-the-difference-between-typeof-and-instanceof-and-when-should-one-be-used"
      },
      {
        name: "JavaScript for Developers 16 - The typeof operator",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ol_su88I3kw"
      },
      {
        name: "instanceof vs. typeof",
        site: "globe",
        url: "https://bambielli.com/til/2017-06-18-typeof-vs-instanceof/"
      }
    ]
  },
  {
    question:
      "What's the difference between the in and hasOwnProperty operators in JavaScript?",
    answer:
      "The in property returns true if the specified property is in the specified object or it's prototype chain while hasOwnProperty will return true if the object has the specified property as it's own (not just from the prototype chain)",
    tags: ["javascript"],
    type: "comparison",
    number: 30,
    id: "g2hzd3v",
    sources: [
      {
        name: "if (key in object) or if(object.hasOwnProperty(key)",
        type: "stack-overflow",
        url: "https://stackoverflow.com/questions/13632999/if-key-in-object-or-ifobject-hasownpropertykey"
      },
      {
        name: "Check if a property is in an object - Beau teaches JavaScript",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=dpTFcPUe2oo"
      },
      {
        name: "The Uses of 'in' vs 'hasOwnProperty'",
        type: "globe",
        url: "http://adripofjavascript.com/blog/drips/the-uses-of-in-vs-hasownproperty.html"
      }
    ]
  },
  {
    question:
      "What are the 4 rules for determining what \"this\" refers to in JavaScript?",
    answer:
      "1. Called with new? Use the newly constructed object. 2. Called with call, apply, or bind? Use that specified object. 3. Called with a context object owning the call? Use that context object. 4. Default: undefined in strict mode and global object otherwise.",
    tags: ["javascript"],
    type: "list",
    number: 31,
    id: "8gkoaid",
    sources: [
      {
        name: "How does the \"this\" keyword work?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/17514482"
      },
      {
        name: "JavaScript Tutorial For Beginners #29 - THIS Keyword",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=yVdU2coJ1VQ"
      },
      {
        name: "this all Makes Sense Now! - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#review-tldr"
      }
    ]
  },
  {
    question:
    "What are the 4 events that occur when a function is invoked with the \"new\" keyword?",
    answer:
      "1. A brand new object is created (aka, constructed) out of thin air. 2. The newly constructed object is prototype linked. 3. The newly constructed object is set as the this binding for that function call. 4. Unless the function returns its own alternate object, the new invoked function call will automatically return the newly constructed object",
    tags: ["javascript"],
    type: "list",
    number: 32,
    id: "zrhh9vo",
    sources: [
      {
        name: "What is the 'new' keyword in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/3658673"
      },
      {
        name: "Using the new Keyword in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=I2CdrKlPdAY"
      },
      {
        name: "new Binding - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#new-binding"
      }
    ]
  },
  {
    question:
      "What's the difference between accessing an object through the property method and key method?",
    answer:
      'The property method (object.property) is the common method to declare an access an object\'s properties. The key method (object["property"]) takes in a string as the property which means you can access variable unusual characters like spaces. You can also pass in computed property names in the key method.',
    tags: ["javascript"],
    type: "comparison",
    number: 33,
    id: "88x8ubo",
    sources: [
      {
        name: "Property Accessors - MDN Web Docs",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
      },
      {
        name: "Object properties and propety accessors in JS",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=sXed76BTqfA"
      },
      {
        name: "Objects - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#contents"
      }
    ]
  },
  {
    question: "What is an IIFE in JavaScript?",
    answer:
      "An IIFE is an Immediately Invoked Function Expression which runs as soon as it's defined by adding ( ) to the end of the function scope. These functions don't need names so the most common form is an anonymous function.",
    tags: ["javascript"],
    type: "definition",
    number: 34,
    id: "7h9x8fl",
    sources: [
      {
        name: "What is the (function() { } )() construct in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/8228308"
      },
      {
        name: "Scopes and Closures In-dept 06 - IIFE",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=q21QSRpNaAQ"
      },
      {
        name: "Invoking Function Expressions Immediately - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#invoking-function-expressions-immediately"
      }

    ]
  },
  {
    question: "What is SEO?",
    answer:
      "SEO, Search Engine Optimization is the process of increasing the quality and quantity of a website traffic by increasing the visibility of a website or a web page to users of a web search engine.",
    tags: ["front-end"],
    type: "definition",
    number: 35,
    id: "a945jyi",
    sources: [
      {
        name: "A guide to SEO FOr the Impatient",
        site: "medium",
        url: "https://medium.com/swlh/a-guide-to-seo-for-the-impatient-2878b5d02967"
      },
      {
        name: "What is SEO and How Does it Work? (2019)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=D7UxlkwdYc0"
      }
    ]
  },
  {
    question: "What are some ways to increase SEO?",
    answer:
      "- Specifying an alt tag on images, Add an XML sitemap, Avoid broken links, Add a robots.txt file, Specify a favicon, Avoid JavaScript errors, Optimize assets (including minification), Enable and force SSL, Include detailed meta tags",
    tags: ["front-end"],
    type: "list",
    number: 36,
    id: "hcyc0aa",
    sources: [
      {
        name: "What are the best ways to increase a site's position in Google?",
        site: "stack-overflow",
        url: "https://webmasters.stackexchange.com/questions/2/what-are-the-best-ways-to-increase-a-sites-position-in-google"
      },
      {
        name: "How to Improve Your Google Rankings Fast: 9 Steps to Rank Higher Using Analytics",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=xI1SicZRve0"
      },
      {
        name: "SEO best practices - 17 tips to seriously improve SEO",
        site: "medium",
        url: "https://medium.com/@felixtarcomnicu/seo-best-practices-17-tips-to-seriously-improve-seo-e4f4af6d57ef"
      }
    ]
  },
  {
    question: "What's the difference between HTML sitemaps and XML sitemaps?",
    answer:
      "",
    tags: ["front-end"],
    type: "comparison",
    number: 37,
    id: "pl11mhl",
    sources: [
      {
        name: "What is the difference between HTML sitemaps and XML sitemaps?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-difference-between-HTML-sitemaps-and-XML-sitemaps"
      },
      {
        name: "31: How to Create an XML Sitemap | Register a Sitemap with Google | Learn HTML & CSS | HTML Tutorial",
        site: "youtube",
        url: "https://youtu.be/xtoAfUB6Ubw?t=178"
      },
      {
        name: "Search the Daily Egg What Are the SEO Benefits of XML & HTML Sitemaps?",
        site: "globe",
        url: "https://www.crazyegg.com/blog/seo-benefits-of-xml-html-sitemaps/"
      }
    ]
  },
  {
    question: "What is the robots.txt file?",
    answer:
      "robots.txt gives instructions about a site to web crawlers. These instructions are called the Robots Exclusion Protocol. You can use this file to specify endpoints that should be avoided however malicious bots can still access these endpoints since the file is publicly available.",
    tags: ["front-end"],
    type: "definition",
    number: 38,
    id: "6wuyr6o6",
    sources: [
      {
        name: "What is robots.txt and what is it used for?",
        site: "quora",
        url: "https://www.quora.com/What-is-robots-txt-and-what-is-it-used-for"
      },
      {
        name: "What is a Robots.txt File? (An Overview for SEO + Key Insight)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=LlJy5LRkUfs"
      },
      {
        name: "What is a robots.txt file?",
        site: "medium",
        url: "https://medium.com/@sourabhnagori/what-is-a-robots-txt-file-8c398ac9f8b4"
      }
    ]
  },
  {
    question: "What is minification?",
    answer:
      "Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser. A minifier might remove comments, spaces, unused code, and use shorter variable and function names.",
    tags: ["front-end"],
    type: "definition",
    number: 39,
    id: "ak3z66u",
    sources: [
      {
        name: "What is the real difference between a minified and uncompressed file? What are the benefits of each?",
        site: "stack-overflow",
        url: "https://softwareengineering.stackexchange.com/a/232588"
      },
      {
        name: "Website Performance Tutorial #8 - Minify Your CSS & JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=8aAuNQqgGAg",
      },
      {
        name: "Gzipping vs Minification: What the heck?",
        site: "medium",
        url: "https://medium.com/@manuelro/gzipping-vs-minification-what-the-heck-ba698fa6037c"
      }
    ]
  },
  {
    question: "What is a favicon?",
    answer:
      "A favicon (favorite icon) is a 16 x 16 or 32 x 32 .ico file that is shown next to the title of a webpage in the browser.",
    tags: ["front-end"],
    type: "definition",
    number: 40,
    id: "1rqbpy8",
    sources: [
      {
        name: "How to set-up a favicon?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/54826033"
      },
      {
        name: "Add A Favicon to A Website in HTML | Learn HTML and CSS | HTML Tutorial | HTML for Beginners",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=kEf1xSwX5D8"
      },
      {
        name: "How to Create a Favicon For Your Website",
        site: "medium",
        url: "https://medium.com/@hansfinest/how-to-create-a-favicon-for-your-website-89b031e6448b"
      }
    ]
  },
  {
    question: "What is SSL?",
    answer:
      "SSL (secure sockets layer) is the standard security technology for establishing an encrypted link between a web server and a browser. Without SSL, data sent between clients and servers is sent in plain text. HTTP + SSL = HTTPS",
    tags: ["front-end", "back-end", "security", "networking"],
    type: "definition",
    number: 41,
    id: "s6txkx8",
    sources: [
      {
        name: "What is SSL and how does it relate to HTTPS?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/45122215"
      },
      {
        name: "What is SSL and how does it work?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=rROgWTfA5qE"
      },
      {
        name: "What is SSL and How Does it Work?",
        site: "medium",
        url: "https://medium.com/@User3141592/what-is-ssl-and-how-does-it-work-a5465d19b494"
      }
    ]
  },
  {
    question: "What are the steps of a three-way handshake",
    answer:
      "A method used in TCP/IP network to create a connection: 1. SYN:  Client sends packet with random sequence number to the server. 2. SYN-ACK:. Server responds with +1 to sequence number. 3. ACK: Client sends back messaging saying handshake has been complete. ",
    tags: ["networking"],
    type: "list",
    number: 42,
    id: "gcgapp29",
    sources: [
      {
        name: "two-way handshake and three-way handshake",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/23774096"
      },
      {
        name: "TCP Three Way Handshake",
        site: "youtube",
        url: "https://youtu.be/8-WpoF1cLtc?t=17"
      },
      {
        name: "TCP 3-Way Handshake",
        site: "medium",
        url: "https://medium.com/@yildirimabdrhm/tcp-3-way-handshake-2e4d4d674ff6"
      }
    ]
  },
  {
    question: "What is a SYN flood?",
    answer:
      "A form of denial of service attack in which an attacker sends a succession of SYN requests to a target's system in attempt to consume enough server resources to make the system unresponsive to legitimate traffic.",
    tags: ["networking", "security"],
    type: "definition",
    number: 43,
    id: "9oosnwu",
    sources: [
      {
        name: "What is SYN flood?",
        site: "quora",
        url: "https://www.quora.com/What-is-SYN-flood"
      },
      {
        name: "02 05 SYN Flood Attacks",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=-FPawMupsKY"
      },
      {
        name: "Understanding DDOS Attack",
        site: "medium",
        url: "https://medium.com/@kapil.sharma91812/understanding-ddos-attack-15dd2cbce2a"
      }
    ]
  },
  {
    question: "What's the difference between a DOS and a DDOS attack?",
    answer:
      "A DDOS (Distributed Denial of Service) attack is more threatening because it means the attempts to override the target with traffic are coming from multiple IP Addresses (DOS is only 1). This makes it difficult to distinguish legitimate traffic from malicious.",
    tags: ["networking", "security"],
    type: "comparison",
    number: 44,
    id: "bl8ay5n",
    sources: [
      {
        name: "What is a DoS Attack and how does it differ from a DDoS attack?",
        site: "stack-overflow",
        url: "https://security.stackexchange.com/questions/22809/what-is-a-dos-attack-and-how-does-it-differ-from-a-ddos-attack",
      },
      {
        name: "DDoS Attack — Explained",
        site: "medium",
        url: "https://medium.com/datadriveninvestor/ddos-attack-explained-9d67d467b1aa",
      },
      {
        name: "DDoS Attacks as Fast As Possible",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=0I4O4hoKzb8",
      }
    ]
  },
  {
    question: "What is the purpose of a meta tag?",
    answer:
      "Meta tags offer metadata about the HTML page. This can include description, keywords, author, viewport, and charset.",
    tags: ["html", "front-end"],
    type: "definition",
    number: 45,
    id: "6t7vsuj",
    sources: [
      {
        name: "What is a meta tag?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-meta-tag",
      },
      {
        name: "27: Which HTML Meta Tags Are Required in A Website? | Learn HTML and CSS | HTML Tutorial | HTML SEO",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=o3Gfsc6kihk",
      },
      {
        name: "Beginners Guide: Meta tags",
        site: "medium",
        url: "https://medium.com/@vinesheg/beginners-guide-meta-tags-217e6e0dfda6",
      }
    ]
  },
  {
    question: "What is DOCTYPE in html?",
    answer:
      "You need to use <!DOCTYPE html> at the top of your HTML file. This is not an HTML tag, this is an instruction to the web browser about what version of HTML the page is written in.",
    tags: ["html", "front-end"],
    type: "definition",
    number: 46,
    id: "ph1xzdn",
    sources: [
      {
        name: "What is DOCTYPE?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/414993",
      },
      {
        name: "What is DOCTYPE in HTML",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=-nzV5MlFIkM",
      },
      {
        name: "Why Do We Write <! DOCTYPE html> ?",
        site: "medium",
        url: "https://medium.com/@islam.sayed8/why-do-we-write-doctype-html-fe2797a3f1c8",
      }
    ]
  },
  {
    question: "What is HTTP keep-alive?",
    answer:
      "HTTP keep-alive, aka HTTP persistent connection is an instruction that allows a single TCP connection to remain open for multiple HTTP requests/responses. Enabling the keep-alive header allows you to serve all web page resources over a single connection thus reducing client load times and server load.",
    tags: ["networking"],
    type: "definition",
    number: 47,
    id: "wsyrzjr",
    sources: [
      {
        name: "How does http keep-alive work?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/20764180",
      },
      {
        name: "2.08 - Non Persistent & Persistent HTTP Connection - Part II",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=-Zzb95r0bxg",
      },
      {
        name: "Persistent HTTPS Connections: Reduce API call time by 50%",
        site: "medium",
        url: "https://medium.com/@msyshani/persistent-https-connections-reduce-api-call-time-by-50-3ca23723b336",
      }
    ]
  },
  {
    question: "What is DNS?",
    answer:
      "DNS (Domain Name System) the program that translates a hostname (google.com) to an IP address (8.8.4.4).",
    tags: ["networking"],
    type: "definition",
    number: 48,
    id: "vuuwgas",
    sources: [
      {
        name: "What is DNS? How does it work?",
        site: "quora",
        url: "https://www.quora.com/What-is-DNS-How-does-it-work",
      },
      {
        name: "DNS as Fast As Possible",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Rck3BALhI5c",
      },
      {
        name: "DNS in One Picture",
        site: "medium",
        url: "https://medium.com/@kamranahmedse/dns-in-one-picture-d7f4783db06a",
      }
    ]
  },
  {
    question:
      "What's the difference between Art Direction and Resolution Switching?",
    answer:
      "Art Direction refers to serving several images potentially at the same resolution but cropped differently or with different aspect resolutions to optimize user experience. Resolution switching refers to offering different resolutions for images based on the size of the screen accessing them in order to lower bandwidth.",
    tags: ["front-end"],
    type: "comparison",
    number: 49,
    id: "x2ux0c6",
    sources: [
      {
        name: "Difference between HTML implementation for Art Direction and Resolution Switching (responsive images)",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/52347345",
      },
      {
        name: "8 Responsive Images in HTML Art Direction and Density Switching",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=vfd10kL5skA",
      },
      {
        name: "Responsive images - MDN Web Docs",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
      }
    ]
  },
  {
    question: "What's the difference between CSS Flexbox and CSS Grid?",
    answer:
      "Flexbox allows item's width and height to change (flex) to fill the available space while CSS grid is a set width and height for all elements and keeps the same scale.",
    tags: ["front-end", "css"],
    type: "comparison",
    number: 50,
    id: "pu6qt9b",
    sources: [
      {
        name: "Should I use Flexbox or Grid?",
        site: "quora",
        url: "https://www.quora.com/Should-I-use-Flexbox-or-Grid",
      },
      {
        name: "Flexbox vs. CSS Grid — Which is Better?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=hs3piaN4b5I",
      },
      {
        name: "Beginner’s Guide To CSS Grid And Flexbox",
        site: "medium",
        url: "https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412",
      }
    ]
  },
  {
    question: "What are the SOLID principles?",
    answer:
      "SOLID is an acronym to remember fundamental software engineering principles. S - Single responsibility. O - Open Closed. L - Liskov substitution. I - Interface Segregation. D - Dependency Inversion",
    tags: ["software-engineering", "design-patterns", "object-oriented-programming"],
    type: "list",
    number: 51,
    id: "wl5p003",
    sources: [
      {
        name: "Can't seem to understand SOLID principles and design patterns [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/13692196",
      },
      {
        name: "S.O.L.I.D. Principles of Object-Oriented Design - A Tutorial on Object-Oriented Design",
        site: "youtube",
        url: "https://youtu.be/GtZtQ2VFweA?t=112",
      },
      {
        name: "The SOLID Principles",
        site: "medium",
        url: "https://blog.usejournal.com/the-solid-principles-80f8dbdec114",
      }
    ]
  },
  {
    question:
      "What's the difference between React.js and Angular.JS's approach on data binding? ",
    answer:
      "React.js uses a one-way data flow while Angular uses two-way binding. Two-way data binding means UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa. One-way data flow means the model is the single source of truth such that changes in the UI trigger measures that signal user intent to the model. Only the model has access to change the states app's state.",
    tags: ["front-end", "javascript", "react-js", ],
    type: "comparison",
    number: 52,
    id: "aydefca",
    sources: [
      {
        name: "What advantages does two-way data binding have over unitary data flow models?",
        site: "quora",
        url: "https://www.quora.com/What-advantages-does-two-way-data-binding-have-over-unitary-data-flow-models"
      },
      {
        name: "Tech Talk: 1 vs 2 way Data Binding in React and Angular",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=DUP5TJtBL3I"
      },
      {
        name: "React.js vs Angular",
        site: "medium",
        url: "https://medium.com/@davisonpro/react-js-vs-angular-7a7bed92b5f6"
      }
    ]
  },
  {
    question:
      "What's the difference between monolithic and microservice architectures?",
    answer:
      "Monolithic uses a set of identical servers behind a load balance while microservices relies on decoupling all servers and spreading them across virtual machines on servers.",
    tags: ["design-patterns", "back-end"],
    type: "comparison",
    number: 53,
    id: "92i4liw",
    sources: [
      {
        name: "Microservices vs Monolithic Architecture [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/33662057",
      },
      {
        name: "Monolithic vs Microservice Architecture Debate",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=RJkn9VHM7lc",
      },
      {
        name: "Monolithic vs Microservice Architecture",
        site: "medium",
        url: "https://medium.com/@raycad.seedotech/monolithic-vs-microservice-architecture-e74bd951fc14",
      },
    ],
  },
  {
    question:
      "What's the difference between synchronous and asynchronous programming?",
    answer:
      "When trying to grab data in synchronous you would need to wait until all the data has been received but with asynchronous you won't need to wait (block), you will be alerted later when the data has been returned.",
    tags: ["programming-fundamentals", "javascript"],
    type: "comparison",
    number: 54,
    id: "xsn9zys",
    sources: [
      {
        name: "Asynchronous vs synchronous execution, what does it really mean?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/748235",
      },
      {
        name: "Asynchronous Vs Synchronous Programming",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Kpn2ajSa92c",
      },
      {
        name: "Async vs Sync",
        site: "medium",
        url: "https://medium.com/@pjbrn26/async-vs-sync-d369a4ef95e5",
      },
    ]
  },
  {
    question: "What is the open/closed principle?",
    answer:
      "Object oriented principle that states software entities should be open for extension but closed for modification. The base functionality shouldn't change but additional features can be added.",
    tags: ["object-oriented-programming", "design-patterns"],
    type: "definition",
    number: 55,
    id: "fr08j5g",
    sources: [
      {
        name: "What is the meaning and reasoning behind the Open/Closed Principle?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/59427",
      },
      {
        name: "Understanding the Open Closed Principle",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Ryhy7333mqQ",
      },
      {
        name: "OCP: The Open-Closed Principle",
        site: "medium",
        url: "https://medium.com/@gabriellamedas/ocp-the-open-closed-principle-b994922bed94",
      },
    ]
  },
  {
    question: "What is the Liskov substitution principle?",
    answer:
      "Object oriented principle that states functions that use pointers to base classes must be able to use objects of derived classes without knowing it.",
    tags: ["object-oriented-programming", "design-patterns"],
    type: "definition",
    number: 56,
    id: "l3aa7or",
    sources: [
      {
        name: "What is an example of the Liskov Substitution Principle?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/584732",
      },
      {
        name: "Understanding the Liskov Substitution Principle",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Mmy1EUKC_iE",
      },
      {
        name: "The Liskov Substitution Principle",
        site: "medium",
        url: "https://medium.com/@dholnessii/the-liskov-substitution-principle-3d2b65ae6a65",
      },
    ]
  },
  {
    question: "What is the Interface Segregation Principle?",
    answer: "Object oriented design pattern that states no client should be forced to depend on methods it does not use.",
    tags: ["object-oriented-programming", "design-patterns"],
    type: "definition",
    number: 57,
    id: "id38a",
    sources: [
      {
        name: "What is the interface segregation principle (ISP)?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-interface-segregation-principle-ISP",
      },
      {
        name: "OOP Design Principles: Interface Segregation Principle",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Ye1h3zKl1lg",
      },
      {
        name: "Interface Segregation Principle",
        site: "medium",
        url: "https://medium.com/@bean00/interface-segregation-principle-433b39ba5303",
      },
    ]
  },
  {
    question: "What is the dependency inversion principle?",
    answer:
      "Object oriented design pattern that states high level modules should not depend on low level modules. Both should depend on abstractions. These abstractions should not depend on details the details should depend on abstractions.",
    tags: ["object-oriented-programming", "design-patterns"],
    type: "definition",
    number: 58,
    id: "68tbjwa",
    sources: [
      {
        name: "What is the dependency inversion principle and why is it important?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/62577",
      },
      {
        name: "OOP Design Principles: Dependency Inversion Principle",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=qL2-5g_lJTs",
      },
      {
        name: "Dependency Inversion Principle",
        site: "medium",
        url: "https://medium.com/@mglover/dependency-inversion-principle-c0264a405d57",
      },
    ]
  },
  {
    question: "What's the difference between the YAGNI and KISS principles?",
    answer:
      "KISS (Keep it Simple Stupid / Keep it Stupid Simple) is a design principle noted by the US Navy that states systems work best when they are kept simple wheras the YAGNI (You Aren't Gonna Need It) states that you shouldn't add extra functionality until it becomes a necessity to the application.",
    tags: ["software-engineering"],
    type: "comparison",
    number: 59,
    id: "2gg7zgj",
    sources: [
      {
        name: "What's the difference between principles YAGNI and KISS?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/52804673",
      },
      {
        name: "Software Development Principles - DRY, KISS, & YAGNI - #09",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=4qPYWBHkS4w",
      },
      {
        name: "How to become a better programmer?",
        site: "medium",
        url: "https://medium.com/@derodu/design-patterns-kiss-dry-tda-yagni-soc-828c112b89ee",
      },
    ]
  },
  {
    question: "What are React Hooks?",
    answer:
      "React hooks allows us to only write function in JavaScript and removes the need for the class and this keywords.",
    tags: ["front-end", "javascript", "react-js", ],
    type: "definition",
    number: 60,
    id: "5xgvj56",
    sources: [
      {
        name: "What are React hooks?",
        site: "quora",
        url: "https://www.quora.com/What-are-React-hooks",
      },
      {
        name: "#1 What Are React Hooks?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=d-aAs_4SQ7c",
      },
      {
        name: "React Hooks — Why and How",
        site: "medium",
        url: "https://medium.com/frontmen/react-hooks-why-and-how-e4d2a5f0347",
      },
    ]
  },
  {
    question: "What's the difference between Context API and React Redux?",
    answer:
      "The Context API is a feature of React itself, Redux is a predictable state container for JS apps in general. There is greater functionality behind Redux however it is not meant solely for React.",
    tags: ["react-js", "front-end", "javascript", ],
    type: "comparison",
    number: 61,
    id: "be08gkk",
    sources: [
      {
        name: "React Context vs React Redux, when should I use each one? [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/49569183",
      },
      {
        name: "Redux or Context in React",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=5gUHfe-ETuo",
      },
      {
        name: "React Context vs Redux",
        site: "medium",
        url: "https://medium.com/@hnkn1998/react-context-vs-redux-e507e9059a06",
      },
    ]
  },
  {
    question: "What's the difference between behavior and test driven development?",
    answer:
      "Behavior driven is a specialized form of test driven that focuses on the behavioral aspect of the system rather than the implementation aspect. Behavior gives a clearer understanding as to what the system should do from the perspective of both the developer and customer.",
    tags: ["software-engineering"],
    type: "comparison",
    number: 62,
    id: "ebvqb8e",
    sources: [
      {
        name: "What is the difference between test driven development (TDD) and behaviour driven development (BDD)?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-difference-between-test-driven-development-TDD-and-behaviour-driven-development-BDD",
      },
      {
        name: "Test Driven Development vs Behaviour Driven Development + FREE CHEAT SHEET",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=4QFYTQy47yA",
      },
      {
        name: "TDD vs BDD",
        site: "medium",
        url: "https://medium.com/@pkentrytest/tdd-vs-bdd-9361f632ee4e",
      },
    ]
  },
  {
    question: "What are the 7 JavaScript Primary Data Types?",
    answer: "Number, String, Boolean, Object, Null, Undefined and Symbol",
    tags: ["javascript"],
    type: "list",
    number: 63,
    id: "qpw4l0b",
    sources: [
      {
        name: "JavaScript data types and data structures - MDN Web Docs",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types",
      },
      {
        name: "Data Types - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=808eYu9B9Yw",
      },
      {
        name: "Built-in Types - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch1.md#built-in-types",
      },
    ]
  },
  {
    question: "Who is the creator of JavaScript?",
    answer: "Brendan Eich from Netscape built JavaScript in 10 days.",
    tags: ["javascript"],
    type: "definition",
    number: 64,
    id: "etjgjsd",
    sources: [
      {
        name: "Who made JavaScript?",
        site: "qoura",
        url: "https://www.quora.com/Who-made-JavaScript",
      },
      {
        name: "The Weird History of JavaScript",
        site: "youtube",
        url: "https://youtu.be/Sh6lK57Cuk4?t=84",
      },
      {
        name: "A brief history of JavaScript",
        site: "medium",
        url: "https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17",
      },
    ]
  },
  {
    question: "What is Void(0) in JavaScript?",
    answer:
      "Void(0) can be used to prevent the page from refreshing because it calls another method instead.",
    tags: ["javascript"],
    type: "definition",
    number: 65,
    id: "3kdsb9p",
    sources: [
      {
        name: "What does `void 0` mean? [duplicate]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/7452352/9715166",
      },
      {
        name: "javascript void(0) - Explaination and How to use",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=xcQPwaig4nI",
      },
      {
        name: "What is the difference between href=“”, href=“#” and href=“javascript:void(0)”",
        site: "medium",
        url: "https://medium.com/@heitorhherzog/what-is-the-difference-between-href-href-and-href-javascript-void-0-54e3cf31c9bd",
      },
    ]
  },
  {
    question: "What is a cookie?",
    answer:
      "A cookie is a small test file that gets created when a user visits a website. Cookies are sent to the back-end to be used to keep track of user sessions.",
    tags: ["front-end", "back-end"],
    type: "definition",
    number: 66,
    id: "78k7tjt",
    sources: [
      {
        name: "How cookies work?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1968734/9715166",
      },
      {
        name: "Cookies As Fast As Possible",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=BTlq6WmWqMk",
      },
      {
        name: "Sessions and cookies",
        site: "medium",
        url: "https://medium.com/@piraveenaparalogarajah/sessions-and-cookies-2c0919552f29",
      },
    ]
  },
  {
    question:
      "What is the difference between lexical scope and dynamic scope in JavaScript?",
    answer:
      "When we traverse up the lexical scope we are looking at the nesting of brackets {} but when we traverse up dynamic scope we are following the function call's scopes.",
    tags: ["programming-fundamentals", "javascript"],
    type: "comparison",
    number: 67,
    id: "swl1uaa",
    sources: [
      {
        name: "Static (Lexical) Scoping vs Dynamic Scoping (Pseudocode)",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/22395580/9715166",
      },
      {
        name: "006 Lexical Scope",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=dHYhMP8ESuk",
      },
      {
        name: "Chapter 2: Lexical Scope - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#chapter-2-lexical-scope",
      },
    ]
  },
  {
    question: "What's the difference between innerText and innerHTML?",
    answer:
      "Unlike innerText, innerHTML lets you work with HTML rich text and doesn't automatically encode and decode text. In other words, innerText retrieves and sets the content of the tag as plain text, whereas innerHTML retrieves and sets the content in HTML format.",
    tags: ["javascript", "dom", "html"],
    type: "comparison",
    number: 68,
    id: "hunyfsa",
    sources: [
      {
        name: "Difference between innerText and innerHTML",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/19032002/9715166",
      },
      {
        name: ".innerHTML vs .innerText",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=A0inUUp5Q3o",
      },
      {
        name: "What’s Best: innerText vs. innerHTML vs. textContent",
        site: "medium",
        url: "https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc",
      },
    ]
  },
  {
    question: "What's the difference between innerText and textContent?",
    answer:
      "innerText returns the visible text contained in a node, while textContent returns the full text. innerText was non-standard, while textContent was standardized earlier.",
    tags: ["javascript", "dom", "html"],
    type: "comparison",
    number: 69,
    id: "waw420c",
    sources: [
      {
        name: "Difference between textContent vs innerText",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/35213639/9715166",
      },
      {
        name: "textContent vs innerHTML in the JavaScript DOM",
        site: "youtube",
        url: "textContent vs innerHTML in the JavaScript DOM",
      },
      {
        name: "What’s Best: innerText vs. innerHTML vs. textContent",
        site: "medium",
        url: "https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc",
      },
    ]
  },
  {
    question: "What are the 7 types of errors in JavaScript?",
    answer:
      "EvalError, InteernalError, RangeError, ReferenceError, SyntaxError, TypeError, and URIError.",
    tags: ["javascript"],
    type: "list",
    number: 70,
    id: "10qgphm",
    sources: [
      {
        name: "Error - MDN Web Docs",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types"
      },
      {
        name: "Errors in JavaScript / Intro to JavaScript ES6 programming, lesson 7",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=O0EHKBi7iXU"
      },
      {
        name: "Type of errors in JavaScript",
        site: "medium",
        url: "https://medium.com/@wlodarczyk_j/type-of-errors-in-javascript-18458ba9d818"
      }
    ]
  },
  {
    question:
      "What's the difference between onload and ready events?",
    answer:
      "The ready event occurs after the HTML document has been loaded, while the onload event occurs later, when all content (e.g. images) also has been loaded.",
    tags: ["dom", "javascript"],
    type: "comparison",
    number: 71,
    id: "lh4ywi9",
    sources: [
      {
        name: "window.onload vs $(document).ready()",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/3698214/9715166"
      },
      {
        name: "🔥 window.onload VS document.ready 🔥 The Difference",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=3dnc-gmlDvw"
      },
    ]
  },
  {
    question: "What is JSONP?",
    answer:
      "JSONPadding was used to circumvent the restriction that JavaScript files cannot make calls to domains that are not where that file originates from, (to avoid cross site scripting). Instead, JavaScript code is used to generate script tags with the domain of the server to fetch data from, thus the browser will call to the domain hoping to fetch a JavaScript file. The src file will include a parameter ?callback=variable which will execute JavaScript code that returns JSON and assigns it to that variable.",
    tags: ["javascript", "front-end"],
    type: "explanation",
    number: 72,
    id: "9aobgwf",
    sources: [
      {
        name: "How does the JSONP work?",
        site: "quora",
        url: "https://www.quora.com/How-does-the-JSONP-work"
      },
      {
        name: "2.5 cors, json, jsonp - undergrad webdev summer 1 2017",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=stvCHJZq5MI"
      },
      {
        name: "Cross domain, cross browser ajax with JSONP",
        site: "medium",
        url: "https://medium.com/creative-technology-concepts-code/cross-domain-cross-browser-ajax-with-jsonp-96f49484d765"
      },
    ],
  },
  {
    question:
      "What's the difference between an event-handler and even-listener?",
    answer:
      "A listener is an object that subscribes for events from a source, you can have many listeners subscribing for each type of event. A handler is an object that is responsible for handling certain events where you would only have one handler for each type of event.",
    tags: ["javascript"],
    type: "comparison",
    number: 73,
    id: "3secxr9",
    sources: [
      {
        name: "What's the difference between Event Listeners & Handlers in Java?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/4725342"
      },
      {
        name: "33: What Are JavaScript Events | JavaScript Events | JavaScript Tutorial | mmtuts",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=mlxi1WUSO_8"
      },
      {
        name: "Programmer dictionary: Event listener vs event handler",
        site: "medium",
        url: "https://blog.kotlin-academy.com/programmer-dictionary-event-listener-vs-event-handler-305c667d0e3c"
      },
    ],
  },
  {
    question:
      "What is the difference between the availWidth/height and width/height in the JavaScript Screen Object?",
    answer:
      "The availWidth/height returns the height/width excluding the taskbar.",
    tags: ["javascript", "front-end"],
    type: "comparison",
    number: 74,
    id: "l14kcv0d",
    sources: [
      {
        name: "screen.width and screen.availwidth difference in javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5456601"
      },
      {
        name: "JavaScript: screen.width vs. screen.availWidth",
        site: "codepen",
        url: "https://codepen.io/machal/pen/gjNpYg"
      },
    ],
  },
  {
    question:
      "What's the difference between escaped and unescaped output?",
    answer:
      'Escapes and unescapes are both used for removing traces of offending characters that could prevent interprelation. For example, when you call unescape("\thi") you will get the tab inserted, but when you call escape("\thi") you will see "\\thi"',
    tags: ["javascript"],
    type: "comparison",
    number: 75,
    id: "drilbwi",
    sources: [
      {
        name: "What is “Escaped” & “Unescaped” output",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/20727923"
      },
      {
        name: "JavaScript Unicode Characters and Escape Sequences",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=UsVbdOgd3kM"
      },
      {
        name: "Working with strings in JavaScript",
        site: "medium",
        url: "https://medium.com/swlh/working-with-strings-in-javascript-34060a1c17a9"
      },
    ],
  },
  {
    question:
      "How does JavaScript implement private methods?",
    answer:
      "True private methods are very memory inefficient as a new copy of the method would be created for each instance.",
    tags: ["javascript"],
    type: "explanation",
    number: 76,
    id: "wrrcv2n",
    sources: [
      {
        name: "Private properties in JavaScript ES6 classes",
        site: "stack-overflow",
        url: "Javascript Tutorial 15: Private Methods And Properties"
      },
      {
        name: "Javascript Tutorial 15: Private Methods And Properties",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=P-w_SXPfVY8"
      },
      {
        name: "Natural JavaScript private methods",
        site: "blogger",
        url: "http://webreflection.blogspot.com/2008/04/natural-javascript-private-methods.html"
      },
    ],
  },
  {
    question:
      "What's the difference between declaring a function at run-time vs. parse-time in JavaScript?",
    answer:
      "Run time var foo = function( ) means that if we call foo( ) before that statement we will receive and error. However if we use parse-time with function foo( ) then calling foo( ) above will not result in an error.",
    tags: ["javascript"],
    type: "comparison",
    number: 77,
    id: "1jk19m6",
    sources: [
      {
        name: "In JavaScript, what code executes at runtime and what code executes at parsetime?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/4023769"
      },
    ],
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Before run-time JavaScript looks for all variable and function declarations in the scope and then hoists them ot the top of the function before they are declared.",
    tags: ["javascript"],
    type: "definition",
    number: 78,
    id: "c7mwo7b",
    sources: [
      {
        name: "Javascript function scoping and hoisting",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/7506937"
      },
      {
        name: "Hoisting - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=C1PZh_ea-7I"
      },
      {
        name: "Review (TL;DR) - You Don't Know JS",
        site: "github",
        url: "In JavaScript, what code executes at runtime and what code executes at parsetime?"
      },
    ],
  },
  {
    question:
      "What's the difference between an indexed array and an associative array?",
    answer:
      "Indexed arrays are the normal arrays we see in JavaScript where each element is identified by it's index, a number. An associative array (also known as maps) are not forced to use a number as the index.",
    tags: ["programming-fundamentals", "javascript"],
    type: "comparison",
    number: 79,
    id: "yuzewe4",
    sources: [
      {
        name: "What is the difference between indexed arrays and the associative arrays?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-difference-between-indexed-arrays-and-the-associative-arrays"
      },
      {
        name: "5.2: Associative Arrays in JavaScript - Programming with Text",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=_5jdE6RKxVk"
      },
      {
        name: "Symbol Tables (Associative Arrays)",
        site: "medium",
        url: "https://medium.com/omarelgabrys-blog/symbol-tables-associative-arrays-ece1f52aa07f"
      },
    ],
  },
  {
    question: "What is HTML?",
    answer:
      "HTML stands for Hyper Text Markup Language. It is used to markup webpages through nesting elements.",
    tags: ["html", "front-end"],
    type: "definition",
    number: 80,
    id: "uzcquf2",
    sources: [
      {
        name: "What is HTML?",
        site: "quora",
        url: "https://www.quora.com/What-is-HTML-6"
      },
      {
        name: "HTML5 as Fast As Possible",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=IsXEVQRaTX8"
      },
      {
        name: "Learn HTML in 5 minutes",
        site: "free-code-camp",
        url: "https://www.freecodecamp.org/news/learn-html-in-5-minutes-ccd378d2ab72/"
      },
    ],
  },
  {
    question: "What is an HTML tag?",
    answer:
      "HTML tags are composed of an opening tag, content, and an ending tag. Tags can be nested within other tags.",
    tags: ["html", "front-end"],
    type: "definition",
    number: 81,
    id: "1nc5l0n",
    sources: [
      {
        name: "What is a tag in HTML?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-tag-in-HTML"
      },
      {
        name: "What are HTML Tags?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=aSiI9B6rzRM"
      },
      {
        name: "Tag - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Tag"
      },
    ],
  },
  {
    question: "What are void elements in HTML?",
    answer: "Void elements area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr do not require and end tag. These are called void elements.",
    tags: ["html", "front-end"],
    type: "list",
    number: 82,
    id: "pvesa7y",
    sources: [
      {
        name: "Do we still need end slashes in HTML5?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/3558119/are-non-void-self-closing-tags-valid-in-html5"
      },
      {
        name: "HTML5 tutorial 22 | HTML Void Elements",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=PkE7edyf6xk"
      },
      {
        name: "Empty Element - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Empty_element"
      },
    ],
  },
  {
    question: "What are default headings in HTML?",
    answer:
      "There are 6 headings ranging from <h1> to <h6>, with <h1> being the largest.",
    tags: ["html", "front-end"],
    type: "definition",
    number: 83,
    id: "lgs7gei",
    sources: [
      {
        name: "What are the most common font-sizes for H1-H6 tags [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/6140504"
      },
      {
        name: "Learn HTML code: H1 - H6",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ErfDXNmHOWU"
      },
      {
        name: "<h1>–<h6>: The HTML Section Heading elements -MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
      },
    ],
  },
  {
    question: "How to have a hyperlink in HTML open in another window or tab?",
    answer: "https://gist.github.com/masautt/a61f53afbf1cc2a8988ea6a38c47c0d7",
    tags: ["html"],
    type: "code",
    number: 84,
    id: "e37uqws",
    sources: [
      {
        name: "How to make HTML open a hyperlink in another window or tab?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/2343939"
      },
      {
        name: "How to make links in html | open link in another tab in html | Learn HTML5",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=hBsZ5XR6WDI"
      },
      {
        name: "Creating hyperlinks - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
      },
    ],
  },
  {
    question: "What are the 3 types of lists available with HTML?",
    answer:
      "<ul> : unordered list that displays items with a bullet, <ol> : ordered list that displays items with the number 1. 2. 3., <dl> : definition list displays elements like a dictionary with the definition tabbed over",
    tags: ["html", "front-end"],
    type: "list",
    number: 85,
    id: "neozsrf",
    sources: [
      {
        name: "How many types of list are in HTML? Can you define each?",
        site: "quora",
        url: "https://www.quora.com/How-many-types-of-list-are-in-HTML-Can-you-define-each"
      },
      {
        name: "Learn HTML code: lists",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Dl1V6CagWfU"
      },
      {
        name: "Day 13: Using HTML Lists — Spaghetti Recipe",
        site: "medium",
        url: "https://medium.com/@kbrook10/day-13-using-html-lists-spaghetti-recipe-efaa86b0cf09"
      },
    ],
  },
  {
    question: "What's the difference between HTML elements and tags?",
    answer:
      "HTML elements communicate to the browser to render text. When elements are enclosed by the brackets <> they form HTML tags.",
    tags: ["html", "front-end"],
    type: "comparison",
    number: 86,
    id: "w22kcp5",
    sources: [
      {
        name: "What is the difference between HTML tags and elements?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/8937454"
      },
      {
        name: "HTML Tags, Attributes and Elements",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=vNOyRZIkC7o"
      },
      {
        name: "What Is An HTML Tag Versus an HTML Element? - Lifewire",
        site: "globe",
        url: "https://www.lifewire.com/html-tag-vs-element-3466507"
      },
    ],
  },
  {
    question:
      "What's the difference between Semantic Elements and non-semantic Elements?",
    answer:
      "Semantic elements describe the meaning to the user as to what content they contain. Examples of semantic elements are <form> <table> and <article> while non semantic are <div> and <span>. We don't know what is inside these span and div tags where as we know what to expect with semantic elements.",
    tags: ["html", "front-end"],
    type: "comparison",
    number: 87,
    id: "rwqhyw6",
    sources: [
      {
        name: "Semantic and non Semantic elements",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/54924899"
      },
      {
        name: "Semantic HTML5 Tags vs Formatting Tags",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=rKcAjg9wC5I"
      },
      {
        name: "The importance of Semantic HTML",
        site: "medium",
        url: "https://medium.com/adalab/the-importance-of-semantic-html-78e74fb75ff0"
      },
    ],
  },
  {
    question: "What is an image map?",
    answer:
      "An image map is an image with clickable areas. You can use the <map> and <area> tags to identify areas in an image that when clicked will navigate to a link.",
    tags: ["html", "front-end"],
    type: "definition",
    number: 88,
    id: "p74hpso",
    sources: [
      {
        name: "What is an image map in HTML?",
        site: "quora",
        url: "https://www.quora.com/What-is-an-image-map-in-HTML"
      },
      {
        name: "How to make an HTML image map",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ZomNtWJEFfs"
      },
      {
        name: "Creating an Interactive Map using SVG and CSS",
        site: "medium",
        url: "https://medium.com/@mattcroak718/creating-an-interactive-map-using-svg-and-css-94a688c11bd6"
      },
    ],
  },
  {
    question: "What's the difference between iframe, imbed, and object elements in HTML?",
    answer:
      "<iframe> is the HTML 5 standard for including resources from other domains or subdomains as well as content. <embed> was also standardized in HTML 5 but is used to embed content for browser plugins. <object> is more versatile and can handle the first 2",
    tags: ["html", "front-end"],
    type: "comparison",
    number: 89,
    id: "ty28g8c",
    sources: [
      {
        name: "difference between iframe, embed and object elements",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/21115112/9715166"
      },
      {
        name: "HTML video tutorial - 77 - iframe tag vs object embed tags",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ZNy2ajRiGXc"
      },
      {
        name: "From object to iframe — other embedding technologies - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies"
      },
    ],
  },
  {
    question: "Is it possible to change the color of a bullet in an <ul> tag?",
    answer:
      "The color of the bullet is always the color of the first text of the list. In order to change the color of the bullet you must change the color of the text.",
    tags: ["html", "front-end"],
    type: "explanation",
    number: 90,
    id: "kwojsm6",
    sources: [
      {
        name: "Is there an easy way to change the color of a bullet in a list?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/76626/9715166"
      },
      {
        name: "Bulleted List HTML, Change the color of Bullets | Quick Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=oGHguEotnDY"
      },
      {
        name: "Styling Lists - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists"
      },
    ],
  },
  {
    question: "What's the difference between span and div tags?",
    answer:
      "In terms of CSS, div is a block element while span is inline. This means we should be using divs to wrap sections of a document while spans should be used to wrap small portions of text and images.",
    tags: ["html", "front-end"],
    type: "explanation",
    number: 91,
    id: "h9e2tu4",
    sources: [
      {
        name: "What is the difference between HTML tags <div> and <span>?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/183536/9715166"
      },
      {
        name: "Divs vs Spans",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=UBWl37Rr9_c"
      },
      {
        name: "Span and Div",
        site: "globe",
        url: "https://www.google.com/search?q=medium+span+vs+div+tags&rlz=1C1GCEB_enUS850US850&oq=medium+span+vs+div+tags&aqs=chrome..69i57j33l5.4840j0j4&sourceid=chrome&ie=UTF-8"
      },
    ],
  },
  {
    question:
      "What is the difference between an expression and a statement?",
    answer:
      "An expression is any reference to a variable or value, or a set of variables and values combined with operators. Statements are made up of expressions and are defined as a group of words, numbers, and operators that performs a specific task.",
    tags: ["programming-fundamentals", "javascript"],
    type: "comparison",
    number: 92,
    id: "nz6uigo",
    sources: [
      {
        name: "What is the difference between an expression and a statement in Python?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/questions/4728073/what-is-the-difference-between-an-expression-and-a-statement-in-python"
      },
      {
        name: "Expressions vs. Statements in JS / Intro to JavaScript ES6 programming, lesson 15",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=WVyCrI1cHi8"
      },
      {
        name: "Statements - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md#statements"
      },
    ],
  },
  {
    question: "What's the difference between compiling and interpreting code?",
    answer:
      "Interpreting code means translating the commands from top to bottom, line by line, every time the program is run whereas compiling code means the translation is done ahead of time.",
    tags: ["programming-fundamentals", "javascript"],
    type: "comparison",
    number: 93,
    id: "8w2045j",
    sources: [
      {
        name: "Compiled vs. Interpreted Languages",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/3265602/9715166"
      },
      {
        name: "Short Lesson - Compilation vs Interpretation",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=JNMy969SjyU"
      },
      {
        name: "Executing a Program - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md#executing-a-program"
      },
    ],
  },
  {
    question: "What is CSS?",
    answer: "CSS, Cascading Style Sheets is used to style HTML.",
    tags: ["css", "front-end"],
    type: "definition",
    number: 94,
    id: "zuryx7t",
    sources: [
      {
        name: "What are Cascading Style Sheets (CSS)?",
        site: "quora",
        url: "https://www.quora.com/What-are-Cascading-Style-Sheets-CSS"
      },
      {
        name: "CSS Basics (Part1) — What is CSS?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=s7ONvIgOWdM"
      },
      {
        name: "CSS for Beginners: What is CSS and How to Use it in Web Development?",
        site: "medium",
        url: "https://medium.com/swlh/css-for-beginners-what-is-css-and-how-to-use-it-in-web-development-5985afe53096"
      },
    ],
  },
  {
    question: "What are the 3 types of CSS stylings?",
    answer:
      '1. External : Written in separate style sheets (.css files) 2. Internal : Written at the top of HTML files (<style> tags) 3. Inline: Written inside the HTML tag (<p style=""></p>)',
    tags: ["css", "front-end"],
    type: "list",
    number: 95,
    id: "w0md9j5",
    sources: [
      {
        name: "Comparison of loading CSS inline, embedded and from external files",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/2455658/9715166"
      },
      {
        name: "How to Link CSS to HTML Document",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=y4gWr2fya0I"
      },
      {
        name: "How to add CSS to HTML",
        site: "globe",
        url: "https://matthewjamestaylor.com/add-css-to-html"
      },
    ],
  },
  {
    question: "What is a CSS selector?",
    answer:
      "Selectors refer to the patterns used to select the elements to style. These include naming the element type, id, class, or * for all elements.",
    tags: ["css", "front-end"],
    type: "definition",
    number: 96,
    id: "0f140i6",
    sources: [
      {
        name: "What does CSS selector mean?",
        site: "quora",
        url: "https://www.quora.com/What-does-CSS-selector-mean"
      },
      {
        name: "What's A CSS Selector?",
        site: "youtube",
        url: "https://youtu.be/9YNJkJ2hdno?t=34"
      },
      {
        name: "Understanding CSS Selectors",
        site: "medium",
        url: "https://medium.com/front-end-weekly/understanding-css-selectors-1c03267e7cd2"
      },
    ],
  },
  {
    question: "What is a CSS image sprite?",
    answer:
      "A collection of images put into a single image. A web page with many images can take a long time to load and generates multiple server requests so it saves bandwidth by combining images.",
    tags: ["css", "front-end"],
    type: "definition",
    number: 97,
    id: "q2885bg",
    sources: [
      {
        name: "What are CSS sprites? How is it useful?",
        site: "quora",
        url: "https://www.quora.com/What-are-CSS-sprites-How-is-it-useful"
      },
      {
        name: "CSS Tutorials #21 - CSS Sprites",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=zfKI2ltz7K0"
      },
      {
        name: "CSS Sprites: What They Are, Why They’re Cool, and How To Use Them",
        site: "globe",
        url: "https://css-tricks.com/css-sprites/"
      },
    ],
  },
  {
    question: "What are CSS counters?",
    answer:
      "Variables maintained by CSS whose values maybe be incremented by CSS rules to track how many times they're used. You can access the value by calling the counter( ) function.",
    tags: ["css", "front-end"],
    type: "definition",
    number: 98,
    id: "q3pygwk",
    sources: [
      {
        name: "Using CSS Counters - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters"
      },
      {
        name: "What is counters in css and how to use them?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=1t6G8LDPrbk"
      },
      {
        name: "A Guide to CSS counter",
        site: "dev",
        url: "https://dev.to/samanthaming/a-guide-to-css-counter-3aaa"
      },
    ],
  },
  {
    question: "How do you round the corners of an element with CSS?",
    answer:
      "Setting the border-radius to a set value of pixels will round the corners.",
    tags: ["css", "front-end"],
    type: "code",
    number: 99,
    id: "qjmpnhw",
    sources: [
      {
        name: "Can I create a div with a Curved bottom?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/17040896/9715166"
      },
      {
        name: "Advanced CSS Border-Radius Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=j3Z4DR0o8bk"
      },
      {
        name: "CSS Border-Radius Can Do That?",
        site: "medium",
        url: "https://medium.com/9elements/css-border-radius-can-do-that-d46df1d013ae"
      },
    ],
  },
  {
    question: "What's the difference between a Radial and Linear Gradient?",
    answer:
      "A radial gradient differs in that it emanates outward while a linear gradient changes color in a straight line in one direction.",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 100,
    id: "0im5ofr",
    sources: [
      {
        name: "How do you code in CSS with linear-gradient?",
        site: "quora",
        url: "https://www.quora.com/How-do-you-code-in-CSS-with-linear-gradient"
      },
      {
        name: "CSS Gradients and repeating gradients",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=4kWHW7da4U8"
      },
      {
        name: "HTML Gradients with CSS — Colorful Slippery Slope",
        site: "medium",
        url: "https://medium.com/@js_tut/html-gradients-with-css-colorful-slippery-slope-59f98c6b99cf"
      },
    ],
  },
  {
    question: "What is flexbox?",
    answer:
      "Flexbox is a built in CSS layout that is used to align and distribute space among items in a container even when their size is unknown.",
    tags: ["css", "front-end"],
    type: "list",
    number: 101,
    id: "5mn4ena",
    sources: [
      {
        name: "What is flex-box?",
        site: "quora",
        url: "https://www.quora.com/What-is-flex-box"
      },
      {
        name: "Learn Flexbox in 15 Minutes",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=fYq5PXgSsbE"
      },
      {
        name: "A 10 Step Guide to Flexbox",
        site: "medium",
        url: "https://medium.com/@ensallee/a-10-step-guide-to-flexbox-fa00e7b03bf7"
      },
    ],
  },
  {
    question: "What's the difference between padding and margin?",
    answer:
      "Padding is the space between the contend and the border whereas margin is the space outside the border.",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 102,
    id: "ej0ew97",
    sources: [
      {
        name: "When to use margin vs padding in CSS [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/9183818/9715166"
      },
      {
        name: "CSS : the difference between padding and margin",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=gBj8fxRBBNg"
      },
      {
        name: "Margin vs Padding",
        site: "medium",
        url: "https://medium.com/frontendshortcut/margin-vs-padding-c1fc8ea8bfaf"
      },
    ],
  },
  {
    question: "What's the difference between a pseudo-class and pseudo-element in CSS?",
    answer:
      "Pseudo-classes act as simple selectors in a sequence of selectors and thereby classify elements on non-presentational characteristics, pseudo-elements create new virtual elements.",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 103,
    id: "pl8l5t7",
    sources: [
      {
        name: "What is the difference between a pseudo-class and a pseudo-element in CSS?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/11701951/9715166"
      },
      {
        name: "Pseudo-Classes vs Pseudo-Elements in CSS",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=0VDx1570X3U"
      },
      {
        name: "Summaries of Pseudo-classes & Pseudo-elements",
        site: "medium",
        url: "https://medium.com/@keisei.jia/summaries-of-pseudo-classes-pseudo-elements-359403885c9c"
      },
    ],
  },
  {
    question: "What are the types of positions in CSS?",
    answer: "Static, Relative, Fixed, Absolute, Sticky",
    tags: ["css", "front-end"],
    type: "list",
    number: 104,
    id: "h29l0ss",
    sources: [
      {
        name: "Can you explain positioning in CSS?",
        site: "quora",
        url: "https://www.quora.com/Can-you-explain-positioning-in-CSS"
      },
      {
        name: "Learn CSS Position In 9 Minutes",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=jx5jmI0UlXU"
      },
      {
        name: "Understanding Position in CSS",
        site: "medium",
        url: "https://medium.com/@jacobgreenaway12/taming-the-css-beast-master-positioning-5882bad14458"
      },
    ],
  },
  {
    question: "What's the difference between inline and block elements in CSS?",
    answer:
      "Inline is subject to the vertical-align property while block are not.",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 105,
    id: "pibwqy0",
    sources: [
      {
        name: "CSS display: inline vs inline-block [duplicate]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/9189873/9715166"
      },
      {
        name: "#5 - The Difference Between Block and Inline Elements",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=NfwBn1ItXhM"
      },
      {
        name: "Understanding HTML Block and Inline Elements: A Learning Journey to Web Development",
        site: "medium",
        url: "https://medium.com/ux-art/html-block-and-inline-elements-b65775e86599"
      },
    ],
  },
  {
    question: "What's the difference between ID's and classes in CSS?",
    answer: "You can have several classes but only 1 id",
    tags: ["css", "front-end"],
    type: "comparison",
    number: 106,
    id: "0afiemj",
    sources: [
      {
        name: "What's the difference between an id and a class?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/544052/9715166"
      },
      {
        name: "8: Introduction to Classes and IDs in HTML | Learn HTML and CSS | HTML Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=wXUhTZpF_HQ"
      },
      {
        name: "The Difference Between ID and Class",
        site: "medium",
        url: "https://medium.com/@jennylaister/the-difference-between-id-and-class-689377b22e6d"
      },
    ],
  },
  {
    question: "What is Software Engineering?",
    answer:
      "The application of engineering to the development of software in a systematic method.",
    tags: ["software-engineering"],
    type: "definition",
    number: 107,
    id: "z69xlrm",
    sources: [
      {
        name: "What is software engineering?",
        site: "quora",
        url: "https://www.quora.com/What-is-software-engineering"
      },
      {
        name: "Software Engineering: Crash Course Computer Science #16",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=O753uuutqH8"
      },
      {
        name: "Software Engineering is different from Programming",
        site: "medium",
        url: "https://medium.com/edge-coders/software-engineering-is-different-from-programming-b108c135af26"
      },
    ],
  },
  {
    question: "What are the 7 steps of the Software Development Life Cycle?",
    answer:
      "Identify the Problem, Plan, Design, Build, Test, Deploy, and Maintain.",
    tags: ["software-engineering"],
    type: "list",
    number: 108,
    id: "4auxcar",
    sources: [
      {
        name: "What is software development lifecycle?",
        site: "quora",
        url: "https://www.quora.com/What-is-software-development-lifecycle"
      },
      {
        name: "Software Development Lifecycle in 9 minutes!",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=i-QyW8D3ei0"
      },
      {
        name: "What Are the Software Development Life Cycle (SDLC) Stages?",
        site: "medium",
        url: "https://medium.com/@bydrecinc/what-are-the-software-development-life-cycle-sdlc-stages-7f505ed0dd18"
      },
    ],
  },
  {
    question: "What's the difference between the Waterfall and Agile Model?",
    answer:
      "Waterfall can be described as rigid where software development is divided into distinct phases whereas Agile separates the project into small sprints that act more like baby steps.",
    tags: ["software-engineering"],
    type: "comparison",
    number: 109,
    id: "pl22qfu",
    sources: [
      {
        name: "What are the pros and cons of the waterfall and agile/scrum project management approach?",
        site: "quora",
        url: "https://www.quora.com/What-are-the-pros-and-cons-of-the-waterfall-and-agile-scrum-project-management-approach"
      },
      {
        name: "Agile vs. Waterfall",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=e1_eD-5zkGY"
      },
      {
        name: "Waterfall vs Agile",
        site: "medium",
        url: "https://medium.com/@101/waterfall-vs-agile-9da25daf18e8"
      },
    ],
  },
  {
    question: "What's the difference between a Development, Program, and Project Manager?",
    answer:
      "Project manages an individual project. Program managers a number of projects that reach a common goal. Development are on the side ready to deploy engineers for projects whe managers request them so they are in charge of training/mentoring developers directly.",
    tags: ["software-engineering"],
    type: "definition",
    number: 110,
    id: "hndiub8",
    sources: [
      {
        name: "Difference between these 3 manager roles [closed]",
        site: "stack-overflow",
        url: "https://softwareengineering.stackexchange.com/a/107213"
      },
      {
        name: "Product Manager vs Project Manager - Project Management Training",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=WGvj_I2L020"
      },
      {
        name: "Software Project Team Roles and Responsibilities",
        site: "medium",
        url: "https://medium.com/@SherrieRose/software-project-team-roles-and-responsibilities-152a7d575759"
      },
    ],
  },
  {
    question: "What is AB Testing?",
    answer:
      "Essentially an experiment where two or more variants of a page are shown to users at random, and statistical analysis is used to determine which variation performs better for a given goal.",
    tags: ["software-engineering"],
    type: "definition",
    number: 111,
    id: "mg5vik9",
    sources: [
      {
        name: "What is A/B testing?",
        site: "quora",
        url: "https://www.quora.com/What-is-A-B-testing-1"
      },
      {
        name: "A/B Testing",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=8H6QmMQWPEI"
      },
      {
        name: "A/B and see: a beginner’s guide to A/B testing",
        site: "medium",
        url: "https://medium.com/@InVisionApp/a-b-and-see-a-beginner-s-guide-to-a-b-testing-a16406f1a239"
      },
    ],
  },
  {
    question: "What is a baseline in Software Engineering?",
    answer:
      "A baseline is a reference point in the software development life cycle marked by the completion and formal approval of a set of predefined work products.",
    tags: ["software-engineering"],
    type: "definition",
    number: 112,
    id: "a2qk2ve",
    sources: [
      {
        name: "What is the meaning of baseline in software configuration management?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-meaning-of-baseline-in-software-configuration-management"
      },
      {
        name: "What is a baseline?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Tr5_mh4oOiw"
      },
      {
        name: "Modern Software Configuration Management",
        site: "medium",
        url: "https://medium.com/@ReganKoopmans/modern-software-configuration-management-69e2eb9e40c9"
      },
    ],
  },
  {
    question: "What is Software Configuration Management?",
    answer: "The task of tracking and controlling changes in the software.",
    tags: ["software-engineering"],
    type: "definition",
    number: 113,
    id: "3qzny1h",
    sources: [
      {
        name: "What is software configuration management?",
        site: "quora",
        url: "https://www.quora.com/What-is-software-configuration-management"
      },
      {
        name: "What is Configuration Management? - Course Introduction",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=W49zokvnL2g"
      },
      {
        name: "Software Configuration Management (SCM) Process and Procedure",
        site: "medium",
        url: "https://medium.com/@sudarhtc/software-configuration-management-scm-process-and-procedure-80a73c40915d"
      },
    ],
  },
  {
    question: "What is Change Management?",
    answer:
      "A systematic approach to managing all changes made to product or system. The purpose is to ensure that no unnecessary changes are made, that all changes are documentated, that services are not unnecessarily disrupted and that resources are used efficiently.",
    tags: ["software-engineering"],
    type: "definition",
    number: 114,
    id: "ba23y8g",
    sources: [
      {
        name: "What is Change Management?",
        site: "quora",
        url: "https://www.quora.com/What-is-Change-Management"
      },
      {
        name: "What Is Change Management In Project Management Terms?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=KSHyvLjZHcw"
      },
      {
        name: "Change Management Process",
        site: "medium",
        url: "https://medium.com/@stangarfield/change-management-process-98948aa347bf"
      },
    ],
  },
  {
    question: "What are Software Requirements?",
    answer:
      "Software requirements are a description of features and funtionalities of the target system.",
    tags: ["software-engineering"],
    type: "definition",
    number: 115,
    id: "2cc5trs",
    sources: [
      {
        name: "What are software requirements?",
        site: "quora",
        url: "https://www.quora.com/What-are-software-requirements"
      },
      {
        name: "Software Requirements",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=8uk-2-mX53U"
      },
      {
        name: "Software requirements specification. What do you need to know.",
        site: "medium",
        url: "https://medium.com/globalluxsoft/software-requirements-specification-what-do-you-need-to-know-22a6b8585945"
      },
    ],
  },
  {
    question: "What is the Feasibility Study?",
    answer:
      "This refers to the practical extent to which a project can be performed successfully.",
    tags: ["software-engineering"],
    type: "definition",
    number: 116,
    id: "f43el8y",
    sources: [
      {
        name: "What is a feasibility study? What are the main objectives?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-feasibility-study-What-are-the-main-objectives"
      },
      {
        name: "How to Conduct a Feasibility Study - Project Management Training",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=WI6_snOjlm0"
      },
      {
        name: "Step by Step Guide to Write a Good Feasibility Report?",
        site: "medium",
        url: "https://medium.com/waqar-hussain/step-by-step-guide-to-write-a-good-feasibility-report-f951896d6c87"
      },
    ],
  },
  {
    question:
      "What's the difference between functional and non-functional requirements?",
    answer:
      "A functional requirement describes what a software system should do, while non-functional place constraints on how the system will do so.",
    tags: ["software-engineering"],
    type: "comparison",
    number: 117,
    id: "nn69yl3",
    sources: [
      {
        name: "What is the difference between functional and non functional requirement? [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/16476014/9715166"
      },
      {
        name: "Functional and Nonfunctional Requirements - Georgia Tech - Software Development Process",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=zCX-N1H8Vps"
      },
      {
        name: "The Essential Function of Non-Functional Requirements",
        site: "medium",
        url: "https://medium.com/elevator-up/the-essential-function-of-non-functional-requirements-668ae9686ee0"
      },
    ]
  },
  {
    question: "What are Software Quality Metrics?",
    answer:
      "A software metric is a measure of software characteristics which quantifiable or countable such as performance.",
    tags: ["software-engineering"],
    type: "definition",
    number: 118,
    id: "yyin0k9",
    sources: [
      {
        name: "What is software quality metrics?",
        site: "quora",
        url: "https://www.quora.com/What-is-software-quality-metrics"
      },
      {
        name: "Software Quality Metrics You Need To Know",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=lc0Y1BX7Fig"
      },
      {
        name: "64 Test Metrics For Measuring Progress, Quality, Productivity & More!",
        site: "medium",
        url: "https://medium.com/qasymphony/64-test-metrics-for-measuring-progress-quality-productivity-more-4ef220f78b1b"
      },
    ]
  },
  {
    question: "What is Software Modularity?",
    answer:
      "A technique to divide a software system into multiple discrete and independent modules which are expected to be capable of carrying out tasks independently.",
    tags: ["design-patterns"],
    type: "definition",
    number: 119,
    id: "cze3n2t",
    sources: [
      {
        name: "What is modularity?",
        site: "quora",
        url: "https://www.quora.com/What-is-modularity"
      },
      {
        name: "Modular Design",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=DuK4dKH0zOA"
      },
      {
        name: "On Modular Architectures",
        site: "medium",
        url: "https://medium.com/on-software-architecture/on-modular-architectures-53ec61f88ff4"
      },
    ]
  },
  {
    question: "What is Cohesion in Software?",
    answer:
      "A measure of the degree to which the elements of the module are functionally related. Good software will have high cohesion.",
    tags: ["software-engineering"],
    type: "definition",
    number: 120,
    id: "5a4a1ym",
    sources: [
      {
        name: "What is cohesion?",
        site: "quora",
        url: "https://www.quora.com/What-is-cohesion"
      },
      {
        name: "Cohesion",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=7WWJceMwk48"
      },
      {
        name: "Low Coupling, High Cohesion",
        site: "medium",
        url: "https://medium.com/clarityhub/low-coupling-high-cohesion-3610e35ac4a6"
      },
    ]
  },
  {
    question: "What is Coupling?",
    answer:
      "The measure of the degree of interdependence between modules. Good software will have low coupling.",
    tags: ["software-engineering"],
    type: "definition",
    number: 121,
    id: "v1hikh8",
    sources: [
      {
        name: "What is meant by cohesion and coupling in software engineering? Are there some examples available?",
        site: "quora",
        url: "https://www.quora.com/What-is-meant-by-cohesion-and-coupling-in-software-engineering-Are-there-some-examples-available"
      },
      {
        name: "Coupling and Cohesion",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Df0WVO-c3Sw"
      },
      {
        name: "Low Coupling, High Cohesion",
        site: "medium",
        url: "https://medium.com/clarityhub/low-coupling-high-cohesion-3610e35ac4a6"
      },
    ]
  },
  {
    question: "What is a Data Flow Diagram?",
    answer:
      "The Data Flow Diagram at Level 0, also known as the context diagram, shows a data system as a whole and emphasizes the way it interacts with external entities.",
    tags: ["software-engineering"],
    type: "definition",
    number: 122,
    id: "icj1v4l",
    sources: [
      {
        name: "What is a data flow diagram?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-data-flow-diagram"
      },
      {
        name: "Data Flow Diagrams - What is DFD? Data Flow Diagram Symbols and More",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=6VGTvgaJllM"
      },
      {
        name: "Data Flow Diagram Comprehensive Guide with Examples",
        site: "medium",
        url: "https://medium.com/@warren2lynch/data-flow-diagram-comprehensive-guide-with-examples-d9858387f25e"
      },
    ]
  },
  {
    question:
      "What's the difference between black box testing and white box testing?",
    answer:
      "Black box refers to a method in which the internal structure / design / implementation of the item being tested is not known to the tester whereas whitebox is known to the tester.",
    tags: ["software-engineering"],
    type: "comparison",
    number: 123,
    id: "o1nh53e",
    sources: [
      {
        name: "What is black box testing and white box testing?",
        site: "quora",
        url: "https://www.quora.com/What-is-black-box-testing-and-white-box-testing"
      },
      {
        name: "Black and White Box Testing Introduction - Georgia Tech - Software Development Process",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=jRwwb7iaRsU"
      },
      {
        name: "White Box Testing Vs. Black Box Testing",
        site: "medium",
        url: "https://medium.com/@techbloggers/white-box-testing-vs-black-box-testing-19754e950398"
      },
    ]
  },
  {
    question: "What are the 4 types of Software Maintenance?",
    answer: "Adaptive, Perfective, Preventive, and Corrective",
    tags: ["software-engineering"],
    type: "list",
    number: 124,
    id: "0e8et6s",
    sources: [
      {
        name: "Software Maintenance, Understanding the 4 Types",
        site: "globe",
        url: "https://www.coderhood.com/software-maintenance-understanding-the-4-types/"
      },
      {
        name: "software maintenance | software engineering |",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=8swQr0kckZI"
      },
      {
        name: "The 4 Types of Software Maintenance",
        site: "medium",
        url: "https://medium.com/endertech-insights/the-4-types-of-software-maintenance-7c3e96424f22"
      },
    ]
  },
  {
    question: "What are the 5 things you can decorate in TypeScript?",
    answer:
      "Class definitions, Properties, Methods, Accessors, and Parameters.",
    tags: ["typescript"],
    type: "list",
    number: 125,
    id: "xmzbnwl",
    sources: [
      {
        name: "Decorators  - TypeScriptLang",
        site: "globe",
        url: "https://www.typescriptlang.org/docs/handbook/decorators.html#decorators"
      },
      {
        name: "The Magic of TypeScript Decorators",
        site: "youtube",
        url: "https://youtu.be/O6A-u_FoEX8?t=80"
      },
      {
        name: "A Gentle Introduction to TypeScript Decorators",
        site: "medium",
        url: "https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082"
      },
    ]
  },
  {
    question: "What is DOM event delegation?",
    answer:
      "When we have several elements we want to listen to, event delegation refers to assigning a handler to a common ancestor instead of a handler on each.",
    tags: ["dom", "javascript"],
    type: "definition",
    number: 126,
    id: "e5newlv",
    sources: [
      {
        name: "What is DOM Event delegation?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1688293/9715166"
      },
      {
        name: "What is Event Delegation? - JavaScript DOM Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=pKzf80F3O0U"
      },
      {
        name: "Part 4: What is Event Delegation in JavaScript?",
        site: "medium",
        url: "https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983"
      },
    ]
  },
  {
    question: "What is prototypal inheritance in JavaScript?",
    answer:
      "Since a prototype is a working object instance, objects can inherit directly from other objects.",
    tags: ["javascript"],
    type: "definition",
    number: 127,
    id: "icpqd3f",
    sources: [
      {
        name: "prototypal inheritance concept in javascript as a prototype based language",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/12201800/9715166"
      },
      {
        name: "Advanced Javascript - Prototypal Inheritance In 1 Minute",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=G6l5CHl67HQ"
      },
      {
        name: "Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?",
        site: "medium",
        url: "https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9"
      },
    ]
  },
  {
    question: "What's the difference between forEach and map loops in JavaScript?",
    answer:
      "foreach executes a provided function once for each array element while map will create a new array with the results of calling a provided function on every element.",
    tags: ["javascript"],
    type: "comparison",
    number: 128,
    id: "bb33agd",
    sources: [
      {
        name: "JavaScript: Difference between .forEach() and .map()",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/34426481/9715166"
      },
      {
        name: "Javascript Basics | Map V/s ForEach",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=zfkFIj-Nt0E"
      },
      {
        name: "JavaScript — Map vs. ForEach",
        site: "medium",
        url: "https://codeburst.io/javascript-map-vs-foreach-f38111822c0f"
      },
    ]
  },
  {
    question: "What are JavaScript modules?",
    answer:
      "Within a module you can use the export keyword to export functionality of a JavaScript file to other components that either require( ) or import.",
    tags: ["javascript"],
    type: "definition",
    number: 129,
    id: "7eku06v",
    sources: [
      {
        name: "What is Modular JavaScript?",
        site: "quora",
        url: "https://www.quora.com/What-is-Modular-JavaScript"
      },
      {
        name: "Module Design Pattern - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=3pXVHRT-amw"
      },
      {
        name: "JavaScript Modules: A Beginner’s Guide",
        site: "medium",
        url: "https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/"
      },
    ]
  },
  {
    question: "What is AJAX?",
    answer:
      "AJAX stands for Asynchronous JavaScript and XML and is a set of web development techniques using client side web technologies to create asynchronous web applications. With AJAX, web apps can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page.",
    tags: ["javascript"],
    type: "definition",
    number: 130,
    id: "v32zapv",
    sources: [
      {
        name: "What is Ajax and what is it used for?",
        site: "quora",
        url: "https://www.quora.com/What-is-Ajax-and-what-is-it-used-for"
      },
      {
        name: "JavaScript and AJAX tutorial: What is AJAX? | lynda.com",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=RDo3hBL1rfA"
      },
      {
        name: "The beginners guide to jQuery & AJAX",
        site: "medium",
        url: "https://medium.com/@peterchic/how-to-care-for-your-ajax-f8bd167de6f6"
      },
    ]
  },
  {
    question: "What is JavaScript templating?",
    answer:
      "JavaScript templating is a fast and efficient technique to render client-side templates with JavaScript using a JSON data source. The template refers to an HTML file with special tags that get variables inserted within them using JavaScript.",
    tags: ["javascript", "html"],
    type: "definition",
    number: 131,
    id: "1fa7dxg",
    sources: [
      {
        name: "Intro to JavaScript Template Engines",
        site: "globe",
        url: "https://www.htmlgoodies.com/beyond/javascript/js-ref/intro-to-javascript-template-engines.html"
      },
      {
        name: "JavaScript Templating Tutorial | Introduction",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=zO9pBjgR8N0"
      },
      {
        name: "JavaScript Templating: What is Templating?",
        site: "medium",
        url: "https://medium.com/@BuildMySite1/javascript-templating-what-is-templating-7ff49d97db6b"
      },
    ]
  },
  {
    question:
      "What is the difference between HTML attributes and DOM properties?",
    answer:
      "When writing HTML source code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.",
    tags: ["html", "dom"],
    type: "comparison",
    number: 132,
    id: "gmmjlgj",
    sources: [
      {
        name: "What is the difference between properties and attributes in HTML?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/6004028/9715166"
      },
      {
        name: "html attribute vs dom property",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Ut-ATm23_Pg"
      },
      {
        name: "HTML Attributes vs DOM Properties and Angular 2 Data Binding",
        site: "medium",
        url: "https://medium.com/@vaqifagayev/html-attributes-vs-dom-properties-and-angular-2-data-binding-9e6e5a09c69d"
      },
    ]
  },
  {
    question: "Why is extending native JavaScript objects considered bad practice?",
    answer:
      "When we override built in JavaScript objects, we are creating new behaviors of the language that are not recognized. If a programmer tries to walkthrough our code they will have a harder time understanding because they need to learn our specific flavor of JavaScript.",
    tags: ["javascript"],
    type: "explanation",
    number: 133,
    id: "4yowwya",
    sources: [
      {
        name: "Why is extending native objects a bad practice?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/14034242/9715166"
      },
      {
        name: "Extending built in JS objects. Good or bad?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=DbZz8AtxH8Q"
      },
      {
        name: "Extending Native JavaScript Objects",
        site: "globe",
        url: "https://www.stevebrownlee.com/extending-native-javascript-objects/"
      },
    ]
  },
  {
    question: "What is the same origin policy?",
    answer:
      "Critical security mechanism that restricts how a document or script loaded from one origin can interact wtih a resource from another origin.",
    tags: ["security", "front-end"],
    type: "definition",
    number: 134,
    id: "b1d1rhr",
    sources: [
      {
        name: "What is same-origin policy? Why is it required? How is it a security vulnerability?",
        site: "quora",
        url: "https://www.quora.com/What-is-same-origin-policy-Why-is-it-required-How-is-it-a-security-vulnerability"
      },
      {
        name: "CSRF Introduction and what is the Same-Origin Policy? - web 0x04",
        site: "yotube",
        url: "https://youtu.be/KaEj_qZgiKY?t=50"
      },
      {
        name: "Same Origin Policy and ways to Bypass",
        site: "medium",
        url: "https://medium.com/@minosagap/same-origin-policy-and-ways-to-bypass-250effdc4a12"
      },
    ]
  },
  {
    question: "What is a Ternary Operator?",
    answer:
      "A simplified if else statement that takes 3 arguments, the condition, the code executed if false and the code to be executed if true. condition ? true : false.",
    tags: ["programming-fundamentals", "javascript"],
    type: "definition",
    number: 135,
    id: "zmwho7e",
    sources: [
      {
        name: "How do I use the conditional operator?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/392946/9715166"
      },
      {
        name: "Ternary Operator - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=s4sB1hm73tw"
      },
      {
        name: "Ternary Operators in JavaScript",
        site: "medium",
        url: "https://medium.com/@davidokpare/ternary-operators-in-javascript-94467c6c9e12"
      },
    ]
  },
  {
    question: "Why should we avoid using the global scope?",
    answer:
      "One main reason we avoid creating variables in the global scope is we can have variables that contradict each other by name.",
    tags: ["programming-fundamentals", "javascript"],
    type: "explanation",
    number: 136,
    id: "13pmbm9",
    sources: [
      {
        name: "Why are global variables considered bad practice?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/10525602/9715166"
      },
      {
        name: "4 Reasons to Stop Using Global Scope in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=kD-VkzQ5fXI"
      },
      {
        name: "JS and Global scope",
        site: "medium",
        url: "https://medium.com/code-smells/js-and-global-scope-5014087badcd"
      },
    ]
  },
  {
    question: "What is a single page application?",
    answer:
      "A single-page application is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.",
    tags: ["front-end"],
    type: "definition",
    number: 137,
    id: "hxzu33b",
    sources: [
      {
        name: "What is SPA (single page application)?",
        site: "quora",
        url: "https://www.quora.com/What-is-SPA-single-page-application"
      },
      {
        name: "What Is A Single Page Applicaiton?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=xfGciVdbktI"
      },
      {
        name: "How Single-Page Applications Work",
        site: "medium",
        url: "https://medium.com/@pshrmn/demystifying-single-page-applications-3068d0555d46"
      },
    ]
  },
  {
    question: "What's the difference between mutable and immutable objects?",
    answer:
      "Immutable objects have no fields that can be changed after the object is created while mutable allow such functionality.",
    tags: ["programming-fundamentals", "javascript"],
    type: "comparison",
    number: 138,
    id: "muv675d",
    sources: [
      {
        name: "Mutable vs immutable objects",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/214718"
      },
      {
        name: "Programming Terms: Mutable vs Immutable",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=5qQQ3yzbKp8"
      },
      {
        name: "Mutability & Immutability In Javascript",
        site: "medium",
        url: "https://medium.com/@ibraheemabukaff/mutability-immutability-in-javascript-48022d660015"
      },
    ]
  },
  {
    question: "What is the event loop in JavaScript?",
    answer: "The event loop allows JavaScript to use callbacks and promises. It waits for and dispatches events or messages in a program.",
    tags: ["javascript"],
    type: "definition",
    number: 139,
    id: "c8s3phx",
    sources: [
      {
        name: "What is the 'Event Loop' in Javascript?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-Event-Loop-in-Javascript"
      },
      {
        name: "Javascript event loop | Every Javascript developer must know !",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=XzXIMZMN9k4"
      },
      {
        name: "JavaScript Event Loop Explained",
        site: "medium",
        url: "https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4"
      },
    ]
  },
  {
    question: "What's the difference between stack and heap?",
    answer:
      "Stack is LIFO and is used for static memory allocation whereas the heap is FIFO and is used for dynamic memory. The stack will also keep track of which functional call you are on, because it is a stack of functions.",
    tags: ["programming-fundamentals"],
    type: "comparison",
    number: 140,
    id: "q932mxm",
    sources: [
      {
        name: "What and where are the stack and heap?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/80113"
      },
      {
        name: "Stack Versus Heap",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=IX3fDYz0WyM"
      },
      {
        name: "Stack vs Heap. What’s the difference and why should I care?",
        site: "medium",
        url: "https://medium.com/@nickteixeira/stack-vs-heap-whats-the-difference-and-why-should-i-care-5abc78da1a88"
      },
    ]
  },
  {
    question:
      "How does an arrow function affect the this keyword in JavaScript?",
    answer:
      "Arrow functions do not bind their own this, they lexically bind their context so they refer to the originating context.",
    tags: ["javascript"],
    type: "explanation",
    number: 141,
    id: "2zxjzh5",
    sources: [
      {
        name: "Understanding \"this\" in javascript with arrow functions",
        site: "globe",
        url: "https://www.codementor.io/dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc"
      },
      {
        name: "Arrow function and this keyword in javascript😃",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=tANuyOClBIY"
      },
      {
        name: "Lexical This - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#lexical-this"
      },
    ]
  },
  {
    question: "What is the spread operator in JavaScript?",
    answer:
      "The spread operator or spread syntax allows an iterable such as an array expression or string to be expanded in places where arguments are expected. By using the ( ... ) syntax on an array for example, the array is destructed into their own elements.",
    tags: ["javascript"],
    type: "definition",
    number: 142,
    id: "0dypif1",
    sources: [
      {
        name: "What do the three dots (...) mean in JavaScript?",
        site: "globe",
        url: "https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/"
      },
      {
        name: "...spread operator and rest operator - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=iLx4ma8ZqvQ"
      },
      {
        name: "JavaScript ES6: Spread Operator and Rest Parameters",
        site: "medium",
        url: "https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281"
      },
    ]
  },
  {
    question:
      "What is the difference between test( ) and exec( ) in JavaScript?",
    answer:
      "The test method executes a search for a match between a regular expression and a string and returns true or false whereas exec( ) will search for a match and return the result array or null.",
    tags: ["javascript"],
    type: "comparison",
    number: 143,
    id: "s77x6ap",
    sources: [
      {
        name: "JavaScript: test vs exec",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/11005065"
      },
      {
        name: "2.6: Regular Expressions: test() and match() - Programming with Text",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=W7S_Vmq0GSs"
      },
      {
        name: "JS RegExp, Fast and Slow",
        site: "medium",
        url: "https://medium.com/dailyjs/js-regexp-fast-and-slow-d29d6b77b06"
      },
    ]
  },
  {
    question: "What is the purpose of the history object in JavaScript?",
    answer:
      "The window.history object contains the browsers history. By calling history.back and history.forward you can traverse the user's history.",
    tags: ["javascript"],
    type: "definition",
    number: 144,
    id: "93gy2jh",
    sources: [
      {
        name: "History API - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/History_API"
      },
      {
        name: "Browser history tutorial - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=C9vsQkMu5gk"
      },
      {
        name: "A little bit of history",
        site: "medium",
        url: "https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd"
      },
    ]
  },
  {
    question: "What are the 3 ways to create an object?",
    answer:
      "1. Object Literal 2. Creating an Instance (new) 3. Object Constructor",
    tags: ["javascript"],
    type: "list",
    number: 145,
    id: "hb15iid",
    sources: [
      {
        name: "Different ways of creating an Object in javascript",
        site: "globe",
        url: "https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript"
      },
      {
        name: "Different Ways of Creating Objects in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=UrM9xgPxq1E"
      },
      {
        name: "A thing or two about Objects in JavaScript.",
        site: "medium",
        url: "https://medium.com/front-end-weekly/a-thing-or-two-about-objects-in-javascript-c426a12e8b5f"
      },
    ]
  },
  {
    question:
      "Why should you not use the JSON Parse --> JSON Stringify method of deep cloning an object?",
    answer:
      "Using JSON.parse(JSON.stringify(obj)) won't account for undefined and functions. There is not method of saving functions or undefined values in JSON.",
    tags: ["javascript"],
    type: "explanation",
    number: 146,
    id: "rg8h0r9",
    sources: [
      {
        name: "javascript deep copy using JSON",
        site: "stack-overflow",
        url: "https://stackoverflow.com/q/20662319"
      },
      {
        name: "Copying Arrays (deep and shallow) - Beau teaches JavaScript",
        site: "youtube",
        url: "https://youtu.be/EeZBKv34mm4?t=236"
      },
      {
        name: "Duplicating Objects - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#duplicating-objects"
      },
    ]
  },
  {
    question: "What is an Array Literal in JavaScript?",
    answer:
      "A list of expressions which help represent an array element, enclosed in a pair of square brackets []. Used instead of let myArr = new Array(1,2,3).",
    tags: ["javascript"],
    type: "definition",
    number: 147,
    id: "uqsr0e5",
    sources: [
      {
        name: "What is array literal notation in javascript and when should you use it?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1094734"
      },
      {
        name: "56 Array literal - Javascript Tutorial 2018",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=3gUIWMP1aHI"
      },
      {
        name: "Arrays in JavaScript",
        site: "medium",
        url: "https://medium.com/swlh/arrays-in-javascript-e64b873ad801"
      },
    ]
  },
  {
    question: "How do you access nested array elements in JavaScript?",
    answer:
      "If its an array nested in another array [index1][index2] will suffice but if there is an array of objects with a nested array in one of the objects then object[index1].attribute[index2].",
    tags: ["javascript"],
    type: "explanation",
    number: 148,
    id: "3a9p2lm",
    sources: [
      {
        name: "How can I access and process nested objects, arrays or JSON?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/48804507"
      },
      {
        name: "Nested Loops & 2D Arrays | Javascript | Tutorial 25",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=6m6QWuhLGZc"
      },
      {
        name: "Basic JavaScript: Accessing Nested Arrays",
        site: "free-code-camp",
        url: "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays/"
      },
    ]
  },
  {
    question: "What are the pre-determined falsy values in JavaScript?",
    answer: '1. false 2. 0 3. "" 4. null 5. undefined 6. NaN',
    tags: ["javascript"],
    type: "list",
    number: 149,
    id: "mzni5",
    sources: [
      {
        name: "All falsey values in JavaScript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/19839953"
      },
      {
        name: "Truthy/Falsy - JavaScript Basics",
        site: "youtube",
        url: "https://youtu.be/O7rZJdtG10g?t=42"
      },
      {
        name: "Dealing with Javascript falsy values",
        site: "medium",
        url: "https://medium.com/@sgobinda007/dealing-with-javascript-falsy-values-d75a2f1b1c90"
      },
    ]
  },
  {
    question: "How to keep track of time elapsed in JavaScript?",
    answer:
      "https://gist.github.com/masautt/dc3b9ee9e9fe1b40f9ad1f53f4158006",
    tags: ["javascript"],
    type: "code",
    number: 150,
    id: "30mg3o8",
    sources: [
      {
        name: "Keep track of how much time is spent showing certain elements on the page",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/6341813"
      },
      {
        name: "JavaScript Tip: Tracking Elapsed Time",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=knbUg0Q3qLU"
      },
      {
        name: "Javascript Date and Time in Detail",
        site: "medium",
        url: "https://medium.com/front-end-weekly/javascript-date-and-time-in-detail-270e85a68124"
      },
    ]
  },
  {
    question: "How do you round numbers in JavaScript?",
    answer:
      "https://gist.github.com/masautt/2c83af1c919bf16f4dad21fe84d3f3aa",
    tags: ["javascript"],
    type: "code",
    number: 151,
    id: "5qpt0yu",
    sources: [
      {
        name: "How to round up a number in Javascript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5191133"
      },
      {
        name: "Rounding and Formatting Numbers",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=uyp6WkyPt9Y"
      },
      {
        name: "How to Round Numbers in JavaScript",
        site: "medium",
        url: "https://medium.com/@hohanga/how-to-round-numbers-in-javascript-d0c5cfa1a0c"
      },
    ]
  },
  {
    question: "How do you get the remainder?",
    answer: "The modulus operator returns the division remainder 7 % 8 --> 7.",
    tags: ["programming-fundamentals"],
    type: "explanation",
    number: 152,
    id: "vjcgpef",
    sources: [
      {
        name: "Understanding The Modulus Operator %",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/17525046"
      },
      {
        name: "Modulus Operator - CS101 - Udacity",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=MrTtsX2Wg9Q"
      },
      {
        name: "Arithmetic Operators - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators"
      },
    ]
  },
  {
    question: "What is the purpose of the isNaN function in JavaScript?",
    answer:
      "isNaN( ) determines whether a value is an illegal number. Returns true if the value is equal to NaN and otherwise false.",
    tags: ["javascript"],
    type: "explanation",
    number: 153,
    id: "q3npd",
    sources: [
      {
        name: "What is the use of the isNaN function in JavaScript?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-use-of-the-isNaN-function-in-JavaScript"
      },
      {
        name: "JavaScript Tutorial For Beginners - NaN (Not a Number)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=0ZiltZDg9Gg"
      },
      {
        name: "isNaN() - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN"
      },
    ]
  },
  {
    question:
      "What's the difference between the Number.isNaN( ) and isNaN( ) function in JavaScript?",
    answer:
      "isNaN checks whether a value is NaN whereas Number.isNaN checks if it is NaN and if its type is Number.",
    tags: ["javascript"],
    type: "comparison",
    number: 154,
    id: "277zx1n",
    sources: [
      {
        name: "Is Number.IsNaN() more broken than isNaN()",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/25176685"
      },
      {
        name: "JavaScript Tip: Testing for NaN",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=MOFCavcLVD0"
      },
      {
        name: "Difference between isNaN and Number.isNaN",
        site: "medium",
        url: "https://medium.com/@ismailsimsek/difference-between-isnan-and-number-isnan-19e71c8b7faf"
      },
    ]
  },
  {
    question: "What's the difference between the prefix and postfix operator?",
    answer:
      "The prefix (--num or ++num) will change the value by 1 and then return it whereas postfix (num-- or num++) will return the value and then change by 1.",
    tags: ["programming-fundamentals"],
    type: "comparison",
    number: 155,
    id: "e7yexgf",
    sources: [
      {
        name: "What is the difference between prefix and postfix operators?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/7031409"
      },
      {
        name: "Programming Misconceptions #5: i++ vs ++i - prefix vs postfix increment or decrement operators",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=1SJMR0QW3Sw"
      },
      {
        name: "Increment/decrement operators in JS",
        site: "medium",
        url: "https://medium.com/@Dragonza/increment-decrement-operators-in-js-7f21d4e8848d"
      },
    ]
  },
  {
    question: "What is the Object Literal in JavaScript?",
    answer:
      "Instead of using the Object.create( ) method, the Object Literals encapsulate data in a scope { } and assign the key-value pairs inside to an object.",
    tags: ["javascript"],
    type: "definition",
    number: 156,
    id: "1fcixm6",
    sources: [
      {
        name: "Should I be using object literals or constructor functions?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/4859846"
      },
      {
        name: "JavaScript for Developers 20 - The Object Literal",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Ccop3E9pJoU"
      },
      {
        name: "Object Literal vs. Constructor in Javascript",
        site: "medium",
        url: "https://medium.com/@mandeepkaur1/object-literal-vs-constructor-in-javascript-df143296b816"
      },
    ]
  },
  {
    question: "What are the 3 types of popup boxes?",
    answer: "1. Alert. 2. Confirm 3. Prompt",
    tags: ["javascript", "Front End"],
    type: "list",
    number: 157,
    id: "skcrblb",
    sources: [
      {
        name: "Popups - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
      },
      {
        name: "Pop up boxes tutorial - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=y6P8uvqRYgw"
      },
      {
        name: "Popup Boxes",
        site: "free-code-camp",
        url: "https://guide.freecodecamp.org/javascript/popup-boxes/"
      },
    ]
  },
  {
    question: "What is String Concatenation?",
    answer: "The operation of joining character strings end-to-end.",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 158,
    id: "ryj3919",
    sources: [
      {
        name: "What are “concatenating strings” in C++?",
        site: "quora",
        url: "https://www.quora.com/What-are-%E2%80%9Cconcatenating-strings%E2%80%9D-in-C++"
      },
      {
        name: "String Concatenation In Python 3",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=EBvVDmVm3YU"
      },
      {
        name: "Working with strings in JavaScript",
        site: "medium",
        url: "https://medium.com/swlh/working-with-strings-in-javascript-34060a1c17a9"
      },
    ]
  },
  {
    question: "How to remove whitespace from a string in JavaScript?",
    answer: "https://gist.github.com/masautt/9fd6d671232ced7a6dcebfd417e155f2",
    tags: ["javascript"],
    type: "code",
    number: 159,
    id: "anc4mfc",
    sources: [
      {
        name: "How to remove leading and trailing white spaces from a given html string?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/54212708"
      },
      {
        name: "32 Remove Whitespace from Start and End - Regular Expressions - freeCodeCamp",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Y1u0ETCwEj8"
      },
      {
        name: "Removing space in string in Javascript",
        site: "medium",
        url: "https://medium.com/front-end-weekly/removing-space-in-string-in-javascript-c1bd09a63ad9"
      },
    ]
  },
  {
    question: "What's the difference between string.charAt(x) and string[x] in JavaScript?",
    answer:
      "The bracket notation string[x] does not work in IE7 and below.",
    tags: ["javascript"],
    type: "comparison",
    number: 160,
    id: "apkwlha",
    sources: [
      {
        name: "string.charAt(x) or string[x]?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5943760"
      },
      {
        name: "Strings: [bracket notation] - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=sPmRfjJdg5Y"
      },
      {
        name: "7 JavaScript Patterns Part 3: The Bracket Notation",
        site: "medium",
        url: "https://medium.com/better-programming/7-js-pattern-part-3-the-bracket-notation-f571c2548c0a"
      },
    ]
  },
  {
    question:
      "What's the difference between CSS font-style and font-weight properties?",
    answer:
      "font-weight sets how thick or thin the characters should be while font-style specifies the style such as italic or bold.",
    tags: ["css"],
    type: "comparison",
    number: 161,
    id: "t518ngu9",
    sources: [
      {
        name: "What is the difference between font-weight and font-style on CSS?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-difference-between-font-weight-and-font-style-on-CSS"
      },
      {
        name: "XHTML and CSS Tutorial - 18 - font-weight & font-style",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=sW6CRoJaaoI"
      },
      {
        name: "Weight and Style",
        site: "globe",
        url: "https://smad.jmu.edu/shen/webtype/weight.html"
      },
    ]
  },
  {
    question:
      "What's the difference between attribute and element selectors in CSS?",
    answer:
      "The attribute selector is used to select an element with some specific attribute like an id or class while element selectors are used to select specific tags like .div or .li .",
    tags: ["css"],
    type: "comparison",
    number: 162,
    id: "qa8mnhn",
    sources: [
      {
        name: "Attribute Selectors - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
      },
      {
        name: "CSS Tutorial For Beginners 18 - Attribute Selectors",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=GVocONem9lw"
      },
      {
        name: "What are CSS Selectors?",
        site: "medium",
        url: "https://medium.com/beginners-guide-to-mobile-web-development/what-are-css-selectors-1ce3796c326c"
      },
    ]
  },
  {
    question: "What are child selectors in CSS?",
    answer:
      "Child selectors are used to select child elements within parent elements. When we use the child combinator ( > ) the following style only matches cases where the second selector is found inside the first.",
    tags: ["css"],
    type: "definition",
    number: 163,
    id: "gpgybc8",
    sources: [
      {
        name: "What is a child selector in CSS?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-child-selector-in-CSS"
      },
      {
        name: "CSS Tutorial For Beginners 16 - Child Selectors",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=MlJrAhGVIis"
      },
      {
        name: "Introduction to nth-child CSS Selector",
        site: "medium",
        url: "https://medium.com/better-programming/introduction-to-nth-child-css-selector-9a94c9f00268"
      },
    ]
  },
  {
    question: "What are the 3 combinators in CSS?",
    answer: "1. > (Child combinator) where 2nd element is the child of the the 1st. 2. +  (Adjacent sibling combinator) where 2nd element immediately follows the 1st and both are children of the same parent. 3. ~ (General sibling combinator) where both elements are sibling of same parent but not directly adjacent.",
    tags: ["css"],
    type: "list",
    number: 164,
    id: "3dveaxt",
    sources: [
      {
        name: "Combinators",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators"
      },
      {
        name: "CSS Combinator Selectors",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=L6Y9Yltj15A"
      },
      {
        name: "CSS Smart Selectors, Part 1 of 2",
        site: "medium",
        url: "https://medium.com/@davidagash/css-smart-selectors-part-1-of-2-300597beba86"
      },
    ]
  },
  {
    question: "What is the universal selector in CSS?",
    answer:
      "The universal selector, ( * ) is used to apply a style to all elements of an HTML file.",
    tags: ["css"],
    type: "definition",
    number: 165,
    id: "exo36mp",
    sources: [
      {
        name: "Universal selectors - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors"
      },
      {
        name: "CSS Tutorial For Beginners 26 - The Universal Selector",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=EO4ToIX-ZQk"
      },
      {
        name: "Understanding CSS Selectors",
        site: "medium",
        url: "https://medium.com/front-end-weekly/understanding-css-selectors-1c03267e7cd2"
      },
    ]
  },
  {
    question: "What is a <div> element?",
    answer:
      "The div tag is the fundamental element in HTML that is used as a container for other HTML elements.",
    tags: ["html"],
    type: "definition",
    number: 166,
    id: "qen6nq3",
    sources: [
      {
        name: "What is use of <div> tag?",
        site: "quora",
        url: "https://www.quora.com/What-is-use-of-div-tag"
      },
      {
        name: "HTML Tutorial for Beginners 13 - The div Tag",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=-XQlr727A8w"
      },
      {
        name: "Basic Introduction to CSS",
        site: "medium",
        url: "https://medium.com/the-andela-way/basic-introduction-to-css-81f6041b92d0"
      },
    ]
  },
  {
    question: "What is a hyperlink?",
    answer:
      "A hyperlink is a hypertext file to another location or file, typically activated by clicking on a highlighted word or image on the screen.",
    tags: ["front-end", "html"],
    type: "definition",
    number: 167,
    id: "tqham1b",
    sources: [
      {
        name: "What is a hyperlink?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-hyperlink"
      },
      {
        name: "12: How to Create Links in HTML | Basics of CSS | Learn HTML and CSS | HTML Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=DiSvq5SgLMI"
      },
      {
        name: "How to hyperlink!",
        site: "medium",
        url: "https://medium.com/@jack411ig/how-to-hyperlink-ac5a7a54d45c"
      },
    ]
  },
  {
    question: "How to redirect to another webpage in JavaScript?",
    answer: "https://gist.github.com/masautt/e6fc62dc2712f75ca054f582df407720",
    tags: ["javascript"],
    type: "code",
    number: 168,
    id: "h0fs1xb",
    sources: [
      {
        name: "How do I redirect to another webpage?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/506004"
      },
      {
        name: "JavaScript Tutorial 34 - Redirect Page in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=jjxvNpsb6H0"
      },
      {
        name: "How do you redirect to another page in Javascript?",
        site: "medium",
        url: "https://medium.com/@marikalam/how-do-you-redirect-to-another-page-in-javascript-6c7524c1f88a"
      },
    ]
  },
  {
    question: "How to check if a string contains a substring in JavaScript?",
    answer: "https://gist.github.com/masautt/d7ce557b65745b22cac71373ae1b723d",
    tags: ["javascript"],
    type: "code",
    number: 169,
    id: "r460xpv",
    sources: [
      {
        name: "How to check whether a string contains a substring in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1789952"
      },
      {
        name: "JavaScript Array includes method",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=iOml7u_sAVk"
      },
      {
        name: "Array Includes() and IndexOf() Methods in JavaScript",
        site: "medium",
        url: "https://medium.com/better-programming/array-includes-method-in-javascript-38d919b59c41"
      },
    ]
  },
  {
    question: "How to remove an element from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/76be367edee65ac1b5a87853fcef724e",
    tags: ["javascript"],
    type: "code",
    number: 170,
    id: "otgvjxf",
    sources: [
      {
        name: "How do I remove a particular element from an array in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5767357"
      },
      {
        name: "JavaScript Tip: Deleting an Element from an Array",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=lQ5TnRXZoPs"
      },
      {
        name: "How to remove an element from a JavaScript array.",
        site: "medium",
        url: "https://medium.com/@enirate/how-to-remove-an-element-from-a-javascript-array-ce41d6ea259f"
      },
    ]
  },
  {
    question: "How to remove a property from an Object in JavaScript?",
    answer:
      "The delete operator will allow you to remove an property from an object.",
    tags: ["javascript"],
    type: "code",
    number: 171,
    id: "u0g7hrb",
    sources: [
      {
        name: "How do I remove a property from a JavaScript object?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/208106"
      },
      {
        name: "JavaScript for Developers 27 - Deleting properties with the delete operator",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ET8WE2pVihU"
      },
      {
        name: "Object’s tricky parts in JavaScript",
        site: "medium",
        url: "https://medium.com/code-to-express/objects-its-tricky-part-in-javascript-f40eb096f18a"
      },
    ]
  },
  {
    question: "How to deep clone an object in JavaScript?",
    answer:
      "If the object does not have any functions a simple conversion to JSON and back will deep clone --> JSON.parse(JSON.stringify(objectToClone)). But if there are functions in the object or the object is a function, you should look at external libraries such as underscore or lodash.",
    tags: ["javascript"],
    type: "code",
    number: 172,
    id: "l40vuie",
    sources: [
      {
        name: "What is the most efficient way to deep clone an object in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/122704"
      },
      {
        name: "Deep Copying vs Shallow Copying",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=duyshh9Fs1U"
      },
      {
        name: "Duplicating Objects - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#duplicating-objects"
      },
    ]
  },
  {
    question:
      "What are the 3 ways you can return responses from asynchronous calls in JavaScript?",
    answer: "1. Callback Functions (1995): Traditonal method that can lead to callback hell - several nested blocks of data that are hard to follow. 2. Promises (2015): ES Methods that answer callback hell. 3. Async Await (2017): Syntactic sugar to promises that make them look more like synchronous code.",
    tags: ["javascript"],
    type: "list",
    number: 173,
    id: "eyv6az6",
    sources: [
      {
        name: "How do I return the response from an asynchronous call?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/14220323"
      },
      {
        name: "Async JS Crash Course - Callbacks, Promises, Async Await",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s"
      },
      {
        name: "Callbacks, Promises and Async/Await",
        site: "medium",
        url: "https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90"
      },
    ]
  },
  {
    question: "How can I include a JavaScript file in another JavaScript file?",
    answer: "https://gist.github.com/masautt/a852fda69525b9671ba6a86df9a822cb",
    tags: ["javascript"],
    type: "code",
    number: 174,
    id: "ncrmxrg",
    sources: [
      {
        name: "How do I include a JavaScript file in another JavaScript file?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/950146"
      },
      {
        name: "import / export (modules) - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Jqn_wjkSZwo"
      },
      {
        name: "A simple intro to Javascript imports and exports",
        site: "medium",
        url: "https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac"
      },
    ]
  },
  {
    question: "How to check whether a box is checked using JavaScript?",
    answer: "https://gist.github.com/masautt/288b7f172092d2196e8c58f8ee9f1ce3",
    tags: ["javascript", "dom"],
    type: "code",
    number: 175,
    id: "ccv7qtn",
    sources: [
      {
        name: "Checking if a checkbox is checked with Javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5176274"
      },
      {
        name: "Javascript Checkbox - How To Check If A Check Box Is Checked Or Not [ with source code ]",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=yFYEHSh2iTQ"
      },
      {
        name: "Handling Checkboxes Onclick",
        site: "globe",
        url: "https://www.dyn-web.com/tutorials/forms/checkbox/group.php"
      },
    ]
  },
  {
    question: "How to validate an email address in JavaScript?",
    answer: "https://gist.github.com/masautt/622e9742ec56f77e33124257ddce19c6",
    tags: ["javascript"],
    type: "code",
    number: 176,
    id: "qvbghki",
    sources: [
      {
        name: "How to validate an email address in JavaScript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/46181"
      },
      {
        name: "Regular Expressions (RegEx) Tutorial #15 - Email RegEx Pattern",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=QxjAOSUQjP0"
      },
      {
        name: "How to validate an email address in JavaScript",
        site: "medium",
        url: "https://medium.com/swlh/how-to-validate-an-email-address-in-javascript-78d33f87f5c6"
      },
    ]
  },
  {
    question: "What does it mean to use a # in the href?",
    answer:
      'A hash within a hyperlink specifies an html element id to which the window should be scrolled. So if the link has #some-id then the webpage knows to scroll to the element with the id="some-id".',
    tags: ["html"],
    type: "explanation",
    number: 177,
    id: "uqtpw7f",
    sources: [
      {
        name: "What is href=“#” and why is it used?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/21397285"
      },
      {
        name: "12: How to Create Links in HTML | Basics of CSS | Learn HTML and CSS | HTML Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=DiSvq5SgLMI"
      },
      {
        name: "How to link to a specific paragraph in your Medium article (2018 Table of Contents method)",
        site: "free-code-camp",
        url: "https://www.freecodecamp.org/news/how-to-link-to-a-specific-paragraph-in-your-medium-article-2018-table-of-contents-method-e66595fea549/"
      },
    ]
  },
  {
    question:
      "What is the difference between using # and Javascript.void(0) for an href value?",
    answer:
      "The purpose of using JavaScript.void(0) is to get the primitive value undefined to be used instead of a string. When we put the hashtag as a value, if the link is clicked, the page will still scroll to that link.",
    tags: ["javascript"],
    type: "comparison",
    number: 178,
    id: "8ld9vff",
    sources: [
      {
        name: "Which “href” value should I use for JavaScript links, “#” or “javascript:void(0)”?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/138233"
      },
      {
        name: "JavaScript void Operator",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=TcVdiO6Pw90"
      },
      {
        name: "void operator and JavaScript URIs - MDN",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#JavaScript_URIs"
      },
    ]
  },
  {
    question: "How to generate a GUID / UUID in JavaScript?",
    answer: "https://gist.github.com/masautt/610242ad7a4f08972a6c05994580566a",
    tags: ["javascript"],
    type: "code",
    number: 179,
    id: "irpqnt6",
    sources: [
      {
        name: "Create GUID / UUID in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/2117523"
      },
      {
        name: "JS Package Spotlight Ep.1 - Moment, BcryptJS, JWT Simple, Request & More",
        site: "youtube",
        url: "https://youtu.be/ON3I5N3PZKs?t=1680"
      },
      {
        name: "It’s ok to use JavaScript generated GUID in a browser?",
        site: "medium",
        url: "https://medium.com/este-js-framework/its-ok-to-use-javascript-generated-guid-in-a-browser-373ca6431cf7"
      },
    ]
  },
  {
    question: "How do you get a timestamp in JavaScript?",
    answer: "https://gist.github.com/masautt/c95a8d98fadc2878a3fdcbdfb2c99e30",
    tags: ["javascript"],
    type: "code",
    number: 180,
    id: "q72rjvf",
    sources: [
      {
        name: "How do you get a timestamp in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/221297"
      },
      {
        name: "How to get the current timestamp in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=dOq9q-nCgLE"
      },
      {
        name: "Javascript Date and Time in Detail",
        site: "youtube",
        url: "https://medium.com/front-end-weekly/javascript-date-and-time-in-detail-270e85a68124"
      },
    ]
  },
  {
    question: "How to capitalize first letter of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/963203e3217f1e57d08ec36911a9b2ac",
    tags: ["javascript"],
    type: "code",
    number: 181,
    id: "isy74qv",
    sources: [
      {
        name: "How do I make the first letter of a string uppercase in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1026087"
      },
      {
        name: "JavaScript Capitalize First Letter: How to make strings and arrays sentence case",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=8IEI-7fj2j4"
      },
      {
        name: "Three Ways to Title Case a Sentence in JavaScript",
        site: "free-code-camp",
        url: "https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"
      },
    ]
  },
  {
    question: "How to append to array in JavaScript?",
    answer: "https://gist.github.com/masautt/0d1918dcaa0378fcdfcc724ef8facaab",
    tags: ["javascript"],
    type: "code",
    number: 182,
    id: "kr0ns2b",
    sources: [
      {
        name: "How to append something to an array?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/351421"
      },
      {
        name: "Common Array Methods - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=MeZVVxLn26E"
      },
      {
        name: "JavaScript: Array Methods Cheatsheet",
        site: "medium",
        url: "https://medium.com/@timhancodes/javascript-array-methods-cheatsheet-633f761ac250"
      },
    ]
  },
  {
    question:
      "How to prevent submit button from refreshing page when clicked using JavaScript?",
    answer: "https://gist.github.com/masautt/c371f6ad001e3cd5111019ac897c1f0f",
    tags: ["javascript"],
    type: "code",
    number: 183,
    id: "js40uib",
    sources: [
      {
        name: "prevent refresh of page when button inside form clicked",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/13262305"
      },
      {
        name: "How to Disable a Submit Button on Submit - JavaScript Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ACVnMfeXo_U"
      },
      {
        name: "Form validation with JavaScript",
        site: "medium",
        url: "https://medium.com/the-ui-files/form-validation-with-javascript-4fcf4dd32846"
      },
    ]
  },
  {
    question: "What is the purpose of using the (!!) NOT NOT operator in JavaScript?",
    answer:
      "The !!, aka NOT NOT, aka BANG BANG operator is used to convert any value to a boolean. A single NOT operator ( ! ) will convert the value to a boolean and then get the opposite, whereas 2 will just get the value as a boolean.",
    tags: ["javascript"],
    type: "explanation",
    number: 184,
    id: "8q6thep",
    sources: [
      {
        name: "What is the !! (not not) operator in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/784946"
      },
      {
        name: "JavaScript Double Bang!! Cast to Boolean",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=vsYc4K23FAM"
      },
      {
        name: "JS Double Bang — or “The Not Operator Part !!”",
        site: "medium",
        url: "https://medium.com/@edplatomail/js-double-bang-or-the-not-operator-part-40e55d089bf0"
      },
    ]
  },
  {
    question: "How to check if key exists in Object in JavaScript?",
    answer: "https://gist.github.com/masautt/bf0c8a23589342ccfb0c483c4eaf1580",
    tags: ["javascript"],
    type: "code",
    number: 185,
    id: "jwdkwj8",
    sources: [
      {
        name: "Checking if a key exists in a JavaScript object?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1098955"
      },
      {
        name: "Checking if a key exists in a JavaScript object?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=qPHAgHW7a8E"
      },
      {
        name: "A thing or two about Objects in JavaScript.",
        site: "medium",
        url: "https://medium.com/front-end-weekly/a-thing-or-two-about-objects-in-javascript-c426a12e8b5f"
      },
    ]
  },
  {
    question: "How to loop through Object in JavaScript?",
    answer: "https://gist.github.com/masautt/66c498235ec24227eb2b63ded69f288c",
    tags: ["javascript"],
    type: "code",
    number: 186,
    id: "atlqkai",
    sources: [
      {
        name: "Iterate through object properties",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/16735184"
      },
      {
        name: "JavaScript Nested Loops with Arrays and Objects",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=AqgVLYpBWG8"
      },
      {
        name: "Ways to Loop Through Objects in JavaScript",
        site: "medium",
        url: "https://medium.com/@darrion/ways-to-loop-through-an-object-in-javascript-622353049c7f"
      },
    ]
  },
  {
    question: "How to change element's CSS class using JavaScript?",
    answer: "https://gist.github.com/masautt/c3f5db7e027591343eef39046a4215cf",
    tags: ["javascript", "html", "css"],
    type: "code",
    number: 187,
    id: "9awohc2",
    sources: [
      {
        name: "How to change an element's class with JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/196038/9715166"
      },
      {
        name: "JavaScript Change CSS Class Style className Toggle Tutorial",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=degwrcZeGF0"
      },
      {
        name: "Set CSS styles with javascript",
        site: "dev",
        url: "https://dev.to/karataev/set-css-styles-with-javascript-3nl5"
      },
    ]
  },
  {
    question: "How to check for empty Object in JavaScript?",
    answer: "https://gist.github.com/masautt/8733ba56b12bfa45d8dc45fe5a9dd712",
    tags: ["javascript"],
    type: "code",
    number: 188,
    id: "10n1myo",
    sources: [
      {
        name: "How do I test for an empty JavaScript object?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/32108184/9715166"
      },
      {
        name: "How to check if an object is empty in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=93nVK7o9ZTM"
      },
      {
        name: "Understanding JavaScript Objects",
        site: "medium",
        url: "https://blog.halolabs.io/understanding-javascript-objects-d31cd24ca60f"
      },
    ]
  },
  {
    question: "How to sort array in JavaScript?",
    answer: "https://gist.github.com/masautt/fe73908d0ccdde9a3e6df98ea884f108",
    tags: ["javascript"],
    type: "code",
    number: 189,
    id: "hieewlp",
    sources: [
      {
        name: "How to sort an array of integers correctly",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1063027/9715166"
      },
      {
        name: "Sorting Arrays in JavaScript (Array.prototype.sort)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=BbuLjEqFlw0"
      },
      {
        name: "Is Javascript Array.sort() Stable?",
        site: "medium",
        url: "https://medium.com/@fsufitch/is-javascript-array-sort-stable-46b90822543f"
      },
    ]
  },
  {
    question: "How to sort array of objects by value in JavaScript?",
    answer: "https://gist.github.com/masautt/17931ce2f5efee67ab58f8a8331e9c49",
    tags: ["javascript"],
    type: "code",
    number: 190,
    id: "wioawyg",
    sources: [
      {
        name: "Sorting an array of JavaScript objects by property",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/979289/9715166"
      },
      {
        name: "Custom Array Sorts in JavaScript",
        site: "youtube",
        url: "https://youtu.be/zVevl-K-m7Y?t=301"
      },
      {
        name: "Swift: Sort an array of objects, depending on a boolean property",
        site: "medium",
        url: "https://medium.com/@flxschmidt/sort-an-array-of-objects-depending-on-a-boolean-property-in-swift-544150965f14"
      },
    ]
  },
  {
    question: "What is debugging?",
    answer:
      "The process of locating and correcting code errors in a computer program.",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 191,
    id: "43f5llk",
    sources: [
        {
          name: "What does it mean to 'debug' a code?",
          site: "quora",
          url: "https://www.quora.com/What-does-it-mean-to-debug-a-code"
        },
        {
          name: "Debugging Tips - What is bug and debugging?",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=kRL6hjWOKWI"
        },
        {
          name: "How Debugging Can Make You a Better Developer.",
          site: "medium",
          url: "https://medium.com/swlh/how-debugging-can-make-you-a-better-developer-93db511be8cb"
        },
      ]
  },
  {
    question: "What is Inversion of Control?",
    answer:
      "This refers to the idea of removing dependencies from your code. Components should be able to operate on their own.",
    tags: ["design-patterns", "object-oriented-programming"],
    type: "explanation",
    number: 192,
    id: "pkpevzg",
    sources: [
      {
        name: "What is the inversion of control principle?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-inversion-of-control-principle"
      },
      {
        name: "Inversion of Control",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=vFzP2SaMyA0"
      },
      {
        name: "Overview of Inversion of Control (IoC) and Dependency Injection (DI)",
        site: "medium",
        url: "https://medium.com/@mena.meseha/inversion-of-control-ioc-and-dependency-injection-di-cad15b9e6ab"
      },
    ]
  },
  {
    question: "What is the Law of Demeter?",
    answer:
      "Also known as the Principle of Least Knowledge, each unit should have only a limited knowledge about other units. These units they know little about should be related and not foreign.",
    tags: ["design-patterns"],
    type: "definition",
    number: 193,
    id: "629ynud",
    sources: [
      {
        name: "What is Law of Demeter?",
        site: "quora",
        url: "https://www.quora.com/What-is-Law-of-Demeter"
      },
      {
        name: "Law of Demeter",
        site: "quora",
        url: "https://www.youtube.com/watch?v=C139R2bLews"
      },
      {
        name: "Law of Demeter",
        site: "medium",
        url: "https://medium.com/@bean00/law-of-demeter-68e98f5d2535"
      },
    ]
  },
  {
    question: "What is the Active Record pattern?",
    answer:
      "An ORM pattern where the interface where we store in-memory object data in relational databases. Thus an object instance is tied to a single row in the table. Every time the object is updated, a new row is added with details about the object.",
    tags: ["design-patterns", "databases"],
    type: "definition",
    number: 194,
    id: "t7ol12f",
    sources: [
      {
        name: "Active Record",
        site: "globe",
        url: "https://www.martinfowler.com/eaaCatalog/activeRecord.html"
      },
      {
        name: "v41 Active Record",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=UfIq6-C5HFQ"
      },
      {
        name: "The Active Record and Data Mappers of ORM Pattern",
        site: "medium",
        url: "https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb"
      },
    ]
  },
  {
    question: "What is the Data Mapper pattern?",
    answer:
      "An ORM pattern where the interface of an object conforming to this pattern shold include functions such as Create, Read, Update, and Delete, that operate on objects in a data store. Specifically, this refers to the bidirectional transfer of data between a persistent data store and an in-memory data representation.",
    tags: ["design-patterns", "databases"],
    type: "definition",
    number: 195,
    id: "9zjg24b",
    sources: [
      {
        name: "Data Mapper",
        site: "globe",
        url: "https://martinfowler.com/eaaCatalog/dataMapper.html"
      },
      {
        name: "Data Mapper Design Pattern",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=DWiupph7ezE"
      },
      {
        name: "The Active Record and Data Mappers of ORM Pattern",
        site: "medium",
        url: "https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb"
      },
    ]
  },
  {
    question: "What is the Anti Corruption Layer pattern?",
    answer:
      "A layer placed between systems that translates communications, allowing one system to remain unchanged while the other can avoid compromising its design and technological approach.",
    tags: ["design-patterns"],
    type: "definition",
    number: 196,
    id: "m5rd8",
    sources: [
      {
        name: "What is an Anti-Corruption layer, and how is it used?",
        site: "stack-overflow",
        url: "https://softwareengineering.stackexchange.com/questions/184464/what-is-an-anti-corruption-layer-and-how-is-it-used"
      },
      {
        name: "7.5 Designing an Anti Corruption Layer Event Driven Microservices",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=7fT6B7lO9OU"
      },
      {
        name: "The Anti-Corruption Layer Pattern",
        site: "dev",
        url: "https://dev.to/asarnaout/the-anti-corruption-layer-pattern-pcd"
      },
    ]
  },
  {
    question: "What is the Singleton pattern?",
    answer:
      "Pattern that restricts the instantiation of a class to one single instance. This is useful when exactly one object is needed to coordinate actions across the system.",
    tags: ["design-patterns"],
    type: "definition",
    number: 197,
    id: "lv50qyj",
    sources: [
      {
        name: "What is singleton design pattern?",
        site: "quora",
        url: "https://www.quora.com/What-is-singleton-design-pattern-1"
      },
      {
        name: "Singleton Design Pattern - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=bgU7FeiWKzc"
      },
      {
        name: "Design patterns: Singleton",
        site: "medium",
        url: "https://medium.com/@sawomirkowalski/design-patterns-singleton-a343e5bdb47b"
      },
    ]
  },
  {
    question: "What is Data Abstraction",
    answer:
      "The first step in database design, this allows for the developer to start from essential elements -- data abstractions -- and incrementally add data detail to create the final system.",
    tags: ["databases", "design-patterns"],
    type: "definition",
    number: 198,
    id: "x9opl2f",
    sources: [
      {
        name: "What does data abstraction exactly mean?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/3635024/9715166"
      },
      {
        name: "Data Abstraction & It's Levels",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ADnzACd-E_c"
      },
      {
        name: "Critical Concept: Abstraction",
        site: "medium",
        url: "https://medium.com/@mattburgess/critical-concept-abstraction-ba9e9c0f225e"
      },
    ]
  },
  {
    question: "What is the DRY Principle?",
    answer:
      "The Don't Repeat Yourself Principle refers to reducing repitition of information. Whether its assigning repeating values to a variable or factoring out repeated operations into separate funtions.",
    tags: ["design-patterns", "software-engineering"],
    type: "definition",
    number: 199,
    id: "uflbl7a",
    sources: [
      {
        name: "What is DRY in Microservices architecture?",
        site: "quora",
        url: "https://www.quora.com/What-is-DRY-in-Microservices-architecture"
      },
      {
        name: "Programming Terms: DRY (Don't Repeat Yourself)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=IGH4-ZhfVDk"
      },
      {
        name: "Step 30: Don’t Repeat Yourself ~ Steve Smith",
        site: "medium",
        url: "https://medium.com/@biratkirat/step-30-dont-repeat-yourself-steve-smith-ae98fe7943f"
      },
    ]
  },
  {
    question:
      "Why do some consider the goto statement harmful in higher level programming languages?",
    answer:
      "Goto statements have unconstrained use of memory addresses which provides too many opportunities to make easily avoidable mistakes. The more ways to arrive at a particular location in the code, the less confident one can be about what the state of the system is at that point.",
    tags: ["programming-fundamentals", "design-patterns"],
    type: "explanation",
    number: 200,
    id: "8k82eig",
    sources: [
      {
        name: "GOTO still considered harmful? [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/46789/9715166"
      },
      {
        name: "C-20 goto statement (DANGEROUS)!!!",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=GqWseLqOdzM"
      },
      {
        name: "GOTO has never gone (away)",
        site: "medium",
        url: "https://medium.com/eloquent-coding/goto-has-never-gone-away-f8c0f0851ce6"
      },
    ]
  },
  {
    question: "What is the robustness principle?",
    answer: "Be conservative in what you send be liberal in what you accept.",
    tags: ["design-patterns"],
    type: "definition",
    number: 201,
    id: "8b2gso9",
    sources: [
      {
        name: "Postel's Law / Robustness principle: good or bad?",
        site: "quora",
        url: "https://www.quora.com/Postels-Law-Robustness-principle-good-or-bad"
      },
      {
        name: "What is the robustness principle?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=_KrCQPR2I4s"
      },
      {
        name: "(Bonus) SOLID Series — 6/5 — Robustness principle",
        site: "medium",
        url: "https://medium.com/@ipapikas/bonus-solid-series-6-5-robustness-principle-b63a2fd1a4a0"
      },
    ]
  },
  {
    question: "What is the separation of concerns principle?",
    answer:
      "The process of separating a program into destinct sections, so that each addresses a separate concern.",
    tags: ["design-patterns"],
    type: "definition",
    number: 202,
    id: "0htvje6",
    sources: [
      {
        name: "What is the separation of concerns in software development?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-separation-of-concerns-in-software-development"
      },
      {
        name: "Software Architecture - Seperation of Concerns",
        site: "youtube",
        url: "https://youtu.be/GRTQ896UWaI?t=20"
      },
      {
        name: "Separation of Concerns",
        site: "medium",
        url: "https://medium.com/machine-words/separation-of-concerns-1d735b703a60"
      },
    ]
  },
  {
    question: "Why do we need high cohesion and loose coupling?",
    answer:
      "We need high cohesion to have all our related code be as close to each other as possible, however we need to minimize which related code depends on each other. This allows us to better maintain our code.",
    tags: ["design-patterns"],
    type: "explanation",
    number: 203,
    id: "2brm8fg",
    sources: [
      {
        name: "What does 'low in coupling and high in cohesion' mean",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/14000957/9715166"
      },
      {
        name: "Coupling and Cohesion",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Df0WVO-c3Sw&"
      },
      {
        name: "What does Low Coupling and High Cohesion means?",
        site: "medium",
        url: "https://medium.com/@radinreth/what-does-low-coupling-and-high-cohesion-means-341498c3c97b"
      },
    ]
  },
  {
    question: "What's the difference between cohesion and coupling",
    answer:
      "Cohesion refers to the degree to which elements of a module/class belong together whereas coupling refers to the degree to which the different modules/classes depend on each other.",
    tags: ["design-patterns"],
    type: "comparison",
    number: 204,
    id: "sj2650p",
    sources: [
      {
        name: "Difference Between Cohesion and Coupling",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/3085419/9715166"
      },
      {
        name: "Coupling and Cohesion",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Df0WVO-c3Sw"
      },
      {
        name: "Software Engineering | Coupling and Cohesion",
        site: "globe",
        url: "https://www.geeksforgeeks.org/software-engineering-coupling-and-cohesion/"
      },
    ]
  },
  {
    question: "What is code refactoring",
    answer:
      "Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure. It is a disciplined way to clean up code that minimizes the chances of introducing bugs.",
    tags: ["design-patterns"],
    type: "definition",
    number: 205,
    id: "3155i1d",
    sources: [
      {
        name: "What is code refactoring and what is it used for?",
        site: "quora",
        url: "https://www.quora.com/What-is-code-refactoring-and-what-is-it-used-for"
      },
      {
        name: "Programming tutorial: What refactoring is | lynda.com",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=7VdSoCqrr8w"
      },
      {
        name: "Code Refactoring — How to Write Better Code",
        site: "medium",
        url: "https://medium.com/@fionnachan/code-refactoring-how-to-write-better-code-d1aeab549597"
      },
    ]
  },
  {
    question: "What is stateless programming?",
    answer:
      "Stateless means there is no record of previous interactions and each interaction request has to be handled based entirely on information that comes with it.",
    tags: ["design-patterns"],
    type: "definition",
    number: 206,
    id: "j9iazb4",
    sources: [
      {
        name: "Advantages of stateless programming?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/844548/9715166"
      },
      {
        name: "Stateless - Web Development",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=SkXbGKeQPGM"
      },
      {
        name: "Stateless Over Stateful Applications",
        site: "medium",
        url: "https://medium.com/@rachna3singhal/stateless-over-stateful-applications-73cbe025f07"
      },
    ]
  },
  {
    question: "What is eventual consistency?",
    answer:
      "A model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last udpdated value.",
    tags: ["databases", "back-end"],
    type: "definition",
    number: 207,
    id: "ho9veyj",
    sources: [
      {
        name: "What is eventual consistency?",
        site: "quora",
        url: "https://www.quora.com/What-is-eventual-consistency"
      },
      {
        name: "Eventual Consistency",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=fIfH-kUaX4c"
      },
      {
        name: "Strong consistency vs Eventual consistency",
        site: "medium",
        url: "https://medium.com/@sharmaNK/strong-consistency-vs-eventual-consistency-2d2ad35c003c"
      },
    ]
  },
  {
    question: "What is the CAP theorem?",
    answer:
      "A concept of distributed database systems that states we can only have 2 of the 3: Consistency, Availability, and Partition Tolerance.",
    tags: ["databases", "back-end"],
    type: "definition",
    number: 208,
    id: "qrwi1oa",
    sources: [
      {
        name: "What Is CAP Theorem?",
        site: "quora",
        url: "https://www.quora.com/What-Is-CAP-Theorem-1"
      },
      {
        name: "L16: The CAP Theorem",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA"
      },
      {
        name: "CAP theorem explained",
        site: "medium",
        url: "https://medium.com/@shankarvasudevan/cap-theorem-explained-a0f5f64af446"
      },
    ]
  },
  {
    question: "What's the difference between SQL and NoSQL?",
    answer:
      "SQL is a type of relational database while NoSQL is a distributed database system. SQL is said to be vertically scalable while NoSQL is horizontally scalable. SQL has a predefined Schema whereas NoSQL has a dynamic schema.",
    tags: ["databases"],
    type: "comparison",
    number: 209,
    id: "1nygprp",
    sources: [
      {
        name: "What are the differences between the SQL and NoSQL databases?",
        site: "quora",
        url: "https://www.quora.com/What-are-the-differences-between-the-SQL-and-NoSQL-databases"
      },
      {
        name: "Difference Between SQL Vs NoSQL",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=9G5960c2EQ4"
      },
      {
        name: "The SQL vs NoSQL",
        site: "medium",
        url: "https://medium.com/@sam20gh/the-sql-vs-nosql-713613cdac5c"
      },
    ]
  },
  {
    question: "What is Kubernetes?",
    answer:
      "Kubernetes is an open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation.",
    tags: ["back-end"],
    type: "definition",
    number: 210,
    id: "q1muolx",
    sources: [
      {
        name: "What is Kubernetes in simple words?",
        site: "quora",
        url: "https://www.quora.com/What-is-Kubernetes-in-simple-words"
      },
      {
        name: "Kubernetes in 5 mins",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=PH-2FfFD2PU"
      },
      {
        name: "Kubernetes 101: Pods, Nodes, Containers, and Clusters",
        site: "medium",
        url: "https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16"
      },
    ]
  },
  {
    question: "What is a virtual machine?",
    answer: "Virtual machines allow several instances of an operating system to be run at once. This means we can reduce the number of physical servers used by migrating applications and operating systems into virtual machines running on a single server.",
    tags: ["back-end"],
    type: "definition",
    number: 211,
    id: "1ssdyt5",
    sources: [
      {
        name: "What is a virtual machine?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-virtual-machine"
      },
      {
        name: "What's a Virtual Machine?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=2v_3f_jjLL4"
      },
      {
        name: "Containers and Virtual Machines: An Overview",
        site: "medium",
        url: "https://medium.com/better-programming/containers-and-virtual-machines-an-overview-94c558905b6"
      },
    ]
  },
  {
    question: "What is Linux?",
    answer:
      "Linux is the most used open source operating system which was created by Linus Torvalds.",
    tags: ["back-end"],
    type: "definition",
    number: 212,
    id: "p37q47j",
    sources: [
      {
        name: "What is Linux?",
        site: "quora",
        url: "https://www.quora.com/What-is-Linux-4"
      },
      {
        name: "What is Linux?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=zA3vmx0GaO8"
      },
      {
        name: "What is Linux?",
        site: "medium",
        url: "https://medium.com/@manujarvinen/what-is-linux-a80383275724"
      },
    ]
  },
  {
    question: "Why are most servers built with Linux than Windows?",
    answer:
      "Linux is free and open source so you can look at the code to check for bugs. Since more developers are able to look at the source code and squash bugs, Linux is more secure. The Linux Kernel is very flexible and can be tuned to meet server needs across pretty much any device.",
    tags: ["linux", "operating-systems"],
    type: "explanation",
    number: 213,
    id: "lgr33qb",
    sources: [
      {
        name: "What are the advantages of the Linux server over the Windows server? [closed]",
        site: "stack-overflow",
        url: "https://serverfault.com/a/11727"
      },
      {
        name: "Is Windows or Linux Better for Web Hosting?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=wjAPWtCadb0"
      },
      {
        name: "6 Reasons Why Linux is Better than Windows For Servers",
        site: "globe",
        url: "https://www.tecmint.com/why-linux-is-better-than-windows-for-servers/"
      },
    ]
  },
  {
    question: "What's the difference between Linux and Windows?",
    answer:
      "Linux is an open sourced operating system while Windows was built and owned by Microsoft. Windows is an all encompassing term that refers to the Operating System and Graphical interface, Linux does not have an official GUI, it allows users to choose.",
    tags: ["linux", "operating-systems"],
    type: "explanation",
    number: 214,
    id: "3q48k4v",
    sources: [
      {
        name: "Which one is better: Linux or Windows?",
        site: "quora",
        url: "https://www.quora.com/Which-one-is-better-Linux-or-Windows"
      },
      {
        name: "Is Linux Finally Beating Windows? (Microsoft Windows vs Linux OS Battle)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=EB5hPlqrGU8"
      },
      {
        name: "I switched from Windows to Linux. Here are the lessons I learned along the way.",
        site: "free-code-camp",
        url: "https://www.freecodecamp.org/news/i-switched-from-windows-to-linux-here-are-the-lessons-i-learned-along-the-way-434da84ab63f/"
      },
    ]
  },
  {
    question: "What is Agile Development?",
    answer:
      "A time boxed, interactive approach to software delivery that builds software incrementally from the start, instead of delivering all at once.",
    tags: ["software-engineering"],
    type: "definition",
    number: 215,
    id: "0hffi2r",
    sources: [
      {
        name: "What is agile development?",
        site: "quora",
        url: "https://www.quora.com/What-is-agile-development"
      },
      {
        name: "What is Agile Methodology?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ZZ_vnqvW4DQ"
      },
      {
        name: "An Introduction To: Agile Software Development",
        site: "medium",
        url: "https://medium.com/shecancode/an-introduction-to-agile-software-development-914339dcec66"
      },
    ]
  },
  {
    question: "What is a Sprint in Agile Development?",
    answer:
      "A set period of time during which specific work has to be completed and made ready for review. Each sprint begins with a planning meeting and then each workday, the team has stand-up meetings to discuss progress and brainstorm solutions to challenges.",
    tags: ["software-engineering"],
    type: "definition",
    number: 216,
    id: "26k5neb",
    sources: [
      {
        name: "What is sprint in agile?",
        site: "quora",
        url: "https://www.quora.com/What-is-sprint-in-agile"
      },
      {
        name: "What is a Sprint?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=7wGQU37fyiI"
      },
      {
        name: "A Short Introduction to the Scrum Methodology",
        site: "medium",
        url: "https://medium.com/chingu/a-short-introduction-to-the-scrum-methodology-7a23431b9f17"
      },
    ]
  },
  {
    question: "What is an API?",
    answer:
      "An Application Programming Interface is a list of operations that developers can use along with a description of what they do.",
    tags: ["APIs", "back-end"],
    type: "definition",
    number: 217,
    id: "r0jowmd",
    sources: [
      {
        name: "What is an API?",
        site: "quora",
        url: "https://www.quora.com/What-is-an-API-4"
      },
      {
        name: "What is an API? (Application Programming Interface)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=6STSHbdXQWI"
      },
      {
        name: "What exactly IS an API?",
        site: "medium",
        url: "https://medium.com/@perrysetgo/what-exactly-is-an-api-69f36968a41f"
      },
    ]
  },
  {
    question: "What is REST?",
    answer:
      "The REpresentational State Transfer is a style for providing standards between computer systems on the web, making it easier to communicate with each other. ",
    tags: ["rest", "design-patterns"],
    type: "definition",
    number: 218,
    id: "6pehq9o",
    sources: [
      {
        name: "What is a REST API?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-REST-API"
      },
      {
        name: "What are RESTful Services (RESTful APIs)? | Mosh",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=SLwpqD8n3d0"
      },
      {
        name: "What is a RESTful API?",
        site: "medium",
        url: "https://medium.com/@lazlojuly/what-is-a-restful-api-fabb8dc2afeb"
      },
    ]
  },
  {
    question: "What are the 4 REST Methods?",
    answer: "DELETE, GET, POST, PUT",
    tags: ["rest", "design-patterns"],
    type: "definition",
    number: 219,
    id: "ojww2ff",
    sources: [
      {
        name: "What are HTTP methods and what are they used for?",
        site: "quora",
        url: "https://www.quora.com/What-are-HTTP-methods-and-what-are-they-used-for"
      },
      {
        name: "Http Methods",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=guYMSP7JVTA"
      },
      {
        name: "Using HTTP Methods for RESTful Services",
        site: "medium",
        url: "https://medium.com/@kumaraksi/using-http-methods-for-restful-services-e6671cf70d4d"
      },
    ]
  },
  {
    question: "What is JQuery?",
    answer:
      "JQuery is a small component library that allows for easier HTML document traversal and manipulation as well as a much simpler API for AJAX requests.",
    tags: ["javascript", "front-end"],
    type: "definition",
    number: 220,
    id: "uorwuur",
    sources: [
        {
          name: "What is jQuery?",
          site: "quora",
          url: "https://www.quora.com/What-is-jQuery"
        },
        {
          name: "jQuery Basics - What is jQuery?",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=U4UZVbQ8md0"
        },
        {
          name: "The Life and Death of jQuery",
          site: "medium",
          url: "https://medium.com/mayazine/the-life-and-death-of-jquery-9aca562c80b9"
        },
      ]
  },
  {
    question: "What is CoffeeScript?",
    answer:
      "CoffeeScript is a programming language that compiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in efort to enhance JavaScript's brevity and readability. ",
    tags: ["javascript"],
    type: "definition",
    number: 221,
    id: "ljdn42b",
    sources: [
        {
          name: "What is Coffeescript ? Where is it used?",
          site: "quora",
          url: "https://www.quora.com/What-is-Coffeescript-Where-is-it-used"
        },
        {
          name: "What is CoffeeScript All About - An Introduction plus How You Can Benefit from Using it",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=bNpXerBejPg"
        },
        {
          name: "Why CoffeeScript is still alive",
          site: "medium",
          url: "https://codeburst.io/why-coffeescript-is-still-alive-aeb369b91b85"
        },
      ]
  },
  {
    question: "What's the difference between JQuery and CoffeeScript?",
    answer:
      "CoffeeScript is it's own programming language, it compiles down to JavaScript. JQuery is a library you import into JavaScript files to make use of their methods.",
    tags: ["javascript"],
    type: "explanation",
    number: 222,
    id: "cjax144",
    sources: [
        {
          name: "Should I learn jQuery or CoffeeScript?",
          site: "quora",
          url: "https://www.quora.com/Should-I-learn-jQuery-or-CoffeeScript"
        },
        {
          name: "Library vs Framework 1 - JavaScript Design Patterns",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=JRU-w8O2Ziw"
        },
        {
          name: "Libraries vs. Frameworks",
          site: "medium",
          url: "https://medium.com/datafire-io/libraries-vs-frameworks-626cdde799a7"
        },
      ]
  },
  {
    question: "Why is JQuery no longer popular?",
    answer:
      "One of the main reasons for jQuery was it's ability to parse the DOM with functions that worked across all browsers. Today, JavaScript's dom traversal is not only supported by most browsers, but it's faster than jQuery.s",
    tags: ["javascript"],
    type: "explanation",
    number: 223,
    id: "ao7slwl",
    sources: [
        {
          name: "Is jQuery still popular for 2019?",
          site: "quora",
          url: "https://www.quora.com/Is-jQuery-still-popular-for-2019"
        },
        {
          name: "Is jQuery Still Relevant in 2018?",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=pk3tsynNZ0w"
        },
        {
          name: "The Life and Death of jQuery",
          site: "medium",
          url: "https://medium.com/mayazine/the-life-and-death-of-jquery-9aca562c80b9"
        },
      ]
  },
  {
    question: "What is a bug?",
    answer:
      "An error, flaw, failure or fault in a computer program or system that causes it to produce an incorrect or unexpected result.",
    tags: ["programming-fundamentals", "software-engineering"],
    type: "definition",
    number: 224,
    id: "0kovdkf",
    sources: [
        {
          name: "What is a computer bug?",
          site: "quora",
          url: "https://www.quora.com/What-is-a-computer-bug"
        },
        {
          name: "Debugging Tips - What is bug and debugging?",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=kRL6hjWOKWI"
        },
        {
          name: "How to find your first open source bug to fix",
          site: "medium",
          url: "https://medium.com/free-code-camp/finding-your-first-open-source-project-or-bug-to-work-on-1712f651e5ba"
        },
      ]
  },
  {
    question: "What is code?",
    answer:
      "code is a language understood by the computer. Programmers can use code to build software.",
    tags: ["programming-fundamentals", "software-engineering"],
    type: "definition",
    number: 225,
    id: "rtt06oc",
    sources: [
        {
          name: "What is coding?",
          site: "quora",
          url: "https://www.quora.com/What-is-coding"
        },
        {
          name: "What is Coding?",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=N7ZmPYaXoic"
        },
        {
          name: "Learning to code",
          site: "medium",
          url: "https://medium.com/swlh/learning-to-code-45f7e1657c1e"
        },
      ]
  },
  {
    question: "What is deployment?",
    answer:
      "Deployment refers to preparing a software application to run and operate in a specific environment.",
    tags: ["software-engineering"],
    type: "definition",
    number: 226,
    id: "islr4qg",
    sources: [
        {
          name: "What is deployment generally mean in computer science?",
          site: "quora",
          url: "https://www.quora.com/What-is-deployment-generally-mean-in-computer-science"
        },
        {
          name: "03 L What Is Deployment-",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=nZ3BaTY8c9M"
        },
        {
          name: "A Journey to Better Deployments",
          site: "medium",
          url: "https://medium.com/spaceapetech/a-journey-to-better-deployments-a255eb69bbf2"
        },
      ]
  },
  {
    question: "What is documentation?",
    answer:
      "The umbrella term that encompasses all written documents and materials dealing with a software product's development and use.",
    tags: ["software-engineering"],
    type: "definition",
    number: 227,
    id: "54n8r5r",
    sources: [
        {
          name: "What must software documentation contain?",
          site: "quora",
          url: "https://www.quora.com/What-must-software-documentation-contain"
        },
        {
          name: "Software Documentation",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=ApqnZIWPw7s"
        },
        {
          name: "Writing great documentation",
          site: "medium",
          url: "https://medium.com/@episod/writing-great-documentation-44d90367115a"
        },
      ]
  },
  {
    question: "What is a domain name?",
    answer:
      "A domain name is a string of characters given to a IP address for easier lookups.",
    tags: ["networking"],
    type: "definition",
    number: 228,
    id: "9dvpxk6",
    sources: [
        {
          name: "What does domain name mean?",
          site: "quora",
          url: "https://www.quora.com/What-does-domain-name-mean"
        },
        {
          name: "DNS as Fast As Possible",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=Rck3BALhI5c"
        },
        {
          name: "What Exactly Is DNS Anyways?",
          site: "medium",
          url: "https://medium.com/@maheshkariya/what-exactly-is-dns-anyways-4239278ab1b4"
        },
      ]
  },
  {
    question: "What is a framework?",
    answer:
      "A framework is something that gives programmers most of the basic building blocks they need to make an application.",
    tags: ["javascript"],
    type: "definition",
    number: 229,
    id: "tnc2dxj",
    sources: [
        {
          name: "What is a framework in programming?",
          site: "quora",
          url: "https://www.quora.com/What-is-a-framework-in-programming"
        },
        {
          name: "What Is a Framework in Programming? | Why Is It Useful?",
          site: "youtube",
          url: "https://www.youtube.com/watch?v=BfhSoFARn6w"
        },
        {
          name: "JavaScript Frameworks, Performance Comparison",
          site: "medium",
          url: "https://medium.com/@ajmeyghani/javascript-frameworks-performance-comparison-c566d19ab65b"
        },
      ]
  },
  {
    question: "What is the front-end?",
    answer:
      "The front-end refers to anything involved with what the client sees, including design. For web development, front-end languages include HTML, CSS, and JavaScript.",
    tags: ["front-end"],
    type: "definition",
    number: 230,
    id: "07fox7s",
    sources: [
      {
        name: "What is a front-end developer?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-front-end-developer"
      },
      {
        name: "What front end development means",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=3VJItso0MsM"
      },
      {
        name: "Learn to become a modern Frontend Developer in 2019",
        site: "medium",
        url: "https://medium.com/@kamranahmedse/modern-frontend-developer-in-2018-4c2072fa2b9c"
      },
    ]
  },
  {
    question: "What is the back-end?",
    answer:
      "The front-end refers to anything involved with how the server operates. The back-end is not limited to the select few frontend languages.",
    tags: ["back-end"],
    type: "definition",
    number: 231,
    id: "b2mkpu5",
    sources: [
      {
        name: "What is a back-end developer?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-back-end-developer"
      },
      {
        name: "What Is Back-End?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=WwbBOQaM0Zw"
      },
      {
        name: "What Is Back-End Development?",
        site: "medium",
        url: "https://medium.com/@larong2122/what-is-back-end-development-d93732c129e9"
      },
    ]
  },
  {
    question: "What is full-stack?",
    answer:
      "Full-stack refers to the combination of the front-end and back-end. What the client sees, and what is run on the server.",
    tags: ["front-end", "back-end"],
    type: "definition",
    number: 232,
    id: "n22ljc3",
    sources: [
      {
        name: "What does a Full Stack developer do, in simple terms?",
        site: "quora",
        url: "https://www.quora.com/What-does-a-Full-Stack-developer-do-in-simple-terms"
      },
      {
        name: "What Is a Full Stack Developer & How To Become a Full Stack Developer in 1 Year",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=UtDpYVf9jKU"
      },
      {
        name: "How to become a full stack developer — Backend",
        site: "medium",
        url: "https://medium.com/datadriveninvestor/how-to-become-a-full-stack-developer-backend-53c0330eaa64"
      },
    ]
  },
  {
    question: "What is Git?",
    answer:
      "Git is the most widely used distributed version control system. It allows developers to clone code from repositories, edit, and push back into their code with pull-requests.",
    tags: ["git"],
    type: "definition",
    number: 233,
    id: "dhrzz7h",
    sources: [
      {
        name: "What is Git and why should I use it?",
        site: "quora",
        url: "https://www.quora.com/What-is-Git-and-why-should-I-use-it"
      },
      {
        name: "What is Git and Github?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=uUuTYDg9XoI"
      },
      {
        name: "Learn the Basics of Git in Under 10 Minutes",
        site: "free-code-camp",
        url: "https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/"
      },
    ]
  },
  {
    question: "What is Github?",
    answer: "Github is like the google drive of git repositories. Users can create a github account and have their code be backed up as a private or public repo on the Github servers.",
    tags: ["git"],
    type: "definition",
    number: 234,
    id: "6q7be0q",
    sources: [
      {
        name: "What is GitHub for a beginner and how do I get started with it?",
        site: "quora",
        url: "https://www.quora.com/What-is-GitHub-for-a-beginner-and-how-do-I-get-started-with-it"
      },
      {
        name: "What is GitHub?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=w3jLJU7DT5E"
      },
      {
        name: "A Beginner’s Guide to Github",
        site: "medium",
        url: "https://medium.com/swlh/a-beginners-guide-to-github-e4747a93765c"
      },
    ]
  },
  {
    question: "How to find longest substring without repeating characters in JavaScript?",
    answer: "https://gist.github.com/masautt/8cb604746c7dff090d0654759d1e19a7",
    tags: ["javascript"],
    type: "code",
    number: 235,
    id: "7bbszl6",
    sources: [
      {
        name: "Longest Substring Without Repeating Characters in JS",
        site: "stack-overflow",
        url: "https://codereview.stackexchange.com/a/220231"
      },
      {
        name: "CODING INTERVIEW PRACTICE | EP 2 | LONGEST SUBSTRING WITHOUT REPEATS",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=sZosU8JjVaA"
      },
      {
        name: "Longest Substring Without Repeating Characters",
        site: "medium",
        url: "https://medium.com/@dimko1/longest-substring-without-repeating-characters-997ded46e89d"
      },
    ]
  },
  {
    question: "How to convert a string to a number in JavaScript?",
    answer: "https://gist.github.com/masautt/715c78034f26aa6605ceaad32276b750",
    tags: ["javascript"],
    type: "code",
    number: 236,
    id: "olq9ps4",
    sources: [
      {
        name: "Convert a string to an integer?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1133814"
      },
      {
        name: "Easily Convert JavaScript Strings to Numbers",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=nhOnfbAmebg"
      },
      {
        name: "JS String to Number",
        site: "medium",
        url: "https://medium.com/@cristi.nord/js-string-to-number-7d82010ef263"
      },
    ]
  },
  {
    question: "How to convert a number to a string in JavaScript?",
    answer: "https://gist.github.com/masautt/7e7a7645923bd673bca1ffe95393deb9",
    tags: ["javascript"],
    type: "code",
    number: 237,
    id: "a3mjlio",
    sources: [
      {
        name: "What's the best way to convert a number to a string in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5765401"
      },
      {
        name: "JavaScript Strings",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=09BwruU4kiY"
      },
      {
        name: "5 Ways to Convert a Value to String in JavaScript",
        site: "medium",
        url: "https://medium.com/dailyjs/5-ways-to-convert-a-value-to-string-in-javascript-6b334b2fc778"
      },
    ]
  },
  {
    question: "How to remove vowels from string in JavaScript?",
    answer: "https://gist.github.com/masautt/239d93bfab41d9f37ef33017a8fec460",
    tags: ["javascript"],
    type: "code",
    number: 238,
    id: "19k7g5p",
    sources: [
      {
        name: "Counting number of vowels in a string with JavaScript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/29450463"
      },
      {
        name: "Javascript Challenges - Count the number of vowels in a string",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=j8CU_quwHv0"
      },
      {
        name: "Javascript Algorithms #1: Counting the Vowels in a String Of Text",
        site: "dev",
        url: "https://dev.to/worldclassdev/javascript-algorithms-1-counting-the-vowels-in-a-string-oftext-5ejl"
      },
    ]
  },
  {
    question: "How to reverse an array in JavaScript?",
    answer: "https://gist.github.com/masautt/36116cd6712763d2208cdd7160820c88",
    tags: ["javascript"],
    type: "code",
    number: 239,
    id: "h74jep5",
    sources: [
      {
        name: "What is the most efficient way to reverse an array in Javascript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/9113136/9715166"
      },
      {
        name: "Javascript reverse an Array",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=_KUdewtpQL4"
      },
      {
        name: "Code Recipe: How to Reverse an Array in JavaScript",
        site: "medium",
        url: "https://medium.com/dailyjs/code-recipe-how-to-reverse-an-array-in-javascript-4a0306001d28"
      },
    ]
  },
  {
    question: "How to reverse a string in JavaScript?",
    answer: "https://gist.github.com/masautt/bc26c58dfc81a60c39ba731943b66a13",
    tags: ["javascript"],
    type: "code",
    number: 240,
    id: "u7t2s1q",
    sources: [
      {
        name: "How do you reverse a string in place in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/959004/9715166"
      },
      {
        name: "Javascript Coding Challenge #1: Reverse a String (FreeCodeCamp)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=miiM5JJgrQo"
      },
      {
        name: "Reverse a String in JavaScript",
        site: "medium",
        url: "https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c"
      },
    ]
  },
  {
    question: "How to check if a string is all uppercase in JavaScript?",
    answer: "https://gist.github.com/masautt/bb551be4a59ef8080534cc91ca4785b8",
    tags: ["javascript"],
    type: "code",
    number: 241,
    id: "4eqrzp8",
    sources: [
      {
        name: "How can I test if a letter in a string is uppercase or lowercase using JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1077692/9715166"
      },
      {
        name: "Core Javascript Tutorial - toLowerCase(), toUpperCase() and trim() method of String Object",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=hivLxFl-kAg"
      },
      {
        name: "String.prototype.toUpperCase()",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
      },
    ]
  },
  {
    question: "How to check if a string is all lowercase in JavaScript?",
    answer: "https://gist.github.com/masautt/c7146f1f5daad173418ef871bc5343e8",
    tags: ["javascript"],
    type: "code",
    number: 242,
    id: "trhvy6b",
    sources: [
      {
        name: "How can I test if a letter in a string is uppercase or lowercase using JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1077692/9715166"
      },
      {
        name: "Core Javascript Tutorial - toLowerCase(), toUpperCase() and trim() method of String Object",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=hivLxFl-kAg"
      },
      {
        name: "String.prototype.toLowerCase()",
        site: "firefox",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
      },
    ]
  },
  {
    question: "How to find most reoccuring character in JavaScript?",
    answer: "https://gist.github.com/masautt/2e8d8d84fd8761889ed0fc9399b4d219",
    tags: ["javascript"],
    type: "code",
    number: 243,
    id: "2fmdui8",
    sources: [
      {
        name: "Finding the most frequent character in a string javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/22590204/9715166"
      },
      {
        name: "Javascript Array Exercise: Majority Element",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=wQIEnwsXECs"
      },
      {
        name: "Find the most commonly used character in string",
        site: "medium",
        url: "https://medium.com/@Dragonza/find-the-most-commonly-used-character-in-string-ed00dc2279be"
      },
    ]
  },
  {
    question: "How to get all permutations of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/3033aea4a933ae26a3971263e71fc6dd",
    tags: ["javascript"],
    type: "code",
    number: 244,
    id: "nq1zehe",
    sources: [
      {
        name: "Permutations in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/20871714/9715166"
      },
      {
        name: "JavaScript the Basics - Algorithms Part 3 Permutations",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=rxO6BFKr6ww"
      },
      {
        name: "Implement All Permutations of a Set in JavaScript",
        site: "medium",
        url: "https://initjs.org/all-permutations-of-a-set-f1be174c79f8"
      },
    ]
  },
  {
    question: "How to reverse a sentence in JavaScript?",
    answer: "https://gist.github.com/masautt/488736f2ec7d4cc2d68e258da54be37a",
    tags: ["javascript"],
    type: "code",
    number: 245,
    id: "pdeg7lj",
    sources: [
      {
        name: "Reverse a sentence and print each word in reverse order in Javascript [closed]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/34083746/9715166"
      },
      {
        name: "How to reverse word order in a sentence in 40 seconds ! JavaScript.",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=XK8-AUQSPW0"
      },
      {
        name: "A popular programming interview question — reverse words of a sentence.",
        site: "medium",
        url: "https://medium.com/@hmurari/a-popular-programming-interview-question-reverse-words-of-a-sentence-3bac606d15a2"
      },
    ]
  },
  {
    question: "How to find first non-repeating character in JavaScript?",
    answer: "https://gist.github.com/masautt/7778c80230db544d0a8e0877b919c6ae",
    tags: ["javascript"],
    type: "code",
    number: 246,
    id: "g3y4as9",
    sources: [
      {
        name: "return the first non repeating character in a string in javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/24793128/9715166"
      },
      {
        name: "Finding the First Non Repeating Character - JavaScript - Simplest Approach",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=tGoqKsPltxE"
      },
      {
        name: "First non-repeating letter",
        site: "medium",
        url: "https://medium.com/@brendt_bly/first-non-repeating-letter-c00ef6a2e9b8"
      },
    ]
  },
  {
    question: "How to check if string is palindrome in JavaScript?",
    answer: "https://gist.github.com/masautt/1c9732ad1ff32327d7b6cc7439d1a9af",
    tags: ["javascript"],
    type: "code",
    number: 247,
    id: "j99xx3o",
    sources: [
      {
        name: "Palindrome check in Javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/14813569/9715166"
      },
      {
        name: "Javascript Coding Challenge #3: Palindrome Check (Freecodecamp)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=hvV48xfwZCs"
      },
      {
        name: "Three ways to check for palindromes in JavaScript",
        site: "dev",
        url: "https://dev.to/domazet93/three-ways-to-check-for-palindromes-in-javascript-jbk"
      },
    ]
  },
  {
    question: "What is responsive design",
    answer: "Responsive design refers to the accessibility of a website. If the site can change it's size and scale to meet other resolutions then it is said to be responsive.",
    tags: ["front-end"],
    type: "definition",
    number: 248,
    id: "i2x0f9e",
    sources: [
      {
        name: "What is responsive web design",
        site: "quora",
        url: "https://www.quora.com/What-is-responsive-web-design-2"
      },
      {
        name: "Responsive Website Basics (in 3 simple steps)",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=h3IdEqpjMvQ"
      },
      {
        name: "Responsive design",
        site: "medium",
        url: "https://medium.com/owl-studios/responsive-design-af7a1f14b991"
      },
    ]
  },
  {
    question: "What is Big O Efficiency / Big O Notation?",
    answer: "This refers to the performance or complexity of an algorithm. The Big O refers to the worse case scenario when running a piece of code and can be used to describe the execution time required or the spaced used.",
    tags: ["algorithms", "programming-fundamentals"],
    type: "definition",
    number: 249,
    id: "dg97u4t",
    sources: [
      {
        name: "What's the best way to explain big-O notation in laymen's terms?",
        site: "quora",
        url: "https://www.quora.com/Whats-the-best-way-to-explain-big-O-notation-in-laymens-terms"
      },
      {
        name: "Big O Notation",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=v4cd1O4zkGw"
      },
      {
        name: "The Big Scary O Notation",
        site: "medium",
        url: "https://medium.com/omarelgabrys-blog/the-big-scary-o-notation-ce9352d827ce"
      },
    ]
  },
  {
    question: "What is the best runtime for Big O?",
    answer: "O(1) is the best runtime for Big O and it essentially means at an instant.",
    tags: ["algorithms"],
    type: "explanation",
    number: 250,
    id: "2391eqr",
    sources: [
      {
        name: "What's the best way to explain big-O notation in laymen's terms?",
        site: "quora",
        url: "https://www.quora.com/Whats-the-best-way-to-explain-big-O-notation-in-laymens-terms"
      },
      {
        name: "Big O Notation",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=v4cd1O4zkGw"
      },
      {
        name: "The Big Scary O Notation",
        site: "medium",
        url: "https://medium.com/omarelgabrys-blog/the-big-scary-o-notation-ce9352d827ce"
      },
    ]
  },
  {
    question: "What is the worst runtime for Big O?",
    answer: "Besides an infinite amount, O(n!) (O of n factorial) is the worst possible runtime. Ex, if n is 5 then the outcome will be 120.",
    tags: ["algorithms"],
    type: "explanation",
    number: 251,
    id: "ziecsv8",
    sources: [
      {
        name: "What's the best way to explain big-O notation in laymen's terms?",
        site: "quora",
        url: "https://www.quora.com/Whats-the-best-way-to-explain-big-O-notation-in-laymens-terms"
      },
      {
        name: "Big O Notation",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=v4cd1O4zkGw"
      },
      {
        name: "The Big Scary O Notation",
        site: "medium",
        url: "https://medium.com/omarelgabrys-blog/the-big-scary-o-notation-ce9352d827ce"
      },
    ]
  },
  {
    question: "What is a hash table?",
    answer: "A data structure that operates like a dictionary. You insert keys into the table and it spits back an associated value. Also known as a key-value storage.",
    tags: ["data-structures"],
    type: "definition",
    number: 252,
    id: "05hyulk",
    sources: [
      {
        name: "What are hash tables and why are they useful?",
        site: "quora",
        url: "https://www.quora.com/What-are-hash-tables-and-why-are-they-useful"
      },
      {
        name: "Hash Tables - Beau teaches JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=F95z5Wxd9ks"
      },
      {
        name: "Hash Tables",
        site: "medium",
        url: "https://medium.com/@bilalak90/hash-tables-c84d1b7aeb96"
      },
    ]
  },
  {
    question: "What is a software stack?",
    answer: "A collection of independent components that work together to support the execution of an application. For fullstack development, stacks usually refer to the frameworks for handling the database, front-end, and back-end.",
    tags: ["back-end", "front-end"],
    type: "definition",
    number: 253,
    id: "clmv0xn",
    sources: [
      {
        name: "Software Stack - Techopedia",
        site: "globe",
        url: "https://www.techopedia.com/definition/27268/software-stack"
      },
      {
        name: "What is Technology Stack? - Fast Tech Skills",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=AGBnP_CSp7Y"
      },
      {
        name: "What is a tech stack?",
        site: "globe",
        url: "https://learn.g2.com/what-is-a-tech-stack"
      },
    ]
  },
  {
    question:
      "What's the difference between a Single Linked list and a Double Linked list?",
    answer: "SSL only has a data field and a next field whereas DLL has a data, next, and prev fields. This means a DLL can traverse backwards and forwards which brings down the complexity of insertion and deletion ot O(1) from O(n).",
    tags: ["data-structures"],
    type: "comparison",
    number: 254,
    id: "wjmzlea",
    sources: [
      {
        name: "Microsoft Asks: Singly List or Doubly List? What are the pros and cons of using each?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/10708820/9715166"
      },
      {
        name: "Data Structures: Linked Lists",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=njTh_OwMljA"
      },
      {
        name: "Data Structures — Linked List & Doubly Linked List",
        site: "medium",
        url: "https://medium.com/@ariel.salem1989/data-structures-linked-list-doubly-linked-list-f8cf1b1c9f28"
      },
    ]
  },
  {
    question: "Why are hash tables important in algorithms?",
    answer: "Hash tables have O(1) lookup which means when we try to get the value of a key it happens at an instant. We can use hash tables to store important information about an array or list without having to traverse them again.",
    tags: ["algorithms", "Data Structures"],
    type: "explanation",
    number: 255,
    id: "vh5ikj2",
    sources: [
      {
        name: "What's the point of a hash table?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/2180053/9715166"
      },
      {
        name: "Data Structures: Hash Tables",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=shs0KM3wKv8"
      },
      {
        name: "Hash Crash: The Basics of Hash Tables",
        site: "medium",
        url: "https://medium.com/@bartobri/hash-crash-the-basics-of-hash-tables-bef82a8ea550"
      },
    ]
  },
  {
    question: "What's the difference between UX and UI Design?",
    answer: "UI or User Interface refers to how the application looks whereas UX or User Experience deals with how the user interacts with the user interface.",
    tags: ["front-end"],
    type: "comparison",
    number: 256,
    id: "7bl2ums",
    sources: [
      {
        name: "What is the difference between UI design and UX design?",
        site: "quora",
        url: "https://www.quora.com/What-is-the-difference-between-UI-design-and-UX-design"
      },
      {
        name: "UX vs UI Design - What each of them does",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=hQ1rpJKyj68"
      },
      {
        name: "UI vs UX Design (an overview)",
        site: "medium",
        url: "https://medium.com/@iamjesseshow/ux-vs-us-7431dd859418"
      },
    ]
  },
  {
    question: "What's the difference between a mobile app and a web app?",
    answer: "Mobile apps are built using programming languages for building Android or iOS apps whereas web apps are built using HTML, CSS, and JavaScript but are responsive enough to work well on mobile.",
    tags: ["front-end", "back-end"],
    type: "comparison",
    number: 257,
    id: "vkx3jr0r",
    sources: [
      {
        name: "What are the difference between web app and mobile app?",
        site: "quora",
        url: "https://www.quora.com/What-are-the-difference-between-web-app-and-mobile-app"
      },
      {
        name: "Mobile Apps - Web vs. Native vs. Hybrid",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=ZikVtdopsfY"
      },
      {
        name: "Mobile Website or Mobile App: What to choose?",
        site: "medium",
        url: "https://medium.com/swlh/mobile-website-or-mobile-app-what-to-choose-28d0cf19d93c"
      },
    ]
  },
  {
    question: "How to check if string has only digits in JavaScript?",
    answer: "https://gist.github.com/masautt/9748d1234ef146ae12901a68b4a55c33",
    tags: ["javascript"],
    type: "code",
    number: 258,
    id: "c3bt8ij",
    sources: [
      {
        name: "Check if string contains only digits",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1779019/9715166"
      },
      {
        name: "Javascript - how to make html input text Allow only Numeric values In JS [ with source code ]",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=6bKvevjR7GM"
      },
      {
        name: "Regex tutorial — A quick cheatsheet by examples",
        site: "medium",
        url: "https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285"
      },
    ]
  },
  {
    question: "How to get number of vowels and consonants in JavaScript?",
    answer: "https://gist.github.com/masautt/1109907cf23eaae3d9e981f190ff938d",
    tags: ["javascript"],
    type: "code",
    number: 259,
    id: "j6epsxe",
    sources: [
      {
        name: "Counting number of vowels in a string with JavaScript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/29450463"
      },
      {
        name: "Javascript Challenges - Count the number of vowels in a string",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=j8CU_quwHv0"
      },
      {
        name: "Javascript Algorithms #1: Counting the Vowels in a String Of Text",
        site: "dev",
        url: "https://dev.to/worldclassdev/javascript-algorithms-1-counting-the-vowels-in-a-string-oftext-5ejl"
      },
    ]
  },
  {
    question: "How to count number of occurrences of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/65167ff69e94f2fc01b3a49b1d7ec846",
    tags: ["javascript"],
    type: "code",
    number: 260,
    id: "daldhei",
    sources: [
      {
        name: "Count the number of occurrences of a character in a string in Javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/881111"
      },
      {
        name: "JavaScript Tips and Tricks 03 - Count number of characters",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=BxPxXk0ubA4"
      },
      {
        name: "String Practice Problems",
        site: "medium",
        url: "https://medium.com/@codingfreak/string-practice-problems-i-c64e073a7138"
      },
    ]
  },
  {
    question: "How to find longest palindrome of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/6fcd34d2806a727aacbf6395d034eefa",
    tags: ["javascript"],
    type: "code",
    number: 261,
    id: "bvl9h3f",
    sources: [
      {
        name: "Given a string s, find the longest palindromic substring in s.",
        site: "jsfiddle",
        url: "https://jsfiddle.net/vovchuck_bogdan/yv6u9d1u/2/"
      },
      {
        name: "LONGEST PALINDROME SUB STRING WITH DYNAMIC PROGRAMMING",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=Fi5INvcmDos"
      },
      {
        name: "Longest Palindromic Substring",
        site: "medium",
        url: "https://medium.com/@bhprtk/longest-palindromic-substring-a8190fab03ff"
      },
    ]
  },
  {
    question:
      "How to remove duplicates from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/4ce6ca53bce681831d7fcba66c96d304",
    tags: ["javascript"],
    type: "code",
    number: 262,
    id: "uwq5qpf",
    sources: [
      {
        name: "Get all unique values in a JavaScript array (remove duplicates)",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/14438954/9715166"
      },
      {
        name: "Remove duplicates from array in JavaScript – the only right way",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=bRpVR1x_O8Q"
      },
      {
        name: "How to Remove Array Duplicates in ES6",
        site: "medium",
        url: "https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c"
      },
    ]
  },
  {
    question: "How to check if array contains a value in JavaScript?",
    answer: "https://gist.github.com/masautt/76ac3c8e7e12ca605c843467765041dd",
    tags: ["javascript"],
    type: "code",
    number: 263,
    id: "luglhko",
    sources: [
      {
        name: "How do I check if an array includes an object in JavaScript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1473742/9715166"
      },
      {
        name: "JavaScript Problem: Searching an Array for a Value",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=MLNmrzGQYdU"
      },
      {
        name: "Arrays in JavaScript",
        site: "medium",
        url: "https://medium.com/swlh/arrays-in-javascript-e64b873ad801"
      },
    ]
  },
  {
    question: "How to check if all elements in an array are unique in JavaScript?",
    answer: "https://gist.github.com/masautt/f1deaa07515d9cdfc1a306c8f99d1e21",
    tags: ["javascript"],
    type: "code",
    number: 264,
    id: "i9hzdt2",
    sources: [
      {
        name: "Check if an array contains duplicate values",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/34192063/9715166"
      },
      {
        name: "Remove duplicates from array in JavaScript – the only right way",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=bRpVR1x_O8Q"
      },
      {
        name: "How to Remove Array Duplicates in ES6",
        site: "medium",
        url: "https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c"
      },
    ]
  },
  {
    question: "How to find the min/max value of an array in JavaScript?",
    answer: "https://gist.github.com/masautt/c666b85dc77ba2b0d913162a5e55548a",
    tags: ["javascript"],
    type: "code",
    number: 265,
    id: "8osyb4f",
    sources: [
      {
        name: "Find the min/max element of an Array in JavaScript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1669222/9715166"
      },
      {
        name: "JavaScript Tip: Finding the Minimum or Maximum Value in an Array",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=IY7TRbXLU6c"
      },
      {
        name: "Calculate the Max/Min value from an array",
        site: "globe",
        url: "https://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/"
      },
    ]
  },
  {
    question: "How to find the intersection of 2 arrays in JavaScript?",
    answer: "https://gist.github.com/masautt/c64cebd8b3d4503d6a65cf2dce6370a3",
    tags: ["javascript"],
    type: "code",
    number: 266,
    id: "tb57y5j",
    sources: [
      {
        name: "Simplest code for array intersection in javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/1885569/9715166"
      },
      {
        name: "How to find intersection of two arrays in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=m3U69xPawkw"
      },
      {
        name: "Array intersection, difference and union in ES6",
        site: "medium",
        url: "https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848"
      },
    ]
  },
  {
    question: "How to check if 2 strings are anagrams in JavaScript?",
    answer: "https://gist.github.com/masautt/2ec67e0cd0c580a6336034a99f46ed6a",
    tags: ["javascript"],
    type: "code",
    number: 267,
    id: "etqai3t",
    sources: [
      {
        name: "JavaScript anagram comparison",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/23785653/9715166"
      },
      {
        name: "JS Interview - Anagrams - Question 15",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=YCpxWfxU0NQ"
      },
      {
        name: "Solving the anagram problem",
        site: "medium",
        url: "https://medium.com/@gianpaul.r/solving-the-anagram-problem-c4589211c130"
      },
    ]
  },
  {
    question: "How to remove all odd numbers from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/9f149ed3ec221795efd0d6ae97854568",
    tags: ["javascript"],
    type: "code",
    number: 268,
    id: "86526vu",
    sources: [
      {
        name: "Testing whether a value is odd or even",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/6211660/9715166"
      },
      {
        name: "How to Check a Number is Even or Odd in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=h9gsO0arDgY"
      },
      {
        name: "Check if Number is Even/Odd",
        site: "globe",
        url: "https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/"
      },
    ]
  },
  {
    question: "How to remove all even numbers from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/7c7766dc75bfd420df4d53c58133b866",
    tags: ["javascript"],
    type: "code",
    number: 269,
    id: "6x0juyv",
    sources: [
      {
        name: "Testing whether a value is odd or even",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/6211660/9715166"
      },
      {
        name: "How to Check a Number is Even or Odd in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=h9gsO0arDgY"
      },
      {
        name: "Check if Number is Even/Odd",
        site: "globe",
        url: "https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/"
      },
    ]
  },
  {
    question: "How to find the first duplicate element of an array in JavaScript?",
    answer: "https://gist.github.com/masautt/df672d72e0fa70e596c5a916944459aa",
    tags: ["javascript"],
    type: "code",
    number: 270,
    id: "q2b43jv",
    sources: [
      {
        name: "Javascript: How to find first duplicate value and return its index?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/39346715/9715166"
      },
      {
        name: "CodeFights: Interview Practice - First Duplicate from Google",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=L0VivTGm0nQ"
      },
      {
        name: "Algorithms Exercise: Find the First Duplicate in an Array",
        site: "medium",
        url: "https://medium.com/@joshsaintjacque/algorithms-exercise-find-the-first-duplicate-in-an-array-e97e9ed282c1"
      },
    ]
  },
  {
    question: "How to remove the first element from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/9caca1bb263eac04e77907a0c4e92a63",
    tags: ["javascript"],
    type: "code",
    number: 271,
    id: "4kl7b58",
    sources: [
      {
        name: "https://stackoverflow.com/questions/2003815/how-to-remove-element-from-an-array-in-javascript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/2003825/9715166"
      },
      {
        name: "How to remove the first element of a JavaScript Array - Array.prototype.shift()",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=8xFxxhfuw7g"
      },
      {
        name: "How to remove an element from a JavaScript array.",
        site: "medium",
        url: "https://medium.com/@enirate/how-to-remove-an-element-from-a-javascript-array-ce41d6ea259f"
      },
    ]
  },
  {
    question: "How to shuffle an array in JavaScript?",
    answer: "https://gist.github.com/masautt/5e4b063c06153d6c82a02543aa89f541",
    tags: ["javascript"],
    type: "code",
    number: 272,
    id: "pkjkh4p",
    sources: [
      {
        name: "How to randomize (shuffle) a JavaScript array?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/12646864/9715166"
      },
      {
        name: "JavaScript Problem: Shuffling an Array",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=myL4xmtAVtw"
      },
      {
        name: "How To Correctly Shuffle An Array in JavaScript",
        site: "medium",
        url: "https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb"
      },
    ]
  },
  {
    question: "What are the 3 steps of compilation in JavaScript?",
    answer:
      "1. Tokenizing / Lexing: breaking up a string of characters into meaningful chunks, called tokens. 2. Parsing: taking an array of tokens and turning it into a tree of nested elements called the Abstract Syntax Tree. 3. code-Generation: Taking the AST and turning it into executable code.",
    tags: ["javascript"],
    type: "list",
    number: 273,
    id: "hfv4gir",
    sources: [
      {
        name: "What is compilation?",
        site: "quora",
        url: "https://www.quora.com/What-is-compilation"
      },
      {
        name: "Compilation - Part One: Overview of the Stages of Compilation",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=0A079QpDAzY"
      },
      {
        name: "Compiler Theory - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#compiler-theory"
      },
    ]
  },
  {
    question: "What are the 2 ways to cheat lexical scope in JavaScript?",
    answer:
      '1. eval ( ) : passing in a string like "var a = 3" will modify the lexical scope of where the eval statement is at runtime. 2. with ( ) : this statement takes an object, which has zero or more properties and threats that object as if it is a wholly separate lexical scope, and thus the object\'s properties are treated as lexically defined in that scope.',
    tags: ["javascript"],
    type: "list",
    number: 274,
    id: "1kxmhgp",
    sources: [
      {
        name: "Cheating Lexical Scope: eval",
        site: "globe",
        url: "https://frontendmasters.com/courses/advanced-javascript/cheating-lexical-scope-eval/"
      },
      {
        name: "Cheating lexical scoping in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=W_StzOwiKXk"
      },
      {
        name: "Cheating Lexical - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#cheating-lexical"
      },
    ]
  },
  {
    question:
      "What are the 3 drawbacks with anonymous functions in JavaScript?",
    answer:
      '1. They have no useful name to display in stack traces, which can make debugging difficult. 2. Without a name, the function needs to refer to itself for recursion which requires the deprecated "arguments.callee" reference. 3. Without a name it is difficult to determine the purpose of the function.',
    tags: ["javascript"],
    type: "list",
    number: 275,
    id: "az6wgql",
    sources: [
      {
        name: "what are the advantages and disadvantages of anonymous methods in javascript?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/9123921/9715166"
      },
      {
        name: "16.3: ES6 Arrow Function - Topics of JavaScript/ES6",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=mrYMzpbFz18"
      },
      {
        name: "Unlexical - You Don't Know JS",
        site: "github",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch6.md#unlexical"
      },
    ]
  },
  {
    question: "What's the difference between a variable and a value?",
    answer:
      "A variable is a holder for a representation of a value. Consider {let a = 4}, a is the variable and 4 is the value.",
    tags: ["programming-fundamentals"],
    type: "comparison",
    number: 276,
    id: "o1m8bh8",
    sources: [
      {
        name: "What is a variable?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-variable"
      },
      {
        name: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
        site: "youtube",
        url: "https://youtu.be/l26oaHV7D40?t=56"
      },
      {
        name: "The Visual Guide To JavaScript Variable Definitions & Scope",
        site: "medium",
        url: "https://medium.com/@js_tut/the-visual-guide-to-javascript-variable-definitions-scope-abfb86edad"
      },
    ]
  },
  {
    question: "What is a loop?",
    answer:
      "A loop is a sequence of instructions that is continually repeated until a certain condition is reached.",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 277,
    id: "1fn4aw5",
    sources: [
      {
        name: "What is a for loop?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-for-loop"
      },
      {
        name: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
        site: "youtube",
        url: "https://youtu.be/l26oaHV7D40?t=256"
      },
      {
        name: "The Complete Guide To Loops",
        site: "medium",
        url: "https://medium.com/@js_tut/the-complete-guide-to-loops-cfa6522157e9"
      },
    ]
  },
  {
    question: "What's the difference between troubleshooting and debugging?",
    answer:
      "Troubleshooting is solving a problem while debugging refers to the process or steps to solve that problem.",
    tags: ["programming-fundamentals"],
    type: "comparison",
    number: 278,
    id: "es2fym3s",
    sources: [
      {
        name: "debugging vs. troubleshooting",
        site: "globe",
        url: "https://forum.wordreference.com/threads/debugging-vs-troubleshooting.2909914/"
      },
      {
        name: "Debugging Tips - What is bug and debugging?",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=kRL6hjWOKWI"
      },
      {
        name: "Troubleshooting vs Debugging: What’s the Difference & Best Practices",
        site: "globe",
        url: "https://stackify.com/troubleshooting-vs-debugging-whats-the-difference-best-practices/"
      },
    ]
  },
  {
    question: "What is a data structure?",
    answer:
      "A data structure is a particular way of organizing data in a computer so that it can be used effectively. Arrays, Linked lists, Stacks...",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 279,
    id: "6bdumv6",
    sources: [
      {
        name: "What exactly is a data structure?",
        site: "quora",
        url: "https://www.quora.com/What-exactly-is-a-data-structure"
      },
      {
        name: "Data Structures: Crash Course Computer Science #14",
        site: "youtube",
        url: "https://youtu.be/DuDz6B4cqVc"
      },
      {
        name: "Introduction to Data Structures",
        site: "medium",
        url: "https://medium.com/swlh/introduction-to-data-structures-9134b7d064a6"
      },
    ]
  },
  {
    question: "What is a function?",
    answer:
      "A function is a named section of a program that performs a specific task. This task can be jumped to by calling the name of that section.",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 280,
    id: "uxyt91a",
    sources: [
      {
        name: "What is a function in computer programming?",
        site: "quora",
        url: "https://www.quora.com/What-is-a-function-in-computer-programming"
      },
      {
        name: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
        site: "youtube",
        url: "https://youtu.be/l26oaHV7D40?t=459"
      },
      {
        name: "Basic JavaScript: Write Reusable JavaScript with Functions",
        site: "free-code-camp",
        url: "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions/"
      },
    ]
  },
  {
    question: "What is recursion?",
    answer:
      "Recursion refers to the process of a function calling itself directly or indirectly.",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 281,
    id: "gg14f8e",
    sources: [
      {
        name: "What is recursion?",
        site: "quora",
        url: "https://www.quora.com/What-is-recursion"
      },
      {
        name: "What Is Recursion - Recursion Explained In 3 Minutes",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=YZcO_jRhvxs"
      },
      {
        name: "Recursion Made Simple",
        site: "medium",
        url: "https://medium.com/code-zen/recursion-demystified-24867f045c62"
      },
    ]
  },
  {
    question: "How to randomly generate alpha-numeric id in JavaScript?",
    answer: "https://gist.github.com/masautt/9057137469aa1519a3c9c668a28bfed5",
    tags: ["javascript"],
    type: "code",
    number: 282,
    id: "y80wde7",
    sources: [
      {
        name: "Generate random string/characters in JavaScript",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/8084248/9715166"
      },
      {
        name: "Using Math.random() in JavaScript",
        site: "medium",
        url: "https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11"
      },
      {
        name: "How to generate random numbers in JavaScript - Math.random",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=1Rq_LrpcgIM"
      },
    ]
  },
  {
    question: "What is Software localization?",
    answer:
      "This refers to the altering of the front-end of software to fit the needs of the location it is being deploy. For example, amazon.uk's frontpage will look different than amazon.com's.",
    tags: ["software-engineering"],
    type: "definition",
    number: 283,
    id: "jexkahg",
    sources: [
      {
        name: "What is Software Localization?",
        site: "globe",
        url: "https://www.sdltrados.com/solutions/software-localization/"
      },
      {
        name: "Translation and Localization",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=J7ODeZK8TDI"
      },
      {
        name: "Best Practices for the Software Localization Process",
        site: "medium",
        url: "https://medium.com/webeagle/best-practices-for-the-software-localization-process-d35b8dac6f0f"
      },
    ]
  },
  {
    question: "What is scope?",
    answer:
      "Scope refers to the visibility of variables. Variables that are out of scope are not recognized. Only variables in scope can be accessed.",
    tags: ["programming-fundamentals"],
    type: "definition",
    number: 284,
    id: "e1bejw9",
    sources: [
      {
        name: "What is scope of the variable?",
        site: "quora",
        url: "https://www.quora.com/What-is-scope-of-the-variable"
      },
      {
        name: "Scope - Programming Languages",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=wTn6oQ56MV8"
      },
      {
        name: "Scope vs. Context in JavaScript",
        site: "medium",
        url: "https://medium.com/better-programming/scope-vs-context-in-javascript-b31818f58558"
      },
    ]
  },
  {
    question: "How to replace all occurrences of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/c27efdded65c976f7dc19cef9c6a8e2c",
    tags: ["javascript"],
    type: "code",
    number: 285,
    id: "n679h6b",
    sources: [
      {
        name: "How to replace all occurrences of a string?",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/17606289/9715166"
      },
      {
        name: "How to replace all occurrences of a string in JavaScript",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=7FcavNZnLAc"
      },
      {
        name: "How to replace all occurrences of a string in JavaScript",
        site: "globe",
        url: "https://flaviocopes.com/how-to-replace-all-occurrences-string-javascript/"
      },
    ]
  },
  {
    question: "How to remove the last element from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/298a6fefb1d8bbec65698db879e4c765",
    tags: ["javascript"],
    type: "code",
    number: 286,
    id: "mo1dpw7",
    sources: [
      {
        name: "Remove last item from array",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/19544478/9715166"
      },
      {
        name: "JavaScript Array - 05 - Remove the last element",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=RbrrOQEiotU"
      },
      {
        name: "How to remove an element from a JavaScript array.",
        site: "medium",
        url: "https://medium.com/@enirate/how-to-remove-an-element-from-a-javascript-array-ce41d6ea259f"
      },
    ]
  },
  {
    question: "What's the difference between unit tests and integreation tests?",
    answer: "A unit test checks if a relatively small piece of code is doing what it is intended to do, whereas an integration test is done to demonstrate that different pieces of the system work together. These tend to cover whole applications rather than just one component.",
    tags: ["software-engineering"],
    type: "code",
    number: 287,
    id: "wmqw6kj",
    sources: [
      {
        name: "What's the difference between unit tests and integration tests? [duplicate]",
        site: "stack-overflow",
        url: "https://stackoverflow.com/a/5357837/9715166"
      },
      {
        name: "Unit vs Integration testing — what's the difference? | Code Walks 005",
        site: "youtube",
        url: "https://www.youtube.com/watch?v=uCxL7NGEohI"
      },
      {
        name: "Towards a robust testing future: Unit Vs Integration Testing",
        site: "medium",
        url: "https://medium.com/the-andela-way/towards-a-robust-testing-future-unit-vs-integration-tests-700f7a1f6a7f"
      },
    ]
  },
];
