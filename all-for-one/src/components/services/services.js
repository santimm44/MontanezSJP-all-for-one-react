const addingTwoNumbersAPICall = async (firstNumber, secondNumber) => {
    const fetchResponse = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/AddingTwoNumber/AddingTwoNumbers/${FirstNumber},${SecondNumber}`,{
        method: "POST"
    })
    const data = await fetchResponse.text()
    return data
}

const askingQuestionsAPICall = async (time,name) => {
    const fetchResponse = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/AskingQuestion/GoodMorning/${time},${name}`,{
        method: "POST"
    })
    const data = await fetchResponse.text()

    return data
}
const greaterThanOrLessThanAPICall = async () => {
    const fetchResponse = await fetch(``)
    const data = await fetchResponse.text()

    return data
}
const guessItAPICall = async () => {
    const fetchResponse = await fetch(``)
    const data = await fetchResponse.text()

    return data
}
const helloWorldAPICall = async (name) => {
    const fetchResponse = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/HelloWorld/HelloWorld/${name}`,{
        method: "POST"
    })
    const data = await fetchResponse.text()

    return data
}
const madlibAPICall = async () => {
    const fetchResponse = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/Madlib/Madlib/${monster},${monsterAdjec},${noun1},${noun2},${object1},${object2},${location},${location2},${userName},${userNameAdjec}`,{
        method: "POST"
    })
    const data = await fetchResponse.text()


    return data
}
const magic8BallAPICall= async(question)=>{
    const fetchResponse = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/${question}`,{
        method: "GET"
    })
    const data = await fetchResponse.text()
    return data;
}
const oddOrEvenAPICall = async () => {
    const fetchResponse = await fetch(``)
    const data = await fetchResponse.text()

    return data
}
const restaurantPickerAPICall = async () => {
    const fetchResponse = await fetch(``)
    const data = await fetchResponse.text()

    return data
}
const reverseItAlphanumericAPICall = async () => {
    const fetchResponse = await fetch(``)
    const data = await fetchResponse.text()

    return data
}
const reverseItNumbersOnlyAPICall = async () => {
    const fetchResponse = await fetch(``)
    const data = await fetchResponse.text()

    return data
}
