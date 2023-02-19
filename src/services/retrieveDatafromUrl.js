export const retrieveDatafromUrl = (urlQuery) => {
    let data = {};
    if (urlQuery.search.includes('hash') && urlQuery.search.includes('id') && urlQuery.search.includes('auth_date')) {
        let rowDataArray = urlQuery.search.slice(1).split('&');
    
        let index = 0;
        while (index < rowDataArray.length) {
            let currentPair = rowDataArray[index].split('=');
            data[currentPair[0]] = currentPair[1];
            index++;
        }
        
        data.success = true;
    } else {
        data.success = false;
    }
    return data;
}

export default retrieveDatafromUrl;