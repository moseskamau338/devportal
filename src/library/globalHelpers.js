import find from "./filters/array/find";
import {ThemeGenerator} from "./ThemeGenerator";

export const functions = {
   getRandomColor(name, opacity = 0.3) {
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
      color: 'rgb(' + r + ', ' + g + ', ' + b + ', '+opacity+')',
      character: firstAlphabet.toUpperCase()+name.charAt(1).toUpperCase()
    };
  },
   parseTableStatus(status, mappings = []){
       // take list of mappings: ['tentative' => warning]
        let newmappings = [
          {name:'pending', status:'danger'},
          {name:'suggested', status:'warning'},
          {name:'sandbox', status:'warning'},
          {name:'live', status:'success'},
          {name:'user-p', status:'success'},
        ].concat(mappings)
        //get status mapping:
        let mapping = find(newmappings, status)[0]

        if (!mapping) {
            return 'bg-indigo-100 text-churpy-dark'
        }

        //compute tailwind classes
        return new ThemeGenerator().badge(mapping.status)

    },
   ensignFigure(num){
		if (typeof num === 'string'){
		  return  parseFloat(this.cleanUpCurrency(num).toFixed(2))
		}else if(typeof num === 'number'){
			return parseFloat(num.toFixed(2))
		}
	},
   cleanUpCurrency(s){
        let expression = /^\$?\(?[\d,.]*\)?$/;
        //remove commas
        s = s.split(',').join('')
        //remove spaces
        s = s.split(' ').join('')
        //Check if it is in the proper format
        if (!isNaN(parseFloat(s))) return parseFloat(s);
        if(s.match(expression)){
            //It matched - strip out parentheses and append - at front
            return parseFloat('-' + s.replace(/[$(),]/g,''));
        }else{
            return parseFloat(s);
        }
    },
   currency(val,decimals = 2,addSymbol = false){
       if (!addSymbol){
          return new Intl.NumberFormat('en-US', {minimumFractionDigits: decimals, maximumFractionDigits:3}).format(val)
       }
       return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES', minimumFractionDigits: decimals, maximumFractionDigits:3 }).format(val)
   },
   formatMyNumber(x, dp=2){
        x = parseFloat(x).toFixed(dp);
        if(x && !isNaN(x)){
            var num_parts = x.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }
        return x;
    },
}