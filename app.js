function createParagraph(){
var wordOne = document.getElementById("wordOne").value
var wordTwo = document.getElementById("wordTwo").value
var wordThree = document.getElementById("wordThree").value
var wordFour = document.getElementById("wordFour").value
var wordFive = document.getElementById("wordFive").value
var wordSix = document.getElementById("wordSix").value
var wordSeven = document.getElementById("wordSeven").value
var wordEight = document.getElementById("wordEight").value
var wordNine = document.getElementById("wordNine").value
var wordTen = document.getElementById("wordTen").value
var wordEleven = document.getElementById("wordEleven").value

var paragraph = 'Two ' + wordOne  + ', both alike in dignity,' + ' In fair ' + wordTwo + ' where we lay our scene, From ancient ' + wordThree +   'break to new mutiny,' + 'Where civil blood makes civil hands unclean.' +'From forth the fatal loins of these two foes '+'A pair of star-cross`d ' + wordFour + 'take their life' + 'Whole misadventured piteous overthrows Do with their ' +   wordFive +'bury their parents` strife' +'The fearful passage of their ' +  wordSix +  'love,' + 'And the continuance of their parents` rage,' + 'Which, but their children`s end, nought could ' +   wordSeven + 'Is now the ' + wordEight + 'hours` traffic of our stage;' + 'The which if you with' + wordNine + wordTen +' attend,' + 'What here shall ' +  wordEleven + ', our toil shall strive to mend.'

document.getElementById("answer").innerHTML = paragraph; 
}