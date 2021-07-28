Feature: SPECIFY NUMBER OF EVENTS

    Scenario: When user hasnt specified a number, 32 is the default number

        Given the main page is open
        When the user looks at the number of the events displayed
        Then the number of events the user will be able to see is 32

    Scenario: User can change the number of events they want to see

        Given the main page is open
        When the user selects a different number of events to be displayed at the top of the page
        Then the user will be able to see the selected number of events