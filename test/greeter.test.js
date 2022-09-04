const GreeterContract = artifacts.require("Greeter");

contract("Greeter", (accounts) => {
    it("has been deployed successfully", async () => {
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract was not deployed");
    });


    describe("Greet()", () => {
        it("returns, 'Hello World", async() => {
            const greeter = await GreeterContract.deployed();
            const expected = "Hello World"
            const actual = await greeter.greet();
            assert.equal(actual, expected, "greeted with 'Hello world!'")
        })
    })
    describe("owner()", () => {
        it("matches the address that originarlly deployed the contract", async() => {
            const greeter = await GreeterContract.deployed();
            const owner = await greeter.owner();
            const expect = accounts[0];
            assert.equal(owner, expect, "matches the address used to deployed the contract");
        })
    })
});
contract("Greeter: update greeting", () => {
    describe("SetGreeting(string)", () => {
       it("sets greeting to passed in string", async () => {
           const greeter = await GreeterContract.deployed();
           const expected = "Hi there!"
           await greeter.setGreeting(expected);
           const actual = await greeter.greet();
           assert.equal(actual, expected, "greeting was not updated");
       })
    })
})
