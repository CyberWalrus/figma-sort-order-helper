// Рекурсивная функция поиска всех узлов с данными названиями в дереве документа.
const findAllNodesWithNames = (node: BaseNode, baseNames: string[]): SceneNode[] => {
    let foundNodes: SceneNode[] = [];

    if ('children' in node) {
        for (const child of node.children) {
            // Сравниваем базовые названия (до первого пробела).
            if (baseNames.includes(child.name.split(' ')[0])) {
                foundNodes.push(child as SceneNode);
            }
            foundNodes = foundNodes.concat(findAllNodesWithNames(child, baseNames));
        }
    }

    return foundNodes;
};

export const updateElements = () => {
    // Получаем выделенные узлы.
    const selectedNodes = figma.currentPage.selection;

    if (selectedNodes.length === 0) {
        figma.closePlugin('Пожалуйста, выделите элементы перед началом работы плагина.');

        return;
    }

    // Создаём массив базовых названий (до первого пробела) выделенных элементов.
    const selectedNames = selectedNodes.map((node) => node.name.split(' ')[0]);

    // Ищем элементы с такими же базовыми названиями по всему документу.
    const allNodesWithNames = findAllNodesWithNames(figma.root, selectedNames);

    for (const selectedNode of selectedNodes) {
        // Получаем базовое название выбранного узла (до первого пробела).
        const baseName = selectedNode.name.split(' ')[0];

        // Находим узлы с тем же базовым именем, но вне выделения.
        const replacements = allNodesWithNames.filter(
            (node) => node.name.split(' ')[0] === baseName && !selectedNodes.includes(node),
        );

        for (const replacement of replacements) {
            const parentNode = replacement.parent;

            if (parentNode) {
                const clone = selectedNode.clone();
                // Вставляем узел в иерархию на место оригинального узла.
                const index = parentNode.children.indexOf(replacement);
                parentNode.insertChild(index, clone);
                clone.x = replacement.x;
                clone.y = replacement.y;
                clone.name = baseName;
                replacement.remove();
                selectedNode.remove();
            }
        }
    }

    // Закрываем плагин.
    figma.closePlugin('Замена элементов выполнена.');
};
