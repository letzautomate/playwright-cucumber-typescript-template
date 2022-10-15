Feature: Login functionality
    @Smoke
    Scenario: User is able to login with valid credentials
        Given User is on the "Login" Page
        When User enters username and Password and click Login Button