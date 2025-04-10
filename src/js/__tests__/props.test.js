import orderByProps from '../props'
describe('orderByProps', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

  test('сортирует свойства в указанном порядке', () => {
    const result = orderByProps(obj, ['name', 'level']);
    expect(Object.keys(result)).toEqual(['name', 'level', 'attack', 'defence', 'health']);
  });

  test('несуществующие свойства', () => {
    const result = orderByProps(obj, ['name', 'color']); // 'color' нет в obj
    expect(Object.keys(result)).toEqual(['name', 'attack', 'defence', 'health', 'level']);
  });

});
