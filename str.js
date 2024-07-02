//////  func 1   ////   
function reverseString(string){
    var result=" "
for (var x=0;x<string.length;x++){
    result=string.charAt(x)+result
} return result
}
undefined
reverseString('hello')
'olleh '

//////  func 2   ////   
function countCharacters( string){
    var L= string.length
    return L
}
undefined
countCharacters("Hello World!")
12

//////  func 3   ////  
function CapitalizeWords(string){
    var result = string[0].toUpperCase()+string.substr(1);
        return result
}
undefined
CapitalizeWords("hello world!")
'Hello world!'