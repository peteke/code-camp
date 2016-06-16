import {getState} from './state';

export default {
   
    draw: function(itm) {
        let stateInstance = getState();
        console.log(itm);
        return `<div>
           <h1>${itm.name}<h1>
           <p><h4>category:</h4>${itm.category}</p>
           <p><h4>number:</h4>${itm.number}</p>
           <img src="${getImagePath(itm.imagePath)}"></img>
           <p><a href="#/page/${stateInstance.currentpage}">Back to list</a></p>
        </div>`;
    }
};

function getImagePath(s){
    let baseurl = 'http://psgfe.azurewebsites.net/assets/images/';
    let fileExtension = s.substring(s.indexOf('.'));
    return baseurl + s.replace(fileExtension, "_medium" + fileExtension);
}