'use strict';

angular.module('routerApp').controller('mainCtrl', function ($scope, mainService) {
  $scope.name = "Scott Hendrickson";
  $scope.testText = "";
  $scope.inputFunctionAlphabet = function (value) {
    var newString = value.toLowerCase();
    newString = newString.replace(/0/g, '----- ').replace(/1/g, '.---- ').replace(/2/g, '..--- ').replace(/3/g, '...-- ').replace(/4/g, '....- ').replace(/5/g, '..... ').replace(/6/g, '-.... ');
    newString = newString.replace(/7/g, '--... ').replace(/8/g, '---.. ').replace(/9/g, '----. ').replace(/a/g, '.- ').replace(/b/g, '-... ').replace(/c/g, '-.-. ').replace(/d/g, '-.. ');
    newString = newString.replace(/e/g, '. ').replace(/f/g, '..-. ').replace(/g/g, '--. ').replace(/h/g, '.... ').replace(/i/g, '.. ').replace(/j/g, '.--- ').replace(/k/g, '-.- ');
    newString = newString.replace(/l/g, '.-.. ').replace(/m/g, '-- ').replace(/n/g, '-. ').replace(/o/g, '--- ').replace(/p/g, '.--. ').replace(/q/g, '--.- ').replace(/r/g, '.-. ');
    newString = newString.replace(/s/g, '... ').replace(/t/g, '- ').replace(/u/g, '..- ').replace(/v/g, '...- ').replace(/w/g, '.-- ').replace(/x/g, '-..- ').replace(/y/g, '-.-- ');
    $scope.testText = newString.replace(/z/g, '--.. ');
  };

  $scope.inputFunction = function (morse) {
    var morseCodes = {
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
      "-----": 0,
      ".----": 1,
      "..---": 2,
      "...--": 3,
      "....-": 4,
      ".....": 5,
      "-....": 6,
      "--...": 7,
      "---..": 8,
      "----.": 9
    };
    if (morse[0] === '.' | morse[0] === '-') {
      var morseCode = morse.replace(/\s\s+/g, ' & ').split(' ');
      for (var i = 0; i < morseCode.length; i++) {
        for (var prop in morseCodes) {
          if (morseCode[i] === prop) {
            morseCode[i] = morseCodes[prop];
          }
        }
      }
      $scope.testText = morseCode.join('').replace(/&/g, ' ');
    } else {
      var newString = morse.toLowerCase();
      newString = newString.replace(/0/g, '----- ').replace(/1/g, '.---- ').replace(/2/g, '..--- ').replace(/3/g, '...-- ').replace(/4/g, '....- ').replace(/5/g, '..... ').replace(/6/g, '-.... ');
      newString = newString.replace(/7/g, '--... ').replace(/8/g, '---.. ').replace(/9/g, '----. ').replace(/a/g, '.- ').replace(/b/g, '-... ').replace(/c/g, '-.-. ').replace(/d/g, '-.. ');
      newString = newString.replace(/e/g, '. ').replace(/f/g, '..-. ').replace(/g/g, '--. ').replace(/h/g, '.... ').replace(/i/g, '.. ').replace(/j/g, '.--- ').replace(/k/g, '-.- ');
      newString = newString.replace(/l/g, '.-.. ').replace(/m/g, '-- ').replace(/n/g, '-. ').replace(/o/g, '--- ').replace(/p/g, '.--. ').replace(/q/g, '--.- ').replace(/r/g, '.-. ');
      newString = newString.replace(/s/g, '... ').replace(/t/g, '- ').replace(/u/g, '..- ').replace(/v/g, '...- ').replace(/w/g, '.-- ').replace(/x/g, '-..- ').replace(/y/g, '-.-- ');
      $scope.testText = newString.replace(/z/g, '--.. ');
    }
  };
  $scope.userInput = "";
  $scope.format = 'M/d/yy h:mm:ss a';
});