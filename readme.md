TestDevLab course on automation testing using WebdriverIO and Cucumber

Goal ->

Test new user registration functionality on - http://automationpractice.com/index.php


Prerequisites:
JDK,
NodeJs v14^

Project setup ->

Clone repository;
npm install;
npm run cucumber; (running script to execute tests)
allure generate ./allure-results && allure open (Generate and open the report)


Dependenies used in the project:

allure-reported -> A WebdriverIO reporter plugin to create Allure Test Reports
allure commandline -> tool to generate Allure report from test results
fakerJs -> generate input field data
selenium-standalone-service -> running tests on two browsers (chrome and firefox)

Additional config added to generate screenshots in allure reports if test fails


Jenkins Setup

Created using Jenkins freestyle project and recommended plugin setup

Additional plugins:
1. Allure reporter
2. NodeJS plugin



https://vimeo.com/691356803/55e6e28b6f

Video content:

Plugin configuration 
Jenkins and git configuration
Build scripts
Project Build
Test executation
Allure report generation




Some known errors -

* Element selectors fail - Resource limit reached on the web page (wait some time and try again)

* Error TypeError: elem[prop] is not a function - repeat test execution