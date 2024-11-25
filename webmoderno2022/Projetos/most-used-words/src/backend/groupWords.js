module.exports = (word) => {
    return new Promise((resolve, reject) => {
        try {

            const groupedWords = word.reduce((obj, word) => {
                if(obj[word]){
                    obj[word] = obj[word] + 1
                }else{
                    obj[word] = 1
                }
                return obj
            },{})

            // Tranformando o Objeto que foi criado 'groupedWords', em um Array de Objeto
            const groupeWordsArray = Object.keys(groupedWords)
                                                .map(key => ({word: key, amount: groupedWords[key]}))
                                                .sort((w1, w2) => w2.amount-w1.amount)
            
            resolve(groupeWordsArray)
        } catch (error) {
            reject(error)
        }
    })
}