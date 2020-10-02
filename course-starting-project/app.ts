
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = { 
    name: 'Maximilian',
    age: 30,
    nickname: 'Loco',
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};

//person.role.push('admin');
//person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase)
}

if (person.role === ADMIN){
    console.log('is admin')
}