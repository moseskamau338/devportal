export class ThemeGenerator{
    toast(type){
        return {
            borderColor: (() => {
                switch(type) {
                    case 'success': return 'border-green-500';
                    case 'danger' :return 'border-red-500';
                    case 'warning' : return 'border-yellow-600';
                    default: return 'border-indigo-300';
                }
              })(),
            icon: (() => {
                switch(type) {
                    case 'success': return 'fa-check text-brand-green';
                    case 'danger' :return 'fa-hexagon-minus text-red-500';
                    case 'warning' : return 'fa-triangle-exclamation text-yellow-700';
                    default: return 'fa-info text-brand-gray';
                }
              })(),
            iconContainer: (() => {
                switch(type) {
                    case 'success': return 'bg-green-200 border-green-500';
                    case 'danger' :return 'bg-red-100 border-red-300';
                    case 'warning' : return 'bg-yellow-100 border-yellow-300';
                    default: return 'bg-indigo-100 border-indigo-300';
                }
              })(),
        }
    }
    alert(variant){
        return {
          bgColor: (() => {
            switch(variant) {
            case 'success': return 'bg-green-100 border-green-400';
            case 'danger' :return 'bg-red-100 border-red-400';
            case 'warning' : return 'bg-yellow-100 border-yellow-400';
            default: return 'bg-blue-100 dark:bg-blue-300 border-blue-400';
            }
          })(),

          icon: (() => {
            switch(variant) {
            case 'success': return 'fa-check text-brand-green';
            case 'danger' :return 'fa-hexagon-minus text-red-500';
            case 'warning' : return 'fa-triangle-exclamation text-yellow-700';
            default: return 'fa-circle-info text-blue-600';
            }
          })(),

          text: (() => {
            switch(variant) {
            case 'success': return 'text-brand-green';
            case 'danger' :return 'text-red-500';
            case 'warning' : return 'text-yellow-700';
            default: return 'text-blue-600 dark:text-blue-800';
            }
          })()


        }
    }
    button(variant){
        return {
          theme: (() => {
            switch(variant) {
            case 'success': return 'text-white bg-brand-green hover:bg-green-600 focus:ring-brand-green';
            case 'danger' :return 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-500';
            case 'warning' : return 'text-white bg-orange-400 hover:bg-orange-500 focus:ring-orange-400';
            case 'dark' : return 'text-white bg-dark hover:bg-dark/90 focus:ring-dark';
            default: return 'text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500';
            }
          })(),


        }
    }
    badge(status){
         switch(status) {
            case 'success': return 'bg-green-100 text-green-500';
            case 'danger' :return 'bg-red-100 text-red-500';
            case 'warning' : return 'bg-orange-100 text-orange-500';
            default: return 'bg-blue-100 dark:bg-blue-300 border-blue-400';
        }
    }
}
