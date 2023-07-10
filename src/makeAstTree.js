import _ from 'lodash';

// Проверка на вложение
const isNested = (value1, value2) => _.isObject(value1) && _.isObject(value2);

// Сравнение с первым объектом
const makeAstTree = (obj1, obj2) => {
  // Сортировка по ключам и по их уникальности
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const objTree = keys.map((key) => {
    // рекурсия: проверка на вложение и идентичность
    if (isNested(obj1[key], obj2[key])) {
      return { key, children: makeAstTree(obj1[key], obj2[key]), status: 'nested' };
    }
    // если в первом объекте нет этого ключа
    if (!Object.hasOwn(obj1, key)) {
      return { key, status: 'added', value: obj2[key] };
    }
    // если в первом объекте он есть, а во втором отсутствует
    if (!Object.hasOwn(obj2, key)) {
      return { key, status: 'deleted', value: obj1[key] };
    }
    // если в обоих объектах присутствует отдин и тот же ключ
    if (obj1[key] === obj2[key]) {
      return { key, status: 'unchanged', value: obj1[key] };
    }
    // если в обоих объектах один и тот же ключ, но разные значения
    return {
      key, status: 'updated', value1: obj1[key], value2: obj2[key],
    };
  });
  return objTree;
};

export default makeAstTree;
