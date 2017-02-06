var MYAPP = {
  utils:{}
}

MYAPP.utils.validator = (function(){
  var isValidEmail = function(email){
    var validEmail = /^(\w+[._-]?)+@\w+(\w+[.]?)+$/; //ailton.santos@email.com
    return validEmail.test(email);
  }

  var isValidPhone = function(phone){
    var validPhone = /^\d{5}-\d{4}$/; // 98765-8765
    return validPhone.test(phone);
  }

  var isValidDate = function(date){
    var validDate = /^\d{2}\/\d{2}\/\d{4}$/; // dd/mm/yyyy
    return validDate.test(date)
  }

  return {
  isValidEmail: isValidEmail,
    isValidPhone: isValidPhone,
    isValidDate: isValidDate
  }
})();