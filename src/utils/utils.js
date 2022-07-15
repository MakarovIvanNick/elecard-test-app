export function firstLetterUpper (str) {
    return str[0].toUpperCase() + str.slice(1,str.length);
}

export function sortByFilter(nameFilter, data) {
    let sortedData = {};
    switch (nameFilter){
        case 'date':
            for (let key in data) {
                const temp = data[key].sort((a,b) => {if(a.timestamp < b.timestamp) {return -1;} else if(a.timestamp > b.timestamp) {return 1;}});
                sortedData[key] = temp;
            }
            return sortedData;
        case 'filesize':
            for (let key in data) {
                const temp = data[key].sort((a,b) => {if(a.filesize < b.filesize) {return -1;} else if(a.filesize > b.filesize) {return 1;}});
                sortedData[key] = temp;
            }
            return sortedData;
    }
}

export function checkSize () {
    const init = JSON.parse(localStorage.getItem('initialData'));
    const deleted = JSON.parse(localStorage.getItem('deletedData'));
    for (let key in init) {
        const check = deleted[key].length === init[key].length;
        if (!check) {
            return check;
        }
    }
    return true;
}
