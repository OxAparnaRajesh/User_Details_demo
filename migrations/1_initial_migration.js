const Migrations = artifacts.require("Migrations");
const UserDetails = artifacts.require("UserDetails");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(UserDetails);
};
