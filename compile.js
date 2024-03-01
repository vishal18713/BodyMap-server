const path = require('path');
//this is for calculating the right path of the file in the system
const fs = require('fs');
//this is for reading the file and getting its content
const fileToCompileName = "BodyMap.sol";
//contract name
const contractPath = path.resolve(__dirname, 'contracts', contractToCompileName);
//this for no avid issues its correct path of the file
const contractSource = fs.readFileSync(contractPath,'utf-8');
const solc = require('solc');
var input = 
{
    language : 'Solidity',
    sources : {[contractToCompileName]:{content:contractSource}},
    setting : {outputSelection:{'*':{'*':['*']}}}


}

const compiledContracts = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(compiledContracts);
const compiledContract =compiledContracts.contracts[contractToCompileName]["BodyMap"];
console.log(compiledContract);
module.exports = {compiledContract};
//this is for exporting the compiled contract to use it in the other files


