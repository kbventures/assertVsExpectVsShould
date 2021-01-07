# assertVsExpectVsShould

The expect interface provides a function as a starting point for chaining your language assertions. It works on node.js and in all browsers.

The should interface extends Object.prototype to provide a single getter as the starting point for your language assertions. It works on node.js and in all modern browsers except Internet Explorer.

# Chai assertion library:

https://www.chaijs.com/guide/styles/#differences

# Understanding Chai Assert VS Expect VS Should(Stackoverflow Analysis referenced)

https://stackoverflow.com/questions/21396524/what-is-the-difference-between-assert-expect-and-should-in-chai

Differences between expect and should

First of all, notice that the expect require is just a reference to the expect function, whereas with the should require, the function is being executed.

var chai = require('chai')
const expect = chai.expect
const should = chai.should();
The expect interface provides a function as a starting point for chaining your language assertions. It works on node.js and in all browsers.

The should interface extends Object.prototype to provide a single getter as the starting point for your language assertions. It works on node.js and in all modern browsers except Internet Explorer.

# Installation

git clone or download file

npm i

npm test
