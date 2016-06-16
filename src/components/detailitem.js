import {getState} from './state';
import imageResolve from './imageResolve';

export default {   
    draw: function(itm) {
        let stateInstance = getState();
        console.log(itm);
        return `<div>
           <h1>${itm.name}<h1>
           <p><h4>category:</h4>${itm.category}</p>
           <p><h4>number:</h4>${itm.number}</p>
           <img src="${imageResolve.getImagePath(itm.imagePath, 'medium')}"></img>
           <p><a href="#/page/${stateInstance.currentpage}">Back to list</a></p>
        </div>`;
    }
};

