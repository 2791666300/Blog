export const arrayPanel = (data, type, includ) => {
    let arr = [];
    console.log('arrayPanel', data)
    if (data) {
        if (data[type].includes(includ)) {
            arr = data[type].filter((item) => item !== includ);
        } else {
            arr = [...data[type], includ];
        }
    }
    return [...new Set(arr)]
}