export default{
    draw: function(stateInstance){
        let previous = (stateInstance.currentpage > 1) ? `<a href="#/page/${stateInstance.currentpage - 1}">prev</a>` : '';
        let next = (stateInstance.currentpage < parseInt(stateInstance.data.length / stateInstance.pagesize) + 1) ? `<a href="#/page/${stateInstance.currentpage + 1}">next</a>`: '';
        return previous + (previous !== '' && next !== '' ? '&nbsp;|&nbsp;' : '') + next;
    }
};