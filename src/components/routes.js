import {setState} from './state';

export default {
    page: function(arg){
        setState({currentpage: parseInt(arg), viewmode: 'list'});
    },
    details: function(arg){
        setState({viewmode: 'details', currentid: arg});
    }
};