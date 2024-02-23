/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    let letterCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == letter) {
            letterCount++;
        }
    }
    return (Math.floor(letterCount * 100 / s.length));
};