### Test automation framework for End 2 End testing ###

The main goal of this framework is to provide easy, reliable and maintainable automated tests for UI part of the application. It was developed using ECMA 6, Node.js, Protractor and Cucumber.js.

## Framework installation ##

First of all you need to have Node.js installed, all following commands should be executed in Node.js command prompt

Install protractor globally with:


```
#!js

npm install -g protractor
```


Navigate to your project's folder in command prompt and run:


```
#!javascript

npm install
```


What does this do?

*     Downloads all the dependencies described in the package.json
*     Extracts them into node_modules folder

## Configuring ##
Let's take a look at protractor-cucumber.conf.js, there are a couple crucial things: 


* baseUrl - link to an environment to run tests against
* seleniumAddress - link to the selenium server, 'http://localhost:4444/wd/hub' is for local one


### Run the tests ###

To download and extract browser driver run following in command prompt


```
#!js

webdriver-manager update

```
To start the Selenium Server:

```
#!js


webdriver-manager start
```

To run the tests you have to use protractor command:

```
#!js

mvn clean test
```

As an option you can run the tests with npm using:

```
#!js

npm test
```


This will launch the test using all properties described in protractor-cucumber.conf.js