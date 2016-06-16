import listitem from './listitem';

export default{
    draw: function(stateInstance){
        return `<table>
                    <thead>
                        <th></th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Category</th>
                    </thead>
            ${stateInstance.data.map((itm, index) => { 
                if (index >= stateInstance.pagesize*(stateInstance.currentpage-1) && index < stateInstance.pagesize*stateInstance.currentpage){
                    return listitem.draw(itm);
                }
            }).join('')}
        </table>`;
    }
};