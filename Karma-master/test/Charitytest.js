const Charity = artifacts.require("Charity");
const TokenWallet = artifacts.require("TokenWallet");
const truffleAssert = require("truffle-assertions");



contract("Charity", accounts => {

    it("This test should pass as msg.sender have 0 KarmaBalance before depositing anything", async () => {
        let charity = await Charity.deployed()

        let balanceBefore = await charity.KarmaBalance(accounts[0]);
        assert(balanceBefore == 0, "KarmaBalance should be 0 this time")

    })

    it("This test should pass as after Depositing there would be ETH stored in the msg.sender's account", async () => {
        let charity = await Charity.deployed()

        let bBefore = await charity.balances(accounts[0], web3.utils.fromUtf8("ETH"));
        assert(bBefore == 0, "Balance of ETH should be 0 before deposit");

        await charity.depositETH({value:10});

        let bAfter = await charity.balances(accounts[0], web3.utils.fromUtf8("ETH"));
        assert(bAfter == 10, "ETH balance should be 10 after Transaction");

    })
    it("This test should pass as after charity transaction, msg.sender's balance should contain KarmaCoin", async () =>{
        let charity = await Charity.deployed()

        let KarmaBalanceBefore = await charity.KarmaBalance(accounts[0]);
        assert(KarmaBalanceBefore == 0, "KarmaBalance should be 0 before Transaction");

        await charity.depositETH({value:10});

        await charity.sendCharity(accounts[1], 5);

        let KarmaBalanceAfter = await charity.KarmaBalance(accounts[0]);
        assert(KarmaBalanceAfter == 15, "KarmaBalance should be 15 after Transaction");


    })

    it("This test should pass as after charity transaction, the charity address should have ETH in it's account", async () => {
        let charity = await Charity.deployed()

        await charity.depositETH({value:10});

        await charity.sendCharity(accounts[1], 5);

        let ethBalance = await charity.balances(accounts[1], web3.utils.fromUtf8("ETH"));
        assert(ethBalance == 5, "The charity address should contain 5 ETH after the transaction");

    })
})