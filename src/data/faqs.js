module.exports = [
  {
    question:
      "What's the difference between CSS Component Frameworks and CSS Utility Frameworks",
    answer:
      "Component Frameworks limit writing actual CSS because they offer prebuilt components that can be imported. Utility frameworks encourage inline styling by offering prebuilt classes that correlate to CSS attributes.",
    tags: ["Front-End", "CSS", "JS Libraries"],
    type: "Comparison",
    number: 0,
    id: "56h6vqe"
  },
  {
    question: "What's the difference between TypeScript and JavaScript?",
    answer:
      "TypeScript is a SuperSet of JavaScript created by Microsoft in 2012. TypeScript is strongly-typed which helps identify compilation errors in development.",
    tags: ["JavaScript", "TypeScript", "JS Libraries"],
    type: "Comparison",
    number: 1,
    id: "dcfqw4r"
  },
  {
    question: "What is the this keyword in JavaScript?",
    answer:
      '"this" refers to a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.',
    tags: ["JavaScript"],
    type: "Definition",
    number: 2,
    id: "0fg1g5"
  },
  {
    question: 'What does "use strict" do in JavaScript?',
    answer:
      'The "use strict" string literal was introduced in ESCMScript 5. When included in a scope, errors are thrown for insecure coding practices like assigning values to undeclared variables. The this keyword does not traverse up the functional scope to the global object when it is undefined.',
    tags: ["JavaScript"],
    type: "Definition",
    number: 3,
    id: "wyw25ob"
  },
  {
    question: "What is closure?",
    answer:
      "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Definition",
    number: 4,
    id: "v8e59bt"
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM is the browsers API that allows a scripting language like JavaScript to manipulate HTML on a webpage.",
    tags: ["DOM", "Front-End"],
    type: "Definition",
    number: 5,
    id: "toxu21t"
  },
  {
    question:
      "What's the difference between the var, let, and const keywords in JavaScript?",
    answer:
      "Each are used to declare a variable, but var has been a part of JavaScript since the start while let and const were introduced in ES6. var has functional scope while the others have block scope. const is identical to let but you aren't allowed to redeclare a variable declared with const",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 6,
    id: "bnxjlb"
  },
  {
    question: "What is the box model in CSS?",
    answer:
      "The box model is the hierarchy of CSS attributes on elements. Content --> padding --> border --> margin.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 7,
    id: "28b4e2yl"
  },
  {
    question: "What's the difference between == and === in JavaScript?",
    answer:
      'The double equals (==) uses implicit conversion when comparing values. If we compare the number 5 with the string "5" (5 == "5"), the string will be converted to a number and compared. The triple equals (===) does not implicitly convert so ("5" === 5) will return false.',
    tags: ["JavaScript"],
    type: "Comparison",
    number: 8,
    id: "6b1n3q"
  },
  {
    question: "What's the difference between null and undefined in JavaScript?",
    answer:
      "undefined is given to a variable that has not been assigned a value. null can only be assigned by a developer.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 9,
    id: "3xi3xlt"
  },
  {
    question:
      "What's the difference between undeclared and undefined in JavaScript?",
    answer:
      "Undeclared variables have not been referenced before in the current scope. Undefined variables have been declared but have not been assigned a value.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 10,
    id: "h6uz3x"
  },
  {
    question:
      "What's the difference between the window and document in the DOM?",
    answer:
      "The window refers to the object that represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. The document is nested in the window object and refers to the actual HTML code of the webpage.",
    tags: ["DOM", "Front-End"],
    type: "Comparison",
    number: 11,
    id: "p2y6csz"
  },
  {
    question: "What is event bubbling?",
    answer:
      'When a user interacts with a nested element and the event "bubbles" to the top through its ancestor elements.',
    tags: ["DOM", "Front-End"],
    type: "Definition",
    number: 12,
    id: "66ks56"
  },
  {
    question:
      "What's the difference between the call and apply functions in JavaScript?",
    answer:
      "Both are function prototypes that call the function while passing in a this object. apply takes in and array of arguments as the second function while call does not require the array and will take an infinite amount of arguments.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 13,
    id: "z3okrth"
  },
  {
    question: "What's the difference between a shallow copy and deep copy?",
    answer:
      "Shallow copies do not consider the fields of an object that are references to other objects so it keeps the same memory addresses. Deep copies make a copy of dynamically allocated memory that is pointed to by the fields.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Comparison",
    number: 14,
    id: "q0u9qzk"
  },
  {
    question: "What is immutable?",
    answer:
      "When we say something is immutable it means it we cannot modify it's value after assignment, we would need to create a copy of it. Numbers and strings are immutable while objects, arrays, functions, classes, sets, and maps are not.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Definition",
    number: 15,
    id: "aplmx6f"
  },
  {
    question:
      "What are the 2 key features of React that set it apart from other frameworks?",
    answer:
      "React features JSX, a syntax extension to JavaScript that is similar to other templating languages but comes with the full power of JavaScript. React also uses a virtual dom which is a lightweight copy of the DOM that allows eliminates the need to constantly update the entire DOM which is slow.",
    tags: ["React.js", "JavaScript", "Front-End", "JS Libraries"],
    type: "List",
    number: 16,
    id: "tc14j9"
  },
  {
    question: "What is specificity in CSS?",
    answer:
      "Specificity refers to the weight that is applied to a given CSS declaration. Types < Classes < IDs < !Important keyword.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 17,
    id: "hqwgumk"
  },
  {
    question:
      "What's the difference between visibility: hidden and display: none in CSS?",
    answer: "Visibility hidden renders in the DOM while display none does not.",
    tags: ["CSS", "Front-End"],
    type: "Comparison",
    number: 18,
    id: "p6js7e"
  },
  {
    question: "What is a first class function?",
    answer:
      "This means functions can be stored in a variable, object, or array and they can be passed into and returned from a function.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Definition",
    number: 19,
    id: "pclvevr"
  },
  {
    question: "What is a lambda function?",
    answer: "These are essentially nameless functions.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Definition",
    number: 20,
    id: "kdt45mr"
  },
  {
    question: "What is an arrow function in JavaScript?",
    answer:
      "Arrow functions, new to ES6, are ways to write Lambda functions. These functions however, do not have their own this value. They are bound to the enclosing scope.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 21,
    id: "v3w9mj"
  },
  {
    question: "What are features of a functional programming language?",
    answer:
      "1. First-class functions: functions can be stored in a variable object or array and can be passed in or returned from functions. 2. Higher Order Functions: (Factory Functions) functions that can build other functions by taking a function as an argument. 3. Lambda functions: A nameless function",
    tags: ["Functional Programming"],
    type: "List",
    number: 22,
    id: "5j07ive"
  },
  {
    question: "What is a higher order function?",
    answer:
      "These are functions that take a function as an argument and/or return a new function.",
    tags: ["Functional Programming"],
    type: "Definition",
    number: 23,
    id: "qlcklyn"
  },
  {
    question:
      "What's the difference between classical and prototypal inheritance?",
    answer:
      "Classical relies on classes and prototypal relies on prototypes. Classes are immutable, you can't modify or add new methods at runtime while prototypes can be either. Classes may or may not support multiple inheritance where objects can inherit from multiple prototypes.",
    tags: ["Object Oriented Programming", "Functional Programming"],
    type: "Comparison",
    number: 24,
    id: "b5yf47h"
  },
  {
    question: "What are the 3 property descriptors in JavaScript?",
    answer:
      "1. configurable: alters ability to change other property descriptors and delete the property. 2. enumerable : changes whether the property is displayed when the object is looped over. 3. writable : whether the value can be changed.",
    tags: ["JavaScript"],
    type: "List",
    number: 25,
    id: "8ap4fbp"
  },
  {
    question:
      "What is the purpose of Object,preventExtensions( ) in JavaScript?",
    answer:
      "When an object is passed into this function, an error will be thrown when there is an attempt to define a property on the object.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 26,
    id: "r8jroi9"
  },
  {
    question:
      "What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?",
    answer:
      "Object.seal( ): Prevent new properties being added and marks existing properties as non-configurable but they are still writable. Object.freeze( ) Will do same as seal but not have the values be writable. Object.deepFreeze is not a function but it means to freeze the properties of objects nested in the main object.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 27,
    id: "oais0xm"
  },
  {
    question:
      "What's the difference between the typeof and instanceof operators in JavaScript?",
    answer:
      "The typeof operator returns a string indicating the type of the operand while the instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 28,
    id: "wbnjha"
  },
  {
    question:
      "What's the difference between the in and hasOwnProperty operators in JavaScript?",
    answer:
      "The in property returns true if the specified property is in the specified object or it's prototype chain while hasOwnProperty will return true if the object has the specified property as it's own (not just from the prototype chain)",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 29,
    id: "g2hzd3v"
  },
  {
    question:
      'What are the 4 rules for determining what "this" refers to in JavaScript?',
    answer:
      "1. Called with new? Use the newly constructed object. 2. Called with call, apply, or bind? Use that specified object. 3. Called with a context object owning the call? Use that context object. 4. Default: undefined in strict mode and global object otherwise.",
    tags: ["JavaScript"],
    type: "List",
    number: 30,
    id: "8gkoaid"
  },
  {
    question:
      'What are the 4 things events that occur when a function is invoked with the "new" keyword?',
    answer:
      "1. A brand new object is created (aka, constructed) out of thin air. 2. The newly constructed object is prototype linked. 3. The newly constructed object is set as the this binding for that function call. 4. Unless the function returns its own alternate object, the new invoked function call will automatically return the newly constructed object",
    tags: ["JavaScript"],
    type: "List",
    number: 31,
    id: "zrhh9vo"
  },
  {
    question:
      "What's the difference between accessing an object through the property method and key method?",
    answer:
      'The property method (object.property) is the common method to declare an access an object\'s properties. The key method (object["property"]) takes in a string as the property which means you can access variable unusual characters like spaces. You can also pass in computed property names in the key method.',
    tags: ["JavaScript"],
    type: "Comparison",
    number: 32,
    id: "88x8ub"
  },
  {
    question:
      "What's the difference between HTTP Basic Authentication and OAuth?",
    answer:
      "HTTP Basic and requires the client keeps the password in clear text and send it with each request. OAuth is faster because it relies on security token validation (digital signature verification)",
    tags: ["Security", "Back-End"],
    type: "Comparison",
    number: 33,
    id: "qom515"
  },
  {
    question: "Why should you never use HTTP Basic Authentication?",
    answer:
      "1. You are not allowed to specify only certain features of a web service with just a username and password. 2. This process blocks other devices trying to access the same service with the username and password 3. No support for extensions like two-factor authentication",
    tags: ["Security", "Back-End"],
    type: "Explanation",
    number: 34,
    id: "elht4bv"
  },
  {
    question: "What is an IIFE in JavaScript?",
    answer:
      "An IIFE is an Immediately Invoked Function Expression which runs as soon as it's defined by adding ( ) to the end of the function scope. These functions don't need names so the most common form is an anonymous function.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 35,
    id: "7h9x8fl"
  },
  {
    question: "What is SEO?",
    answer:
      "SEO, Search Engine Optimization is the process of increasing the quality and quantity of a website traffic by increasing the visibility of a website or a web page to users of a web search engine.",
    tags: ["Front-End"],
    type: "Definition",
    number: 36,
    id: "a945jyi"
  },
  {
    question: "What are some ways to increase SEO?",
    answer:
      "- Specifying an alt tag on images, Add an XML sitemap, Avoid broken links, Add a robots.txt file, Specify a favicon, Avoid JavaScript errors, Optimize assets (including minification), Enable and force SSL, Include detailed meta tags",
    tags: ["Front-End"],
    type: "List",
    number: 36,
    id: "hcyc0aa"
  },
  {
    question: "What is an XML sitemap?",
    answer:
      "XML sitemaps list a website's important pages, making sure a search engine can find and crawl through all pages.",
    tags: ["Front-End"],
    type: "Definition",
    number: 37,
    id: "pl11mhl"
  },
  {
    question: "What is the robots.txt file?",
    answer:
      "robots.txt gives instructions about a site to web crawlers. These instructions are called the Robots Exclusion Protocol. You can use this file to specify endpoints that should be avoided however malicious bots can still access these endpoints since the file is publicly available.",
    tags: ["Front-End"],
    type: "Definition",
    number: 38,
    id: "6wuyr6o6"
  },
  {
    question: "What is minification?",
    answer:
      "Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser. A minifier might remove comments, spaces, unused code, and use shorter variable and function names.",
    tags: ["Front-End"],
    type: "Definition",
    number: 39,
    id: "ak3z66u"
  },
  {
    question: "What is a favicon?",
    answer:
      "A favicon (favorite icon) is a 16 x 16 or 32 x 32 .ico file that is shown next to the title of a webpage in the browser.",
    tags: ["Front-End"],
    type: "Definition",
    number: 40,
    id: "1rqbpy"
  },
  {
    question: "What is SSL?",
    answer:
      "SSL (secure sockets layer) is the standard security technology for establishing an encrypted link between a web server and a browser. Without SSL, data sent between clients and servers is sent in plain text - which makes it really easy to be intercepted.",
    tags: ["Front-End", "Back-End", "Security", "Networking"],
    type: "Definition",
    number: 41,
    id: "s6txkx8"
  },
  {
    question: "What is the three-way handshake?",
    answer:
      "The three-way handshake is a method used in a TCP/IP network to create a connection between a local host/client and server. It is a 3 step process that requires both the client and server to exchange SYN and ACK packets before actual data communication begins.",
    tags: ["Networking"],
    type: "Definition",
    number: 42,
    id: "g2com2m"
  },
  {
    question: "What are the steps of a three-way handshake",
    answer:
      "1. The client sends a SYN data packet over an IP network to a server on the same or an external network. 2. The target server must have open ports that can accept and initiate new connections before it receives the SYN packet and responds with a confirmation receipt - the ACK packet or SYN/ACK packet. 3. The client node receives the SYN/ACK packed from the server and responds with an ACK packet.",
    tags: ["Networking"],
    type: "List",
    number: 43,
    id: "gcgapp29"
  },
  {
    question: "What's the difference between an ACK, SYN, and SYN-ACK packet?",
    answer:
      "SYN refers to a request to SYNCHRONNIZE. ACK refers to a general ACKNOWLEDGEMENT. SYN-ACK refers to an ACKNOWLEDGEMENT to a SYNCHRONIZE request",
    tags: ["Networking"],
    type: "Comparison",
    number: 44,
    id: "9uxc2km"
  },
  {
    question: "What is a SYN flood?",
    answer:
      "A form of denial of service attack in which an attacker sends a succession of SYN requests to a target's system in attempt to consume enough server resources to make the system unresponsive to legitimate traffic.",
    tags: ["Networking", "Security"],
    type: "Definition",
    number: 45,
    id: "9oosnwu"
  },
  {
    question: "What is a Denial-of-Service attack?",
    answer:
      "Any attempt to shut down a machine or network, making it inaccessible to its intended users. These attacks are usually accomplished by flooding the target with traffic, or sending it information that triggers a crash.",
    tags: ["Networking", "Security"],
    type: "Definition",
    number: 46,
    id: "clp5y5"
  },
  {
    question: "What's the difference between a DOS and a DDOS attack?",
    answer:
      "A DDOS (Distributed Denial of Service) attack is more threatening because it means the attempts to override the target with traffic are coming from multiple IP Addresses. This makes it difficult to distinguish legitimate traffic from malicious.",
    tags: ["Networking", "Security"],
    type: "Comparison",
    number: 47,
    id: "bl8ay5n"
  },
  {
    question: "What is the purpose of a meta tag?",
    answer:
      "Meta tags offer metadata about the HTML page. This can include description, keywords, author, viewport, and charset.",
    tags: ["HTML", "Front-End"],
    type: "Definition",
    number: 48,
    id: "6t7vsuj"
  },
  {
    question: "What is the first line you include in any HTML file?",
    answer:
      "You need to use <!DOCTYPE html> at the top of your HTML file. This is not an HTML tag, this is an instruction to the web browser about what version of HTML the page is written in.",
    tags: ["HTML", "Front-End"],
    type: "Definition",
    number: 49,
    id: "ph1xzdn"
  },
  {
    question: "What is HTTP keep-alive?",
    answer:
      "HTTP keep-alive, aka HTTP persistent connection is an instruction that allows a single TCP connection to remain open for multiple HTTP requests/responses. Enabling the keep-alive header allows you to serve all web page resources over a single connection thus reducing client load times and server load.",
    tags: ["Networking"],
    type: "Definition",
    number: 50,
    id: "wsyrzjr"
  },
  {
    question: "What is DNS lookup?",
    answer:
      "DNS (Domain Name System) lookup refers to the process of mapping domain names to IP addresses.",
    tags: ["Networking"],
    type: "Definition",
    number: 51,
    id: "vuuwgas"
  },
  {
    question: "Why do some consider @import bad practice in CSS?",
    answer:
      "@import is not recognized by older browsers, however this is starting to change. @import also synchronously links CSS files while <link> is asynchronous.",
    tags: ["CSS", "Front-End"],
    type: "Explanation",
    number: 52,
    id: "1o5kdx5"
  },
  {
    question: "What's the difference between <link> and @import with CSS?",
    answer:
      "<link> is the HTML method for including CSS while @import is the CSS method. @import allows you to include CSS files inside another CSS file because it's written in CSS. <link> allows for multiple CSS files to be loaded asynchronously. Older browsers might not work properly with @import.",
    tags: ["CSS", "HTML", "Front-End"],
    type: "Comparison",
    number: 53,
    id: "koakm6o"
  },
  {
    question:
      "What's the difference between Art Direction and Resolution Switching?",
    answer:
      "Art Direction refers to serving several images potentially at the same resolution but cropped differently or with different aspect resolutions to optimize user experience. Resolution switching refers to offering different resolutions for images based on the size of the screen accessing them in order to lower bandwidth.",
    tags: ["Front-End"],
    type: "Comparison",
    number: 54,
    id: "x2ux0c"
  },
  {
    question: "What are some ways to prevent bots from scraping an API?",
    answer: "-Incorporate Rate Limiting, -Set up Authentication",
    tags: ["Back-End", "Security"],
    type: "List",
    number: 55,
    id: "4qglepf"
  },
  {
    question:
      "What status codes are acceptable when a user attempts to create a resource that already exists through a REST API?",
    answer:
      "-409 Conflict: Widely-Acceptable. -422 Unprocessable Entity: Acceptable. -400 Bad Request: Acceptable but discouraged",
    tags: ["Back-End", "REST"],
    type: "List",
    number: 56,
    id: "iojtn3e"
  },
  {
    question: "What's the difference between CSS Flexbox and CSS Grid?",
    answer:
      "Flexbox allows item's width and height to change (flex) to fill the available space while CSS grid is a set width and height for all elements and keeps the same scale.",
    tags: ["Front-End", "CSS"],
    type: "Comparison",
    number: 57,
    id: "pu6qt9b"
  },
  {
    question: "What are the SOLID principles?",
    answer:
      "SOLID is an acronym to remember fundamental software engineering principles. S - Single responsibility. O - Open Closed. L - Liskov substitution. I - Interface Segregation. D - Dependency Inversion",
    tags: ["Software Engineering"],
    type: "List",
    number: 58,
    id: "wl5p003"
  },
  {
    question: "What is the single responsibility principle?",
    answer:
      "The principle that every module, class, or function should only have one reason to change. Single responsibility is the S in SOLID software engineering principles.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 59,
    id: "vlhdsl"
  },
  {
    question:
      "What's the difference between two-way data binding and one-way data flow?",
    answer:
      "Two-way data binding means UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa. One-way data flow means the model is the single source of truth such that changes in the UI trigger measures that signal user intent to the model. Only the model has access to change the states app's state.",
    tags: ["Front-End", "JavaScript"],
    type: "Comparison",
    number: 60,
    id: "jvkr0f"
  },
  {
    question:
      "What's the difference between React.js and Angular.JS's approach on data binding?",
    answer:
      "React.js uses a one-way data flow while Angular uses two-way binding.",
    tags: ["Front-End", "JavaScript", "React.js", "JS Libraries"],
    type: "Comparison",
    number: 61,
    id: "aydefca"
  },
  {
    question:
      "What's the difference between monolithic and microservice architectures?",
    answer:
      "Monolithic uses a set of identical servers behind a load balance while microservices relies on decoupling all servers and spreading them across virtual machines on servers.",
    tags: ["Design Patterns", "Back-End"],
    type: "Comparison",
    number: 62,
    id: "92i4liw"
  },
  {
    question:
      "What's the difference between synchronous and asynchronous programming?",
    answer:
      "When trying to grab data in synchronous you would need to wait until all the data has been received but with asynchronous you won't need to wait (block), you will be alerted later when the data has been returned.",
    tags: ["Programming Fundamentals", "JavaScript"],
    type: "Comparison",
    number: 63,
    id: "xsn9zys"
  },
  {
    question: "What is the open/closed principle?",
    answer:
      "Software entities should be open for extension but closed for modification. The base functionality shouldn't change but additional features can be added.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 64,
    id: "fr08j5g"
  },
  {
    question: "What is the Liskov substitution principle?",
    answer:
      "Functions that use pointers to base classes must be able to use objects of derived classes without knowing it.",
    tags: ["Software Engineering", "Programming Fundamentals"],
    type: "Definition",
    number: 65,
    id: "l3aa7or"
  },
  {
    question: "What is the Interface Segregation Principle?",
    answer: "No client should be forced to depend on methods it does not use.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 66,
    id: "id38a"
  },
  {
    question: "What is the dependency inversion principle?",
    answer:
      "High level modules should not depend on low level modules. Both should depend on abstractions. These abstractions should not depend on details the details should depend on abstractions.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 67,
    id: "68tbjwa"
  },
  {
    question: "What is the KISS principle?",
    answer:
      "KISS (Keep it Simple Stupid / Keep it Stupid Simple) is a design principle noted by the US Navy that states systems work best when they are kept simple.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 68,
    id: "2gg7zgj"
  },
  {
    question: "What is the main benefit we receive with React Hooks?",
    answer:
      "React hooks allows us to only write function in JavaScript and removes the need for the class and this keywords.",
    tags: ["Front-End", "JavaScript", "React.js", "JS Libraries"],
    type: "Explanation",
    number: 69,
    id: "5xgvj56"
  },
  {
    question: "What's the difference between Context API and React Redux?",
    answer:
      "The Context API is a feature of React itself, Redux is a predictable state container for JS apps in general. There is greater functionality behind Redux however it is not meant solely for React.",
    tags: ["React.js", "Front-End", "JavaScript", "JS Libraries"],
    type: "Comparison",
    number: 70,
    id: "be08gkk"
  },
  {
    question: "What is behavior driven development?",
    answer:
      "A part of the Agile Software development process that encourages collaboration among developers, QA and non-technical or business participants in a software project.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 71,
    id: "ebvqb8e"
  },
  {
    question: "What are the 6 JavaScript Primary Types?",
    answer: "Number, String, Boolean, Object, Null, and Undefined",
    tags: ["JavaScript"],
    type: "List",
    number: 72,
    id: "qpw4l0b"
  },
  {
    question: "Who is the creator of JavaScript?",
    answer: "Brendan Eich from Netscape built JavaScript in 10 days.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 73,
    id: "etjgjsd"
  },
  {
    question: "What's the difference between ViewState and SessionState?",
    answer:
      "ViewState refers to a specific page in a session. SessionState is specific to user specific data that can be accessed across all pages in a web application.",
    tags: ["Front-End", "Back-End"],
    type: "Comparison",
    number: 74,
    id: "xwd4si9"
  },
  {
    question: "What is the purpose of Void(0) in JavaScript?",
    answer:
      "Void(0) can be used to prevent the page from refreshing because it calls another method instead.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 75,
    id: "3kdsb9p"
  },
  {
    question: "What is a cookie?",
    answer:
      "A cookie is a small test file that gets created when a user visits a website. Cookies are sent to the back-end to be used to keep track of user sessions.",
    tags: ["Front-End", "Back-End"],
    type: "Definition",
    number: 76,
    id: "78k7tjt"
  },
  {
    question:
      "What is the difference between lexical scope and dynamic scope in JavaScript?",
    answer:
      "When we traverse up the lexical scope we are looking at the nesting of brackets {} but when we traverse up dynamic scope we are following the function call's scopes.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 77,
    id: "swl1uaa"
  },
  {
    question: "Why is using innerHTML discouraged?",
    answer:
      "There is no method to append content already defined with innnerHTML. The entire innerHTML content is re-parsed and built into elements, therefore its much slower. innerHTML does not provide validation so if we insert invalid or broken HTML we can break the document.",
    tags: ["JavaScript", "DOM", "HTML"],
    type: "Explanation",
    number: 78,
    id: "hunyfsa"
  },
  {
    question: "What are the 3 types of errors in JavaScript?",
    answer:
      "-Syntax Errors: (Parsing Errors) occur at interpret time. -Runtime Errors: (Exceptions) occur during execution, the syntax could be right but the code might not execute properly. -Logical Errors:  Errors that occur due to improper code, most difficult to debug.",
    tags: ["JavaScript"],
    type: "List",
    number: 79,
    id: "10qgphm"
  },
  {
    question:
      "What's the difference between window.onload and onDocumentReady?",
    answer:
      "The onload function is not run until all the information on the page is loaded. onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of code. ",
    tags: ["DOM"],
    type: "Comparison",
    number: 80,
    id: "lh4ywi9"
  },
  {
    question: "What is JSONP?",
    answer:
      "Also known as JSON with padding is a script tag injection that generates a dynamic script tag used to trick the browser into making a connection with a new domain.",
    tags: ["JavaScript", "Front-End"],
    type: "Definition",
    number: 81,
    id: "ptqbnzf"
  },
  {
    question: "Why was JSONP created?",
    answer:
      "JSONP was used to circumvent the restriction that JavaScript files cannot make calls to domains that are not where that file originates from, (to avoid cross site scripting). Instead, JavaScript code is used to generate script tags with the domain of the server to fetch data from, thus the browser will call to the domain hoping to fetch a JavaScript file. The src file will include a parameter ?callback=variable which will execute JavaScript code that returns JSON and assigns it to that variable.",
    tags: ["JavaScript", "Front-End"],
    type: "Explanation",
    number: 82,
    id: "9aobgwf"
  },
  {
    question: "Why should we no longer use JSONP?",
    answer:
      "JSONP exposes multiple vulnerabilities - it assumes excessive trust, it also further exposes Cross-Site Request Forgery vulnerabilities. There is also no proper way to get failure codes back when you request JSON data form an endpoint.",
    tags: ["JavaScript", "Front-End"],
    type: "Explanation",
    number: 83,
    id: "x86pt4f"
  },
  {
    question:
      "What's the difference between an event-handler and even-listener?",
    answer:
      "A listener is an object that subscribes for events from a source, you can have many listeners subscribing for each type of event. A handler is an object that is responsible for handling certain events where you would only have one handler for each type of event.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 84,
    id: "3secxr"
  },
  {
    question: "What is a Screen Object?",
    answer:
      "The screen object contains information about the user's screen. availHeight, availWidth, colorDept, height, pixelDepth, and width.",
    tags: ["JavaScript", "Front-End"],
    type: "Definition",
    number: 85,
    id: "74ats9b"
  },
  {
    question:
      "What is the difference between the availWidth/height and width/height in the JavaScript Screen Object?",
    answer:
      "The availWidth/height returns the height/width excluding the taskbar.",
    tags: ["JavaScript", "Front-End"],
    type: "Comparison",
    number: 86,
    id: "l14kcv0d"
  },
  {
    question:
      "What's the difference between the escape and unescaped functions?",
    answer:
      'Escapes and unescapes are both used for removing traces of offending characters that could prevent interprelation. For example, when you call unescape("\thi") you will get the tab inserted, but when you call escape("\thi") you will see "\\thi"',
    tags: ["JavaScript"],
    type: "Comparison",
    number: 87,
    id: "drilbwi"
  },
  {
    question:
      "What is the drawback of creating true private methods in JavaScript?",
    answer:
      "True private methods are very memory inefficient as a new copy of the method would be created for each instance.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 88,
    id: "wrrcv2n"
  },
  {
    question:
      "What's the difference between declaring a function at run-time vs. parse-time?",
    answer:
      "Run time var foo = function( ) means that if we call foo( ) before that statement we will receive and error. However if we use parse-time with function foo( ) then calling foo( ) above will not result in an error.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 89,
    id: "1jk19m"
  },
  {
    question: "What is hoisting?",
    answer:
      "Before run-time JavaScript looks for all variable and function declarations and then hoists them ot the top of the function before they are declared.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 90,
    id: "c7mwo7"
  },
  {
    question:
      "What's the difference between an indexed array and an associative array?",
    answer:
      "Indexed arrays are the normal arrays we see in JavaScript where each element is identified by it's index, a number. An associative array (also known as maps) are not forced to use a number as the index.",
    tags: ["Programming Fundamentals", "JavaScript"],
    type: "Comparison",
    number: 91,
    id: "yuzewe"
  },
  {
    question: "What is HTML?",
    answer:
      "HTML stands for Hyper Text Markup Language. It is used to markup webpages through nesting elements.",
    tags: ["HTML", "Front-End"],
    type: "Definition",
    number: 92,
    id: "uzcquf"
  },
  {
    question: "What is an HTML tag?",
    answer:
      "HTML tags are composed of an opening tag, content, and an ending tag. Tags can be nested within other tags.",
    tags: ["HTML", "Front-End"],
    type: "Definition",
    number: 93,
    id: "1nc5l0n"
  },
  {
    question: "Which HTML tags do not require an end tag?",
    answer: "The <img> and <br> tags do not require an end tag.",
    tags: ["HTML", "Front-End"],
    type: "List",
    number: 94,
    id: "pvesa7"
  },
  {
    question: "How many default heading sizes are there in HTML?",
    answer:
      "There are 6 headings ranging from <h1> to <h6>, with <h1> the largest.",
    tags: ["HTML", "Front-End"],
    type: "List",
    number: 95,
    id: "lgs7gei"
  },
  {
    question: "How to create hyperlink in HTML?",
    answer: "https://gist.github.com/masautt/a61f53afbf1cc2a8988ea6a38c47c0d7",
    tags: ["HTML"],
    type: "Code",
    number: 96,
    id: "e37uqws"
  },
  {
    question: "What are the 3 types of lists available with HTML?",
    answer:
      "<ul> : unordered list that displays items with a bullet, <ol> : ordered list that displays items with the number 1. 2. 3., <dl> : definition list displays elements like a dictionary with the definition tabbed over",
    tags: ["HTML", "Front-End"],
    type: "List",
    number: 97,
    id: "neozsrf"
  },
  {
    question: "What is the difference between HTML elements and tags?",
    answer:
      "HTML elements communicate to the browser to render text. When elements are enclosed by the brackets <> they form HTML tags.",
    tags: ["HTML", "Front-End"],
    type: "Comparison",
    number: 98,
    id: "w22kcp"
  },
  {
    question:
      "What's the difference between Semantic Elements and non-semantic Elements?",
    answer:
      "Semantic elements describe the meaning to the user as to what content they contain. Examples of semantic elements are <form> <table> and <article> while non semantic are <div> and <span>. We don't know what is inside these span and div tags where as we know what to expect with semantic elements.",
    tags: ["HTML", "Front-End"],
    type: "Comparison",
    number: 99,
    id: "rwqhyw"
  },
  {
    question: "What is an image map?",
    answer:
      "An image map is an image with clickable areas. You can use the <map> and <area> tags to identify areas in an image that when clicked will navigate to a link.",
    tags: ["HTML", "Front-End"],
    type: "Definition",
    number: 100,
    id: "p74hpso"
  },
  {
    question: "Is it possible to imbed other websites on our webpage?",
    answer:
      "The <iframe> tag is used to load other webpages by setting the src equal to the website.",
    tags: ["HTML", "Front-End"],
    type: "Explanation",
    number: 101,
    id: "ty28g8c"
  },
  {
    question: "Is it possible to change the color of a bullet in an <ul> tag?",
    answer:
      "The color of the bullet is always the color of the first text of the list. In order to change the color of the bullet you must change the color of the text.",
    tags: ["HTML", "Front-End"],
    type: "Explanation",
    number: 102,
    id: "kwojsm"
  },
  {
    question: "How many empty elements are there in HTML?",
    answer:
      "Empty elements do not have any parameters and thus do not render and content. These include the <br> and <hr> tags.",
    tags: ["HTML", "Front-End"],
    type: "List",
    number: 103,
    id: "1jecy8t"
  },
  {
    question: "What are the uses for a span tag?",
    answer:
      "The span tag is used to add color on text, background on text, and highlight on text.",
    tags: ["HTML", "Front-End"],
    type: "Explanation",
    number: 104,
    id: "h9e2tu4"
  },
  {
    question: "What is the purpose behind the iframe tag?",
    answer:
      "The iframe tag is used to display external web pages within your webpage.",
    tags: ["HTML", "Front-End"],
    type: "Definition",
    number: 105,
    id: "x8xct1"
  },
  {
    question:
      "What is the difference between an expression and a statement in JavaScript?",
    answer:
      "An expression is any reference to a variable or value, or a set of variables and values combined with operators. Statements are made up of expressions and are defined as a group of words, numbers, and operators that performs a specific task.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Comparison",
    number: 106,
    id: "nz6uigo"
  },
  {
    question: "What is the difference between compiling and interpreting code?",
    answer:
      "Interpreting code means translating the commands from top to bottom, line by line, every time the program is run whereas compiling code means the translation is done ahead of time.",
    tags: ["JavaScript", "Programming Fundamentals"],
    type: "Comparison",
    number: 107,
    id: "8w2045j"
  },
  {
    question: "What is CSS?",
    answer: "CSS, Cascading Style Sheets is used to style HTML.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 108,
    id: "zuryx7t"
  },
  {
    question: "What are the 3 types of CSS stylings?",
    answer:
      '1. External : Written in separate style sheets (.css files) 2. Internal : Written at the top of HTML files (<style> tags) 3. Inline: Written inside the HTML tag (<p style=""></p>)',
    tags: ["CSS", "Front-End"],
    type: "List",
    number: 109,
    id: "w0md9j"
  },
  {
    question: "What is a CSS selector?",
    answer:
      "Selectors refer to the patterns used to select the elements to style. These include naming the element type, id, class, or * for all elements.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 110,
    id: "0f140i"
  },
  {
    question: "What is Tweening?",
    answer:
      "A key process in all types of animations which involves generating intermediate frames between two images called keyframes. Allowing for the appearance of animation.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 111,
    id: "p8puyrf"
  },
  {
    question: "What is a CSS image sprite?",
    answer:
      "A collection of images put into a single image. A web page with many images can take a long time to load and generates multiple server requests so it saves bandwidth by combining images.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 112,
    id: "q2885b"
  },
  {
    question: "What are CSS counters?",
    answer:
      "Variables maintained by CSS whose values maybe be incremented by CSS rules to track how many times they're used. You can access the value by calling the counter( ) function.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 113,
    id: "q3pygwk"
  },
  {
    question: "How do you round the corners of an element with CSS?",
    answer:
      "Setting the border-radius to a set value of pixels will round the corners.",
    tags: ["CSS", "Front-End"],
    type: "Code",
    number: 114,
    id: "qjmpnhw"
  },
  {
    question: "What is the difference between a Radial and Linear Gradient?",
    answer:
      "A radial gradient differs in that it emanates outward while a linear gradient changes color in a straight line in one direction.",
    tags: ["CSS", "Front-End"],
    type: "Comparison",
    number: 115,
    id: "0im5ofr"
  },
  {
    question: "What is flexbox?",
    answer:
      "Flexbox is a built in CSS layout that is used to align and distribute space among items in a container even when their size is unknown.",
    tags: ["CSS", "Front-End"],
    type: "List",
    number: 116,
    id: "5mn4ena"
  },
  {
    question: "What is the difference between padding and margin?",
    answer:
      "Padding is the space between the contend and the border whereas margin is the space outside the border.",
    tags: ["CSS", "Front-End"],
    type: "Comparison",
    number: 117,
    id: "ej0ew97"
  },
  {
    question: "What is a CSS pseudo class?",
    answer:
      "Pseudo classes are used to define a special state of an element such as hover, active, and visited. These are identified by adding a ( : ) to the end of a selector.",
    tags: ["CSS", "Front-End"],
    type: "Definition",
    number: 118,
    id: "pl8l5t"
  },
  {
    question: "What are the types of positions in CSS?",
    answer: "Static, Relative, Fixed, Absolute, Sticky",
    tags: ["CSS", "Front-End"],
    type: "List",
    number: 119,
    id: "h29l0ss"
  },
  {
    question: "What's the difference between inline and block elements in CSS?",
    answer:
      "Inline is subject to the vertical-align property while block are not.",
    tags: ["CSS", "Front-End"],
    type: "Comparison",
    number: 120,
    id: "pibwqy"
  },
  {
    question: "What's the difference between ID's and classes in CSS?",
    answer: "You can have several classes but only 1 id",
    tags: ["CSS", "Front-End"],
    type: "Comparison",
    number: 121,
    id: "0afiemj"
  },
  {
    question: "What is Software Engineering?",
    answer:
      "The application of engineering to the development of software in a systematic method.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 122,
    id: "z69xlr"
  },
  {
    question: "What are the 7 steps of the Software Development Life Cycle?",
    answer:
      "Identify the Problem, Plan, Design, Build, Test, Deploy, and Maintain.",
    tags: ["Software Engineering"],
    type: "List",
    number: 123,
    id: "4auxcar"
  },
  {
    question: "What's the difference between the Waterfall and Agile Model?",
    answer:
      "Waterfall can be described as rigid where software development is divided into distinct phases whereas Agile separates the project into small sprints that act more like baby steps.",
    tags: ["Software Engineering"],
    type: "Comparison",
    number: 124,
    id: "pl22qf"
  },
  {
    question: "What is the role of a Software Project Manager?",
    answer:
      "Software project managers provide the consistency needed to see the software projects from start to finish. They must have a strong understanding of technical knowledge and leadership.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 125,
    id: "hndiub"
  },
  {
    question: "What is Software Project Scope?",
    answer:
      "The project scope is the part of project planning that involves determining a list of specific project goals, deliverables, tasks, cost, and deadlines.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 126,
    id: "96ym70s"
  },
  {
    question: "What is Software Project Estimation?",
    answer:
      "The process of predicting the most realistic amount of effort (work-hours or money) required to develop or maintain software.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 127,
    id: "g2i0vf"
  },
  {
    question: "What is AB Testing?",
    answer:
      "Essentially an experiment where two or more variants of a page are shown to users at random, and statistical analysis is used to determine which variation performs better for a given goal.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 128,
    id: "mg5vik"
  },
  {
    question: "What is a baseline?",
    answer:
      "A baseline is a reference point in the software development life cycle marked by the completion and formal approval of a set of predefined work products.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 129,
    id: "a2qk2ve"
  },
  {
    question: "What is Software Configuration Management?",
    answer: "The task of tracking and controlling changes in the software.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 130,
    id: "3qzny1"
  },
  {
    question: "What is Change Control?",
    answer:
      "A systematic approach to managing all changes made to product or system. The purpose is to ensure that no unnecessary changes are made, that all changes are documentated, that services are not unnecessarily disrupted and that resources are used efficiently.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 131,
    id: "ba23y8g"
  },
  {
    question: "What is a Software Requirement?",
    answer:
      "Software requirements are a description of features and funtionalities of the target system.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 132,
    id: "2cc5trs"
  },
  {
    question: "What is the Feasibility Study?",
    answer:
      "This refers to the practical extent to which a project can be performed successfully.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 133,
    id: "f43el8"
  },
  {
    question:
      "What's the difference between function and non-functional requirements?",
    answer:
      "A functional requirement describes what a software system should do, while non-functional place constraints on how the system will do so.",
    tags: ["Software Engineering"],
    type: "Comparison",
    number: 134,
    id: "nn69yl3"
  },
  {
    question: "What are Software Metrics?",
    answer:
      "A software metric is a measure of software characteristics which quantifiable or countable such as performance.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 135,
    id: "yyin0k9"
  },
  {
    question: "What is Modularization?",
    answer:
      "A technique to divide a software system into multiple discrete and independent modules which are expected to be capable of carrying out tasks independently.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 136,
    id: "cze3n2"
  },
  {
    question: "What is Cohesion?",
    answer:
      "A measure of the degree to which the elements of the module are functionally related. Good software will have high cohesion.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 137,
    id: "5a4a1y"
  },
  {
    question: "What is Coupling?",
    answer:
      "The measure of the degree of interdependence between modules. Good software will have low coupling.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 138,
    id: "v1hikh8"
  },
  {
    question: "What is DFD Level 0?",
    answer:
      "The Data Flow Diagram at Level 0, also known as the context diagram, shows a data system as a whole and emphasizes the way it interacts with external entities.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 139,
    id: "icj1v4l"
  },
  {
    question:
      "What's the difference between black box testing and white box testing?",
    answer:
      "Black box refers to a method in which the internal structure / design / implementation of the item being tested is not known to the tester whereas whitebox is known to the tester.",
    tags: ["Software Engineering"],
    type: "Comparison",
    number: 140,
    id: "o1nh53e"
  },
  {
    question: "What are the 3 types of Software Maintenance?",
    answer: "Adaptive, Perfective, and Preventive.",
    tags: ["Software Engineering"],
    type: "List",
    number: 141,
    id: "0e8et6s"
  },
  {
    question: "What is a CASE tool?",
    answer:
      "CASE or Computer Aided Software Engineering Tool is a standard term used to indicate any form of automated support for software engineering.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 142,
    id: "uf52gpa"
  },
  {
    question: "What are the 5 things you can decorate in TypeScript?",
    answer:
      "Class Definitions, Properties, Methods, Accessors, and Parameters.",
    tags: ["TypeScript"],
    type: "List",
    number: 143,
    id: "xmzbnwl"
  },
  {
    question: "What is event delegation in JavaScript?",
    answer:
      "When we have several elements we want to listen to, event delegation refers to assigning a handler to a common ancestor instead of a handler on each.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 144,
    id: "e5newlv"
  },
  {
    question: "What is prototypal inheritance in JavaScript?",
    answer:
      "Since a prototype is a working object instance, objects can inherit directly from other objects.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 145,
    id: "icpqd3f"
  },
  {
    question: "What's the difference between forEach and map loops?",
    answer:
      "foreach executes a provided function once for each array element while map will create a new array with the results of calling a provided function on every element.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 146,
    id: "bb33agd"
  },
  {
    question: "What is a JavaScript module?",
    answer:
      "Within a module you can use the export keyword to export functionality of a JavaScript file to other components that either require( ) or import.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 147,
    id: "7eku06"
  },
  {
    question: "What is AJAX?",
    answer:
      "AJAX stands for Asynchronous JavaScript and XML and is a set of web development techniques using client side web technologies to create asynchronous web applications. With AJAX, web apps can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 148,
    id: "v32zapv"
  },
  {
    question: "What is JavaScript templating?",
    answer:
      "JavaScript templating is a fast and efficient technique to render client-side templates with JavaScript using a JSON data source. The template refers to an HTML file with special tags that get variables inserted within them using JavaScript.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 149,
    id: "1fa7dx"
  },
  {
    question:
      "What is the difference between an attribute and property in JavaScript?",
    answer:
      "Essentially, attributes are the keys and properties are the values in JavaScript objects.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 150,
    id: "gmmjlgj"
  },
  {
    question: "Why is extending built in JavaScript objects not a good idea?",
    answer:
      "When we override built in JavaScript objects, we are creating new behaviors of the language that are not recognized. If a programmer tries to walkthrough our code they will have a harder time understanding because they need to learn our specific flavor of JavaScript.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 151,
    id: "4yowwya"
  },
  {
    question: "What is the same origin policy?",
    answer:
      "Critical security mechanism that restricts how a document or script loaded from one origin can interact wtih a resource from another origin.",
    tags: ["Security", "Front-End"],
    type: "Definition",
    number: 152,
    id: "b1d1rhr"
  },
  {
    question: "What is a Ternary Operator?",
    answer:
      "A simplified if else statement that takes 3 arguments, the condition, the code executed if false and the code to be executed if true. condition ? true : false.",
    tags: ["Programming Fundamentals", "JavaScript"],
    type: "Definition",
    number: 153,
    id: "zmwho7"
  },
  {
    question: "Why should we avoid using the global scope?",
    answer:
      "One main reason we avoid creating variables in the global scope is we can have variables that contradict each other by name.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 154,
    id: "13pmbm"
  },
  {
    question: "What is a single page application?",
    answer:
      "A single-page application is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.",
    tags: ["Front-End"],
    type: "Definition",
    number: 155,
    id: "hxzu33b"
  },
  {
    question: "What's the difference between mutable and immutable objects?",
    answer:
      "Immutable objects have no fields that can be changed after the object is created while mutable allow such functionality.",
    tags: ["Programming Fundamentals", "JavaScript"],
    type: "Comparison",
    number: 156,
    id: "muv675d"
  },
  {
    question: "What is the event loop?",
    answer: "The event loop allows languages like JavaScript to use callbacks and promises. It waits for and dispatches events or messages in a program.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 157,
    id: "c8s3phx"
  },
  {
    question: "What is the difference between stack and heap?",
    answer:
      "Stack is LIFO and is used for static memory allocation whereas the heap is FIFO and is used for dynamic memory. The stack will also keep track of which functional call you are on, because it is a stack of functions.",
    tags: ["Programming Fundamentals"],
    type: "Comparison",
    number: 158,
    id: "q932mxm"
  },
  {
    question:
      "How does an arrow function affect the this keyword in JavaScript?",
    answer:
      "Arrow functions do not bind their own this, they lexically bind their context so they refer to the originating context.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 159,
    id: "2zxjzh"
  },
  {
    question: "What is the spread operator in JavaScript?",
    answer:
      "The spread operator or spread syntax allows an iterable such as an array expression or string to be expanded in places where arguments are expected. By using the ( ... ) syntax on an array for example, the array is destructed into their own elements.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 160,
    id: "0dypif"
  },
  {
    question:
      "What is the difference between test( ) and exec( ) in JavaScript?",
    answer:
      "The test method executes a search for a match between a regular expression and a string and returns true or false whereas exec( ) will search for a match and return the result array or null.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 161,
    id: "s77x6ap"
  },
  {
    question: "What is the purpose of the history object?",
    answer:
      "The window.history object contains the browsers history. By calling history.back and history.forward you can traverse the user's history.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 162,
    id: "93gy2j"
  },
  {
    question: "What are the 3 ways to create an object?",
    answer:
      "1. Object Literal 2. Creating an Instance (new) 3. Object Constructor",
    tags: ["JavaScript"],
    type: "List",
    number: 163,
    id: "hb15iid"
  },
  {
    question:
      "Why should you not use the JSON Parse --> JSON Stringify method of deep cloning an object?",
    answer:
      "Using JSON.parse(JSON.stringify(obj)) won't account for undefined and functions. There is not method of saving functions or undefined values in JSON.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 164,
    id: "rg8h0r9"
  },
  {
    question: "What is an Array Literal in JavaScript?",
    answer:
      "A list of expressions which help represent an array element, enclosed in a pair of square brackets []. Used instead of let myArr = new Array(1,2,3).",
    tags: ["JavaScript"],
    type: "Definition",
    number: 165,
    id: "uqsr0e5"
  },
  {
    question: "How do you access nested array elements in JavaScript?",
    answer:
      "If its an array nested in another array [index1][index2] will suffice but if there is an array of objects with a nested array in one of the objects then object[index1].attribute[index2].",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 166,
    id: "3a9p2lm"
  },
  {
    question: "What are the pre-determined falsy values in JavaScript?",
    answer: '1. false 2. 0 3. "" 4. null 5. undefined 6. NaN',
    tags: ["JavaScript"],
    type: "List",
    number: 167,
    id: "mzni5"
  },
  {
    question: "What is the purpose of the console.time( ) function?",
    answer:
      "This starts a timer you can use to track how long an operation takes. You can give the timer a name to determine ",
    tags: ["DOM"],
    type: "Explanation",
    number: 168,
    id: "30mg3o8"
  },
  {
    question: "How do you round numbers in JavaScript?",
    answer:
      "By using Math.round, numbers will be rounded to the nearest integer. Math.floor will round up and Math.ceil will round down.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 169,
    id: "5qpt0yu"
  },
  {
    question: "How do you get the remainder?",
    answer: "The modulus operator returns the division remainder.",
    tags: ["Programming Fundamentals"],
    type: "Explanation",
    number: 170,
    id: "vjcgpef"
  },
  {
    question: "What is the purpose of the isNaN function in JavaScript?",
    answer:
      "isNaN( ) determines whether a value is an illegal number. Returns true if the value is equal to NaN and otherwise false.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 171,
    id: "q3npd"
  },
  {
    question:
      "What is the difference between the Number.isNaN( ) and isNaN( ) function in JavaScript?",
    answer:
      "isNaN checks whether a value is NaN whereas Number.isNaN checks if it is NaN and if its type is Number.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 172,
    id: "277zx1n"
  },
  {
    question: "What is the difference between the prefix and postfix operator?",
    answer:
      "The prefix (--num or ++num) will change the value by 1 and then return it whereas postfix (num-- or num++) will return the value and then change by 1.",
    tags: ["Programming Fundamentals"],
    type: "Comparison",
    number: 173,
    id: "e7yexgf"
  },
  {
    question: "What is the Object Literal in JavaScript?",
    answer:
      "Instead of using the Object.create( ) method, the Object Literals encapsulate data in a scope and assign the key-value pairs inside to an object.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 174,
    id: "1fcixm6"
  },
  {
    question: "What are the 3 types of popup boxes?",
    answer: "1. Alert. 2. Confirm 3. Prompt",
    tags: ["JavaScript", "Front End"],
    type: "List",
    number: 175,
    id: "skcrblb"
  },
  {
    question: "What is String Concatenation?",
    answer: "The operation of joining character strings end-to-end.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 176,
    id: "ryj3919"
  },
  {
    question: "What is the purpose of the trim( ) command?",
    answer: "Removes whitespace from the beginning and end of a string.",
    tags: ["JavaScript"],
    type: "Definition",
    number: 177,
    id: "anc4mfc"
  },
  {
    question: "What is the difference between charAt( ) and indexOf( )?",
    answer:
      "indexOf( ) returns the position of the first occurence of a specified value in a string while charAt( ) returns the character at a specific index in a string.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 178,
    id: "apkwlha"
  },
  {
    question: "What is a CSS property?",
    answer:
      "Inside the declaration block, declarations are made and separated by semicolons. Each declaration includes a CSS property name and the value set for that property.",
    tags: ["CSS"],
    type: "Definition",
    number: 179,
    id: "5knaiwu"
  },
  {
    question:
      "What's the difference between CSS font-style and font-variant properties?",
    answer:
      "font-style is mostly used to specify italic text while font-variant determines whether or not the text should be displayed in small-caps font.",
    tags: ["CSS"],
    type: "Comparison",
    number: 180,
    id: "t518ngu9"
  },
  {
    question:
      "What's the difference between attribute and element selectors in CSS?",
    answer:
      "The attribute selector is used to select an element with some specific attribute like an id or class while element selectors are used to select specific tags like .div or .li .",
    tags: ["CSS"],
    type: "Comparison",
    number: 181,
    id: "qa8mnhn"
  },
  {
    question: "What are child selectors in CSS?",
    answer:
      "Child selectors are used to select child elements within parent elements. When we use the child combinator ( > ) the following style only matches cases where the second selector is found inside the first.",
    tags: ["CSS"],
    type: "Definition",
    number: 182,
    id: "gpgybc"
  },
  {
    question: "What are the operators you can apply to child selectors in CSS?",
    answer: "> + ~",
    tags: ["CSS"],
    type: "List",
    number: 183,
    id: "3dveaxt"
  },
  {
    question: "What is the universal selector in CSS?",
    answer:
      "The universal selector, ( * ) is used to apply a style to all elements of an HTML file.",
    tags: ["CSS"],
    type: "Definition",
    number: 184,
    id: "exo36m"
  },
  {
    question: "What is a <div> element?",
    answer:
      "The div tag is the fundamental element in HTML that is used as a container for other HTML elements.",
    tags: ["HTML"],
    type: "Definition",
    number: 185,
    id: "qen6nq"
  },
  {
    question: "What is a hyperlink?",
    answer:
      "A hyperlink is a hypertext file to another location or file, typically activated by clicking on a highlighted word or image on the screen.",
    tags: ["Front-End", "HTML"],
    type: "Definition",
    number: 186,
    id: "tqham1"
  },
  {
    question: "How to redirect to another webpage in JavaScript?",
    answer: "https://gist.github.com/masautt/e6fc62dc2712f75ca054f582df407720",
    tags: ["JavaScript"],
    type: "Code",
    number: 187,
    id: "h0fs1xb"
  },
  {
    question: "How to check if a string contains a substring in JavaScript?",
    answer: "https://gist.github.com/masautt/d7ce557b65745b22cac71373ae1b723d",
    tags: ["JavaScript"],
    type: "Code",
    number: 188,
    id: "r460xpv"
  },
  {
    question: "How to remove an element from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/76be367edee65ac1b5a87853fcef724e",
    tags: ["JavaScript"],
    type: "Code",
    number: 189,
    id: "otgvjxf"
  },
  {
    question: "How to remove a property from an Object in JavaScript?",
    answer:
      "The delete operator will allow you to remove an property from an object.",
    tags: ["JavaScript"],
    type: "Code",
    number: 190,
    id: "u0g7hrb"
  },
  {
    question: "How to deep clone and object in JavaScript?",
    answer:
      "If the object does not have any functions a simple conversion to JSON and back will deep clone --> JSON.parse(JSON.stringify(objectToClone)). But if there are functions in the object or the object is a function, you should look at external libraries such as underscore or lodash.",
    tags: ["JavaScript"],
    type: "Code",
    number: 191,
    id: "l40vui"
  },
  {
    question:
      "What are the 3 ways you can return responses from asynchronous calls in JavaScript?",
    answer: "Async Await, Callbacks, Promises",
    tags: ["JavaScript"],
    type: "List",
    number: 192,
    id: "eyv6az"
  },
  {
    question: "How can I include a JavaScript file in another JavaScript file?",
    answer: "https://gist.github.com/masautt/a852fda69525b9671ba6a86df9a822cb",
    tags: ["JavaScript"],
    type: "Code",
    number: 193,
    id: "ncrmxrg"
  },
  {
    question: "How to check whether a box is checked using JavaScript?",
    answer: "https://gist.github.com/masautt/288b7f172092d2196e8c58f8ee9f1ce3",
    tags: ["JavaScript", "DOM"],
    type: "Code",
    number: 194,
    id: "ccv7qtn"
  },
  {
    question: "How to validate an email address in JavaScript?",
    answer: "https://gist.github.com/masautt/622e9742ec56f77e33124257ddce19c6",
    tags: ["JavaScript", "Regular Expressions"],
    type: "Code",
    number: 195,
    id: "qvbghki"
  },
  {
    question: "What does it mean to use a # in the href?",
    answer:
      'A hash within a hyperlink specifies an html element id to which the window should be scrolled. So if the link has #some-id then the webpage knows to scroll to the element with the id="some-id".',
    tags: ["HTML"],
    type: "Explanation",
    number: 196,
    id: "uqtpw7f"
  },
  {
    question:
      "What is the difference between using # and Javascript.void(0) for an href value?",
    answer:
      "The purpose of using JavaScript.void(0) is to get the primitive value undefined to be used instead of a string. When we put the hashtag as a value, if the link is clicked, the page will still scroll to that link.",
    tags: ["JavaScript"],
    type: "Comparison",
    number: 197,
    id: "8ld9vff"
  },
  {
    question: "How to generate a GUID / UUID in JavaScript?",
    answer: "https://gist.github.com/masautt/610242ad7a4f08972a6c05994580566a",
    tags: ["JavaScript"],
    type: "Code",
    number: 198,
    id: "irpqnt"
  },
  {
    question: "How do you get a timestamp in JavaScript?",
    answer: "https://gist.github.com/masautt/c95a8d98fadc2878a3fdcbdfb2c99e30",
    tags: ["JavaScript"],
    type: "Code",
    number: 199,
    id: "q72rjvf"
  },
  {
    question: "What is the primary reason for third-party cookies?",
    answer:
      "Third-party cookies are used primarily in ad targeting. They are used to gather the information on user behavior such as visited websites, time spent, clicks, geographical location, etc",
    tags: ["Front-End"],
    type: "Explanation",
    number: 200,
    id: "z6cxsox"
  },
  {
    question: "How to capitalize first letter of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/963203e3217f1e57d08ec36911a9b2ac",
    tags: ["JavaScript"],
    type: "Code",
    number: 201,
    id: "isy74qv"
  },
  {
    question: "How to append to array in JavaScript?",
    answer: "https://gist.github.com/masautt/0d1918dcaa0378fcdfcc724ef8facaab",
    tags: ["JavaScript"],
    type: "Code",
    number: 202,
    id: "kr0ns2b"
  },
  {
    question:
      "How to prevent submit button from refreshing page when clicked using JavaScript?",
    answer: "https://gist.github.com/masautt/c371f6ad001e3cd5111019ac897c1f0f",
    tags: ["JavaScript"],
    type: "Code",
    number: 203,
    id: "js40uib"
  },
  {
    question: "What is the purpose of using the (!!) NOT NOT operator?",
    answer:
      "The !! or NOT NOT operator is used to convert any value to a boolean. A single NOT operator ( ! ) will convert the value to a boolean and then get the opposite, whereas 2 will just get the value as a boolean.",
    tags: ["JavaScript"],
    type: "Explanation",
    number: 204,
    id: "8q6thep"
  },
  {
    question: "How to check if key exists in Object in JavaScript?",
    answer: "https://gist.github.com/masautt/bf0c8a23589342ccfb0c483c4eaf1580",
    tags: ["JavaScript"],
    type: "Code",
    number: 205,
    id: "jwdkwj8"
  },
  {
    question: "How to loop through Object in JavaScript?",
    answer: "https://gist.github.com/masautt/66c498235ec24227eb2b63ded69f288c",
    tags: ["JavaScript"],
    type: "Code",
    number: 206,
    id: "atlqkai"
  },
  {
    question: "How to change element's class using JavaScript?",
    answer: "https://gist.github.com/masautt/c3f5db7e027591343eef39046a4215cf",
    tags: ["JavaScript", "HTML", "CSS"],
    type: "Code",
    number: 207,
    id: "9awohc2"
  },
  {
    question: "How to check for empty Object in JavaScript?",
    answer: "https://gist.github.com/masautt/8733ba56b12bfa45d8dc45fe5a9dd712",
    tags: ["JavaScript"],
    type: "Code",
    number: 208,
    id: "10n1myo"
  },
  {
    question: "How to sort array in JavaScript?",
    answer: "https://gist.github.com/masautt/fe73908d0ccdde9a3e6df98ea884f108",
    tags: ["JavaScript"],
    type: "Code",
    number: 209,
    id: "hieewlp"
  },
  {
    question: "How to sort array of objects by value in JavaScript?",
    answer: "https://gist.github.com/masautt/17931ce2f5efee67ab58f8a8331e9c49",
    tags: ["JavaScript"],
    type: "Code",
    number: 210,
    id: "wioawyg"
  },
  {
    question: "Why are global and static objects not recommended?",
    answer:
      "Global variables have no access control. They can be modified by any part of the program.",
    tags: ["Programming Fundamentals"],
    type: "Explanation",
    number: 211,
    id: "rjbi72p"
  },
  {
    question: "What is Inversion of Control?",
    answer:
      "This refers to the idea of removing dependencies from your code. Components should be able to operate on their own.",
    tags: ["Design Patterns", "Object Oriented Programming"],
    type: "Explanation",
    number: 212,
    id: "pkpevzg"
  },
  {
    question: "What is the Law of Demeter?",
    answer:
      "Also known as the Principle of Least Knowledge, each unit should have only a limited knowledge about other units. These units they know little about should be related and not foreign.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 213,
    id: "629ynud"
  },
  {
    question: "What is the Principle of Least Knowledge?",
    answer:
      "Also known as the Law of Demeter, each unit should have only a limited knowledge about other units. These units they know little about should be related and not foreign.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 214,
    id: "stfkz6"
  },
  {
    question: "What is the Active Record pattern?",
    answer:
      "A technique where software stores in-memory object data in relational databases. Thus an object instance is tied to a single row in the table. Every time the object is updated, a new row is added with details about the object.",
    tags: ["Design Patterns", "Databases"],
    type: "Definition",
    number: 215,
    id: "t7ol12f"
  },
  {
    question: "What is the Data Mapper pattern?",
    answer:
      "The interface of an object conforming to this pattern shold include functions such as Create, Read, Update, and Delete, that operate on objects in a data store. Specifically, this refers to the bidirectional transfer of data between a persistent data store and an in-memory data representation.",
    tags: ["Design Patterns", "Databases"],
    type: "Definition",
    number: 216,
    id: "9zjg24"
  },
  {
    question: "What is the Anti Corruption Layer pattern?",
    answer:
      "A layer placed between systems that translates communications, allowing one system to remain unchanged while the other can avoid compromising its design and technological approach.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 217,
    id: "m5rd8"
  },
  {
    question: "What is the Singleton pattern?",
    answer:
      "Pattern that restricts the instantiation of a class to one single instance. This is useful when exactly one object is needed to coordinate actions across the system.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 218,
    id: "lv50qyj"
  },
  {
    question: "What is Data Abstraction",
    answer:
      "The first step in database design, this allows for the developer to start from essential elements -- data abstractions -- and incrementally add data detail to create the final system.",
    tags: ["Databases", "Design Patterns"],
    type: "Definition",
    number: 219,
    id: "x9opl2f"
  },
  {
    question: "What is the DRY Principle?",
    answer:
      "The Don't Repeat Yourself Principle refers to reducing repitition of information. Whether its assigning repeating values to a variable or factoring out repeated operations into separate funtions.",
    tags: ["Design Patterns", "Software Engineering"],
    type: "Definition",
    number: 220,
    id: "uflbl7a"
  },
  {
    question:
      "Why do some consider the goto statement harmful in higher level programming languages?",
    answer:
      "Goto statements have unconstrained use of memory addresses which provides too many opportunities to make easily avoidable mistakes. The more ways to arrive at a particular location in the code, the less confident one can be about what the state of the system is at that point.",
    tags: ["Programming Fundamentals", "Design Patterns"],
    type: "Explanation",
    number: 221,
    id: "8k82eig"
  },
  {
    question: "What is the robustness principle?",
    answer: "Be conservative in what you send be liberal in what you accept.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 222,
    id: "8b2gso"
  },
  {
    question: "What is the separation of concerns principle?",
    answer:
      "The process of separating a program into destinct sections, so that each addresses a separate concern.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 223,
    id: "0htvje"
  },
  {
    question: "Why do we need high cohesion and loose coupling?",
    answer:
      "We need high cohesion to have all our related code be as close to each other as possible, however we need to minimize which related code depends on each other. This allows us to better maintain our code.",
    tags: ["Design Patterns"],
    type: "Explanation",
    number: 224,
    id: "2brm8fg"
  },
  {
    question: "What's the difference between cohesion and coupling",
    answer:
      "Cohesion refers to the degree to which elements of a module/class belong together whereas coupling refers to the degree to which the different modules/classes depend on each other.",
    tags: ["Design Patterns"],
    type: "Comparison",
    number: 225,
    id: "sj2650p"
  },
  {
    question: "What is code refactoring",
    answer:
      "Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure. It is a disciplined way to clean up code that minimizes the chances of introducing bugs.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 226,
    id: "3155i1d"
  },
  {
    question:
      "What's the difference between first-party and third-party cookies?",
    answer:
      "First-party cookies are the general definition we give to cookies, they originate from the primary domain visited by the user. Third-party cookies don't originate from the primary domain, they are the result from the services publisher takes to make their sites work better (social buttons or chat services).",
    tags: ["Front-End", "Back-End"],
    type: "Comparison",
    number: 227,
    id: "2tu82q"
  },
  {
    question: "What is stateless?",
    answer:
      "Stateless means there is no record of previous interactions and each interaction request has to be handled based entirely on information that comes with it.",
    tags: ["Design Patterns"],
    type: "Definition",
    number: 228,
    id: "j9iazb"
  },
  {
    question: "What is eventual consistency?",
    answer:
      "A model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last udpdated value.",
    tags: ["Databases", "Back-End"],
    type: "Definition",
    number: 229,
    id: "ho9veyj"
  },
  {
    question: "What is the CAP theorem?",
    answer:
      "A concept of distributed database systems that states we can only have 2 of the 3: Consistency, Availability, and Partition Tolerance.",
    tags: ["Databases", "Back-End"],
    type: "Definition",
    number: 230,
    id: "qrwi1oa"
  },
  {
    question: "What's the difference between SQL and NoSQL?",
    answer:
      "SQL is a type of relational database while NoSQL is a distributed database system. SQL is said to be vertically scalable while NoSQL is horizontally scalable. SQL has a predefined Schema whereas NoSQL has a dynamic schema.",
    tags: ["Databases"],
    type: "Comparison",
    number: 231,
    id: "1nygprp"
  },
  {
    question: "What is Kubernetes?",
    answer:
      "Kubernetes is an open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation.",
    tags: ["Back-End"],
    type: "Definition",
    number: 232,
    id: "q1muolx"
  },
  {
    question: "Why are virtual machines important to back-end?",
    answer: "Virtual machines allow several instances of an operating system to be run at once. This means we can reduce the number of physical servers used by migrating applications and operating systems into virtual machines running on a single server.",
    tags: ["Back-End"],
    type: "Explanation",
    number: 233,
    id: "1ssdyt"
  },
  {
    question: "What is Linux?",
    answer:
      "Linux is the most used open source operating system which was created by Linus Torvalds.",
    tags: ["Back-End"],
    type: "Definition",
    number: 234,
    id: "p37q47j"
  },
  {
    question: "Why are most servers built with Linux than Windows?",
    answer:
      "Linux is free and open source so you can look at the code to check for bugs. Since more developers are able to look at the source code and squash bugs, Linux is more secure. The Linux Kernel is very flexible and can be tuned to meet server needs across pretty much any device.",
    tags: ["Linux", "Operating Systems"],
    type: "Explanation",
    number: 235,
    id: "lgr33qb"
  },
  {
    question: "What's the difference between Linux and Windows?",
    answer:
      "Linux is an open sourced operating system while Windows was built and owned by Microsoft. Windows is an all encompassing term that refers to the Operating System and Graphical interface, Linux does not have an official GUI, it allows users to choose.",
    tags: ["Linux", "Operating Systems"],
    type: "Explanation",
    number: 236,
    id: "3q48k4v"
  },
  {
    question: "What is Agile?",
    answer:
      "A time boxed, interactive approach to software delivery that builds software incrementally from the start, instead of delivering all at once.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 237,
    id: "0hffi2"
  },
  {
    question: "What is a Sprint?",
    answer:
      "A set period of time during which specific work has to be completed and made ready for review. Each sprint begins with a planning meeting and then each workday, the team has stand-up meetings to discuss progress and brainstorm solutions to challenges.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 238,
    id: "26k5ne"
  },
  {
    question: "What is an API?",
    answer:
      "An Application Programming Interface is a list of operations that developers can use along with a description of what they do.",
    tags: ["APIs", "Back-End"],
    type: "Definition",
    number: 239,
    id: "r0jowmd"
  },
  {
    question: "What is REST?",
    answer:
      "The REpresentational State Transfer is a style for providing standards between computer systems on the web, making it easier to communicate with each other. ",
    tags: ["REST", "Design Patterns"],
    type: "Definition",
    number: 240,
    id: "6pehq9o"
  },
  {
    question: "What are the 5 REST Methods?",
    answer: "DELETE, GET, POST, PUT, PATCH",
    tags: ["REST", "Design Patterns"],
    type: "Definition",
    number: 241,
    id: "ojww2ff"
  },
  {
    question: "What is JQuery?",
    answer:
      "JQuery is a small component library that allows for easier HTML document traversal and manipulation as well as a much simpler API for AJAX requests.",
    tags: ["JavaScript", "Front-End", "JS Libraries"],
    type: "Definition",
    number: 242,
    id: "uorwuur"
  },
  {
    question: "What is CoffeeScript?",
    answer:
      "CoffeeScript is a programming language that compiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in efort to enhance JavaScript's brevity and readability. ",
    tags: ["JavaScript", "JS Libraries"],
    type: "Definition",
    number: 243,
    id: "ljdn42"
  },
  {
    question: "What's the difference between JQuery and CoffeeScript?",
    answer:
      "CoffeeScript is it's own programming language, it compiles down to JavaScript. JQuery is a library you import into JavaScript files to make use of their methods.",
    tags: ["JavaScript", "JS Libraries"],
    type: "Explanation",
    number: 244,
    id: "cjax144"
  },
  {
    question: "Why is JQuery no longer popular?",
    answer:
      "One of the main reasons for jQuery was it's ability to parse the DOM with functions that worked across all browsers. Today, JavaScript's dom traversal is not only supported by most browsers, but it's faster than jQuery.s",
    tags: ["JavaScript", "JS Libraries"],
    type: "Explanation",
    number: 245,
    id: "ao7slwl"
  },
  {
    question: "What is a bug?",
    answer:
      "An error, flaw, failure or fault in a computer program or system that causes it to produce an incorrect or unexpected result.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 246,
    id: "0kovdkf"
  },
  {
    question: "What is debugging?",
    answer:
      "The process of locating and correcting code errors in a computer program.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 247,
    id: "43f5llk"
  },
  {
    question: "What is code?",
    answer:
      "Code is a language understood by the computer. Programmers can use code to build software.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 248,
    id: "rtt06o"
  },
  {
    question: "What is a Data Structure?",
    answer:
      "A Data Structure is a particular way of organizing data in a computer so that it can be used effectively.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 249,
    id: "9dmt7uk"
  },
  {
    question: "What is deployment?",
    answer:
      "Deployment refers to preparing a software application to run and operate in a specific environment.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 250,
    id: "islr4q"
  },
  {
    question: "What is documentation?",
    answer:
      "The umbrella term that encompasses all written documents and materials dealing with a software product's development and use.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 251,
    id: "54n8r5"
  },
  {
    question: "What is a domain name?",
    answer:
      "A domain name is a string of characters given to a IP address for easier lookups.",
    tags: ["Networking"],
    type: "Definition",
    number: 252,
    id: "9dvpxk"
  },
  {
    question: "What is a framework?",
    answer:
      "A framework is something that gives programmers most of the basic building blocks they need to make an application.",
    tags: ["JS Libraries"],
    type: "Definition",
    number: 253,
    id: "tnc2dxj"
  },
  {
    question: "What is the front-end?",
    answer:
      "The front-end refers to anything involved with what the client sees, including design. For web development, front-end languages include HTML, CSS, and JavaScript.",
    tags: ["Front-End"],
    type: "Definition",
    number: 254,
    id: "07fox7s"
  },
  {
    question: "What is the back-end?",
    answer:
      "The front-end refers to anything involved with how the server operates. The back-end is not limited to the select few frontend languages.",
    tags: ["Back-End"],
    type: "Definition",
    number: 255,
    id: "b2mkpu5"
  },
  {
    question: "What is full-stack?",
    answer:
      "Full-stack refers to the combination of the front-end and back-end. What the client sees, and what is run on the server.",
    tags: ["Front-End", "Back-End"],
    type: "Definition",
    number: 256,
    id: "n22ljc3"
  },
  {
    question: "What is Git?",
    answer:
      "Git is the most widely used distributed version control system. It allows developers to clone code from repositories, edit, and push back into their code with pull-requests.",
    tags: ["Git"],
    type: "Definition",
    number: 257,
    id: "dhrzz7h"
  },
  {
    question: "What is Github?",
    answer: "Github is like the google drive of git repositories. Users can create a github account and have their code be backed up as a private or public repo on the Github servers.",
    tags: ["Git"],
    type: "Definition",
    number: 258,
    id: "6q7be0q"
  },
  {
    question: "How to find longest substring without repeating characters in JavaScript?",
    answer: "https://gist.github.com/masautt/8cb604746c7dff090d0654759d1e19a7",
    tags: ["JavaScript"],
    type: "Code",
    number: 259,
    id: "7bbszl"
  },
  {
    question: "How to convert a string to a number in JavaScript?",
    answer: "https://gist.github.com/masautt/715c78034f26aa6605ceaad32276b750",
    tags: ["JavaScript"],
    type: "Code",
    number: 260,
    id: "olq9ps"
  },
  {
    question: "How to convert a number to a string in JavaScript?",
    answer: "https://gist.github.com/masautt/7e7a7645923bd673bca1ffe95393deb9",
    tags: ["JavaScript"],
    type: "Code",
    number: 261,
    id: "a3mjlio"
  },
  {
    question: "How to remove vowels from string in JavaScript?",
    answer: "https://gist.github.com/masautt/239d93bfab41d9f37ef33017a8fec460",
    tags: ["JavaScript"],
    type: "Code",
    number: 262,
    id: "19k7g5"
  },
  {
    question: "How to reverse an array in JavaScript?",
    answer: "https://gist.github.com/masautt/36116cd6712763d2208cdd7160820c88",
    tags: ["JavaScript"],
    type: "Code",
    number: 263,
    id: "h74jep"
  },
  {
    question: "How to reverse a string in JavaScript?",
    answer: "https://gist.github.com/masautt/bc26c58dfc81a60c39ba731943b66a13",
    tags: ["JavaScript"],
    type: "Code",
    number: 264,
    id: "u7t2s1q"
  },
  {
    question: "How to check if a string is all uppercase in JavaScript?",
    answer: "https://gist.github.com/masautt/bb551be4a59ef8080534cc91ca4785b8",
    tags: ["JavaScript"],
    type: "Code",
    number: 265,
    id: "4eqrzp8"
  },
  {
    question: "How to check if a string is all lowercase in JavaScript?",
    answer: "https://gist.github.com/masautt/c7146f1f5daad173418ef871bc5343e8",
    tags: ["JavaScript"],
    type: "Code",
    number: 266,
    id: "trhvy6"
  },
  {
    question: "How to find most reoccuring character in JavaScript?",
    answer: "https://gist.github.com/masautt/2e8d8d84fd8761889ed0fc9399b4d219",
    tags: ["JavaScript"],
    type: "Code",
    number: 267,
    id: "2fmdui8"
  },
  {
    question: "How to get all permutations of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/3033aea4a933ae26a3971263e71fc6dd",
    tags: ["JavaScript"],
    type: "Code",
    number: 268,
    id: "nq1zehe"
  },
  {
    question: "How to reverse a sentence in JavaScript?",
    answer: "https://gist.github.com/masautt/488736f2ec7d4cc2d68e258da54be37a",
    tags: ["JavaScript"],
    type: "Code",
    number: 270,
    id: "pdeg7lj"
  },
  {
    question: "How to find first non-repeating character in JavaScript?",
    answer: "https://gist.github.com/masautt/7778c80230db544d0a8e0877b919c6ae",
    tags: ["JavaScript"],
    type: "Code",
    number: 271,
    id: "g3y4as9"
  },
  {
    question: "How to check if string is palindrome in JavaScript?",
    answer: "https://gist.github.com/masautt/1c9732ad1ff32327d7b6cc7439d1a9af",
    tags: ["JavaScript"],
    type: "Code",
    number: 272,
    id: "j99xx3o"
  },
  {
    question: "What is responsive design",
    answer: "Responsive design refers to the accessibility of a website. If the site can change it's size and scale to meet other resolutions then it is said to be responsive.",
    tags: ["Front-End"],
    type: "Definition",
    number: 273,
    id: "i2x0f9"
  },
  {
    question: "What is Big O Efficiency / Big O Notation?",
    answer: "This refers to the performance or complexity of an algorithm. The Big O refers to the worse case scenario when running a piece of code and can be used to describe the execution time required or the spaced used.",
    tags: ["Algorithms", "Programming Fundamentals"],
    type: "Definition",
    number: 274,
    id: "dg97u4"
  },
  {
    question: "What is the best runtime for Big O?",
    answer: "O(1) is the best runtime for Big O and it essentially means at an instant.",
    tags: ["Algorithms"],
    type: "Explanation",
    number: 275,
    id: "2391eqr"
  },
  {
    question: "What is the worst runtime for Big O?",
    answer: "Besides an infinite amount, O(n!) (O of n factorial) is the worst possible runtime. Ex, if n is 5 then the outcome will be 120.",
    tags: ["Algorithms"],
    type: "Explanation",
    number: 276,
    id: "ziecsv8"
  },
  {
    question: "What is a hash table?",
    answer: "A data structure that operates like a dictionary. You insert keys into the table and it spits back an associated value. Also known as a key-value storage.",
    tags: ["Data Structures"],
    type: "Definition",
    number: 277,
    id: "05hyulk"
  },
  {
    question: "What is a software stack?",
    answer: "A collection of independent components that work together to support the execution of an application. For fullstack development, stacks usually refer to the frameworks for handling the database, front-end, and back-end.",
    tags: ["Back-End", "Front-End"],
    type: "Definition",
    number: 278,
    id: "clmv0xn"
  },
  {
    question:
      "What's the difference between a Single Linked List and a Double Linked List?",
    answer: "SSL only has a data field and a next field whereas DLL has a data, next, and prev fields. This means a DLL can traverse backwards and forwards which brings down the complexity of insertion and deletion ot O(1) from O(n).",
    tags: ["Data Structures"],
    type: "Comparison",
    number: 279,
    id: "wjmzlea"
  },
  {
    question: "Why are hash tables important in algorithms?",
    answer: "Hash tables have O(1) lookup which means when we try to get the value of a key it happens at an instant. We can use hash tables to store important information about an array or list without having to traverse them again.",
    tags: ["Algorithms", "Data Structures"],
    type: "Explanation",
    number: 280,
    id: "vh5ikj2"
  },
  {
    question: "What's the difference between UX and UI Design?",
    answer: "UI or User Interface refers to how the application looks whereas UX or User Experience deals with how the user interacts with the user interface.",
    tags: ["Front-End"],
    type: "Comparison",
    number: 281,
    id: "7bl2ums"
  },
  {
    question: "What's the difference between a mobile app and a web app?",
    answer: "Mobile apps are built using programming languages for building Android or iOS apps whereas web apps are built using HTML, CSS, and JavaScript but are responsive enough to work well on mobile.",
    tags: ["Front-End", "Back-End"],
    type: "Comparison",
    number: 282,
    id: "vkx3jr0r"
  },
  {
    question: "How to check if string has only digits in JavaScript?",
    answer: "https://gist.github.com/masautt/9748d1234ef146ae12901a68b4a55c33",
    tags: ["JavaScript"],
    type: "Code",
    number: 283,
    id: "c3bt8ij"
  },
  {
    question: "How to get number of vowels and consonants in JavaScript?",
    answer: "https://gist.github.com/masautt/1109907cf23eaae3d9e981f190ff938d",
    tags: ["JavaScript"],
    type: "Code",
    number: 284,
    id: "j6epsxe"
  },
  {
    question: "How to count number of occurrences of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/65167ff69e94f2fc01b3a49b1d7ec846",
    tags: ["JavaScript"],
    type: "Code",
    number: 285,
    id: "daldhei"
  },
  {
    question: "How to find longest palindrome of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/6fcd34d2806a727aacbf6395d034eefa",
    tags: ["JavaScript"],
    type: "Code",
    number: 286,
    id: "bvl9h3f"
  },
  {
    question:
      "How to remove duplicates from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/4ce6ca53bce681831d7fcba66c96d304",
    tags: ["JavaScript"],
    type: "Code",
    number: 287,
    id: "uwq5qpf"
  },
  {
    question: "How to check if array contains a value in JavaScript?",
    answer: "https://gist.github.com/masautt/76ac3c8e7e12ca605c843467765041dd",
    tags: ["JavaScript"],
    type: "Code",
    number: 288,
    id: "luglhko"
  },
  {
    question: "How to check if all elements in an array are unique in JavaScript?",
    answer: "https://gist.github.com/masautt/f1deaa07515d9cdfc1a306c8f99d1e21",
    tags: ["JavaScript"],
    type: "Code",
    number: 289,
    id: "i9hzdt"
  },
  {
    question: "How to find the largest value of an array in JavaScript?",
    answer: "https://gist.github.com/masautt/c666b85dc77ba2b0d913162a5e55548a",
    tags: ["JavaScript"],
    type: "Code",
    number: 290,
    id: "8osyb4f"
  },
  {
    question: "How to find the smallest value of an array in JavaScript?",
    answer: "https://gist.github.com/masautt/e083d73429887f53fa384b726d82deea",
    tags: ["JavaScript"],
    type: "Code",
    number: 291,
    id: "v5jvz0e"
  },
  {
    question: "How to find the intersection of 2 arrays in JavaScript?",
    answer: "https://gist.github.com/masautt/c64cebd8b3d4503d6a65cf2dce6370a3",
    tags: ["JavaScript"],
    type: "Code",
    number: 292,
    id: "tb57y5j"
  },
  {
    question: "How to check if 2 strings are anagrams in JavaScript?",
    answer: "https://gist.github.com/masautt/2ec67e0cd0c580a6336034a99f46ed6a",
    tags: ["JavaScript"],
    type: "Code",
    number: 293,
    id: "etqai3t"
  },
  {
    question: "How to remove all odd numbers from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/9f149ed3ec221795efd0d6ae97854568",
    tags: ["JavaScript"],
    type: "Code",
    number: 294,
    id: "86526vu"
  },
  {
    question: "How to remove all even numbers from an array in JavaScript?",
    answer: "https://gist.github.com/masautt/7c7766dc75bfd420df4d53c58133b866",
    tags: ["JavaScript"],
    type: "Code",
    number: 295,
    id: "6x0juy"
  },
  {
    question: "How to find the first duplicate element of an array in JavaScript?",
    answer: "https://gist.github.com/masautt/df672d72e0fa70e596c5a916944459aa",
    tags: ["JavaScript"],
    type: "Code",
    number: 296,
    id: "q2b43jv"
  },
  {
    question: "How to remove the first element from an array?",
    answer: "https://gist.github.com/masautt/9caca1bb263eac04e77907a0c4e92a63",
    tags: ["JavaScript"],
    type: "Code",
    number: 297,
    id: "4kl7b58"
  },
  {
    question: "How to remove the last element from an array?",
    answer: "https://gist.github.com/masautt/298a6fefb1d8bbec65698db879e4c765",
    tags: ["JavaScript"],
    type: "Code",
    number: 298,
    id: "mo1dpw"
  },
  {
    question: "How to shuffle an array in JavaScript?",
    answer: "https://gist.github.com/masautt/5e4b063c06153d6c82a02543aa89f541",
    tags: ["JavaScript"],
    type: "Code",
    number: 299,
    id: "pkjkh4p"
  },
  {
    question: "What are the 3 steps of compilation?",
    answer:
      "1. Tokenizing / Lexing: breaking up a string of characters into meaningful chunks, called tokens. 2. Parsing: taking an array of tokens and turning it into a tree of nested elements called the Abstract Syntax Tree. 3. Code-Generation: Taking the AST and turning it into executable code.",
    tags: ["JavaScript"],
    type: "List",
    number: 300,
    id: "hfv4gir"
  },
  {
    question: "What are the 2 ways to cheat lexical scope in JavaScript?",
    answer:
      '1. eval ( ) : passing in a string like "var a = 3" will modify the lexical scope of where the eval statement is at runtime. 2. with ( ) : this statement takes an object, which has zero or more properties and threats that object as if it is a wholly separate lexical scope, and thus the object\'s properties are treated as lexically defined in that scope.',
    tags: ["JavaScript"],
    type: "List",
    number: 301,
    id: "1kxmhgp"
  },
  {
    question:
      "What are the 3 drawbacks with anonymous functions in JavaScript?",
    answer:
      '1. They have no useful name to display in stack traces, which can make debugging difficult. 2. Without a name, the function needs to refer to itself for recursion which requires the deprecated "arguments.callee" reference. 3. Without a name it is difficult to determine the purpose of the function.',
    tags: ["JavaScript"],
    type: "List",
    number: 302,
    id: "az6wgql"
  },
  {
    question: "What are the 9 Built-in Objects in JavaScript?",
    answer:
      "String, Number, Boolean, Object, Function, Array, Date, RegExp, Error",
    tags: ["JavaScript"],
    type: "List",
    number: 303,
    id: "dxmugsh"
  },
  {
    question: "What's the difference between a variable and a value?",
    answer:
      "A variable is a holder for a representation of a value. Consider {let a = 4}, a is the variable and 4 is the value.",
    tags: ["Programming Fundamentals"],
    type: "Comparison",
    number: 304,
    id: "o1m8bh8"
  },
  {
    question: "What is a loop?",
    answer:
      "A loop is a sequence of instructions that is continually repeated until a certain condition is reached.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 305,
    id: "1fn4aw5"
  },
  {
    question: "What's the difference between troubleshooting and debugging?",
    answer:
      "Troubleshooting is solving a problem while debugging refers to the process or steps to solve that problem.",
    tags: ["Programming Fundamentals"],
    type: "Comparison",
    number: 306,
    id: "es2fym3s"
  },
  {
    question: "What is a data structure?",
    answer:
      "A data structure is a particular way of organizing data in a computer so that it can be used effectively. Arrays, Linked Lists, Stacks...",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 307,
    id: "6bdumv6"
  },
  {
    question: "What is a function?",
    answer:
      "A function is a named section of a program that performs a specific task. This task can be jumped to by calling the name of that section.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 308,
    id: "uxyt91a"
  },
  {
    question: "What is recursion?",
    answer:
      "Recursion refers to the process of a function calling itself directly or indirectly.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 309,
    id: "gg14f8e"
  },
  {
    question: "How to randomly generate alpha-numeric id in JavaScript?",
    answer: "https://gist.github.com/masautt/9057137469aa1519a3c9c668a28bfed5",
    tags: ["JavaScript"],
    type: "Code",
    number: 310,
    id: "y80wde7"
  },
  {
    question: "What is Software localization?",
    answer:
      "This refers to the altering of the front-end of software to fit the needs of the location it is being deploy. For example, amazon.uk's frontpage will look different than amazon.com's.",
    tags: ["Software Engineering"],
    type: "Definition",
    number: 311,
    id: "jexkah"
  },
  {
    question: "What is scope?",
    answer:
      "Scope refers to the visibility of variables. Variables that are out of scope are not recognized. Only variables in scope can be accessed.",
    tags: ["Programming Fundamentals"],
    type: "Definition",
    number: 312,
    id: "e1bejw9"
  },
  {
    question: "How to replace all occurrences of a string in JavaScript?",
    answer: "https://gist.github.com/masautt/c27efdded65c976f7dc19cef9c6a8e2c",
    tags: ["JavaScript"],
    type: "Code",
    number: 313,
    id: "n679h6"
  },
];
