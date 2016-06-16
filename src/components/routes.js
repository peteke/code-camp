import {setState} from './state';

export default {
    page: function(arg){
        setState({currentpage: parseInt(arg)});
    },
};