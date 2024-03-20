import { SortElementSchema } from './schemas';

figma.showUI(__html__, { height: 500, width: 400 });

figma.ui.onmessage = (msgAny) => {
    const msg = SortElementSchema.parse(msgAny);

    if (msg.type === 'sort-elements') {
        const { elementsPerRow, horizontalPadding, verticalPadding } = msg.options;
        const { selection } = figma.currentPage;

        // Сортируем выделенные узлы по их названиям
        const sortedByName = [...selection]
            .filter((node) => 'width' in node && 'height' in node) // Учитываем только узлы с шириной и высотой
            .sort((a, b) => a.name.localeCompare(b.name));

        // Подготавливаем переменные для формирования рядов
        const rows: SceneNode[][] = [];
        let currentRow: SceneNode[] = [];

        // Разбиваем отсортированные узлы по рядам
        sortedByName.forEach((node, index) => {
            currentRow.push(node);
            if ((index + 1) % elementsPerRow === 0 || index === sortedByName.length - 1) {
                rows.push(currentRow);
                currentRow = [];
            }
        });

        // Сортеруем узлы внутри каждого ряда по ширине от самой узкой до самой широкой
        rows.forEach((row) => {
            row.sort((a, b) => {
                if ('width' in a && 'width' in b) {
                    return a.width - b.width;
                }

                return 0;
            });
        });

        // Позиционируем узлы с заданными отступами
        let yOffset = 0;

        rows.forEach((row) => {
            let xOffset = 0;
            let maxHeightInRow = 0;

            row.forEach((node) => {
                node.x = xOffset;
                node.y = yOffset;

                xOffset += node.width + horizontalPadding;
                maxHeightInRow = Math.max(maxHeightInRow, node.height);
            });

            yOffset += maxHeightInRow + verticalPadding;
        });

        // Завершаем работу плагина
        figma.closePlugin(
            'Элементы отсортированы по названию и ширине, с отступами между картинками 50 и между рядами 200.',
        );
    }
};
