function repareIdsForArray(oldId, arrayToFix){
  let start = oldId;
  for (start; start <= arrayToFix.length; start++ ){
    arrayToFix[start].id--;
  }
  return arrayToFix;
}
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
      people[personToEdit.id] = person;
      this.saveAll(people);
    },
    delete(persontoDelete){
      let oldId= persontoDelete.id;
      let persons = this.getAll();
      persons.splice(persontoDelete.id,1);
      let newArray = repareIdsForArray(oldId,persons);
      this.saveAll(newArray);
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