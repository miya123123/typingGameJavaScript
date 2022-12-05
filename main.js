'use strict'
{
    function setWord(){
        // word = words[Math.floor(Math.random() * words.length)];
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
        loc = 0;
    }

    function createWords(characterSet, word_length, words_length){
        let ch;
        let _word;
        for(let j = 0; j < words_length; j++){
            _word = '';
            for(let i = 0; i < word_length; i++){
                ch = characterSet[Math.floor(Math.random() * characterSet.length)];
                _word += ch;
                // word += 'a';
            }
            words.push(_word);
        }
    }

    const characters = [
        'abcdefghijklmnopqrstuvwxyz', //0
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', //1
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', //2
        '!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\', //3
        '!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\1234567890', //4
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"#$%&\'()-=^~|`@{[;+:*]},<.>/?_\\', //5
        // ['BB [option] B [option] [space] AAAA'], //5
        // 'BB [[option]] B [[option]] [[space]] AAAA', //5
        // '!"#$%&\'()-=^~|`@{[;;;;+::::*]},<.>/?_\\', //10
        // '!"#$%&\'()-=^~|`@{[;;;;+::::*]},<.>/?_\\1234567890', //11
    ]

    // 'BB [[option]] B [[option]] [[space]] AAAA' -> ['B', 'B', '[[option]]', 'B', '[[option]]', '[[space]]', 'A', 'A', 'A', 'A']
    // 'BB[[kkd.i,]]CC' -> ['B', 'B', '[[kkd.i,]]', 'C', C']
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


    // console.log(splitCharacterSet(''));
    // console.log(splitCharacterSet(' BB [[option]] B [[option]] [[space]] AAAA'));
    // console.log(splitCharacterSet(' [[option]] B [[option]] [[space]] AAAA [[space]] '));
    // console.log(splitCharacterSet('BB[[kkd.i,]]CC'));
    // console.log(splitCharacterSet('BB [[kkd.i,]]CC'));
    // console.log(splitCharacterSet('  BB [[kkd.i,]] C[[AAA]]C '));
    // console.log(splitCharacterSet('  BB [[kkd.i,]] [[AAA]]C '));
    // console.log(splitCharacterSet('  BB [kkd.i,] [[AAA]]C '));









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
        console.log(str);
        _dispProblemSet.innerHTML = str;
    }



    function dispWords(){
        for(let row = 0; row < words.length; row++){
            console.log(words[row]);
        }
    }

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

    // console.log(e.key);
    console.log(`e.key:${e.key}, e.code:${e.code}, e.keyCode:${e.keyCode}`);
    if(e.key == 'Enter') console.log('Enter is pressed');
    if(e.key == 'Space') console.log('Space is pressed');

        //isPlaying: false, isEnd: false
        if(isPlaying === true || isEnd == true || e.key !== ' '){
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
        //early return
        if(isPlaying === false || isEnd == true){
            return;
        }
        if(e.key !== word[loc]){
            if(e.key !== "Shift" && e.key != " " && e.key != "Control" && e.key != "Meta" && e.key != "Alt" && e.key != "Tab"){
                wrongWordFlag = true;
                wrongCharacterFlag = true;
                // target.style.color = "red";
                audioMiss.currentTime = 0;
                audioMiss.play();
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
        target.textContent = ''.repeat(loc) + word.substring(loc);
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
                 "<br><br> Press space key to reload!";
                isEnd = true;
                return;
            }
            setWord();
        }
    });
    document.addEventListener('keydown', e => {
        //isPlaying: true, isEnd: true
        if(isPlaying == false || isEnd === false || e.key !== ' '){
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
