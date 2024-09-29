export function parseJSONProperties(obj) {
    // Создаем копию объекта, чтобы не изменять исходный объект
    const newObj = { ...obj };

    // Перебираем все свойства объекта
    for (let key in newObj) {
        // Проверяем, является ли значение свойства строкой
        if (typeof newObj[key] === 'string') {
            try {
                // Пытаемся распарсить значение свойства как JSON
                newObj[key] = JSON.parse(newObj[key]);
            } catch (error) {
                // Если не удалось распарсить, оставляем значение без изменений
            }
        }
    }

    return newObj;
}

export const parseJSONData = (jsonData) => {
    try {
        const parsedData = JSON.parse(jsonData);
        return parsedData;
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return null;
    }
};

export function parseJSONData2(jsonData) {
    try {
        const parsedData = JSON.parse(jsonData);
        return parsedData;
    } catch (error) {
        console.error("Ошибка при парсинге JSON данных:", error);
        return null;
    }
}

export function parseJSONPropertiesInArray(arr) {
    // Создаем новый массив для сохранения преобразованных объектов
    const newArr = [];

    // Перебираем все объекты в массиве
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];

        // Создаем новый объект для сохранения преобразованных свойств
        const newObj = {};

        // Перебираем все свойства в объекте
        for (let key in obj) {
            // Проверяем, является ли значение свойства строкой
            if (typeof obj[key] === 'string') {
                try {
                    // Пытаемся распарсить значение свойства как JSON
                    newObj[key] = JSON.parse(obj[key]);
                } catch (error) {
                    // Если не удалось распарсить, оставляем значение без изменений
                    newObj[key] = obj[key];
                }
            } else {
                // Если значение не является строкой, оставляем его без изменений
                newObj[key] = obj[key];
            }
        }

        // Добавляем преобразованный объект в новый массив
        newArr.push(newObj);
    }

    return newArr;
}