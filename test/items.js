import component from '../src/components/items';
import test from 'tape';

test('Items should be more than 0', assert => {
    assert.plan(1);
    const items = component.items();
    console.log(`Got ${items.length} items`);
    assert.ok(items.length > 0);
    assert.end();
});

test('Items should be array', assert => {
    assert.plan(1);
    assert.ok(Array.isArray(component.items()));
    assert.end();
});

