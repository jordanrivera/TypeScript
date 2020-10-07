class Department {
    //public readonly id: string;
    //public name: string;
    protected employees: string[] = [];

    constructor(public readonly id: string, public name: string) {
        //this.id = id;
        //this.name = n;
    
    }

    describe(this: Department){
        console.log('Department (${this.id}): ${this.name}');
    }

    addEmployee(employee:string){
        //this.id - 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]){
      super(id, 'IT');
      this.admins = admins;
    }
}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
    }
    
    addEmployee(name: string){
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }

    printReports(){
        console.log(this.reports);
    }
}


const it = new ITDepartment('d1', ['Max']);
const accounting2 = new Department('d1','Accounting');
it.addEmployee('Max');
it.addEmployee('Manu');
//accounting.employees[2] = 'Anna';
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.addReport('Max');
accounting.addEmployee('Manu');
accounting.printReports();
//console.log(accounting);
//const accountingCopy = { name: 'DUMMY', describe: accounting.describe};
//accountingCopy.describe();