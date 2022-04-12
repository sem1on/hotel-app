function wordFormat(count, wordsArr){
    const rounding = count % 10;

    if (rounding > 1 && rounding < 5) {
        return wordsArr[1];
    }

    if (rounding === 1) {
        return wordsArr[0];
    }

    return wordsArr[2];
}

export function hotelsFormat(count) {
    return wordFormat(count, ["отель", "отеля", "отелей"])
}

export function daysFormat(count) {
    return wordFormat(count, ["день", "дня", "дней"])
}