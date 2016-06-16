import data from './components/items';
import renderer from './components/render';

data.items()
 .then(items => renderer.list(items))
 .then(out => document.getElementById('main').innerHTML = out);

// const baseImageUrl = 'http://psgfe.azurewebsites.net/assets/images/categories. . _medium.xxx';