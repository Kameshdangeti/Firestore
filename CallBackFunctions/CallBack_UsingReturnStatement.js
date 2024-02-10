function callbackFunction(element, index, array) 
{
    const isNotString = typeof element !== "string";
    if (isNotString) 
    {
        return;
    }
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    if (!isItThreeUpperCaseLetters) 
    {
        return;
    }
    const allDifferentCharacters = element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2];
    if (!allDifferentCharacters) 
    {
        return;
    }
    const isItFirstAppearence = array.indexOf(element) === index;
    if (!isItFirstAppearence) 
    {
        return;
    }
    return true;
}