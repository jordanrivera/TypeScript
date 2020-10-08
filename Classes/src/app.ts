class Department {
    static fiscalYear = 2020;
    //public readonly id: string;
    //public name: string;
    protected employees: string[] = [];

    constructor(public readonly id: string, public name: string) {
        //this.id = id;
        //this.name = n;
    
    }

    static createEmployee(name: string){
        return{name: name};
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
    private lasReport: string;

    get mostRecentReport(){
        if (this.lasReport){
        return this.lasReport;
        }
        throw new Error('No report found.');
    }

    set mostRecenReport(value: string) {
        if (!value){
            throw new Error('Please pass in a valid value!');
        }

        this.addReport(value);
    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lasReport = reports[0];
    }
    
    addEmployee(name: string){
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lasReport = text;
    }

    getReports() {
        console.log(this.reports);
    }

    printReports(){
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

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
console.log(accounting.mostRecentReport);

accounting.mostRecenReport = 'Year End Report';
accounting.addReport('Something went wrong...');
accounting.addReport('Max');
accounting.addEmployee('Manu');
accounting.printReports();

//console.log(accounting);
//const accountingCopy = { name: 'DUMMY', describe: accounting.describe};
//accountingCopy.describe();