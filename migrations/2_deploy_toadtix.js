const ToadTix = artifacts.require("ToadTix");

module.exports = function(deployer) {
  deployer.deploy(ToadTix, "TOAD", "TIX");
};
