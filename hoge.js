
    // 'BB [[option]] B [[option]] [[space]] AAAA' -> ['BB', '[[option]]', 'B', '[[option]]', '[[space]]', 'AAAA']
    function createCharactersArray(str){
        let _str = str;
        let _arr = [];
        let _index = 0;
        while(_index < _str.length){
            if(_str[_index] === '['){
                _arr.push(_str.slice(0, _index));
                _str = _str.slice(_index);
                _index = _str.indexOf(']') + 1;
                _arr.push(_str.slice(0, _index));
                _str = _str.slice(_index);
                _index = 0;
            }else{
                _index++;
            }
        }
        _arr.push(_str);
        return _arr;
    }
    // ['BB', '[[option]]', 'AAA', '[[space]]', 'AAAA'] -> ['B', 'B', '[[option]]', 'A', 'A', 'A', '[[space]]', 'A', 'A', 'A', 'A']
    function createCharactersArray2(arr){
        let _arr = [];
        arr.forEach(function(str){
            if(str[0] === '['){
                _arr.push(str);
            }else{
                for(let i = 0; i < str.length; i++){
                    _arr.push(str[i]);
                }
            }
        });
        return _arr;
    }

    //'BB [[option]] B [[space]] AAAA' -> ['B', 'B', '[[option]]', 'B', '[[space]]', 'A', 'A', 'A', 'A']
    function createCharactersArray3(str){
        let _str = str;
        let _arr = [];
        let _index = 0;
        while(_index < _str.length){
            if(_str[_index] === '['){
                _arr.push(_str.slice(0, _index));
                _str = _str.slice(_index);
                _index = _str.indexOf(']') + 1;
                _arr.push(_str.slice(0, _index));
                _str = _str.slice(_index);
                _index = 0;
            }else{
                _index++;
            }
        }
        _arr.push(_str);
        return createCharactersArray2(_arr);
    }

    console.log(createCharactersArray('BB [[option]] B [[space]] AAAA'));
    // 'BB [[option]] B [[option]] [[space]] AAAA' -> ['BB', '[[option]]', 'B', '[[option]]', '[[space]]', 'AAAA']
    function createCharactersArray4(str){
        let _str = str;
        let _arr = [];
        let _index = 0;
        while(_index < _str.length){
            if(_str[_index] === '['){
                _arr.push(_str.slice(0, _index));
                _str = _str.slice(_index);
                _index = _str.indexOf(']') + 1;
                _arr.push(_str.slice(0, _index));
                _str = _str.slice(_index);
                _index = 0;
            }else{
                _index++;
            }
        }
        _arr.push(_str);
        return _arr;
    }
    console.log(createCharactersArray4('BB [[option]] B [[space]] AAAA'));