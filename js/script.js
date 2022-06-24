console.log("test test s");


//Player Info
var playerName = 'Lucy';
var playerXP = 1250;
var playerLevel = 3;
var playerLocalLevel = 20;

var playerSkillTags = [];


//ProgressBar
var progressBarWidth = 250;
var progressWidth = progressBarWidth*playerLocalLevel/100;

document.getElementById("PlayerName").innerHTML = playerName + "'s Crib";
document.getElementById("PlayerLevel").innerHTML = "Lvl." + playerLevel.toString();
document.getElementById("PlayerXP").innerHTML = playerXP.toString() + "XP";

document.getElementById("XPProgressBarFrame").width = progressBarWidth;
document.getElementById("XPProgressBar").width = progressWidth;
document.getElementById("XPProgressBar").height = progressBarWidth * 0.072;

//Tags


//Character

