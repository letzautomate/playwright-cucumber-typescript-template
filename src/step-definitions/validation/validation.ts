import { Given, When, Then } from '@cucumber/cucumber'

When(/^User enters username and Password and click Login Button$/, 
    async function() {
        await global.page.locator("#identifierId").fill("Hello")
    })