import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber'
import { getScenarioDescription } from '@cucumber/cucumber/lib/formatter/helpers/pickle_parser'
import { chromium } from 'playwright'

BeforeAll(async() => {
    global.browser = await chromium.launch({
        "headless":false
    })
})

AfterAll( async() => {
    await global.browser.close()
})

Before( async(scenario) => {
    global.context = await global.browser.newContext({
        recordVideo: {
            "dir": "./reports/videos/"+scenario.pickle.name
        }
    })
    global.page = await global.context.newPage()
})

After( async() => {
    await global.page.close()
})