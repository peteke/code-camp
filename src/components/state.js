const state = {
    viewmode: 'list',
    pagesize: 10,
    currentpage: 1,
    data: []
};

export function getState(){
    return Object.assign({}, state);
};

export function setState(settings){
    Object.assign(state, settings);
};