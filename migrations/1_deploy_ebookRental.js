const PaymentSystem = artifacts.require("PaymentSystem");
const PublisherManagement = artifacts.require("PublisherManagement");
const UserRegistration = artifacts.require("UserRegistration");

module.exports = function (deployer) {
  deployer.deploy( PaymentSystem );
  deployer.deploy( PublisherManagement );
  deployer.deploy( UserRegistration );
  // deployer.link(PaymentSystem, PublisherManagement);
};
