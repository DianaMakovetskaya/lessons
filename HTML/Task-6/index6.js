class Father{
    constructor(name, surname) {
        this.FatherName = name;
        this.FatherSurname = surname;
    }

}
class Mother{
    constructor(name, surname) {
        this.MotherName = name;
        this.MotherSurname = surname;
    }
    getName(){
        return this.MotherName;
    }
}

class Son {

    constructor(SonName, father, mother,age) {
      this.SonName = SonName;
      this.father = father;
      this.mother = mother;
      this.age=age;
    }

    getParentsName(){
        console.log(this.SonName,this.father,this.mother);
    }

    getMyName() {
        return this.SonName;
    }
}
class Palitech{
constructor(student) {
    this.Student=student;
    this.students=[];
    this.UniverName='Palitech';

}
addStudent(student){
    this.Student=student;
    this.students.push(student);
}

}
class Franka{
    constructor(student) {
        this.Student=student;
        this.students=[];
        this.UniverName='Franka';
    }
    addStudent(student){
        this.Student=student;
        this.students.push(student);

    }
}
class Catholic_University{
    constructor(student) {
        this.Student=student;
        this.students=[];
        this.UniverName='Catholic_University';
    }
    addStudent(student){
        this.Student=student;
        this.students.push(student);

    }
}

let all_son = [new Son('Max',new Father('Andy','lala'),new Mother('Anna','tata'),17),
    new Son('Alex',new Father('Vanya','lala'),new Mother('Mariia','tata'),15),
    new Son('Dima',new Father('Sasha','lala'),new Mother('Luda','tata'),18)];

function findBySon(name){
    let isFound=false;

    for(let i=0;i<all_son.length;i++){
        if(all_son[i].SonName===name){
            all_son[i].getParentsName();
            isFound=true;
        }
    }
    if(isFound===false){
        console.log('Sorry, there is no',name,'in list((');
    }
}

// findBySon('Dima');

function addInUniver(){
    let universitys=[new Palitech,new Franka,new Catholic_University];
    for(let i=0;i<all_son.length;i++){
        if(all_son[i].age>16){
            let num=Math.floor(Math.random() * universitys.length);
            console.log(num);
            universitys[num].addStudent(all_son[i]);
        }
    }
    for(let i=0;i<universitys.length;i++){
        if(universitys[i].students.length!=0){
            console.log(universitys[i].UniverName,universitys[i]);

        }
    }
}
addInUniver();



