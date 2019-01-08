export const solve = (x,y) => {
    const outerCircleRadius = 10;
    const middleCircleRadius = 5;
    const innerCircleRadius = 1;

    const outerCirclePoints = 1;
    const middleCirclePoints = 5;
    const innerCirclePoints = 10;

    if (isNaN(x) || isNaN(y)) {
        return null;
    }

    if (x <= innerCircleRadius && y <= innerCircleRadius) {
        return innerCirclePoints;
    } else  {
        if (x <= middleCircleRadius && y <= middleCircleRadius) {
            return middleCirclePoints;
        } else {
            if (x <= outerCircleRadius && y <= outerCircleRadius) {
                return outerCirclePoints;
            } else return 0;
        }
    }
}