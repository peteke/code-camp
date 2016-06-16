import item from './item';

export default {
    list: function(items){
        return `<ul>
            ${items.map(itm => item.draw(itm)).join('')}
        </ul>`;
    }
};