import imageResolve from './imageResolve';

export default {
    draw: function(itm) {
        return `<tr>
                    <td><img src="${imageResolve.getImagePath(itm.imagePath, 'thumb')}"></img></td>
                    <td><a href="#/details/${itm.id}">${itm.name}</a></td>
                    <td>${itm.id}</td>
                    <td>${itm.category}</td>
                </tr>`;
    }
};