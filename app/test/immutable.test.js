import { Map, List } from 'immutable';

test('Test for List from immutable', () => {
    let list = List([0,1,2,3]),
        list1 = list.concat([4,5]),
        list2 = list1.slice(-2);

    expect( list.join('') ).toHaveLength(4);
    expect( list1.join('') ).toEqual( list.join('') + list2.join('') );
})


