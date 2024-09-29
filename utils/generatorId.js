export function generateNumericId() {
    // Генерируем случайное шестизначное число
    const numericId = Math.floor(Math.random() * 900000) + 100000;
    return numericId.toString();
}

export function checkDuplicateId(idList, newId) {
    // Проверяем, есть ли уже такой ID в списке
    if (idList.includes(newId)) {
        return generateNumericId(); // ID уже существует
    } else {
        return newId; // ID уникален
    }
}



