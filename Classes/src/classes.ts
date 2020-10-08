abstract class Department {
    static fiscalYear = 2020;
    //public readonly id: string;
    //public name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        //this.id = id;
        //this.name = n;
    
    }

    static createEmployee(name: string){
        return{name: name};
    }

    abstract describe(this: Department):void;

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

    describe(){
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department{
    private lasReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lasReport = reports[0];
    }
    
    static getInstance(){
        if (AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(){
        console.log('Accounting Department - ID: ' + this.id);
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
//const accounting2 = new Department('d1','Accounting');

it.addEmployee('Max');
it.addEmployee('Manu');

//accounting.employees[2] = 'Anna';
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting,accounting2);

console.log(accounting.mostRecentReport);

accounting.mostRecenReport = 'Year End Report';
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();

//accounting.printReports();
//console.log(accounting);
//const accountingCopy = { name: 'DUMMY', describe: accounting.describe};
//accountingCopy.describe();