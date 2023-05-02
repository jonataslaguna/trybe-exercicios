const myRemove = require('./myRemove');

describe('Test myRemove', () => {
    it('Retorna uma cópia desse array sem o elemento item', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})