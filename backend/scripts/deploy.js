const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const CharityFund = await hre.ethers.getContractFactory("CharityFund");
  const charityFund = await CharityFund.deploy();
  const charityFund.waitForDevelopment();

  // 4. Get the deployed contract address
  const address = charityFund.getAddress();
  console.log("Contract deployed to Sepolia at:", address);

//   // Save ABI + Address for frontend
//   const abi = JSON.stringify(CharityFund.interface.format("json"));
//   const output = {
//     address,
//     abi: JSON.parse(abi),
//   };

//   // 5. Write ABI and address to a frontend-compatible JavaScript file
//   const frontendPath = "../frontend/src/contracts/charityFund.js"; // Change this to your frontend path if necessary
//   fs.writeFileSync(frontendPath, 
//     `export const CONTRACT_ADDRESS = "${address}";\n` +
//     `export const CONTRACT_ABI = ${JSON.stringify(output.abi, null, 2)};`
//   );

//   console.log("ABI and address written to frontend.");
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
