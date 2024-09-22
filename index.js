// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
// 2. Define a class called `BankBranch` for managing branch information.
// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.
// 4. Add methods to the `BankBranch` class for managing branch-related information.

class BankBranch {
  static bankBranchInstance = null;
  constructor(branchInfo) {
    if (BankBranch.bankBranchInstance === null) {
      this.branchInfo = branchInfo;
      BankBranch.bankBranchInstance = this;
    }
    return BankBranch.bankBranchInstance;
  }

  // Retrieve branch info
  getBranchInfo() {
    return this.branchInfo;
  }

  // Update branch info
  updateBranchInfo(newBranchInfo) {
    this.branchInfo = newBranchInfo;
    console.log(`Updated successfully!`);
  }
}

// - Create instances of the `BankBranch` class, `branchA` and `branchB`, with different branch information.

const branchA = new BankBranch({
  branchName: "Main Branch",
  branchCode: "0299",
  branchLocation: "Rustenburg CBD",
});
console.log(branchA.getBranchInfo());

const branchB = new BankBranch({
  branchName: "Headquarters",
  branchCode: "2000",
  branchLocation: "Sandton City",
});
console.log(branchB.getBranchInfo());

//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

console.log(branchA === branchB);
