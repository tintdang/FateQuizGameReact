import { characters } from "./characters"

export const calculateCharacter = (answers: Array<string>) => {
    // console.log("answers", answers)
    let characterScore: Array<number> = []
    let totalScore: Array<number> = []

    const answerList = answers
    // console.log("characters", characters)
    // get list of character scores
    // console.log(Object.values(answers))
    for (let i = 0; i < characters.length; i++){
        console.log(`${characters[i].name} scores are: `)
        for (let j = 0; j < characters[i].scores.length; j++){
            let total = Math.abs(characters[i].scores[j] - parseInt(answerList[j]))
            console.log(total)
            characterScore.push(total)
        }
        // console.log(characterScore)

        // sum all values in the array
        const sum = characterScore.reduce((a, b) => {
            return a + b;
        })
        totalScore.push(sum)
        characterScore = []
    }
    console.log('totoal scores', totalScore)

    const selectedChar = getLowestIndex(totalScore)

    console.log(`you are this character, ${characters[selectedChar].name}`)
    return characters[selectedChar]
}

const getLowestIndex = (array: Array<number>) => {
    let low = array[0]
    let lowIndex = 0
    for(let i = 1; i < array.length; i++){
        if (array[i] < low) {
            low = array[i]
            lowIndex = i
        }
        else if (array[i] === low){
            if(coinFlip()){
                low = array[i]
                lowIndex = i;
            }
            else{
                continue
            }
        }
    }
    return lowIndex
}

const coinFlip = () => {
    return (Math.floor(Math.random() * 2) == 0)
}