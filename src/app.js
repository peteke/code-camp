import data from './components/items';
import renderer from './components/render';
import stateManager from './components/stateManager';
import routes from './components/routes';
import {setState} from './components/state';

stateManager.addListener(renderer.render);

data.items()
 .then(items => setState({ data: items }));

window.onhashchange = function(ev){
   	const [url, func, arg] = location.hash.match("^#[\/](.+)[\/](.+)$");
    routes[func](arg);
};

