// Code goes here

var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    });

    function createPerson()
    {
      return person = {'Name':'','Age':'','Address':''};  
    }
    
    var objectArray = [];
    var person1 = createPerson();
    person1.Name = "Scott";
    person1.Age = "12";
    person1.Address = "Home";
    objectArray.push(person1);
    
    var person2 = createPerson();
    person2.Name = "Jane";
    person2.Age = "14";
    person2.Address = "Work";
    objectArray.push(person2);
    
    
      var mainWrapper = new Vue({

        el: '#mainWrapper',
        data: {
          content: objectArray
        }
      })