const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let arrChar = [];
    for (let i = 0; i < expr.length; i += 10) {
     arrChar.push(expr.slice(i, i + 10));
    }
    arrChar.map((item, index) => {
      let morseChar = '';
      let char = '';
      if(item.indexOf('**********') !== -1){
        result += ' ';
      }
      for (let i = 0; i < item.length; i += 2) {
        char = item.slice(i, i + 2)
        if(char === '10'){
          morseChar += '.'
        }else if(char === '11'){
          morseChar += '-'
        }
      }
      if(MORSE_TABLE[morseChar] !== undefined){
        result += MORSE_TABLE[morseChar];
      }
      
      
    })
    return result;
}

module.exports = {
    decode
}