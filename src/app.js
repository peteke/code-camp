import data from './components/items';
import renderer from './components/render';
import state from './components/state';

data.items()
 .then(items => renderer.render(items))
 .then(out => document.getElementById('main').innerHTML = out);

// const baseImageUrl = 'http://psgfe.azurewebsites.net/assets/images/categories. . _medium.xxx';