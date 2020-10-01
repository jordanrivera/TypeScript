//const person: {
//    name: string; 
//    age: number;
//
//    nickname: string; 
const person = { 
    name: 'Maximilian',
    age: 30,
    nickname: 'Loco',
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase)
}