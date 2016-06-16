import listview from './listview';
import paging from './paging';
import pagesize from './pagesize';

export default{
    draw: function(stateInstance){
        return `<div>
            ${listview.draw(stateInstance)}
        </div>
        <div>   
            ${paging.draw(stateInstance)} ${pagesize.draw(stateInstance)}
        </div>`;
    }
};