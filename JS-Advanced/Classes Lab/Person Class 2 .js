class Person {
    constructor(firstName ,lastName, age ,email= 'mp@yahoo.com'){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    
    }

    get firstName(){
        return this._firstName ;
    }

    set firstName(firstName){
         if(typeof firstName !== 'string'){
             throw new TypeError('First Name mast be of type string!');            
         }
         this._firstName = firstName;
    }
    toString(){
        return `${this.firstName}${this.lastName}${this.age}, email: ${this.email}`
    }
}

let c = new Person ('Maria','Ilieva',23,'harrypoter@yahoo.com');
console.log(c.firstName);
console.log(c.lastName);
console.log(c.age);
console.log(c.email);