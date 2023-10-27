const {rollDice} = require('../src/diceRolling')

describe("Casual tabletop gamer...", () => {
    

    test.skip("... wants to roll a D6 and see a valid result.", () => {
        expect(rollDice()).not.toBeUndefined();
        expect(rollDice()).toBeDefined();
        expect(rollDice()).toBeGreaterThan(0);
        // expect(rollDice()).toBeLessThan(7);
        // expect(rollDice()).toBeGreaterThanOrEqual(1);
        // expect(rollDice()).toBeLessThanOrEqual(6);

    })

    test.skip("... ")
})

describe("Tabletop RPG gamer...", () => {
    test("... wants to roll a D20 with advantage and see both roll results then pick the best roll", () => {

    });

    test("... wants to roll a D20 with disadvantage and see both roll results then pick the worst roll", () => {
        
    });
    // In D&D, we have these dice:
    // D4, D6, D8, D10, D12, D20, D100
    desribe("... wants toll a variety of dice. Specifically they want to roll a ...", () => {
        test("D4", () => {

        });
        test("D6", () => {
            
        });
        test("D8", () => {
            
        });
    })
})