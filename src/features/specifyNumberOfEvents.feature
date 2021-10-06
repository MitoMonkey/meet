Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number.
        Given the user has not specified the number of events to be displayed
        When the user is viewing the list of events
        Then the default of max 32 events are displayed

    Scenario: User can change the number of events they want to see.
        Given the list of events is displayed
        When the user specifies the number of events
        Then the length of the events list displayed is adjusted according to the specified number
