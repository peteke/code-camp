import stateManager from './stateManager';

const state = {
    viewmode: 'list',
    pagesize: 10,
    currentpage: 1,
    data: [],
    currentid: ''
};

export function getState(){
    return Object.assign({}, state);
}

export function setState(settings){
    Object.assign(state, settings);
    stateManager.triggerStateChanged();
}