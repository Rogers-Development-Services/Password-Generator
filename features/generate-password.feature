Feature: Generate Password

    In order to generate a random Password
    as an employee with access to sensitive data
    I want to randomly generate a password that meets certain criteria
    so that I can create a strong password that provides greater security

    Rule: [SRS:Password_Generator:001] - WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
    Rule: [SRS:Password_Generator:002] - WHEN prompted for password criteria THEN I select which criteria to include in the password
    Rule: [SRS:Password_Generator:003] - WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
    Rule: [SRS:Password_Generator:004] - WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
    Rule: [SRS:Password_Generator:005] - WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
    Rule: [SRS:Password_Generator:006] - WHEN all prompts are answered THEN a password is generated that matches the selected criteria
    Rule: [SRS:Password_Generator:007] - WHEN the password is generated THEN the password is either displayed in an alert or written to the page
    
    Scenario Outline: Matt wants to generate a password
        Given Matt selects the "Generate Password" button
        When Matt is prompted to specify the passwords parameters
        Then selects the number of "permitted characters" 
        And "upper case values" are selected 
        And "lower case values" are selected 
        And "numbers" are selected
        And "special characters" are selected
        And validates a random password is generated with specific parameters   
