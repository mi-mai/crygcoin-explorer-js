var api = 'http://127.0.0.1:18898';
var donationAddress = "";
var blockTargetInterval = 30; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  100000000000; // enter the total supply in atomic units
var symbol = 'cryg'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "cryg": [
	["pool.cryg.xyz", "http://pool.cryg.xyz:8117"],
 ]
};

var networkStat2 = {
    "cryg": [
	[""]
 ]
};
