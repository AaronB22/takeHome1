import {data} from '../model/db.connect.js'

export const allTickets=(query)=>{
    let returnArr= filterTicket(query)
    console.log(query.sort)
    if(query.sort!==' '&& query.sort!==''&&query.sort){
        
        returnArr= sortTickets(query.sort, returnArr);
    }
    returnArr =fieldLimiter(query.fields, returnArr)
    return returnArr;
}

export const ticketById=(id)=>{
    let returnobj=null;
    data.forEach(el=>{ 
        if(el.id===Number(id)){
            returnobj=el;
        }
        return null;
    })
    return returnobj;
}

const fieldLimiter=(fields,arr)=>{
    if(fields===''||fields===' '||!fields){
        return arr;
    }
    const fieldsarr=fields.split(',')
    const returnArr=[]
    arr.forEach(el=>{
        let newObj='{'
        for(let i=0; i<fieldsarr.length;i++){
            const field= fieldsarr[i];
            if(el[field]){
                newObj+= `"${field}": "${el[field]}"`

            }
            if(i<fieldsarr.length-1){
                newObj+=', ';
            }
        }
        newObj+= '}'
        const parsedNewObj= JSON.parse(newObj);
        returnArr.push(parsedNewObj)
    })
    return returnArr;
}

const filterTicket=(query)=>{
    const { status, priority, assignee} = query;
    let currentData = data;
    let returnData = [];
    if (!status && !priority && !assignee) {
        returnData = data;
    }
    if (status) {
        currentData.forEach(el => {
            if (el.status === status) {
                returnData.push(el)
            }
        })
        //this shortens the data array for other loops, as it will remove any ticket that won't be return anyways. 
        currentData = returnData;
        //resets return array for next loop
        returnData = []
    }
    if (priority) {
        currentData.forEach(el => {
            if (el.priority === priority) {
                returnData.push(el)
            }
        })
        currentData = returnData;
        returnData = []
    }
    if (assignee) {
        currentData.forEach(el => {
            if (el.assignee === assignee) {
                returnData.push(el)
            }
        })
        currentData = returnData
        returnData = []
    }
    returnData = currentData;

    return returnData;
}


const sortTickets = (sortBy, arr) => arr.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
    });