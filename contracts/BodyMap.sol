pragma solidity ^0.8.19;

contract bodyMap{
    bytes32 private passwordHash;
    string public basicBodyMap;
    string public tailorBodyMap;
    constructor (string memory passwordClearText)
    {
        
        passwordHash = keccak256(abi.encodePacked(passwordClearText));
    }
    function setBodyMaps(string memory passwordClearText,string memory newBasicBodyMap,string memory newTailorBodyMap)public {
        bytes32 givenPasswordHash = keccak256(abi.encodePacked(passwordClearText));
        if(givenPasswordHash == passwordHash){
            basicBodyMap = newBasicBodyMap;
            tailorBodyMap = newTailorBodyMap;

        }
        

    }
}