import {setState} from './state';

export default{
    draw: function(stateInstance){
        setTimeout(() => document.getElementById('pagesize').addEventListener('change', e => changePageSize(stateInstance, e)), 150);
        return  `<select id="pagesize" name="pagesize">${[10,25].map(size => getPageSizeOption(stateInstance, size)).join('')}}</select>`;
    }
};

function changePageSize(stateInstance, e){
    setState({pagesize: parseInt(e.target.value), currentpage: 1});
}

function getPageSizeOption(stateInstance, val){
    return `<option ${(val === stateInstance.pagesize ? 'selected': '')} value="${val}">${val}</option>`; 
}