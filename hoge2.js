
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