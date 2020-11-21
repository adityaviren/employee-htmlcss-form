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