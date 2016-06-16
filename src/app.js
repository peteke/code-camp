import data from './components/items';
import renderer from './components/render';
import {setState} from './components/state';
import stateManager from './components/stateManager';
import routes from './components/routes';

stateManager.addListener(renderer.render);

data.items()
 .then(items => setState({ data: items }));

window.onhashchange = function(ev){
   	const [url, func, arg] = location.hash.match("^#[\/](.+)[\/](.+)$");
    routes[func](arg);
};
// const baseImageUrl = 'http://psgfe.azurewebsites.net/assets/images/categories. . _medium.xxx';