module.exports = (rows) => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows.filter(filterRowValid)
            .map(removePontuation)
            .map(removeTags)
            .reduce(mergeRows)
            .split(' ')
            .map(word => word.toLowerCase())

            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

function filterRowValid(row){
    const notNumber = !parseInt(row.trim())
    const notEmply = !!row.trim()
    const notInterval = !row.includes('-->')

    return notNumber && notEmply && notInterval
}

function removePontuation(row){
    return row.replace(/[,?"!:;.-]/g, '')
}

function removeTags(row){
    return row.replace(/(<[^>]+)>/g, '').trim()
}

function mergeRows(fullText, rowText){
    return `${fullText} ${rowText}`
}