export const reverseString = (string) => {
    let reversed = '';
    for (let x = string.length - 1; x > -1; x--) {
        reversed = reversed.concat(string[x]);
    }
    return reversed;
}