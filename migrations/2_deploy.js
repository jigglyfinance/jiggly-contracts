const JIGToken = artifacts.require("JIGGToken");
const Timelock = artifacts.require("Timelock");
const MasterChef = artifacts.require("MasterChef");
const maintainer = '';

module.exports = function(deployer) {
  deployer.then(async() => {
    const JiggToken = await deployer.deploy(JIGToken);
    const masterChef = await deployer.deploy(MasterChef,JiggToken.address,maintainer,maintainer,1,5183027)
    const timeLock = await  deployer.deploy(Timelock,maintainer,86400);
  })
};