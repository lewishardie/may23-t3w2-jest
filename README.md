# may23-t3w2-jest

Goals:

- Learning Jest (JS text framework)
    - describe
    - test
    - test.skip
    - test.each
    - beforeEach and afterEach
    - beforeAll and afterAll

npm init --y
- to initialise node project manager with default settings(--y)

npm install --save-dev jest
- to install jest development dependancy(--save-dev)

User Stories

- Casual tabletop games
    - Roll a six-sided dice (D6) and see the result.

- Tabletop RPG gamers
    - Roll a variety of dice and get results
    - Roll a twenty-sided dice (D20) and see the result.
    - Roll with disadvantage -> Roll a twenty-sided dice (D20) and seeing the worst result.
    - Roll with advantage - > Roll a twenty-sided dice (D20) and seeing the best result.


scripts {
    "tests" : "jest"
}
- to add jest to the test scripts

npm test
- to run the jest test

toBeUndefined

```not.toBeUndefined``` === ```toBeDefined```

```test.skip``` === ```xtest```