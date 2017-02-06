
// var validator = MYAPP.utils.validator;

// QUnit.test('Email valido', function(assert){
//   assert.expect(4);
//   assert.ok(validator.isValidEmail('bruno@email.com'), 'Email valido bruno@email.com');
//   assert.notOk(validator.isValidEmail('brunoemail.com'), 'Email invalido brunoemail.com');
//   assert.notOk(validator.isValidEmail(123456), 'Valor invalido');
//   assert.notOk(validator.isValidEmail(), 'Sem valor');
// });


// QUnit.test('Telefone valido', function(assert){
//   assert.expect(3);
//   assert.ok(validator.isValidPhone('99543-5566'), 'Telefone valido');
//   assert.notOk(validator.isValidPhone(995443243), 'Telefone invalido');
//   assert.notOk(validator.isValidPhone(), 'Sem valor');
// });


// QUnit.test('Data valida', function(assert){
//   assert.expect(4);
//   assert.ok(validator.isValidDate('22/01/1994'), 'Data valida 22/01/1994');
//   assert.notOk(validator.isValidDate('22-01-1994'), 'Data invalida 22-01-1994');
//   assert.notOk(validator.isValidDate(22011994), 'Valor invalido');
//   assert.notOk(validator.isValidDate(), 'Sem valor');
// });

var validator = MYAPP.utils.validator,
  formater = MYAPP.utils.formater;

QUnit.module('MYAPP.utils.validator');
QUnit.test('Email valido', function(assert){
  assert.expect(4);
  assert.ok(validator.isValidEmail('bruno@email.com'), 'Email valido bruno@email.com');
  assert.notOk(validator.isValidEmail('brunoemail.com'), 'Email invalido brunoemail.com');
  assert.notOk(validator.isValidEmail(123456), 'Valor invalido');
  assert.notOk(validator.isValidEmail(), 'Sem valor');
});


QUnit.test('Telefone valido', function(assert){
  assert.expect(3);
  assert.ok(validator.isValidPhone('99543-5566'), 'Telefone valido');
  assert.notOk(validator.isValidPhone(995443243), 'Telefone invalido');
  assert.notOk(validator.isValidPhone(), 'Sem valor');
});


QUnit.test('Telefone valido', function(assert){
  assert.expect(4);
  assert.ok(validator.isValidDate('22/01/1994'), 'Data valida 22/01/1994');
  assert.notOk(validator.isValidDate('22-01-1994'), 'Data invalida 22-01-1994');
  assert.notOk(validator.isValidDate(22011994), 'Valor invalido');
  assert.notOk(validator.isValidDate(), 'Sem valor');
});

QUnit.module('MYAPP.utils.formater');

var MYAPP = {
  utils:{},
  formater:{}
}

MYAPP.utils.formater = (function(){
  var date = function(date){
    if(date){
      if(typeof date === 'string'){
        if(date.length === 10){
          var dateArray = date.split('-');
          return dateArray.join('/');
        }
        throw  new Error('invalid formate string');
      }
      throw new Error('parameter is not a valid value');
    }else{
      throw new Error('This function needs one parameter');
    }
  }

  return {
    date: date
  }


})();