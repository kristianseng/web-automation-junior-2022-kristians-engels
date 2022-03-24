# Automation testing using WebdriverIO and Cucumber

<br>

**Testing new user registration functionality on** - http://automationpractice.com/index.php
<br>
<br>

**Prerequisites**

- JDK
- NodeJs v14^

**Project setup**

- clone repository;<br>
- npm install;<br>
- npm run cucumber; (script to execute tests)<br>
- allure generate ./allure-results && allure open (Generate and open the report)<br>


**Dependenies used in the project**

- allure-reported -> A WebdriverIO reporter plugin to create Allure Test Reports<br>
- allure commandline -> tool to generate Allure report from test results<br>
- fakerJs -> generate input field data<br>
- selenium-standalone-service -> running tests on two browsers (chrome and firefox)<br>

Additional config added to generate screenshots in allure reports if test fails


## Jenkins Setup

Project created using Jenkins freestyle project and recommended plugin setup

Additional plugins:
1. Allure reporter
2. NodeJS plugin

**Jenkins video guide:**

https://vimeo.com/691356803/55e6e28b6f

1. Plugin configuration 
2. Jenkins and git configuration
3. Build scripts
4. Project Build
5. Test executation
6. Allure report generation




 **Some known errors** -

* Element selectors fail - Resource limit reached on the web page (wait some time and try again)

* Error TypeError: elem[prop] is not a function (try again)
