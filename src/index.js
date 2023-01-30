import cipher from './cipher.js';

const key = document.getElementById("key");
const message01 = document.getElementById("message01");
const btnEncode = document.getElementById("btnEncode");
const btnDecode = document.getElementById("btnDecode");
const message02 = document.getElementById("message02");

btnEncode.addEventListener("click", acaoEncode);
btnDecode.addEventListener("click", acaoDecode);

function acaoEncode(){
  message02.value = cipher.encode(parseInt(key.value), message01.value);
}


function acaoDecode(){
  message02.value = cipher.decode(parseInt(key.value), message01.value);
}