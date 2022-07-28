// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DB {


  address owner;
  struct Details {
    string name;
    string surname;
    string location;
    string record_1;
    string record_2;
    string record_3;
    string record_4;
    string record_5;
  }

  mapping (address => Details)  database;

  constructor(address _owner){
    owner = _owner;
  }
  
  event TestEvent(address _address );

  function updateOrAddRecord (string memory _name, string memory _surname, string memory _address, string memory _record_1, string memory _record_2, string memory _record_3, string memory _record_4, string memory _record_5) public returns (bool success){

    database[msg.sender] = Details(_name, _surname, _address, _record_1, _record_2, _record_3, _record_4, _record_5);
    return true;

  }

  function updateSingleField(string memory _name) public returns(bool success){
    Details storage user = database[msg.sender];
    user.name=_name;
    return true;
  }

  function updateTwoFields(string memory _name, string memory _surname) public returns (bool success){
    Details storage user = database[msg.sender];
    user.surname= _surname;
    user.name=_name;
    return true;
  }

  function updateThreeFields(string memory _name, string memory _surname, string memory _location) public returns (bool success){
    Details storage user = database[msg.sender];
    user.surname= _surname;
    user.location = _location;
    user.name=_name;
    return true;
  }

  function removeRecord () public returns (bool success){
    Details storage user = database[msg.sender];
    user.name="";
    user.surname="";
    user.location="";
    user.record_1="";
    user.record_2="";
    user.record_3="";
    user.record_4="";
    user.record_5="";
    
    return true;
  }

  function getRecord(address _address) public view returns (Details memory details){
    return database[_address];
  }
  
  function emitEvent() public {
    emit TestEvent(msg.sender);
  }

}


