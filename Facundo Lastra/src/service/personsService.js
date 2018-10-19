
function getValidId(array){
  let initialValue = 0;
    for (let element of array) {
      initialValue = element.id + 1;
    }
    return initialValue;
}

export default {
    getAll() {
      return JSON.parse(localStorage.getItem("people")) || [];
    },
    saveAll(persons){
      localStorage.setItem("people", JSON.stringify(persons));
    },
    getOne(id) {
      return new Promise((res, rej) => {
        try {
          const persons = this.getAll();
          setTimeout(
            res(persons.find(person => person.id == id)), 2000
          );
        } catch (e) {
          rej(e.toString());
        }
      });
    },
    editPerson (person){
      let people = this.getAll();
      let personToEdit = people.find(personInArray => personInArray.id === person.id);
      let idElement = people.indexOf(personToEdit);
      people[idElement] = person;
      this.saveAll(people);
    },
    save(personToSave) {
      if(personToSave.nombre &&
        personToSave.edad > -1 &&
        personToSave.edad < 200 &&
        personToSave.sexo){
          let persons = this.getAll();
          personToSave.id = getValidId(persons);   
          persons.push(personToSave);
          this.saveAll(persons)       
        
        }      
    },
  }