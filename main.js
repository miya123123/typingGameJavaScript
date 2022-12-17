'use strict'
{
    //word:['B', 'A', '[[option]]', '[[space]]', 'A']
    function setWord(){
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        // target.textContent = word;
        target.textContent = convertTowardDispString(word);
        loc = 0;
    }

    //['B', 'A', '[[option]]', '[[space]]', 'A'] -> 'BA [[option]] A'
    function convertTowardDispString(array){
        var addedSpaceArray = [];
        array.forEach(element => {
            if(element.length == 1){
                addedSpaceArray.push(element);
            }else{
                //'[[option]]' -> ' [[option]] '
                addedSpaceArray.push(' ' + element + ' ');
            }
        });
        var str = addedSpaceArray.join('');
        return str;
    }

    //characterSet: ['BB [[option]] B [[option]] [[space]] AAAA]
    //characterSetArray: ['B', 'B', '[[option]]', 'B', '[[option]]', '[[space]]', 'A', 'A', 'A', 'A']
    //words:[['B', 'A', '[[option]]', '[[space]]', 'A'], ['A'], ['B', '[[option]]'], ...]
    // function createWords(characterSetArray, word_length, words_length){
    function createWords(characterSet, word_length, words_length){
        var characterSetArray = splitCharacterSet(characterSet);
        let str;
        let _word;
        for(let j = 0; j < words_length; j++){
            _word = [];
            for(let i = 0; i < word_length; i++){
                str = characterSetArray[Math.floor(Math.random() * characterSetArray.length)];
                _word.push(str);
            }
            words.push(_word);
        }
    }


    const characters = [
        'abcdefghijklmnopqrstuvwxyz', 
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 
        '!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\', 
        '!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\1234567890', 
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\', 

        // '[[AltLeft]] [[AltRight]] [[Space]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]]', 

        // '[[AltLeft]] [[AltRight]] [[Space]] [[Tab]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]] [[ShiftLeft]] [[ShiftRight]]', 

        '[[OptionLeft]] [[OptionRight]] [[Space]] [[CommandLeft]] [[CommandRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]]', 

        '[[F1]] [[F2]] [[F3]] [[F4]] [[F5]] [[F6]] [[F7]] [[F8]] [[F9]] [[F10]]', 
        // '[[F1]] [[F2]] [[F3]] [[F4]] [[F5]] [[F6]] [[F7]] [[F8]] [[F9]] [[F10]] [[F11]] [[F12]]', 

        // '[[AltLeft]] [[AltRight]] [[Space]] [[Tab]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]] [[ShiftLeft]] [[ShiftRight]] [[F1]] [[F2]] [[F3]] [[F4]] [[F5]]  [[F6]] [[F7]] [[F8]] [[F9]] [[F10]] [[F11]] [[F12]]', 

        // '!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\1234567890 [[AltLeft]] [[AltRight]] [[Space]] [[Tab]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]] [[ShiftLeft]] [[ShiftRight]] [[F1]] [[F2]] [[F3]] [[F4]] [[F5]]  [[F6]] [[F7]] [[F8]] [[F9]] [[F10]] [[F11]] [[F12]]', 

        // 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\ [[AltLeft]] [[AltRight]] [[Space]] [[Tab]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]] [[ShiftLeft]] [[ShiftRight]]', 
        // 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\ [[AltLeft]] [[AltRight]] [[Space]] [[Tab]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]] [[ShiftLeft]] [[ShiftRight]]  [[F1]] [[F2]] [[F3]] [[F4]] [[F5]]  [[F6]] [[F7]] [[F8]] [[F9]] [[F10]] [[F11]] [[F12]]', 
        // 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\ [[AltLeft]] [[AltRight]] [[Space]] [[MetaLeft]] [[MetaRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]]', 

        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\ [[OptionLeft]] [[OptionRight]] [[Space]] [[CommandLeft]] [[CommandRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]]', 
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\ [[OptionLeft]] [[OptionRight]] [[Space]] [[CommandLeft]] [[CommandRight]] [[ControlLeft]] [[ControlRight]] [[Escape]] [[Backspace]] [[Enter]] [[ArrowLeft]] [[ArrowRight]] [[ArrowUp]] [[ArrowDown]] [[F1]] [[F2]] [[F3]] [[F4]] [[F5]] [[F6]] [[F7]] [[F8]] [[F9]] [[F10]]', 

    ]

    // 'BB [[option]] B [[option]] [[space]] AAAA' -> ['B', 'B', '[[option]]', 'B', '[[option]]', '[[space]]', 'A', 'A', 'A', 'A']
    // 'BB[[kkd.i,]]CC' -> ['B', 'B', '[', '[', 'k', 'k', 'd', '.', 'i', ',', ']', ']', 'C', 'C']
    function splitCharacterSet(str) {
        var result = str;
        result = splitBySpace(result);
        result = splitPerOneCharacter(result);
        return result;
    }
    //' [[option]] B [[option]] [[space]] AAAA [[space]] ' -> ['[[option]]', 'B', '[[option]]', '[[space]]', 'AAAA', '[[space]]']
    function splitBySpace(str) {
        var result = str;
        result = str.split(' ');
        if(result.length > 0 && result[0] == '') result.shift();
        if(result.length > 0 && result[result.length - 1] == '') result.pop();
        return result;
    }

    //['[[option]]', 'B', '[[option]]', '[[space]]', 'AAAA', '[[space]]'] -> ['[[option]]', 'B', '[[option]]', '[[space]]', 'A', 'A', 'A', 'A', '[[space]]']
    function splitPerOneCharacter(arr) {
        let result = [];
        arr.forEach(element => {
            if(element.length > 4
                && element[0] == '['
                && element[1] == '['
                && element[element.length - 2] == ']'
                && element[element.length - 1] == ']'){
                // element = element.slice(2, element.length - 2);
                result.push(element);
            }else{
                for(let i = 0; i < element.length; i++){
                    result.push(element[i]);
                }
            }
        });
        return result;
    }


    function dispProblemSetFunc(_dispProblemSet){
        var str = '';
        // str += "Problem set list<br>";
        // str += "<br>";
        // str += "Character set list<br>";
        str += "<span class=\"caption\">Character set list<br></span>";
        str += "<table><tbody>";
        // str += "<tr><th>Index</th><td>Set</td></tr>";
        // str += "<tr><th>Index</th><td>Character set</td></tr>";
        str += "<tr><th class=\"index\">Index</th><th class =\"character_set\">Character set</td></th></tr>";
        var i = -1;
        characters.forEach(element => {
            i++;
            // str += `<tr><th>${i}</th><td>${element}</td></tr>`;
            str += `<tr><td>${i}</td><td class = \"character_set_value\">${element}</td></tr>`;
        });
        str += "</tbody></table>";
        // console.log(str);
        _dispProblemSet.innerHTML = str;
    }

    // '[[MetaLeft]]' -> 'MetaLeft'
    function removeBracket(str){
        var result = str;
        if(result.length == 1)
            return result;
        if(result[0] == '[' && result[1] == '[' && result[result.length - 2] == ']' && result[result.length - 1] == ']')
            return result.slice(2, result.length - 2);
        console.log("Error: removeBracket");
    }

    // 'MetaLeft' -> 'Meta'
    // 'MetaRight' -> 'Meta'
    // 'AltLeft' -> 'Alt'
    // 'AltRight' -> 'Alt'
    // 'ControlLeft' -> 'Control'
    // 'ControlRight' -> 'Control'
    // 'ArrowLeft' -> 'ArrowLeft'
    // 'ArrowRight' -> 'ArrowRightk'
    // 'Meta' -> 'Meta'
    // '[' -> '['
    function removeLastRightLeft(str){
        var result = str;
        if(result.length == 1)
            return result;
        if(result == 'ArrowLeft' || result == 'ArrowRight')
            return result;
        var rightIndex = result.lastIndexOf('Right');
        if(rightIndex != -1 && rightIndex == result.length - 5)
            return result.slice(0, rightIndex);
        var leftIndex = result.lastIndexOf('Left');
        if(leftIndex != -1 && leftIndex == result.length - 4)
            return result.slice(0, leftIndex);
        return result;
    }





    // 'Space' -> ' '
    function convertSpaceString(str){
        var result = str;
        if(result == 'Space')
            return ' ';
        return result;
    }
    // "command" -> "Meta"
    function convertCommandString(str){
        var result = str;
        if(result == 'Command')
            return 'Meta';
        return result;
    }
    // "option" -> "Alt"
    function convertOptionString(str){
        var result = str;
        if(result == 'Option')
            return 'Alt';
        return result;
    }

    // // "Meta" -> "Command"
    // function convertMetaString(str){
    //     var result = str;
    //     if(result == 'Meta')
    //         return 'Command';
    //     return result;
    // }
    // // "Alt" -> "Option"
    // function convertAltString(str){
    //     var result = str;
    //     if(result == 'Alt')
    //         return 'Option';
    //     return result;
    // }



    const dispProblemSet = document.getElementById('disp_problem_set');
    dispProblemSetFunc(dispProblemSet);
    const words = [];
    let word;
    let startTime;
    let loc = 0;
    let isPlaying = false;
    let isEnd = false;

    let PROBLEM_INDEX;
    let PROBLEM_INDEX_MAX;
    let WORD_LENGTH;
    let WORDS_LENGTH;
    let TOTAL_CHARACTERS;

    var wrongWordFlag = false;
    var wrongCharacterFlag = false;
    var countCorrectWords = 0;
    var countCorrectCharacters = 0;

    var audioType = new Audio();
    var audioMiss = new Audio();
    audioType.src = "audio/type.mp3";
    audioMiss.src = "audio/miss.mp3";
    audioMiss.volume = 0.5;

    // dispWords();

    const target = document.getElementById('target');
    const title = document.getElementById('title');
    const result = document.getElementById('result');
    // document.addEventListener('click', () => {
    target.style.fontSize = "30px";

    document.addEventListener('keydown', e => {
// console.log(`e.key:${e.key}, e.code:${e.code}, e.keyCode:${e.keyCode}`);
        //isPlaying: false, isEnd: false
        // if(isPlaying === true || isEnd == true || e.key !== ' '){
        if(isPlaying === true || isEnd == true || e.key !== 'Shift'){
            return;
        }
        var input = document.getElementById("input");
        PROBLEM_INDEX = Number(input.querySelector("input[name=problem_set]").value);
        PROBLEM_INDEX_MAX = characters.length - 1;
        // WORD_LENGTH = Number(input.querySelector("input[name=length_word]").value);
        WORD_LENGTH = 10;
        WORDS_LENGTH = Number(input.querySelector("input[name=total_problem]").value);
        if(!(PROBLEM_INDEX >= 0 && PROBLEM_INDEX <= PROBLEM_INDEX_MAX)){
            audioMiss.currentTime = 0;
            audioMiss.play();
            return;
        }
        if(!(WORD_LENGTH >= 1 && WORD_LENGTH <= 20)){
            audioMiss.currentTime = 0;
            audioMiss.play();
            return;
        }
        if(!(WORDS_LENGTH >= 1 && WORDS_LENGTH <= 100)){
            audioMiss.currentTime = 0;
            audioMiss.play();
            return;
        }
        title.textContent = "";
        dispProblemSet.textContent = "";
        TOTAL_CHARACTERS = WORD_LENGTH * WORDS_LENGTH;
        input.style.display = "none";
        startTime = Date.now();
        isPlaying = true;
        createWords(characters[PROBLEM_INDEX], WORD_LENGTH, WORDS_LENGTH);
        setWord();
        target.style.fontSize = "48px";
        target.style.color = "black";
    });
















    document.addEventListener('keydown', e => {
        //isPlaying: true, isEnd: false
        if(isPlaying === false || isEnd == true){
            return;
        }
        
        // var ch = convertSpaceString(removeLastRightLeft(removeBracket(word[loc])));
        var ch = removeBracket(word[loc]);
        ch = removeLastRightLeft(ch);
        ch = convertSpaceString(ch);
        ch = convertCommandString(ch);
        ch = convertOptionString(ch);
console.log(ch);


        // if(e.key !== word[loc]){
        if(e.key !== ch){
            // if(e.key !== "Shift" && e.key != " " && e.key != "Control" && e.key != "Meta" && e.key != "Alt" && e.key != "Tab"){
            if(e.key !== "Shift"){
                wrongWordFlag = true;
                wrongCharacterFlag = true;
                // target.style.color = "red";
                audioMiss.currentTime = 0;
                audioMiss.play();
// console.log(1111111111);
// console.log(e.key);
// console.log(22222222);
            }
            return;
        }
        if(!(wrongCharacterFlag)){
            countCorrectCharacters++;
        }
        wrongCharacterFlag = false;
        audioType.currentTime = 0;
        audioType.play();
        loc++;
        // target.textContent = ''.repeat(loc) + word.substring(loc);
        // target.textContent = ''.repeat(loc) + word.slice(loc);
        // target.textContent = ''.repeat(loc) + word.slice(loc).join('');
        // target.textContent = word.slice(loc).join('');
        target.textContent = convertTowardDispString(word.slice(loc));
        if(loc === word.length){
            if(!(wrongWordFlag)){
                countCorrectWords++;
            }
            wrongWordFlag = false;
            if(words.length === 0){
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                // const result = document.getElementById('result');
                //result.textContent = `Finished! ${elapsedTime} seconds!`;
                const correctWordsRatio = countCorrectWords / WORDS_LENGTH * 100;
                const correctCharactersRatio = countCorrectCharacters / TOTAL_CHARACTERS * 100;
                result.innerHTML = `Finished! ${elapsedTime} seconds!<br><br>` +
                // `Number of correct words / total words: ${countCorrectWords} / ${WORDS_LENGTH} (${correctWordsRatio.toFixed(2)}%)<br><br>` +
                `Number of correct problem / total problems: ${countCorrectWords} / ${WORDS_LENGTH} (${correctWordsRatio.toFixed(2)}%)<br><br>` +
                `Number of correct characters / total characters: ${countCorrectCharacters} / ${TOTAL_CHARACTERS} (${correctCharactersRatio.toFixed(2)}%)<br><br>` +
                //  "<br><br> Press space key to reload!";
                 "<br><br> Press shift key to reload!";
                isEnd = true;
                return;
            }
            setWord();
        }
    });
    document.addEventListener('keydown', e => {
        //isPlaying: true, isEnd: true
        // if(isPlaying == false || isEnd === false || e.key !== ' '){
        if(isPlaying == false || isEnd === false || e.key !== 'Shift'){
            return;
        }
        // location.reload();
        createWords(characters[PROBLEM_INDEX], WORD_LENGTH, WORDS_LENGTH);
        startTime = Date.now();
        isEnd = false;
        countCorrectCharacters = 0;
        countCorrectWords = 0;
        setWord();
        result.innerHTML = '';
    });




}
