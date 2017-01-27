import _ from 'lodash';

/**
 * Lista de itens recebida pela API tem muitas váriaveis que não serão usadas
 * Método transfere apenas atributos que serão usados para exibiar na lista de procura.
 *
 * @param items
 * @returns {Array}
 */
export default function formatBookListVolume(items) {
    if (!items || items.length === 0) {
        return items;
    }

    // itera pelo array de itens usando map do lodash, retorna um objeto com apenas o id e todos os valores dentro do atributo volumeInfo
    return _.map(items, (item) => ({
        id: item.id,
        ...item.volumeInfo,
    }));
}
