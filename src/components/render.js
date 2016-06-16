import item from './item';
import {getState} from './state';

export default {
    
    render: function(items){
        const stateInstance = getState();
        if (stateInstance.viewmode === 'list'){
            return list(items);
        }
    }
};

function list(items){
    const stateInstance = getState();
    return `<ul>
        ${items.map((itm, index) => { 
            if (index >= stateInstance.pagesize*(stateInstance.currentpage-1) && index < stateInstance.pagesize*stateInstance.currentpage){
                return item.draw(itm);
            }
        }).join('')}
    </ul>`;
}
