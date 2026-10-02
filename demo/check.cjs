const assert=require('node:assert/strict');
const {plan,delta}=require('./model.js');
let p=plan(3);assert.equal(p.shortage,3);assert.equal(p.packs,2);assert.equal(p.selected.name,'Supplier B');assert.equal(p.selected.total,46);
assert.equal(delta(p.packs,1),1);assert.equal(delta(p.packs,2),0);
p=plan(6);assert.equal(p.packs,0);assert.equal(p.selected.total,0);assert.equal(delta(p.packs,2),-2);
assert.equal(plan(0).packs,3);assert.throws(()=>plan(NaN));assert.throws(()=>plan(3.5));
console.log('PASS: allocation, pack rounding, freight comparison, partial/rerun reconciliation, covered stock and invalid stock.');
