import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token contract", function () {
  let accounts: any;
  let db: any;
  this.beforeEach(async () => {
    accounts = await ethers.getSigners();

    const DB = await ethers.getContractFactory("DB");
    db = await DB.deploy(accounts[0].address);
  });
  let transaction;
  it("Should add new user with 8 records", async function () {
    transaction = await db.updateOrAddRecord(
      "aaaaaaaaaaaaaaaa",
      "bbbbbbbbbbbbbbbbbb",
      "cccccccccccccccc",
      "ddddddddddddddd",
      "eeeeeeeeeeeeeee",
      "ffffffffffffffffffff",
      "gggggggggggggggg",
      "hhhhhhhhhhhhhhhh"
    );
    await transaction.wait();
    const obj = await db.getRecord(accounts[0].address);
    expect(obj.name).to.equal("aaaaaaaaaaaaaaaa");
  });

  it("Should update user with 8 records", async function () {
    transaction = await db.updateOrAddRecord(
      "aaaaaaaaaaaaaaaa",
      "bbbbbbbbbbbbbbbbbb",
      "cccccccccccccccc",
      "ddddddddddddddd",
      "eeeeeeeeeeeeeee",
      "ffffffffffffffffffff",
      "gggggggggggggggg",
      "hhhhhhhhhhhhhhhh"
    );
    await transaction.wait();
    const obj = await db.getRecord(accounts[0].address);
    expect(obj.name).to.equal("aaaaaaaaaaaaaaaa");
  });
  it("Should update 1 record", async function () {
    transaction = await db.updateSingleField("xxxx");
    await transaction.wait();

    const obj = await db.getRecord(accounts[0].address);
    expect(obj.name).to.equal("xxxx");
  });
  it("Should update 2  records", async function () {
    transaction = await db.updateTwoFields("xxxx", "yyyy");
    await transaction.wait();

    const obj = await db.getRecord(accounts[0].address);
    expect(obj.name).to.equal("xxxx");
    expect(obj.surname).to.equal("yyyy");

  });
  it("Should update 3  records", async function () {
    transaction = await db.updateThreeFields("xxxx", "yyyy", "uuuuu");
    await transaction.wait();

    const obj = await db.getRecord(accounts[0].address);
    expect(obj.name).to.equal("xxxx");
    expect(obj.surname).to.equal("yyyy");
    expect(obj.location).to.equal("uuuuu");
  });
  it("Should remove user data", async function () {
    transaction = await db.removeRecord();
    await transaction.wait();

    const obj = await db.getRecord(accounts[0].address);
    expect(obj.name).to.equal("");
    expect(obj.surname).to.equal("");
    expect(obj.location).to.equal("");
  });
});
