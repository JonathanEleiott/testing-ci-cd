# Testing and Continuous Integration / Continuous Delivery

## Manual Testing

- More prone to human error
- Carried out the QA role
- More costly in the long-term
- Time consuming
- Older way

## Automated Testing

- Testing through automated code/scripts
- More up-front cost and time
- Goal is efficiency
- Some manual work to write the tests

## TDD (Test Driven Development)

- write all tests
- it should fail
- write code that passes the tests one at a time
- refactor and clean up the code
- run all tests
- repeat

## Types of Tests

- Unit -> test the functionality of an individual unit of code
  - individual function
  - getUser()
- Integration -> tests that combine multiple units
  - moving mail from the Inbox to Spam folder
- Functional -> testing user scenarios in the browser itself by controlling the browser programatically
  - end to end testing
  - logging in all the way through sending emails and then logging out
- Acceptance -> testing that the application meets specific requirements
  - Alpha and Beta releases of application software

Happy Path -> The function acts as you would expect when given the correct parameters

Unhappy Path -> What the function returns if the parameters are incorrect

## Notes

- test for behaviors, not implementation

## Jest

- npm i jest
- create a file with a name that ends in .test.js (math.test.js)
- change the test script to "jest"
- write a bunch of tests (takes in a description and a function)
  - test('description fo rthe test', () => { expect(1 + 2).toBe(3) });
- run the test script

## Mocking and Stubbing - simplify tests when writing them

- mimic some parts of your code for a test so that you do not need to set up the actual code in your test (stunt double)

## Continuous Integration && Continuous Delivery (CI/CD)

### Continuous Integration (CI)

- Automating
  - Building the Code
  - Testing the code
- How does it work?
  - developer makes a change
  - CI system will automatically build the code
  - CI runs the automated tests
  - CI will report back the results

## GitHub Actions

- Workflow -> executes multiple jobs
- Job -> set of steps to run
- Event -> specific action within a repo (commit, pull request, etc.)
- Actions -> frequently repeated set of tasks are packaged into actions
- Runner -> machine that wuns workflows
- Configuration -> defined by YAML files in .github/workflows