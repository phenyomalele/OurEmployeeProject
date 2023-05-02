import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employeedata } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  showadd!: boolean;
  showupdate!: boolean

  studentmodelobj: employeedata= new employeedata

  formvalue!: FormGroup
  constructor(private formBuilder:FormBuilder) {}
  ngOnInit(): void {
      this.formvalue = this.formBuilder.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        email:['', Validators.required],
        department:['', Validators.required],
        contactNo:['', Validators.required],
      })
  }

  //add function
add(){
this.showadd = true;
this.showupdate = false;
}

//update function
update(){
this.showadd = false;
this.showupdate = true;
}

//delete

addEmployee(){
  this.studentmodelobj.firstName = this.formvalue.value.firstName;
  this.studentmodelobj.lastName = this.formvalue.value.lastName;
  this.studentmodelobj.email = this.formvalue.value.email;
  this.studentmodelobj.contactNo = this.formvalue.value.contactNo;

}

}
