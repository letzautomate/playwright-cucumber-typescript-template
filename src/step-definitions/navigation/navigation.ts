import { Given, When, Then } from '@cucumber/cucumber'

Given('User is on Login Page',
   async function(){
    //console.log("User is on Login Page")
    await global.page.goto("Https://gmail.com")
   })