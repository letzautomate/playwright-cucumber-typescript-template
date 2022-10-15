import { Given, When, Then } from '@cucumber/cucumber'

Given(/^User enters username$/, 
    async function() {
        await global.page.locator("#identifierId").fill("Hello")
    })