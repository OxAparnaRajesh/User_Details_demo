
pragma solidity ^0.4.24;

contract UserDetails {
    
    struct user {
        string name;
        string dateOfBirth;
        uint age;
    }
    
    mapping (address => user) users;
    address[] public allUsers;
    
    function insertUser (address _address, string _name, string _dateOfBirth, uint _age) public {
        var userDetail = users[_address];
        userDetail.name = _name;
        userDetail.dateOfBirth = _dateOfBirth;
        userDetail.age = _age;
        allUsers.push(_address) -1;
    }
    
}
