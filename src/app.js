import data from './components/items';
import item from './components/item';

data.items()
 .then(items => items.map(itm => item.draw(itm)))
 .then(out => document.getElementById('main').innerHTML = out);

// const baseImageUrl = 'http://psgfe.azurewebsites.net/assets/images/categories. . _medium.xxx';