import { Given } from '@cucumber/cucumber'

Given('User is on the Login Page', 
    async function () {
    console.log('User is on the Login Page')
    await global.page.goto("https://gmail.com")
  });