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



class DataStorage<T> {
    private data: T[] = [];


    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Max'});
objStorage.addItem({name: 'Manu'});
//...
objStorage.removeItem({name: 'Manu'});
console.log(objStorage.getItems());
