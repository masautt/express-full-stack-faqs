# Welcome to Full-Stack-Faqs-Back-End!

This is the REST API for Full-Stack-Faqs, [masautt](https://github.com/masautt)'s database of frequently asked question on full stack development. Check out the react-app for this project at [Full-Stack-Faqs-Front-End](https://github.com/masautt/full-stack-faqs-front-end)!

### Get Info - [/info](http://localhost:8080/info) 
```json
{
    "total": 286,
    "unanswered": 1,
    "data": {
        "types": {
            "about": {
                "api": "http://localhost:8080/types",
                "total": 5
            },
            "data": [
                {
                    "name": "Comparison",
                    "desc": "Explain the differences between 2 or more terms.",
                    "emoji": "👯",
                    "id": "comparison",
                    "url": "https://8snib.csb.app/type/comparison",
                    "total": 65
                },
                {
                    "name": "Definition",
                    "desc": "Give the meaning of a term.",
                    "emoji": "👨‍🏫",
                    "id": "definition",
                    "url": "https://8snib.csb.app/type/definition",
                    "total": 117
                },
                {
                    "name": "Explanation",
                    "desc": "Explain a concept regarding a term (more or less opinionated).",
                    "emoji": "🗣️",
                    "id": "explanation",
                    "url": "https://8snib.csb.app/type/explanation",
                    "total": 23
                },
                {
                    "name": "List",
                    "desc": "List items that pertain to a term.",
                    "emoji": "👪",
                    "id": "list",
                    "url": "https://8snib.csb.app/type/list",
                    "total": 26
                },
                {
                    "name": "Code",
                    "desc": "Give code that does what the question asks.",
                    "emoji": "👨‍🔬",
                    "id": "code",
                    "url": "https://8snib.csb.app/type/code",
                    "total": 55
                }
            ]
        },
        "tags": {
            "about": {
                "api": "http://localhost:8080/tags",
                "total": 27
            },
            "data": [
                {
                    "name": "JavaScript",
                    "desc": "The scripting language of the web.",
                    "emoji": "✨",
                    "id": "javascript",
                    "url": "https://8snib.csb.app/tag/javascript",
                    "total": 138
                },
                {
                    "name": "HTML",
                    "desc": "HyperText Markup Language, the syntax for building web pages.",
                    "id": "html",
                    "emoji": "✏️",
                    "url": "https://8snib.csb.app/tag/html",
                    "total": 22
                },
                {
                    "name": "CSS",
                    "desc": "Cascading Style Sheets, the syntax for styling web pages.",
                    "id": "css",
                    "emoji": "🖍️",
                    "url": "https://8snib.csb.app/tag/css",
                    "total": 24
                },
                {
                    "name": "Networking",
                    "desc": "Communications between computers.",
                    "emoji": "📡",
                    "id": "networking",
                    "url": "https://8snib.csb.app/tag/networking",
                    "total": 7
                },
                {
                    "name": "Security",
                    "desc": "Keeping hardware and software safe.",
                    "emoji": "🔒",
                    "id": "securty",
                    "url": "https://8snib.csb.app/tag/security",
                    "total": 0
                },
                {
                    "name": "Programming Fundamentals",
                    "desc": "Basic computer science knowledge that does not pertain to a single language.",
                    "id": "programming-fundamentals",
                    "emoji": "🌎",
                    "url": "https://8snib.csb.app/tag/programming-fundamentals",
                    "total": 31
                },
                {
                    "name": "Operating Systems",
                    "desc": "Software that handles a computer's basic functions.",
                    "emoji": "💽",
                    "id": "operating-systems",
                    "url": "https://8snib.csb.app/tag/operating-systems",
                    "total": 2
                },
                {
                    "name": "React.js",
                    "desc": "JavaScript's most popular front-end framework.",
                    "emoji": "⚛️",
                    "id": "react-js",
                    "url": "https://8snib.csb.app/tag/react-js",
                    "total": 4
                },
                {
                    "name": "Front-End",
                    "desc": "The visuals that are displayed to the client.",
                    "emoji": "💻",
                    "id": "front-end",
                    "url": "https://8snib.csb.app/tag/front-end",
                    "total": 59
                },
                {
                    "name": "Back-End",
                    "desc": "The code and databases that make up the server.",
                    "emoji": "🖥️",
                    "id": "back-end",
                    "url": "https://8snib.csb.app/tag/back-end",
                    "total": 13
                },
                {
                    "name": "DOM",
                    "desc": "The Document Object Model or the API that lets scripting languages change HTML.",
                    "emoji": "📝",
                    "id": "dom",
                    "url": "https://8snib.csb.app/tag/dom",
                    "total": 9
                },
                {
                    "name": "Software Engineering",
                    "desc": "The study of building computer software efficiently.",
                    "emoji": "🤝🏼",
                    "id": "software-engineering",
                    "url": "https://8snib.csb.app/tag/software-engineering",
                    "total": 24
                },
                {
                    "name": "JavaScript Libraries",
                    "desc": "Packages and libraries that extend a particular language",
                    "emoji": "📦",
                    "id": "javascript-libraries",
                    "url": "https://8snib.csb.app/tag/js-libraries",
                    "total": 11
                },
                {
                    "name": "Databases",
                    "desc": "Methods to organize high amounts of data to optimze access.",
                    "emoji": "🗂️",
                    "id": "databases",
                    "url": "https://8snib.csb.app/tag/databases",
                    "total": 6
                },
                {
                    "name": "Data Structures",
                    "desc": "Data Structures",
                    "emoji": "🏗️",
                    "id": "data-structures",
                    "url": "https://8snib.csb.app/tag/data-structures",
                    "total": 2
                },
                {
                    "name": "Data Science",
                    "desc": "Science and Data",
                    "emoji": "📊",
                    "id": "data-science",
                    "url": "https://8snib.csb.app/tag/data-science",
                    "total": 0
                },
                {
                    "name": "Algorithms",
                    "desc": "Code that we write to solve a particular problem or perform a calculation.",
                    "emoji": "📐",
                    "id": "algorithms",
                    "url": "https://8snib.csb.app/tag/algorithms",
                    "total": 4
                },
                {
                    "name": "Artificial Intelligence",
                    "desc": "The simulation of human intelligence by machines.",
                    "emoji": "🧠",
                    "id": "artificial-intelligence",
                    "url": "https://8snib.csb.app/tag/artificial-intelligence",
                    "total": 0
                },
                {
                    "name": "ECMAScript",
                    "desc": "The scripting language specification that standardizes JavaScript.",
                    "emoji": "🚧",
                    "id": "ecmascript",
                    "url": "https://8snib.csb.app/tag/ecmascript",
                    "total": 0
                },
                {
                    "name": "Hardware",
                    "desc": "The opposite of software?",
                    "emoji": "🖨️",
                    "id": "hardware",
                    "url": "https://8snib.csb.app/tag/hardware",
                    "total": 0
                },
                {
                    "name": "TypeScript",
                    "desc": "A take on adding static typing to JavaScript.",
                    "emoji": "🗃️",
                    "id": "typescript",
                    "url": "https://8snib.csb.app/tag/typescript",
                    "total": 2
                },
                {
                    "name": "Git",
                    "desc": "The most popular distributed version-control.",
                    "emoji": "🔱",
                    "id": "git",
                    "url": "https://8snib.csb.app/tag/git",
                    "total": 2
                },
                {
                    "name": "REST",
                    "desc": "Representation State Transfer, the standard method for designing API's.",
                    "emoji": "💤",
                    "id": "rest",
                    "url": "https://8snib.csb.app/tag/rest",
                    "total": 2
                },
                {
                    "name": "Design Patterns",
                    "desc": "Blueprints for organizing code to solve particular problems.",
                    "emoji": "🗺️",
                    "id": "design-patterns",
                    "url": "https://8snib.csb.app/tag/design-patterns",
                    "total": 24
                },
                {
                    "name": "Linux",
                    "desc": "The world's most popular operating system and the powerhouse of the internet.",
                    "emoji": "🐧",
                    "id": "linux",
                    "url": "https://8snib.csb.app/tag/linux",
                    "total": 2
                },
                {
                    "name": "Object Oriented Programming",
                    "desc": "Traditional Programming",
                    "emoji": "👨‍👦",
                    "id": "object-oriented-programming",
                    "url": "https://8snib.csb.app/tag/object-oriented-programming",
                    "total": 7
                },
                {
                    "name": "Functional Programming",
                    "desc": "New Programming",
                    "emoji": "👩‍👧",
                    "id": "functional-programming",
                    "url": "https://8snib.csb.app/tag/functional-programming",
                    "total": 3
                }
            ]
        },
        "sets": {
            "about": {
                "api": "http://localhost:8080/sets",
                "total": 4
            },
            "data": [
                {
                    "name": "YDKJS Review",
                    "desc": "FAQ's based on Kyle Simpson's You Don't Know JS Series",
                    "emoji": "💩",
                    "id": "you-dont-know-js-review",
                    "url": "https://8snib.csb.app/set/you-dont-know-js-review",
                    "faqs": [
                        "1kxmhgp-What are the 2 ways to cheat lexical scope in JavaScript",
                        "swl1uaa-What is the difference between lexical scope and dynamic scope in JavaScript?",
                        "az6wgql-What are the 3 drawbacks with anonymous functions in JavaScript?",
                        "7h9x8fl-What is an IIFE in JavaScript?",
                        "bnxjlb1-What's the difference between the var, let, and const keywords in JavaScript?",
                        "c7mwo7b-What is hoisting in JavaScript?",
                        "v8e59bt-What is closure in JavaScript?",
                        "0fg1g5g-What is the \"this\" keywork in JavaScript?",
                        "8gkoaid-What are the 4 rules for determining what \"this\" refers to in JavaScript?",
                        "qpw4l0b-What are the 7 JavaScript Primary Data Types?",
                        "88x8ubo-What's the difference between accessing an object through the property method and key method?",
                        "q0u9qzk-What's the difference between a shallow copy and deep copy?",
                        "8ap4fbp-What are the 3 property descriptors in JavaScript?",
                        "r8jroi9-What is the purpose of Object.preventExtensions( ) in JavaScript?",
                        "oais0xm-What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?",
                        "zrhh9vo-What are the 4 events that occur when a function is invoked with the \"new\" keyword?",
                        "nz6uigo-What is the difference between an expression and a statement?",
                        "8w2045j-What is the difference between compiling and interpreting code?",
                        "2zxjzh5-How does an arrow function affect the this keyword in JavaScript?",
                        "rg8h0r9-Why should you not use the JSON Parse --> JSON Stringify method of deep cloning an object?",
                        "hfv4gir-What are the 3 steps of compilation?",
                        "6b1n3qp-What's the difference between == and === in JavaScript?",
                        "l40vuie-How to deep clone an object in JavaScript?"
                    ]
                },
                {
                    "name": "Programming 101",
                    "desc": "Quick QnA for a Beginner Programmer",
                    "emoji": "🍏",
                    "id": "programming-101",
                    "url": "https://8snib.csb.app/set/programming-101",
                    "faqs": [
                        "o1m8bh8-What's the difference between a variable and a value?",
                        "1fn4aw5-What is a loop?",
                        "6bdumv6-What is a data structure?",
                        "uxyt91a-What is a function?",
                        "gg14f8e-What is recursion?",
                        "e1bejw9-What is scope?"
                    ]
                },
                {
                    "name": "JavaScript Interview Questions - Strings",
                    "desc": "FAQ's for all those StackOverflow questions you've been digging through.",
                    "emoji": "🌟",
                    "id": "javascript-interview-questions-strings",
                    "url": "https://8snib.csb.app/set/javascript-interview-questions-strings",
                    "faqs": [
                        "r460xpv-How to check if a string contains a substring in JavaScript?",
                        "n679h6b-How to replace all occurrences of a string in JavaScript?",
                        "isy74qv-How to capitalize first letter of a string in JavaScript?",
                        "7bbszl6-How to find longest substring without repeating characters in JavaScript?",
                        "olq9ps4-How to convert a string to a number in JavaScript?",
                        "19k7g5p-How to remove vowels from string in JavaScript?",
                        "u7t2s1q-How to reverse a string in JavaScript?",
                        "h6uz3x9-What's the difference between undeclared and undefined in JavaScript?",
                        "4eqrzp8-How to check if a string is all uppercase in JavaScript?",
                        "trhvy6b-How to check if a string is all lowercase in JavaScript?",
                        "2fmdui8-How to find most reoccuring character in JavaScript?",
                        "nq1zehe-How to get all permutations of a string in JavaScript?",
                        "pdeg7lj-How to reverse a sentence in JavaScript?",
                        "g3y4as9-How to find first non-repeating character in JavaScript?",
                        "j99xx3o-How to check if string is palindrome in JavaScript?",
                        "c3bt8ij-How to check if string has only digits in JavaScript?",
                        "j6epsxe-How to get number of vowels and consonants in JavaScript?",
                        "daldhei-How to count number of occurrences of a string in JavaScript?",
                        "bvl9h3f-How to find longest palindrome of a string in JavaScript?",
                        "etqai3t-How to check if 2 strings are anagrams in JavaScript?"
                    ]
                },
                {
                    "name": "JavaScript Interview Questions - Arrays",
                    "desc": "FAQ's for all those StackOverflow questions you've been digging through.",
                    "emoji": "🌟",
                    "id": "javascript-interview-questions-arrays",
                    "url": "https://8snib.csb.app/set/javascript-interview-questions-arrays",
                    "faqs": [
                        "otgvjxf-How to remove an element from an array in JavaScript?",
                        "kr0ns2b-How to append to array in JavaScript?",
                        "hieewlp-How to sort array in JavaScript?",
                        "wioawyg-How to sort array of objects by value in JavaScript?",
                        "h74jep5-How to reverse an array in JavaScript?",
                        "uwq5qpf-How to remove duplicates from an array in JavaScript?",
                        "luglhko-How to check if array contains a value in JavaScript?",
                        "i9hzdt2-How to check if all elements in an array are unique in JavaScript?",
                        "8osyb4f-How to find the min/max value of an array in JavaScript?",
                        "tb57y5j-How to find the intersection of 2 arrays in JavaScript?",
                        "86526vu-How to remove all odd numbers from an array in JavaScript?",
                        "6x0juyv-How to remove all even numbers from an array in JavaScript?",
                        "q2b43jv-How to find the first duplicate element of an array in JavaScript?",
                        "4kl7b58-How to remove the first element from an array?",
                        "mo1dpw7-How to remove the last element from an array?",
                        "pkjkh4p-How to shuffle an array in JavaScript?"
                    ]
                }
            ]
        }
    }
}
```
### Get Random FAQ - [/rand/:limit](http://localhost:8080/rand/1) 
```json
[
    {
        "question": "What is SEO?",
        "answer": "SEO, Search Engine Optimization is the process of increasing the quality and quantity of a website traffic by increasing the visibility of a website or a web page to users of a web search engine.",
        "tags": [
            "front-end"
        ],
        "type": "definition",
        "number": 35,
        "id": "a945jyi",
        "sources": [
            {
                "name": "A guide to SEO FOr the Impatient",
                "site": "medium",
                "url": "https://medium.com/swlh/a-guide-to-seo-for-the-impatient-2878b5d02967"
            },
            {
                "name": "What is SEO and How Does it Work? (2019)",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=D7UxlkwdYc0"
            }
        ]
    }
]
```
### Get FAQ by Number- [/faq/:num](http://localhost:8080/rand/277) 
```json
{
    "question": "What is a loop?",
    "answer": "A loop is a sequence of instructions that is continually repeated until a certain condition is reached.",
    "tags": [
        "programming-fundamentals"
    ],
    "type": "definition",
    "number": 277,
    "id": "1fn4aw5",
    "sources": [
        {
            "name": "What is a for loop?",
            "site": "quora",
            "url": "https://www.quora.com/What-is-a-for-loop"
        },
        {
            "name": "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
            "site": "youtube",
            "url": "https://youtu.be/l26oaHV7D40?t=256"
        },
        {
            "name": "The Complete Guide To Loops",
            "site": "medium",
            "url": "https://medium.com/@js_tut/the-complete-guide-to-loops-cfa6522157e9"
        }
    ]
}
```
### Get FAQ by Id- [/faq/:id](http://localhost:8080/rand/1fn4aw5) 
```json
{
    "question": "What is an IIFE in JavaScript?",
    "answer": "An IIFE is an Immediately Invoked Function Expression which runs as soon as it's defined by adding ( ) to the end of the function scope. These functions don't need names so the most common form is an anonymous function.",
    "tags": [
        "javascript"
    ],
    "type": "definition",
    "number": 34,
    "id": "7h9x8fl",
    "sources": [
        {
            "name": "What is the (function() { } )() construct in JavaScript?",
            "site": "stack-overflow",
            "url": "https://stackoverflow.com/a/8228308"
        },
        {
            "name": "Scopes and Closures In-dept 06 - IIFE",
            "site": "youtube",
            "url": "https://www.youtube.com/watch?v=q21QSRpNaAQ"
        },
        {
            "name": "Invoking Function Expressions Immediately - You Don't Know JS",
            "site": "github",
            "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#invoking-function-expressions-immediately"
        }
    ]
}
```
### Get Tags - [/tags](http://localhost:8080/tags) 
```json
[
    {
        "name": "JavaScript",
        "desc": "The scripting language of the web.",
        "emoji": "✨",
        "id": "javascript",
        "url": "https://8snib.csb.app/tag/javascript",
        "total": 138
    },
    {
        "name": "HTML",
        "desc": "HyperText Markup Language, the syntax for building web pages.",
        "id": "html",
        "emoji": "✏️",
        "url": "https://8snib.csb.app/tag/html",
        "total": 22
    },
    {
        "name": "CSS",
        "desc": "Cascading Style Sheets, the syntax for styling web pages.",
        "id": "css",
        "emoji": "🖍️",
        "url": "https://8snib.csb.app/tag/css",
        "total": 24
    },
    {
        "name": "Networking",
        "desc": "Communications between computers.",
        "emoji": "📡",
        "id": "networking",
        "url": "https://8snib.csb.app/tag/networking",
        "total": 7
    },
    {
        "name": "Security",
        "desc": "Keeping hardware and software safe.",
        "emoji": "🔒",
        "id": "securty",
        "url": "https://8snib.csb.app/tag/security",
        "total": 0
    },
    {
        "name": "Programming Fundamentals",
        "desc": "Basic computer science knowledge that does not pertain to a single language.",
        "id": "programming-fundamentals",
        "emoji": "🌎",
        "url": "https://8snib.csb.app/tag/programming-fundamentals",
        "total": 31
    },
    {
        "name": "Operating Systems",
        "desc": "Software that handles a computer's basic functions.",
        "emoji": "💽",
        "id": "operating-systems",
        "url": "https://8snib.csb.app/tag/operating-systems",
        "total": 2
    },
    {
        "name": "React.js",
        "desc": "JavaScript's most popular front-end framework.",
        "emoji": "⚛️",
        "id": "react-js",
        "url": "https://8snib.csb.app/tag/react-js",
        "total": 4
    },
    {
        "name": "Front-End",
        "desc": "The visuals that are displayed to the client.",
        "emoji": "💻",
        "id": "front-end",
        "url": "https://8snib.csb.app/tag/front-end",
        "total": 59
    },
    {
        "name": "Back-End",
        "desc": "The code and databases that make up the server.",
        "emoji": "🖥️",
        "id": "back-end",
        "url": "https://8snib.csb.app/tag/back-end",
        "total": 13
    },
    {
        "name": "DOM",
        "desc": "The Document Object Model or the API that lets scripting languages change HTML.",
        "emoji": "📝",
        "id": "dom",
        "url": "https://8snib.csb.app/tag/dom",
        "total": 9
    },
    {
        "name": "Software Engineering",
        "desc": "The study of building computer software efficiently.",
        "emoji": "🤝🏼",
        "id": "software-engineering",
        "url": "https://8snib.csb.app/tag/software-engineering",
        "total": 24
    },
    {
        "name": "JavaScript Libraries",
        "desc": "Packages and libraries that extend a particular language",
        "emoji": "📦",
        "id": "javascript-libraries",
        "url": "https://8snib.csb.app/tag/js-libraries",
        "total": 11
    },
    {
        "name": "Databases",
        "desc": "Methods to organize high amounts of data to optimze access.",
        "emoji": "🗂️",
        "id": "databases",
        "url": "https://8snib.csb.app/tag/databases",
        "total": 6
    },
    {
        "name": "Data Structures",
        "desc": "Data Structures",
        "emoji": "🏗️",
        "id": "data-structures",
        "url": "https://8snib.csb.app/tag/data-structures",
        "total": 2
    },
    {
        "name": "Data Science",
        "desc": "Science and Data",
        "emoji": "📊",
        "id": "data-science",
        "url": "https://8snib.csb.app/tag/data-science",
        "total": 0
    },
    {
        "name": "Algorithms",
        "desc": "Code that we write to solve a particular problem or perform a calculation.",
        "emoji": "📐",
        "id": "algorithms",
        "url": "https://8snib.csb.app/tag/algorithms",
        "total": 4
    },
    {
        "name": "Artificial Intelligence",
        "desc": "The simulation of human intelligence by machines.",
        "emoji": "🧠",
        "id": "artificial-intelligence",
        "url": "https://8snib.csb.app/tag/artificial-intelligence",
        "total": 0
    },
    {
        "name": "ECMAScript",
        "desc": "The scripting language specification that standardizes JavaScript.",
        "emoji": "🚧",
        "id": "ecmascript",
        "url": "https://8snib.csb.app/tag/ecmascript",
        "total": 0
    },
    {
        "name": "Hardware",
        "desc": "The opposite of software?",
        "emoji": "🖨️",
        "id": "hardware",
        "url": "https://8snib.csb.app/tag/hardware",
        "total": 0
    },
    {
        "name": "TypeScript",
        "desc": "A take on adding static typing to JavaScript.",
        "emoji": "🗃️",
        "id": "typescript",
        "url": "https://8snib.csb.app/tag/typescript",
        "total": 2
    },
    {
        "name": "Git",
        "desc": "The most popular distributed version-control.",
        "emoji": "🔱",
        "id": "git",
        "url": "https://8snib.csb.app/tag/git",
        "total": 2
    },
    {
        "name": "REST",
        "desc": "Representation State Transfer, the standard method for designing API's.",
        "emoji": "💤",
        "id": "rest",
        "url": "https://8snib.csb.app/tag/rest",
        "total": 2
    },
    {
        "name": "Design Patterns",
        "desc": "Blueprints for organizing code to solve particular problems.",
        "emoji": "🗺️",
        "id": "design-patterns",
        "url": "https://8snib.csb.app/tag/design-patterns",
        "total": 24
    },
    {
        "name": "Linux",
        "desc": "The world's most popular operating system and the powerhouse of the internet.",
        "emoji": "🐧",
        "id": "linux",
        "url": "https://8snib.csb.app/tag/linux",
        "total": 2
    },
    {
        "name": "Object Oriented Programming",
        "desc": "Traditional Programming",
        "emoji": "👨‍👦",
        "id": "object-oriented-programming",
        "url": "https://8snib.csb.app/tag/object-oriented-programming",
        "total": 7
    },
    {
        "name": "Functional Programming",
        "desc": "New Programming",
        "emoji": "👩‍👧",
        "id": "functional-programming",
        "url": "https://8snib.csb.app/tag/functional-programming",
        "total": 3
    }
]
```
### Get Tag - [/tag/:id](http://localhost:8080/tags/css) 
```json
[
    {
        "question": "What is SSL?",
        "answer": "SSL (secure sockets layer) is the standard security technology for establishing an encrypted link between a web server and a browser. Without SSL, data sent between clients and servers is sent in plain text. HTTP + SSL = HTTPS",
        "tags": [
            "front-end",
            "back-end",
            "security",
            "networking"
        ],
        "type": "definition",
        "number": 41,
        "id": "s6txkx8",
        "sources": [
            {
                "name": "What is SSL and how does it relate to HTTPS?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/45122215"
            },
            {
                "name": "What is SSL and how does it work?",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=rROgWTfA5qE"
            },
            {
                "name": "What is SSL and How Does it Work?",
                "site": "medium",
                "url": "https://medium.com/@User3141592/what-is-ssl-and-how-does-it-work-a5465d19b494"
            }
        ]
    },
    {
        "question": "What are the steps of a three-way handshake",
        "answer": "A method used in TCP/IP network to create a connection: 1. SYN:  Client sends packet with random sequence number to the server. 2. SYN-ACK:. Server responds with +1 to sequence number. 3. ACK: Client sends back messaging saying handshake has been complete. ",
        "tags": [
            "networking"
        ],
        "type": "list",
        "number": 42,
        "id": "gcgapp29",
        "sources": [
            {
                "name": "two-way handshake and three-way handshake",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/23774096"
            },
            {
                "name": "TCP Three Way Handshake",
                "site": "youtube",
                "url": "https://youtu.be/8-WpoF1cLtc?t=17"
            },
            {
                "name": "TCP 3-Way Handshake",
                "site": "medium",
                "url": "https://medium.com/@yildirimabdrhm/tcp-3-way-handshake-2e4d4d674ff6"
            }
        ]
    },
    {
        "question": "What is a SYN flood?",
        "answer": "A form of denial of service attack in which an attacker sends a succession of SYN requests to a target's system in attempt to consume enough server resources to make the system unresponsive to legitimate traffic.",
        "tags": [
            "networking",
            "security"
        ],
        "type": "definition",
        "number": 43,
        "id": "9oosnwu",
        "sources": [
            {
                "name": "What is SYN flood?",
                "site": "quora",
                "url": "https://www.quora.com/What-is-SYN-flood"
            },
            {
                "name": "02 05 SYN Flood Attacks",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=-FPawMupsKY"
            },
            {
                "name": "Understanding DDOS Attack",
                "site": "medium",
                "url": "https://medium.com/@kapil.sharma91812/understanding-ddos-attack-15dd2cbce2a"
            }
        ]
    },
    {
        "question": "What's the difference between a DOS and a DDOS attack?",
        "answer": "A DDOS (Distributed Denial of Service) attack is more threatening because it means the attempts to override the target with traffic are coming from multiple IP Addresses (DOS is only 1). This makes it difficult to distinguish legitimate traffic from malicious.",
        "tags": [
            "networking",
            "security"
        ],
        "type": "comparison",
        "number": 44,
        "id": "bl8ay5n",
        "sources": [
            {
                "name": "What is a DoS Attack and how does it differ from a DDoS attack?",
                "site": "stack-overflow",
                "url": "https://security.stackexchange.com/questions/22809/what-is-a-dos-attack-and-how-does-it-differ-from-a-ddos-attack"
            },
            {
                "name": "DDoS Attack — Explained",
                "site": "medium",
                "url": "https://medium.com/datadriveninvestor/ddos-attack-explained-9d67d467b1aa"
            },
            {
                "name": "DDoS Attacks as Fast As Possible",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=0I4O4hoKzb8"
            }
        ]
    },
    {
        "question": "What is HTTP keep-alive?",
        "answer": "HTTP keep-alive, aka HTTP persistent connection is an instruction that allows a single TCP connection to remain open for multiple HTTP requests/responses. Enabling the keep-alive header allows you to serve all web page resources over a single connection thus reducing client load times and server load.",
        "tags": [
            "networking"
        ],
        "type": "definition",
        "number": 47,
        "id": "wsyrzjr",
        "sources": [
            {
                "name": "How does http keep-alive work?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/20764180"
            },
            {
                "name": "2.08 - Non Persistent & Persistent HTTP Connection - Part II",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=-Zzb95r0bxg"
            },
            {
                "name": "Persistent HTTPS Connections: Reduce API call time by 50%",
                "site": "medium",
                "url": "https://medium.com/@msyshani/persistent-https-connections-reduce-api-call-time-by-50-3ca23723b336"
            }
        ]
    },
    {
        "question": "What is DNS?",
        "answer": "DNS (Domain Name System) the program that translates a hostname (google.com) to an IP address (8.8.4.4).",
        "tags": [
            "networking"
        ],
        "type": "definition",
        "number": 48,
        "id": "vuuwgas",
        "sources": [
            {
                "name": "What is DNS? How does it work?",
                "site": "quora",
                "url": "https://www.quora.com/What-is-DNS-How-does-it-work"
            },
            {
                "name": "DNS as Fast As Possible",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=Rck3BALhI5c"
            },
            {
                "name": "DNS in One Picture",
                "site": "medium",
                "url": "https://medium.com/@kamranahmedse/dns-in-one-picture-d7f4783db06a"
            }
        ]
    },
    {
        "question": "What is a domain name?",
        "answer": "A domain name is a string of characters given to a IP address for easier lookups.",
        "tags": [
            "networking"
        ],
        "type": "definition",
        "number": 228,
        "id": "9dvpxk6",
        "sources": [
            {
                "name": "What does domain name mean?",
                "site": "quora",
                "url": "https://www.quora.com/What-does-domain-name-mean"
            },
            {
                "name": "DNS as Fast As Possible",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=Rck3BALhI5c"
            },
            {
                "name": "What Exactly Is DNS Anyways?",
                "site": "medium",
                "url": "https://medium.com/@maheshkariya/what-exactly-is-dns-anyways-4239278ab1b4"
            }
        ]
    }
]
```
### Get Types - [/types](http://localhost:8080/types) 
```json
[
    {
        "name": "Comparison",
        "desc": "Explain the differences between 2 or more terms.",
        "emoji": "👯",
        "id": "comparison",
        "url": "https://8snib.csb.app/type/comparison",
        "total": 65
    },
    {
        "name": "Definition",
        "desc": "Give the meaning of a term.",
        "emoji": "👨‍🏫",
        "id": "definition",
        "url": "https://8snib.csb.app/type/definition",
        "total": 117
    },
    {
        "name": "Explanation",
        "desc": "Explain a concept regarding a term (more or less opinionated).",
        "emoji": "🗣️",
        "id": "explanation",
        "url": "https://8snib.csb.app/type/explanation",
        "total": 23
    },
    {
        "name": "List",
        "desc": "List items that pertain to a term.",
        "emoji": "👪",
        "id": "list",
        "url": "https://8snib.csb.app/type/list",
        "total": 26
    },
    {
        "name": "Code",
        "desc": "Give code that does what the question asks.",
        "emoji": "👨‍🔬",
        "id": "code",
        "url": "https://8snib.csb.app/type/code",
        "total": 55
    }
]
```
### Get Type - [/type/:id](http://localhost:8080/type/code) 
```json
[
    {
        "question": "What are the 2 key features of React that set it apart from other frameworks?",
        "answer": "React features JSX, a syntax extension to JavaScript that is similar to other templating languages but comes with the full power of JavaScript. React also uses a virtual dom which is a lightweight copy of the DOM that allows eliminates the need to constantly update the entire DOM which is slow.",
        "tags": [
            "react-js",
            "javascript",
            "front-end",
            "javascript-libraries"
        ],
        "type": "list",
        "number": 17,
        "id": "tc14j9c",
        "sources": [
            {
                "name": "What's the purpose of using React.js?",
                "site": "quora",
                "url": "https://www.quora.com/Whats-the-purpose-of-using-React-js"
            },
            {
                "name": "Why React is Awesome",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=SH2tck0pHWI"
            },
            {
                "name": "Why React Should Be Your First Choice?",
                "site": "medium",
                "url": "https://medium.com/swlh/why-react-should-be-your-first-choice-d469fe201c08"
            }
        ]
    },
    {
        "question": "What are features of a functional programming language?",
        "answer": "1. First-class functions: functions can be stored in a variable object or array and can be passed in or returned from functions. 2. Higher Order Functions: (Factory Functions) functions that can build other functions by taking a function as an argument. 3. Lambda functions (arrow functions): A nameless function",
        "tags": [
            "functional-programming",
            "javascript"
        ],
        "type": "list",
        "number": 23,
        "id": "5j07ive",
        "sources": [
            {
                "name": "Functional programming and non-functional programming",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/24279/functional-programming-and-non-functional-programming"
            },
            {
                "name": "Functional Programming & Haskell - Computerphile",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=LnX3B9oaKzw"
            },
            {
                "name": "Functional Programming",
                "site": "medium",
                "url": "https://medium.com/the-renaissance-developer/functional-programming-40dfe049461e"
            }
        ]
    },
    {
        "question": "What are the 3 property descriptors in JavaScript?",
        "answer": "1. configurable: alters ability to change other property descriptors and delete the property. 2. enumerable : changes whether the property is displayed when the object is looped over. 3. writable : whether the value can be changed.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 26,
        "id": "8ap4fbp",
        "sources": [
            {
                "name": "JavaScript Object Property Descriptors",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=LD1tQEWsjz4"
            },
            {
                "name": "JavaScript — Property Descriptor",
                "site": "medium",
                "url": "https://codeburst.io/javascript-object-property-attributes-ac012be317e2"
            },
            {
                "name": "Property Descriptors - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#property-descriptors"
            }
        ]
    },
    {
        "question": "What are the 4 rules for determining what \"this\" refers to in JavaScript?",
        "answer": "1. Called with new? Use the newly constructed object. 2. Called with call, apply, or bind? Use that specified object. 3. Called with a context object owning the call? Use that context object. 4. Default: undefined in strict mode and global object otherwise.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 31,
        "id": "8gkoaid",
        "sources": [
            {
                "name": "How does the \"this\" keyword work?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/17514482"
            },
            {
                "name": "this all Makes Sense Now! - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#review-tldr"
            }
        ]
    },
    {
        "question": "What are the 4 events that occur when a function is invoked with the \"new\" keyword?",
        "answer": "1. A brand new object is created (aka, constructed) out of thin air. 2. The newly constructed object is prototype linked. 3. The newly constructed object is set as the this binding for that function call. 4. Unless the function returns its own alternate object, the new invoked function call will automatically return the newly constructed object",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 32,
        "id": "zrhh9vo",
        "sources": [
            {
                "name": "What is the 'new' keyword in JavaScript?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/3658673"
            },
            {
                "name": "Using the new Keyword in JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=I2CdrKlPdAY"
            },
            {
                "name": "new Binding - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#new-binding"
            }
        ]
    },
    {
        "question": "What are some ways to increase SEO?",
        "answer": "- Specifying an alt tag on images, Add an XML sitemap, Avoid broken links, Add a robots.txt file, Specify a favicon, Avoid JavaScript errors, Optimize assets (including minification), Enable and force SSL, Include detailed meta tags",
        "tags": [
            "front-end"
        ],
        "type": "list",
        "number": 36,
        "id": "hcyc0aa",
        "sources": [
            {
                "name": "What are the best ways to increase a site's position in Google?",
                "site": "stack-overflow",
                "url": "https://webmasters.stackexchange.com/questions/2/what-are-the-best-ways-to-increase-a-sites-position-in-google"
            },
            {
                "name": "How to Improve Your Google Rankings Fast: 9 Steps to Rank Higher Using Analytics",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=xI1SicZRve0"
            },
            {
                "name": "SEO best practices - 17 tips to seriously improve SEO",
                "site": "medium",
                "url": "https://medium.com/@felixtarcomnicu/seo-best-practices-17-tips-to-seriously-improve-seo-e4f4af6d57ef"
            }
        ]
    },
    {
        "question": "What are the steps of a three-way handshake",
        "answer": "A method used in TCP/IP network to create a connection: 1. SYN:  Client sends packet with random sequence number to the server. 2. SYN-ACK:. Server responds with +1 to sequence number. 3. ACK: Client sends back messaging saying handshake has been complete. ",
        "tags": [
            "networking"
        ],
        "type": "list",
        "number": 42,
        "id": "gcgapp29",
        "sources": [
            {
                "name": "two-way handshake and three-way handshake",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/23774096"
            },
            {
                "name": "TCP Three Way Handshake",
                "site": "youtube",
                "url": "https://youtu.be/8-WpoF1cLtc?t=17"
            },
            {
                "name": "TCP 3-Way Handshake",
                "site": "medium",
                "url": "https://medium.com/@yildirimabdrhm/tcp-3-way-handshake-2e4d4d674ff6"
            }
        ]
    },
    {
        "question": "What are the SOLID principles?",
        "answer": "SOLID is an acronym to remember fundamental software engineering principles. S - Single responsibility. O - Open Closed. L - Liskov substitution. I - Interface Segregation. D - Dependency Inversion",
        "tags": [
            "software-engineering",
            "design-patterns",
            "object-oriented-programming"
        ],
        "type": "list",
        "number": 51,
        "id": "wl5p003",
        "sources": [
            {
                "name": "Can't seem to understand SOLID principles and design patterns [closed]",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/13692196"
            },
            {
                "name": "S.O.L.I.D. Principles of Object-Oriented Design - A Tutorial on Object-Oriented Design",
                "site": "youtube",
                "url": "https://youtu.be/GtZtQ2VFweA?t=112"
            },
            {
                "name": "The SOLID Principles",
                "site": "medium",
                "url": "https://blog.usejournal.com/the-solid-principles-80f8dbdec114"
            }
        ]
    },
    {
        "question": "What are the 7 JavaScript Primary Data Types?",
        "answer": "Number, String, Boolean, Object, Null, Undefined and Symbol",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 63,
        "id": "qpw4l0b",
        "sources": [
            {
                "name": "JavaScript data types and data structures - MDN Web Docs",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types"
            },
            {
                "name": "Data Types - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=808eYu9B9Yw"
            },
            {
                "name": "Built-in Types - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch1.md#built-in-types"
            }
        ]
    },
    {
        "question": "What are the 7 types of errors in JavaScript?",
        "answer": "EvalError, InteernalError, RangeError, ReferenceError, SyntaxError, TypeError, and URIError.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 70,
        "id": "10qgphm",
        "sources": [
            {
                "name": "Error - MDN Web Docs",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types"
            },
            {
                "name": "Errors in JavaScript / Intro to JavaScript ES6 programming, lesson 7",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=O0EHKBi7iXU"
            },
            {
                "name": "Type of errors in JavaScript",
                "site": "medium",
                "url": "https://medium.com/@wlodarczyk_j/type-of-errors-in-javascript-18458ba9d818"
            }
        ]
    },
    {
        "question": "What are void elements in HTML?",
        "answer": "Void elements area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr do not require and end tag. These are called void elements.",
        "tags": [
            "html",
            "front-end"
        ],
        "type": "list",
        "number": 82,
        "id": "pvesa7y",
        "sources": [
            {
                "name": "Do we still need end slashes in HTML5?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/3558119/are-non-void-self-closing-tags-valid-in-html5"
            },
            {
                "name": "HTML5 tutorial 22 | HTML Void Elements",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=PkE7edyf6xk"
            },
            {
                "name": "Empty Element - MDN",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Glossary/Empty_element"
            }
        ]
    },
    {
        "question": "What are the 3 types of lists available with HTML?",
        "answer": "<ul> : unordered list that displays items with a bullet, <ol> : ordered list that displays items with the number 1. 2. 3., <dl> : definition list displays elements like a dictionary with the definition tabbed over",
        "tags": [
            "html",
            "front-end"
        ],
        "type": "list",
        "number": 85,
        "id": "neozsrf",
        "sources": [
            {
                "name": "How many types of list are in HTML? Can you define each?",
                "site": "quora",
                "url": "https://www.quora.com/How-many-types-of-list-are-in-HTML-Can-you-define-each"
            },
            {
                "name": "Learn HTML code: lists",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=Dl1V6CagWfU"
            },
            {
                "name": "Day 13: Using HTML Lists — Spaghetti Recipe",
                "site": "medium",
                "url": "https://medium.com/@kbrook10/day-13-using-html-lists-spaghetti-recipe-efaa86b0cf09"
            }
        ]
    },
    {
        "question": "What are the 3 types of CSS stylings?",
        "answer": "1. External : Written in separate style sheets (.css files) 2. Internal : Written at the top of HTML files (<style> tags) 3. Inline: Written inside the HTML tag (<p style=\"\"></p>)",
        "tags": [
            "css",
            "front-end"
        ],
        "type": "list",
        "number": 95,
        "id": "w0md9j5",
        "sources": [
            {
                "name": "Comparison of loading CSS inline, embedded and from external files",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/2455658/9715166"
            },
            {
                "name": "How to Link CSS to HTML Document",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=y4gWr2fya0I"
            },
            {
                "name": "How to add CSS to HTML",
                "site": "globe",
                "url": "https://matthewjamestaylor.com/add-css-to-html"
            }
        ]
    },
    {
        "question": "What is flexbox?",
        "answer": "Flexbox is a built in CSS layout that is used to align and distribute space among items in a container even when their size is unknown.",
        "tags": [
            "css",
            "front-end"
        ],
        "type": "list",
        "number": 101,
        "id": "5mn4ena",
        "sources": [
            {
                "name": "What is flex-box?",
                "site": "quora",
                "url": "https://www.quora.com/What-is-flex-box"
            },
            {
                "name": "Learn Flexbox in 15 Minutes",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=fYq5PXgSsbE"
            },
            {
                "name": "A 10 Step Guide to Flexbox",
                "site": "medium",
                "url": "https://medium.com/@ensallee/a-10-step-guide-to-flexbox-fa00e7b03bf7"
            }
        ]
    },
    {
        "question": "What are the types of positions in CSS?",
        "answer": "Static, Relative, Fixed, Absolute, Sticky",
        "tags": [
            "css",
            "front-end"
        ],
        "type": "list",
        "number": 104,
        "id": "h29l0ss",
        "sources": [
            {
                "name": "Can you explain positioning in CSS?",
                "site": "quora",
                "url": "https://www.quora.com/Can-you-explain-positioning-in-CSS"
            },
            {
                "name": "Learn CSS Position In 9 Minutes",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=jx5jmI0UlXU"
            },
            {
                "name": "Understanding Position in CSS",
                "site": "medium",
                "url": "https://medium.com/@jacobgreenaway12/taming-the-css-beast-master-positioning-5882bad14458"
            }
        ]
    },
    {
        "question": "What are the 7 steps of the Software Development Life Cycle?",
        "answer": "Identify the Problem, Plan, Design, Build, Test, Deploy, and Maintain.",
        "tags": [
            "software-engineering"
        ],
        "type": "list",
        "number": 108,
        "id": "4auxcar",
        "sources": [
            {
                "name": "What is software development lifecycle?",
                "site": "quora",
                "url": "https://www.quora.com/What-is-software-development-lifecycle"
            },
            {
                "name": "Software Development Lifecycle in 9 minutes!",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=i-QyW8D3ei0"
            },
            {
                "name": "What Are the Software Development Life Cycle (SDLC) Stages?",
                "site": "medium",
                "url": "https://medium.com/@bydrecinc/what-are-the-software-development-life-cycle-sdlc-stages-7f505ed0dd18"
            }
        ]
    },
    {
        "question": "What are the 4 types of Software Maintenance?",
        "answer": "Adaptive, Perfective, Preventive, and Corrective",
        "tags": [
            "software-engineering"
        ],
        "type": "list",
        "number": 124,
        "id": "0e8et6s",
        "sources": [
            {
                "name": "Software Maintenance, Understanding the 4 Types",
                "site": "globe",
                "url": "https://www.coderhood.com/software-maintenance-understanding-the-4-types/"
            },
            {
                "name": "software maintenance | software engineering |",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=8swQr0kckZI"
            },
            {
                "name": "The 4 Types of Software Maintenance",
                "site": "medium",
                "url": "https://medium.com/endertech-insights/the-4-types-of-software-maintenance-7c3e96424f22"
            }
        ]
    },
    {
        "question": "What are the 5 things you can decorate in TypeScript?",
        "answer": "Class definitions, Properties, Methods, Accessors, and Parameters.",
        "tags": [
            "typescript"
        ],
        "type": "list",
        "number": 125,
        "id": "xmzbnwl",
        "sources": [
            {
                "name": "Decorators  - TypeScriptLang",
                "site": "globe",
                "url": "https://www.typescriptlang.org/docs/handbook/decorators.html#decorators"
            },
            {
                "name": "The Magic of TypeScript Decorators",
                "site": "youtube",
                "url": "https://youtu.be/O6A-u_FoEX8?t=80"
            },
            {
                "name": "A Gentle Introduction to TypeScript Decorators",
                "site": "medium",
                "url": "https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082"
            }
        ]
    },
    {
        "question": "What are the 3 ways to create an object?",
        "answer": "1. Object Literal 2. Creating an Instance (new) 3. Object Constructor",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 145,
        "id": "hb15iid",
        "sources": [
            {
                "name": "Different ways of creating an Object in javascript",
                "site": "globe",
                "url": "https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript"
            },
            {
                "name": "Different Ways of Creating Objects in JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=UrM9xgPxq1E"
            },
            {
                "name": "A thing or two about Objects in JavaScript.",
                "site": "medium",
                "url": "https://medium.com/front-end-weekly/a-thing-or-two-about-objects-in-javascript-c426a12e8b5f"
            }
        ]
    },
    {
        "question": "What are the pre-determined falsy values in JavaScript?",
        "answer": "1. false 2. 0 3. \"\" 4. null 5. undefined 6. NaN",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 149,
        "id": "mzni5",
        "sources": [
            {
                "name": "All falsey values in JavaScript",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/19839953"
            },
            {
                "name": "Truthy/Falsy - JavaScript Basics",
                "site": "youtube",
                "url": "https://youtu.be/O7rZJdtG10g?t=42"
            },
            {
                "name": "Dealing with Javascript falsy values",
                "site": "medium",
                "url": "https://medium.com/@sgobinda007/dealing-with-javascript-falsy-values-d75a2f1b1c90"
            }
        ]
    },
    {
        "question": "What are the 3 types of popup boxes?",
        "answer": "1. Alert. 2. Confirm 3. Prompt",
        "tags": [
            "javascript",
            "Front End"
        ],
        "type": "list",
        "number": 157,
        "id": "skcrblb",
        "sources": [
            {
                "name": "Popups - MDN",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
            },
            {
                "name": "Pop up boxes tutorial - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=y6P8uvqRYgw"
            },
            {
                "name": "Popup Boxes",
                "site": "free-code-camp",
                "url": "https://guide.freecodecamp.org/javascript/popup-boxes/"
            }
        ]
    },
    {
        "question": "What are the 3 combinators in CSS?",
        "answer": "1. > (Child combinator) where 2nd element is the child of the the 1st. 2. +  (Adjacent sibling combinator) where 2nd element immediately follows the 1st and both are children of the same parent. 3. ~ (General sibling combinator) where both elements are sibling of same parent but not directly adjacent.",
        "tags": [
            "css"
        ],
        "type": "list",
        "number": 164,
        "id": "3dveaxt",
        "sources": [
            {
                "name": "Combinators",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators"
            },
            {
                "name": "CSS Combinator Selectors",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=L6Y9Yltj15A"
            },
            {
                "name": "CSS Smart Selectors, Part 1 of 2",
                "site": "medium",
                "url": "https://medium.com/@davidagash/css-smart-selectors-part-1-of-2-300597beba86"
            }
        ]
    },
    {
        "question": "What are the 3 ways you can return responses from asynchronous calls in JavaScript?",
        "answer": "1. Callback Functions (1995): Traditonal method that can lead to callback hell - several nested blocks of data that are hard to follow. 2. Promises (2015): ES Methods that answer callback hell. 3. Async Await (2017): Syntactic sugar to promises that make them look more like synchronous code.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 173,
        "id": "eyv6az6",
        "sources": [
            {
                "name": "How do I return the response from an asynchronous call?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/14220323"
            },
            {
                "name": "Async JS Crash Course - Callbacks, Promises, Async Await",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=PoRJizFvM7s"
            },
            {
                "name": "Callbacks, Promises and Async/Await",
                "site": "medium",
                "url": "https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90"
            }
        ]
    },
    {
        "question": "What are the 3 steps of compilation?",
        "answer": "1. Tokenizing / Lexing: breaking up a string of characters into meaningful chunks, called tokens. 2. Parsing: taking an array of tokens and turning it into a tree of nested elements called the Abstract Syntax Tree. 3. code-Generation: Taking the AST and turning it into executable code.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 273,
        "id": "hfv4gir",
        "sources": [
            {
                "name": "What is compilation?",
                "site": "quora",
                "url": "https://www.quora.com/What-is-compilation"
            },
            {
                "name": "Compilation - Part One: Overview of the Stages of Compilation",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=0A079QpDAzY"
            },
            {
                "name": "Compiler Theory - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#compiler-theory"
            }
        ]
    },
    {
        "question": "What are the 2 ways to cheat lexical scope in JavaScript?",
        "answer": "1. eval ( ) : passing in a string like \"var a = 3\" will modify the lexical scope of where the eval statement is at runtime. 2. with ( ) : this statement takes an object, which has zero or more properties and threats that object as if it is a wholly separate lexical scope, and thus the object's properties are treated as lexically defined in that scope.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 274,
        "id": "1kxmhgp",
        "sources": [
            {
                "name": "Cheating Lexical Scope: eval",
                "site": "globe",
                "url": "https://frontendmasters.com/courses/advanced-javascript/cheating-lexical-scope-eval/"
            },
            {
                "name": "Cheating lexical scoping in JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=W_StzOwiKXk"
            },
            {
                "name": "Cheating Lexical - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#cheating-lexical"
            }
        ]
    },
    {
        "question": "What are the 3 drawbacks with anonymous functions in JavaScript?",
        "answer": "1. They have no useful name to display in stack traces, which can make debugging difficult. 2. Without a name, the function needs to refer to itself for recursion which requires the deprecated \"arguments.callee\" reference. 3. Without a name it is difficult to determine the purpose of the function.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 275,
        "id": "az6wgql",
        "sources": [
            {
                "name": "what are the advantages and disadvantages of anonymous methods in javascript?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/9123921/9715166"
            },
            {
                "name": "16.3: ES6 Arrow Function - Topics of JavaScript/ES6",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=mrYMzpbFz18"
            },
            {
                "name": "Unlexical - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch6.md#unlexical"
            }
        ]
    }
]
```
### Get Sets- [/sets](http://localhost:8080/sets/) 
```json
[
    {
        "name": "YDKJS Review",
        "desc": "FAQ's based on Kyle Simpson's You Don't Know JS Series",
        "emoji": "💩",
        "id": "you-dont-know-js-review",
        "url": "https://8snib.csb.app/set/you-dont-know-js-review",
        "faqs": [
            "1kxmhgp-What are the 2 ways to cheat lexical scope in JavaScript",
            "swl1uaa-What is the difference between lexical scope and dynamic scope in JavaScript?",
            "az6wgql-What are the 3 drawbacks with anonymous functions in JavaScript?",
            "7h9x8fl-What is an IIFE in JavaScript?",
            "bnxjlb1-What's the difference between the var, let, and const keywords in JavaScript?",
            "c7mwo7b-What is hoisting in JavaScript?",
            "v8e59bt-What is closure in JavaScript?",
            "0fg1g5g-What is the \"this\" keywork in JavaScript?",
            "8gkoaid-What are the 4 rules for determining what \"this\" refers to in JavaScript?",
            "qpw4l0b-What are the 7 JavaScript Primary Data Types?",
            "88x8ubo-What's the difference between accessing an object through the property method and key method?",
            "q0u9qzk-What's the difference between a shallow copy and deep copy?",
            "8ap4fbp-What are the 3 property descriptors in JavaScript?",
            "r8jroi9-What is the purpose of Object.preventExtensions( ) in JavaScript?",
            "oais0xm-What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?",
            "zrhh9vo-What are the 4 events that occur when a function is invoked with the \"new\" keyword?",
            "nz6uigo-What is the difference between an expression and a statement?",
            "8w2045j-What is the difference between compiling and interpreting code?",
            "2zxjzh5-How does an arrow function affect the this keyword in JavaScript?",
            "rg8h0r9-Why should you not use the JSON Parse --> JSON Stringify method of deep cloning an object?",
            "hfv4gir-What are the 3 steps of compilation?",
            "6b1n3qp-What's the difference between == and === in JavaScript?",
            "l40vuie-How to deep clone an object in JavaScript?"
        ]
    },
    {
        "name": "Programming 101",
        "desc": "Quick QnA for a Beginner Programmer",
        "emoji": "🍏",
        "id": "programming-101",
        "url": "https://8snib.csb.app/set/programming-101",
        "faqs": [
            "o1m8bh8-What's the difference between a variable and a value?",
            "1fn4aw5-What is a loop?",
            "6bdumv6-What is a data structure?",
            "uxyt91a-What is a function?",
            "gg14f8e-What is recursion?",
            "e1bejw9-What is scope?"
        ]
    },
    {
        "name": "JavaScript Interview Questions - Strings",
        "desc": "FAQ's for all those StackOverflow questions you've been digging through.",
        "emoji": "🌟",
        "id": "javascript-interview-questions-strings",
        "url": "https://8snib.csb.app/set/javascript-interview-questions-strings",
        "faqs": [
            "r460xpv-How to check if a string contains a substring in JavaScript?",
            "n679h6b-How to replace all occurrences of a string in JavaScript?",
            "isy74qv-How to capitalize first letter of a string in JavaScript?",
            "7bbszl6-How to find longest substring without repeating characters in JavaScript?",
            "olq9ps4-How to convert a string to a number in JavaScript?",
            "19k7g5p-How to remove vowels from string in JavaScript?",
            "u7t2s1q-How to reverse a string in JavaScript?",
            "h6uz3x9-What's the difference between undeclared and undefined in JavaScript?",
            "4eqrzp8-How to check if a string is all uppercase in JavaScript?",
            "trhvy6b-How to check if a string is all lowercase in JavaScript?",
            "2fmdui8-How to find most reoccuring character in JavaScript?",
            "nq1zehe-How to get all permutations of a string in JavaScript?",
            "pdeg7lj-How to reverse a sentence in JavaScript?",
            "g3y4as9-How to find first non-repeating character in JavaScript?",
            "j99xx3o-How to check if string is palindrome in JavaScript?",
            "c3bt8ij-How to check if string has only digits in JavaScript?",
            "j6epsxe-How to get number of vowels and consonants in JavaScript?",
            "daldhei-How to count number of occurrences of a string in JavaScript?",
            "bvl9h3f-How to find longest palindrome of a string in JavaScript?",
            "etqai3t-How to check if 2 strings are anagrams in JavaScript?"
        ]
    },
    {
        "name": "JavaScript Interview Questions - Arrays",
        "desc": "FAQ's for all those StackOverflow questions you've been digging through.",
        "emoji": "🌟",
        "id": "javascript-interview-questions-arrays",
        "url": "https://8snib.csb.app/set/javascript-interview-questions-arrays",
        "faqs": [
            "otgvjxf-How to remove an element from an array in JavaScript?",
            "kr0ns2b-How to append to array in JavaScript?",
            "hieewlp-How to sort array in JavaScript?",
            "wioawyg-How to sort array of objects by value in JavaScript?",
            "h74jep5-How to reverse an array in JavaScript?",
            "uwq5qpf-How to remove duplicates from an array in JavaScript?",
            "luglhko-How to check if array contains a value in JavaScript?",
            "i9hzdt2-How to check if all elements in an array are unique in JavaScript?",
            "8osyb4f-How to find the min/max value of an array in JavaScript?",
            "tb57y5j-How to find the intersection of 2 arrays in JavaScript?",
            "86526vu-How to remove all odd numbers from an array in JavaScript?",
            "6x0juyv-How to remove all even numbers from an array in JavaScript?",
            "q2b43jv-How to find the first duplicate element of an array in JavaScript?",
            "4kl7b58-How to remove the first element from an array?",
            "mo1dpw7-How to remove the last element from an array?",
            "pkjkh4p-How to shuffle an array in JavaScript?"
        ]
    }
]
```
### Get Sets- [/set/:id](http://localhost:8080/sets/you-dont-know-js-review) 
```json
[
    {
        "question": "What are the 2 ways to cheat lexical scope in JavaScript?",
        "answer": "1. eval ( ) : passing in a string like \"var a = 3\" will modify the lexical scope of where the eval statement is at runtime. 2. with ( ) : this statement takes an object, which has zero or more properties and threats that object as if it is a wholly separate lexical scope, and thus the object's properties are treated as lexically defined in that scope.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 274,
        "id": "1kxmhgp",
        "sources": [
            {
                "name": "Cheating Lexical Scope: eval",
                "site": "globe",
                "url": "https://frontendmasters.com/courses/advanced-javascript/cheating-lexical-scope-eval/"
            },
            {
                "name": "Cheating lexical scoping in JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=W_StzOwiKXk"
            },
            {
                "name": "Cheating Lexical - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#cheating-lexical"
            }
        ]
    },
    {
        "question": "What is the difference between lexical scope and dynamic scope in JavaScript?",
        "answer": "When we traverse up the lexical scope we are looking at the nesting of brackets {} but when we traverse up dynamic scope we are following the function call's scopes.",
        "tags": [
            "programming-fundamentals",
            "javascript"
        ],
        "type": "comparison",
        "number": 67,
        "id": "swl1uaa",
        "sources": [
            {
                "name": "Static (Lexical) Scoping vs Dynamic Scoping (Pseudocode)",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/22395580/9715166"
            },
            {
                "name": "006 Lexical Scope",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=dHYhMP8ESuk"
            },
            {
                "name": "Chapter 2: Lexical Scope - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#chapter-2-lexical-scope"
            }
        ]
    },
    {
        "question": "What are the 3 drawbacks with anonymous functions in JavaScript?",
        "answer": "1. They have no useful name to display in stack traces, which can make debugging difficult. 2. Without a name, the function needs to refer to itself for recursion which requires the deprecated \"arguments.callee\" reference. 3. Without a name it is difficult to determine the purpose of the function.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 275,
        "id": "az6wgql",
        "sources": [
            {
                "name": "what are the advantages and disadvantages of anonymous methods in javascript?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/9123921/9715166"
            },
            {
                "name": "16.3: ES6 Arrow Function - Topics of JavaScript/ES6",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=mrYMzpbFz18"
            },
            {
                "name": "Unlexical - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch6.md#unlexical"
            }
        ]
    },
    {
        "question": "What is an IIFE in JavaScript?",
        "answer": "An IIFE is an Immediately Invoked Function Expression which runs as soon as it's defined by adding ( ) to the end of the function scope. These functions don't need names so the most common form is an anonymous function.",
        "tags": [
            "javascript"
        ],
        "type": "definition",
        "number": 34,
        "id": "7h9x8fl",
        "sources": [
            {
                "name": "What is the (function() { } )() construct in JavaScript?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/8228308"
            },
            {
                "name": "Scopes and Closures In-dept 06 - IIFE",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=q21QSRpNaAQ"
            },
            {
                "name": "Invoking Function Expressions Immediately - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#invoking-function-expressions-immediately"
            }
        ]
    },
    {
        "question": "What's the difference between the var, let, and const keywords in JavaScript?",
        "answer": "Each are used to declare a variable, but var has been a part of JavaScript since the start while let and const were introduced in ES6. var has functional scope while the others have block scope. const is identical to let but you aren't allowed to redeclare a variable declared with const",
        "tags": [
            "javascript"
        ],
        "type": "comparison",
        "number": 7,
        "id": "bnxjlb1",
        "sources": [
            {
                "name": "What's the difference between using \"let\" and \"var\"?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var"
            },
            {
                "name": "JavaScript Let, Const & Var: A Complete Guide",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=dzEieWaOJE0"
            },
            {
                "name": "Function vs. Block Scope Review - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#review-tldr"
            }
        ]
    },
    {
        "question": "What is hoisting in JavaScript?",
        "answer": "Before run-time JavaScript looks for all variable and function declarations in the scope and then hoists them ot the top of the function before they are declared.",
        "tags": [
            "javascript"
        ],
        "type": "definition",
        "number": 78,
        "id": "c7mwo7b",
        "sources": [
            {
                "name": "Javascript function scoping and hoisting",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/7506937"
            },
            {
                "name": "Hoisting - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=C1PZh_ea-7I"
            },
            {
                "name": "Review (TL;DR) - You Don't Know JS",
                "site": "github",
                "url": "In JavaScript, what code executes at runtime and what code executes at parsetime?"
            }
        ]
    },
    {
        "question": "What is closure in JavaScript?",
        "answer": "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.",
        "tags": [
            "javascript",
            "programming-fundamentals"
        ],
        "type": "definition",
        "number": 5,
        "id": "v8e59bt",
        "sources": [
            {
                "name": "How do JavaScript closures work?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/111102/how-do-javascript-closures-work"
            },
            {
                "name": "Nitty Gritty - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch5.md#nitty-gritty"
            }
        ]
    },
    {
        "question": "What is the \"this\" keyword in JavaScript?",
        "answer": "\"this\" refers to a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.",
        "tags": [
            "javascript"
        ],
        "type": "definition",
        "number": 3,
        "id": "0fg1g5g",
        "sources": [
            {
                "name": "How does the \"this\" keyword work?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work"
            },
            {
                "name": "JavaScript for Developers 38 - Understanding the this keyword",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=URVdQG96MUw"
            },
            {
                "name": "What's this? - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch1.md#whats-this"
            }
        ]
    },
    {
        "question": "What are the 4 rules for determining what \"this\" refers to in JavaScript?",
        "answer": "1. Called with new? Use the newly constructed object. 2. Called with call, apply, or bind? Use that specified object. 3. Called with a context object owning the call? Use that context object. 4. Default: undefined in strict mode and global object otherwise.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 31,
        "id": "8gkoaid",
        "sources": [
            {
                "name": "How does the \"this\" keyword work?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/17514482"
            },
            {
                "name": "this all Makes Sense Now! - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#review-tldr"
            }
        ]
    },
    {
        "question": "What are the 7 JavaScript Primary Data Types?",
        "answer": "Number, String, Boolean, Object, Null, Undefined and Symbol",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 63,
        "id": "qpw4l0b",
        "sources": [
            {
                "name": "JavaScript data types and data structures - MDN Web Docs",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types"
            },
            {
                "name": "Data Types - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=808eYu9B9Yw"
            },
            {
                "name": "Built-in Types - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch1.md#built-in-types"
            }
        ]
    },
    {
        "question": "What's the difference between accessing an object through the property method and key method?",
        "answer": "The property method (object.property) is the common method to declare an access an object's properties. The key method (object[\"property\"]) takes in a string as the property which means you can access variable unusual characters like spaces. You can also pass in computed property names in the key method.",
        "tags": [
            "javascript"
        ],
        "type": "comparison",
        "number": 33,
        "id": "88x8ubo",
        "sources": [
            {
                "name": "Property Accessors - MDN Web Docs",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
            },
            {
                "name": "Object properties and propety accessors in JS",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=sXed76BTqfA"
            },
            {
                "name": "Objects - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#contents"
            }
        ]
    },
    {
        "question": "What's the difference between a shallow copy and deep copy?",
        "answer": "Shallow copies do not consider the fields of an object that are references to other objects so it keeps the same memory addresses. Deep copies make a copy of dynamically allocated memory that is pointed to by the fields.",
        "tags": [
            "javascript",
            "programming-fundamentals"
        ],
        "type": "comparison",
        "number": 15,
        "id": "q0u9qzk",
        "sources": [
            {
                "name": "What is the difference between a deep copy and a shallow copy?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy"
            },
            {
                "name": "Copying Arrays (deep and shallow) - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=EeZBKv34mm4"
            },
            {
                "name": "How to differentiate between deep and shallow copies in JavaScript",
                "site": "free-code-camp",
                "url": "https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/"
            }
        ]
    },
    {
        "question": "What are the 3 property descriptors in JavaScript?",
        "answer": "1. configurable: alters ability to change other property descriptors and delete the property. 2. enumerable : changes whether the property is displayed when the object is looped over. 3. writable : whether the value can be changed.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 26,
        "id": "8ap4fbp",
        "sources": [
            {
                "name": "JavaScript Object Property Descriptors",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=LD1tQEWsjz4"
            },
            {
                "name": "JavaScript — Property Descriptor",
                "site": "medium",
                "url": "https://codeburst.io/javascript-object-property-attributes-ac012be317e2"
            },
            {
                "name": "Property Descriptors - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#property-descriptors"
            }
        ]
    },
    {
        "question": "What is the purpose of Object.preventExtensions( ) in JavaScript?",
        "answer": "When an object is passed into this function, an error will be thrown when there is an attempt to define a property on the object.",
        "tags": [
            "javascript"
        ],
        "type": "definition",
        "number": 27,
        "id": "r8jroi9",
        "sources": [
            {
                "name": "Object.preventExtensions() - MDN Web Docs",
                "site": "firefox",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"
            },
            {
                "name": "JavaScript Video Tutorial - Preventing Extensions on an Object",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=EzWcVZ1QSM8"
            },
            {
                "name": "Prevent Extensions - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#prevent-extensions"
            }
        ]
    },
    {
        "question": "What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?",
        "answer": "Object.seal( ): Prevent new properties being added and marks existing properties as non-configurable but they are still writable. Object.freeze( ) Will do same as seal but not have the values be writable. Object.deepFreeze is not a built in function but it means to freeze the properties of objects nested in the main object.",
        "tags": [
            "javascript"
        ],
        "type": "comparison",
        "number": 28,
        "id": "oais0xm",
        "sources": [
            {
                "name": "Variable immutability with Object freeze, seal and preventExtensions methods",
                "site": "medium",
                "url": "https://medium.com/@obaranovskyi/variable-immutability-with-object-freeze-seal-and-preventextensions-methods-7e0d2ebfd920"
            },
            {
                "name": "Object seal, freeze, and preventExtensions",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=ZdF2aOYpIqw"
            },
            {
                "name": "Seal, Freeze - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#seal"
            }
        ]
    },
    {
        "question": "What are the 4 events that occur when a function is invoked with the \"new\" keyword?",
        "answer": "1. A brand new object is created (aka, constructed) out of thin air. 2. The newly constructed object is prototype linked. 3. The newly constructed object is set as the this binding for that function call. 4. Unless the function returns its own alternate object, the new invoked function call will automatically return the newly constructed object",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 32,
        "id": "zrhh9vo",
        "sources": [
            {
                "name": "What is the 'new' keyword in JavaScript?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/3658673"
            },
            {
                "name": "Using the new Keyword in JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=I2CdrKlPdAY"
            },
            {
                "name": "new Binding - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#new-binding"
            }
        ]
    },
    {
        "question": "What is the difference between an expression and a statement?",
        "answer": "An expression is any reference to a variable or value, or a set of variables and values combined with operators. Statements are made up of expressions and are defined as a group of words, numbers, and operators that performs a specific task.",
        "tags": [
            "programming-fundamentals",
            "javascript"
        ],
        "type": "comparison",
        "number": 92,
        "id": "nz6uigo",
        "sources": [
            {
                "name": "What is the difference between an expression and a statement in Python?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/4728073/what-is-the-difference-between-an-expression-and-a-statement-in-python"
            },
            {
                "name": "Expressions vs. Statements in JS / Intro to JavaScript ES6 programming, lesson 15",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=WVyCrI1cHi8"
            },
            {
                "name": "Statements - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md#statements"
            }
        ]
    },
    {
        "question": "What is the difference between compiling and interpreting code?",
        "answer": "Interpreting code means translating the commands from top to bottom, line by line, every time the program is run whereas compiling code means the translation is done ahead of time.",
        "tags": [
            "programming-fundamentals",
            "javascript"
        ],
        "type": "comparison",
        "number": 93,
        "id": "8w2045j",
        "sources": [
            {
                "name": "Compiled vs. Interpreted Languages",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/3265602/9715166"
            },
            {
                "name": "Short Lesson - Compilation vs Interpretation",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=JNMy969SjyU"
            },
            {
                "name": "Executing a Program - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md#executing-a-program"
            }
        ]
    },
    {
        "question": "How does an arrow function affect the this keyword in JavaScript?",
        "answer": "Arrow functions do not bind their own this, they lexically bind their context so they refer to the originating context.",
        "tags": [
            "javascript"
        ],
        "type": "explanation",
        "number": 141,
        "id": "2zxjzh5",
        "sources": [
            {
                "name": "Understanding \"this\" in javascript with arrow functions",
                "site": "globe",
                "url": "https://www.codementor.io/dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc"
            },
            {
                "name": "Arrow function and this keyword in javascript😃",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=tANuyOClBIY"
            },
            {
                "name": "Lexical This - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#lexical-this"
            }
        ]
    },
    {
        "question": "Why should you not use the JSON Parse --> JSON Stringify method of deep cloning an object?",
        "answer": "Using JSON.parse(JSON.stringify(obj)) won't account for undefined and functions. There is not method of saving functions or undefined values in JSON.",
        "tags": [
            "javascript"
        ],
        "type": "explanation",
        "number": 146,
        "id": "rg8h0r9",
        "sources": [
            {
                "name": "javascript deep copy using JSON",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/q/20662319"
            },
            {
                "name": "Copying Arrays (deep and shallow) - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://youtu.be/EeZBKv34mm4?t=236"
            },
            {
                "name": "Duplicating Objects - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#duplicating-objects"
            }
        ]
    },
    {
        "question": "What are the 3 steps of compilation?",
        "answer": "1. Tokenizing / Lexing: breaking up a string of characters into meaningful chunks, called tokens. 2. Parsing: taking an array of tokens and turning it into a tree of nested elements called the Abstract Syntax Tree. 3. code-Generation: Taking the AST and turning it into executable code.",
        "tags": [
            "javascript"
        ],
        "type": "list",
        "number": 273,
        "id": "hfv4gir",
        "sources": [
            {
                "name": "What is compilation?",
                "site": "quora",
                "url": "https://www.quora.com/What-is-compilation"
            },
            {
                "name": "Compilation - Part One: Overview of the Stages of Compilation",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=0A079QpDAzY"
            },
            {
                "name": "Compiler Theory - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#compiler-theory"
            }
        ]
    },
    {
        "question": "What's the difference between == and === in JavaScript?",
        "answer": "The double equals (==) uses implicit conversion when comparing values. If we compare the number 5 with the string \"5\" (5 == \"5\"), the string will be converted to a number and compared. The triple equals (===) does not implicitly convert so (\"5\" === 5) will return false.",
        "tags": [
            "javascript"
        ],
        "type": "comparison",
        "number": 9,
        "id": "6b1n3qp",
        "sources": [
            {
                "name": "Which equals operator (== vs ===) should be used in JavaScript comparisons?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons"
            },
            {
                "name": "== vs === - Beau teaches JavaScript",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=kVOmc7NK1M0"
            },
            {
                "name": "Loose Equals vs. Strict Equals - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch4.md#loose-equals-vs-strict-equals"
            }
        ]
    },
    {
        "question": "How to deep clone an object in JavaScript?",
        "answer": "If the object does not have any functions a simple conversion to JSON and back will deep clone --> JSON.parse(JSON.stringify(objectToClone)). But if there are functions in the object or the object is a function, you should look at external libraries such as underscore or lodash.",
        "tags": [
            "javascript"
        ],
        "type": "code",
        "number": 172,
        "id": "l40vuie",
        "sources": [
            {
                "name": "What is the most efficient way to deep clone an object in JavaScript?",
                "site": "stack-overflow",
                "url": "https://stackoverflow.com/a/122704"
            },
            {
                "name": "Deep Copying vs Shallow Copying",
                "site": "youtube",
                "url": "https://www.youtube.com/watch?v=duyshh9Fs1U"
            },
            {
                "name": "Duplicating Objects - You Don't Know JS",
                "site": "github",
                "url": "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#duplicating-objects"
            }
        ]
    }
]
```