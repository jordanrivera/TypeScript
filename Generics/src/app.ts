//const names: Array <string> = [''];
//names[0].split('');

//const promise: Promise<number> = new Promise((resolve, reject) => {
//    setTimeout(() =>{
//        resolve(10);
//    }, 2000);
//});

//promise.then(data => {
    //data.split(' ');
//})

function merge<T extends object, U extends object>( objA: T, objB: U){
    return Object.assign(objA,objB);
}

const mergedObj =  merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergedObj);


interface Lengthy{
    length: number;
}

function ccountAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Go no value.';
    if (element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = ' ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(ccountAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');



class DataStorage{ 
    private data: (string | number | boolean) [] = [];


    addItem(item: string | number | boolean){
        this.data.push(item)
    }

    removeItem(item: string | number | boolean){
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage();
//const objStorage = new DataStorage<object>();
//const maxObj = {name: 'Max'};
//objStorage.addItem(maxObj);
//objStorage.addItem({name: 'Manu'});
//...
//objStorage.removeItem(maxObj);
//console.log(objStorage.getItems());

interface CourseGaol {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date): CourseGaol{
    let courseGaol: Partial<CourseGaol> = {};
    courseGaol.title = title;
    courseGaol.description = description;
    courseGaol.completeUntil = date;
    return courseGaol as CourseGaol;
}

const names: Readonly<string[]> = ["Max, 'Anna"];
//names.push('Manu');
//names.pop();
