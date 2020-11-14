var readline = require('readline');
var output = "";
//
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function isLetter(str) {
  return str.length === 1 && (str.match(/[a-z]/i) || str.match(/[A-Z]/i) || str.match(/^[0-9]+$/i) || str.match(/[!-@-#-$-%-^-&-*-(-)]/i) || str == 'ç' || str == 'Ç');
}

rl.on('line', function(line){
  for (i = 0; i < line.length; i++){
    if (isLetter(line[i])){
      switch(line[i].toLowerCase()){
        case 'a': output+='ç';
        break;
        case  "b": output+='c';
        break;
        case  'c': output+='b';
        break;
        case  'd': output+='k';
        break;
        case  'e': output+='i';
        break;
        case  'f': output+='j';
        break;
        case  'g': output+='h';
        break;
        case  'h': output+='g';
        break;
        case  'i': output+='e';
        break;
        case  'j': output+='f';
        break;
        case  'k': output+='d';
        break;
        case  'l': output+='s';
        break;
        case  'm': output+='z';
        break;
        case  'n': output+='x';
        break;
        case  'o': output+='w';
        break;
        case  'p': output+='q';
        break;
        case  'q': output+='p';
        break;
        case  'r': output+='u';
        break;
        case  's': output+='l';
        break;
        case  't': output+='y';
        break;
        case  'u': output+='r';
        break;
        case  'v': output+='v';
        break;
        case  'w': output+='o';
        break;
        case  'x': output+='n';
        break;
        case  'y': output+='t';
        break;
        case  'z': output+='m';
        break;
        case 'ç': output+='a';
        break;
        case '1': output+=')';
        break;
        case '2': output+='(';
        break;
        case '3': output+='*';
        break;
        case '4': output+='&';
        break;
        case '5': output+='^';
        break;
        case '6': output+='&';
        break;
        case '7': output+='$';
        break;
        case '8': output+='#';
        break;
        case '9': output+='@';
        break;
        case '0': output+='!';
        break;
        case ')': output+=1; 
        break;
        case '(': output+=2;
        break;
        case '*': output+=3;
        break;
        case '&': output+=4;
        break;
        case '^': output+=5;
        break;
        case '%': output+=6;
        break;
        case '$': output+=7;
        break;
        case '#': output+=8;
        break;
        case '@': output+=9;
        break;
        case '!': output+=0;
        break;
        default: break;
      }
    } else {
      output+=line[i];
    }
  }
  console.log(output);
  output = "";
}) 