Feature: Show/hide an events details

    Scenario: An event element is collapsed by default.
        Given the user has not clicked on a specific event
        When the user is viewing the list of events
        Then the details of each event are collapsed/hidden

    Scenario: User can expand an event to see its details.
        Given the user is viewing the list of events
        When the user clicks "Show Details" on an event
        Then the user should see a expanded view with details of that event

    Scenario: User can collapse an event to hide its details.
        Given the user is viewing (expanded) details of one events
        When the user clicks "Hide Details"
        Then the details of that event should collapse/hide
