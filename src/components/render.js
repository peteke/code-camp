import listitem from './listitem';
import {getState} from './state';
import {setState} from './state';
import detailitem from './detailitem';

export default {  
    render: function(){
        const stateInstance = getState();
        console.log(stateInstance);
        let output = '';
        if (stateInstance.viewmode === 'list'){
            output = list(stateInstance);
            output += paging(stateInstance);
        }
        else if (stateInstance.viewmode === 'details'){
            output = details(stateInstance);
        }
        drawBody(output);
    }
};

function list(stateInstance){
    return `<ul>
        ${stateInstance.data.map((itm, index) => { 
            if (index >= stateInstance.pagesize*(stateInstance.currentpage-1) && index < stateInstance.pagesize*stateInstance.currentpage){
                return listitem.draw(itm);
            }
        }).join('')}
    </ul>`;
}

function paging(stateInstance){
    let previous = (stateInstance.currentpage > 1) ? `<a href="#/page/${stateInstance.currentpage - 1}">prev</a>` : '';
    let next = (stateInstance.currentpage < parseInt(stateInstance.data.length / stateInstance.pagesize) + 1) ? `<a href="#/page/${stateInstance.currentpage + 1}">next</a>`: '';
    return previous + (previous !== '' && next !== '' ? '&nbsp;|&nbsp;' : '') + next;
}

function details(stateInstance){
    return detailitem.draw(stateInstance.data.filter(itms => itms.id === stateInstance.currentid)[0]);
}

function drawBody(html){
    document.getElementById('main').innerHTML = html;
}

function previous(){
    const stateInstance = getState();
    if (stateInstance.currentpage <= 1)
        return;
    setState({ currentpage: --stateInstance.currentpage });
}

function next(){
    const stateInstance = getState();
    if (stateInstance.currentpage >= stateInstance.data.length / stateInstance.pagesize)
        return;
    setState({ currentpage: ++stateInstance.currentpage });
}