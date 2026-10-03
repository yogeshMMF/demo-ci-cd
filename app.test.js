const assert = require('assert');
const { add, multiply, isEven } = require('./app');

let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✅ PASS: ${name}`);
        passed++;
    } catch (err) {
        console.log(`❌ FAIL: ${name}`);
        console.error(err.message);
        failed++;
    }
}

test('add works', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('multiply works', () => {
    assert.strictEqual(multiply(4, 5), 20);
});

test('isEven works', () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(5), false);
});

console.log(`\n${passed} passed, ${failed} failed`);

if (failed > 0) process.exit(1);   // <-- IMPORTANT: fails the CI job