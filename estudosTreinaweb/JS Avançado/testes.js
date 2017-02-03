var sum = function(v1, v2){
    return v1 + v2;
}

QUnit.test( "Teste Equal", function( assert ) {
  assert.equal( 1, "1", "1 e '1' são iguais" );
  assert.equal(sum(2,3),5);
  assert.notEqual( 3, 2, "3 e 2 não são iguais" );
});

// QUnit.test( "Teste Equal", function( assert ) {
//   var foo = {name:'TreinaWeb'};
//   var bar = {name:'TreinaWeb'};
//   assert.deepEqual( foo, bar, "Objetos iguais" );
//   assert.notDeepEqual( foo, bar, "Objetos diferentes" );
// });

// QUnit.test( "Teste Expect", function( assert ) {
//   assert.expect(2);
//   var foo = {name:'TreinaWeb'};
//   var bar = {name:'JavaScript'};
//   assert.notDeepEqual( foo, bar, "Objetos diferentes" );
//   assert.notEqual(1, 2,'1 e 2 são diferentes');
// });