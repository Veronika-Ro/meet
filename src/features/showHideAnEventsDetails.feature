Feature: SHOW/HIDE AN EVENT'S DETAILS

    Scenario: An event element is collapsed by default

        Given the user has not expanded an event element
        When the user opens the app
        Then the user will see the collapsed event elements

    Scenario: User can expand an event to see its details

        Given the user has not expanded an event element
        When the user clicks on Show Details
        Then event element will expand

    Scenario: User can collapse an event to hide its details

        Given the user has expanded an event element
        When the user clicks on Hide Details
        Then the event elent will collapse