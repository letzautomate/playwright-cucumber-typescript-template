import { Given } from '@cucumber/cucumber'

Given(/^User is on the "([^"]*)" Page$/, 
    async function (pageName:string) {
    console.log(`User is on the ${pageName} Page`)
    await global.page.goto("https://gmail.com")
  });