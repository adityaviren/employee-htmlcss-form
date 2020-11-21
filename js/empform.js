class employeePayrollData{
    constructor(name,profile,gender,department,salary,startdate,notes){
        this.name=name;
        this.profile=profile;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.startdate=startdate;
        this.notes=notes;
    }

    get id(){return this._id}
    set id(id){
        this._id=id;
    }


    get name(){return this._name    }
    set name(name){
        let NameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(NameRegex.test(firstName))
            this._firstName = firstName
        else
            console.log("Incorrect First Name")
    }

    get profile(){return this._profile}
    set profile(profile){
        this._profile=profile;
    }

    get gender(){return this._gender}
    set gender(gender){
        this._gender=gender;
    }

    get department(){return this._department}
    set department(department){
        this._department=department;
    }

    get salary(){return this._salary}
    set salary(salary){
        this._salary=salary;
    }

    get startdate(){return this._startdate}
    set startdate(startdate){
        this._startdate=startdate;
    }

    get notes(){return this._notes}
    set notes(notes){
        this._notes=notes;
    }

    toString() {
        const options = { year:'numeric', month:'long',day:'numeric'};
        const empDate = !this.startdate ? "undefined" : this.startdate.toLocaleDateString("en-US", options);
        
        return "id" + this.id + ",name=" + this.name + ",gender=" + this.gender + ", profile pic = " + this.profile +
        ",deaprtment=" + this.department + ",salary=" + this.salary + ",startdate=" + empDate + ",notes=" + this.notes;
    }

}
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent = "";
            return;
        }
        try{
            textError.textContent = "Name is incorrect";
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

        

    const salary = document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
    output.textContent = salary.value;
    });
});

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new employeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');

    } catch (e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profile=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender= getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary= getInputValueById('#salary');
    employeePayrollData.notes=getInputValueById('#notes');
    let date=getInputValuebyId('#day') + " " + getInputValueById('#month') +
    " " + getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList=[employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))

}

const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}