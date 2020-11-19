Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the event list has been loaded 
When the user scrolls through the event list
Then the event list should only be 32 items long

Scenario: User can change the number of events they want to see
Given the event list has been loaded
When the user specifies how many events to show in the filter
Then the event list should only be as long as that specification
