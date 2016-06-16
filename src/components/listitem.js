export default {
    draw: function(itm) {
        return `<li>
            <a href="#/details/${itm.id}">${itm.name}</a>
        </li>`;
    }
};