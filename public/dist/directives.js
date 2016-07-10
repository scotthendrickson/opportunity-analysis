'use strict';

angular.module('routerApp').directive("randomBackgroundcolor", function () {
  return {
    restrict: 'EA',
    replace: false,
    link: function link(scope, element, attr) {
      element.bind('mouseenter', function () {
        var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        element.css('background-color', color);
      });
      element.bind('mouseleave', function () {
        var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        element.css('background-color', color);
      });
    }
  };
}).directive('myCurrentTime', ['$interval', 'dateFilter', function ($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format, timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
      element.css('color', 'white');
      element.css('float', 'right');
      element.css('margin-top', '14.5%');
    }

    scope.$watch(attrs.myCurrentTime, function (value) {
      format = value;
      updateTime();
    });
    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function () {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
    link: link
  };
}]).directive('morseCoder', function () {
  return {
    restrict: 'E',
    template: '<div class="coder" random-backgroundcolor><div class="coder-input" ><textarea  name="code" rows="8" cols="40" placeholder="Enter your text or Morse Code here:" ng-model="userInput" ng-change="inputFunction(userInput)"></textarea></div><div class="code-output"><textarea name="output" rows="8" cols="40" placeholder="Your translation will appear here"  readonly>{{testText}}</textarea></div>',
    scope: {},
    controller: function controller($scope) {
      $scope.testText = "";
      $scope.userInput = "";
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
    },
    link: function link(scope, element, attributes) {}
  };
});