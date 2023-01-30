const cipher = {
  encode: function (offset, text){
    if (offset === "" || offset === 0 || text === "" || text === null){
      throw new TypeError ();
    }

    let result = "";
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++){
      const position = text.charCodeAt(i);

      if (position >= 65 && position <=90){
        result += String.fromCharCode(((position - 65 + offset) % 26) + 65);
      }
      if (position >= 32 && position <= 64){
        result += text.charAt(i);
      }
    }
    return result;
  },

  decode: function (offset, text){
    if (offset === "" || offset === 0 || text === "" || text === null){
      throw new TypeError ();
    }

    let result = "";
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++){
      const position = text.charCodeAt(i);

      if (position >= 65 && position <=90){
        result += String.fromCharCode(((position + 65 - offset) % 26) + 65);
      }
      if (position >= 32 && position <= 64){
        result += text.charAt(i);
      }
    }
    return result;
  },
};

export default cipher;
