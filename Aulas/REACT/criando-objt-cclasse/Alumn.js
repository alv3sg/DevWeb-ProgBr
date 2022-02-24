const Person = require('./Person')
class Alumn extends Person {
    constructor(name, age, turma) {
        super(name, age)
        this.turma = turma
    }
        greetings() {
            console.log("Olá, meu nome é", this.name, "e minha turma é", this.turma)
        }    
}
module.exports = Alumn