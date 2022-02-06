var web3 = new Web3(Web3.givenProvider);

var contractCharityAddress = "0xA6A1B8245b8960bF1Fa1B37B0cA99c6b3D075185";
var polygonAccount = "0xFE4d30a079a4fbE3A186Be5f4F7AB5e22C518977";
var charityAddress = "0x453b0255FB8aC91FA5D6606D1647DF201FA6c7d5";

$(document).ready(function(){
 window.ethereum.enable().then(async function(){
 charity = await new web3.eth.Contract(window.abi, contractCharityAddress, {from: polygonAccount});

 prtMATIC();

}) 

$("#MaticButton").click(depositMatic);
$("#charityButton").click(makeCharity);


 function reloadPage(){
  location.reload();
}

 async function depositMatic(){
  let addedMatic = $("#placedMATIC").val();
  console.log("the Matic value you put into the input field is: " + addedMatic);
  let address = polygonAccount;
  console.log("current MATIC Address is: " + address);
  let balanceBefore = await charity.methods.balances(address, web3.utils.fromUtf8("MATIC")).call();
  console.log("Balance before transaction is: " + balanceBefore);
  await charity.methods.depositMATIC().send({value: web3.utils.toWei(addedMatic)});
  let balanceAfter = await charity.methods.balances(address, web3.utils.fromUtf8("MATIC")).call();
  console.log("Balance after transaction is: " + balanceAfter);
 // reloadPage();

}

async function prtMATIC(){
  let maticBalance = await charity.methods.balances(ethereum.selectedAddress, web3.utils.fromUtf8("MATIC")).call();
  document.getElementById("theNumber2").textContent = web3.utils.fromWei(maticBalance);
}

async function makeCharity(){
  let charitiedMatic = $("#charitiedMATIC").val();
  console.log("The charity amount you put in is: " + charitiedMatic);
  await charity.methods.sendCharity(charityAddress, charitiedMatic).send();
  let balanceAfter = await charity.methods.balances(charityAddress, web3.utils.fromUtf8("MATIC"));
  console.log(balanceAfter);
  alert("You succesfully sent your charity to the charity address!");
}

})