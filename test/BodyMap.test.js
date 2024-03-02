const {compiledContract} = require('../compile');
//this line is for the to navigate up one directory level from the current directory
const assert = require('assert');
const { Console } = require('console');
//this is used to inport trh built in assert module provides a simple set of assertion tests that can be used to test the functionality of your code
const ganache = require('ganache-cli');
// to avoid to deploy contract on real eheream network we use ganache-cli to create a local test network
const Web3  = require('web3');
const web3 = new Web3(ganache.provider());
const clearTextPassword = 'SuperSecretPassword';
let accounts;
let deployedBodyMapContract;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    deployedBodyMapContract = await new web3.eth.Contract(compiledContract.abi).deploy({data: compiledContract.evm.bytecode.object, arguments: [ clearTextPassword]}).send({from: accounts[0],gas:'1000000'});
});
describe('BodyMap',() =>
{
    it('deploys',()=> {
        assert.ok(deployedBodyMapContract.options.address);
        console.log(deployedBodyMapContract.options.address);
    })

})
