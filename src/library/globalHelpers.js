import find from "./filters/array/find";
import {ThemeGenerator} from "./ThemeGenerator";

export const functions = {
   getRandomColor(name) {
    // get first alphabet in upper case
    const firstAlphabet = name.charAt(0).toLowerCase();

    // get the ASCII code of the character
    const asciiCode = firstAlphabet.charCodeAt(0);

    // number that contains 3 times ASCII value of character -- unique for every alphabet
    const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

    let num = Math.round(0xffffff * parseInt(colorNum));
    let r = num >> 16 & 255;
    let g = num >> 8 & 255;
    let b = num & 255;

    return {
      color: 'rgb(' + r + ', ' + g + ', ' + b + ', 0.3)',
      character: firstAlphabet.toUpperCase()+name.charAt(1).toUpperCase()
    };
  },
    parseTableStatus(status, mappings = []){
       // take list of mappings: ['tentative' => warning]
        let newmappings = [
          {name:'pending', status:'danger'},
          {name:'suggested', status:'warning'},
          {name:'user', status:'success'},
          {name:'user-p', status:'success'},
        ].concat(mappings)
        //get status mapping:
        let mapping = find(newmappings, status)[0]

        if (!mapping) {
            return 'bg-indigo-100 text-churpy-dark'
        }

        //compute tailwind classes
        return new ThemeGenerator().badge(mapping.status)

    }

}