figma.showUI(__html__, { height: 400, width: 240 });

// Функция для конвертации цветового значения HEX в объект RGB для Figma
const hexToRgb = (hex: string): RGB => {
    // Удаляем хеш-символ в начале, если он есть
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // Преобразуем короткий формат в полный
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return { b: b / 255, g: g / 255, r: r / 255 };
};

export const createSection = ({
    text,
    padding,
    borderRadius,
    fillColor,
}: {
    borderRadius: number;
    fillColor: string;
    padding: number;
    text: string;
}) => {
    const { selection } = figma.currentPage;

    // Группируем выделенные элементы
    const group = figma.group(selection, figma.currentPage);

    // Создаем фрейм (обводку)
    const frame = figma.createFrame();
    frame.name = text;
    frame.fills = [{ color: hexToRgb(fillColor), type: 'SOLID' }];
    frame.cornerRadius = borderRadius;
    frame.resize(group.width + padding * 2, group.height + padding * 2);
    frame.x = group.x + group.width / 2 - frame.width / 2;
    frame.y = group.y + group.height / 2 - frame.height / 2;

    group.x = padding;
    group.y = padding;

    // Добавляем группу обратно в фрейм
    frame.appendChild(group);

    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);

    figma.closePlugin(`Обводка "${text}" создана вокруг выделенных элементов.`);
};
