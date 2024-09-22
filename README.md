# [JSL08] Submission: Singleton Pattern for Bank Branch Management

A Singleton pattern ensures that a class has only one instance and provides a global point of access to it. For the banking system, I used the Singleton pattern to manage the bank's branch information.

# Objectives
- This task demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
- Even if we attempt to create another instance of the branch, we should receive the original instance, ensuring that there is only one set of branch information throughout the application.

# Outcomes:

- We define a `BankBranch` class that represents bank branch information.
- The static property is initialised to null to show that no instance exists yet.
- We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
- The `bankBranchInstance` variable is used to hold the single instance of the class.
- When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
- If it does, it returns the existing instance; otherwise, it creates a new one.
- The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
- The `updateBranchInfo` method allows us to update the branch information from the singleton instance.
- The Singleton pattern is demonstrated by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance, ensuring that there is only one set of branch information throughout the application.
