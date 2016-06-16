import {getState} from './state';
import detailitem from './detailitem';
import list from './list';

export default {  
    render: function(){
        const stateInstance = getState();
        console.log(stateInstance);
        let output = '';
        if (stateInstance.viewmode === 'list'){
            output = list.draw(stateInstance);
        }
        else if (stateInstance.viewmode === 'details'){
            output = detailitem.draw(stateInstance.data.filter(itms => itms.id === stateInstance.currentid)[0]);
        }
        drawBody(output);
    }
};

function drawBody(html){
    document.getElementById('main').innerHTML = html;
}
