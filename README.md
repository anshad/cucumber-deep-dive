# Cucumber a deep dive
A deep dive seesion on BDD using cucumnber.

- `npm run test` - to run test in console
- `npm run report` - to run test and generate HTML report

### BDD 
- Encourages Collaboration between Business Analysts, QA Engineers, Developers & Business Owners / Stakeholders
- Explore, discover, define and drive
- Driven by Business Value
- Extends Test Driven Development (TDD) by utilizing natural language that non-technical stakeholders can understand
- BDD Frameworks such as Cucumber or JBehave are an Enabler, acting a “bridge” between Business & Technical Language
    - User Stories & Acceptance Criteria Defined in Feature Files with Business Language
    - Developers Implement Acceptance Criteria

### Cucumber 
- Designed for scenario implementation in Ruby, but supports other implementations
- Highly Flexible, with ability to integrate with any tool supported by underlying implementation, e.g.
    - Web automation with Selenium or other tools
    - Various Languages (Java, JavaScript, .NET etc)
    - Build Systems – Ant, Rake, Maven etc
    - Various other Tools & Scripting toolkits

### Feature

    Feature: [Title]
        As a [Role]
        I want [Some Action]
        So that [Business Value]
        Scenario: Title
            Given [Context]
            And [More Context]
            When (I do) [Action]
            And [Other Action]
            Then (I should see) [Outcome]
            And [More Outcomes]



### Gherkin

- Indented simple text file with .feature extension 
- The syntax used for creating cucumber feature files
- Contains feature, scenario and cucumber steps
- Gherkin has been translated to over 70 languages including Hindi, Tamil, Telugu, Panjabi, etc.
- Set of keywords to be followed
    - Feature – high level description of a software feature
    - Example/Scenario – concrete example that illustrates business rule
    - Given – describe initial context , When – describe an event, Then – describe expected outcome, And, But  (steps)
    - Background - allows you to add some context to the scenarios in the feature
    - Scenario Outline/Scenario Template - used to run the same Scenario multiple times, with different combinations of values
    - Examples
    - “”” – doc string, | - data table, @ - tag, # - comment

Gherking consider the following as duplicate and forces to use more clean and readable human format!

    Given there is money in my account
    Then there is money in my account

### Installation

- npm install --save-dev cucumber
- Add .feature files under `features` directory
- Add step definitions under `features/step_definitions` directory
- Create test script using `./node_modules/.bin/cucumber-js`
- Then run your tests `npm run test`

