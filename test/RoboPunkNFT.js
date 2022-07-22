const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

let RoboPunksNFT;
let roboPunksNFT;
let owner;
let user1;
let addrs;

describe("deploy RoboPunk", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.

  beforeEach(async function () {
    [owner, user1, ...addrs] = await ethers.getSigners();

    RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
    roboPunksNFT = await RoboPunksNFT.deploy();
  
    await roboPunksNFT.deployed();

    await roboPunksNFT.setIsPublicMintEnabled(true);
  
    console.log("roboPunksNFT deployed to:", roboPunksNFT.address);
  });

  describe("Mint", function () {
    it("Should mint one token", async function () {
      await roboPunksNFT.connect(user1).mint(3, {value: ethers.utils.parseEther(".03")});

      expect(await roboPunksNFT.connect(user1).balanceOf(user1.address)).to.be.equal(3);
    });
  });
});