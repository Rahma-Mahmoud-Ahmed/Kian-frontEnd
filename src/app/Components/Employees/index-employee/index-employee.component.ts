import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { employee } from 'src/Models/employee';



declare var window:any;


@Component({
  selector: 'app-index-employee',
  templateUrl: './index-employee.component.html',
  styleUrls: ['./index-employee.component.css']
})
export class IndexEmployeeComponent implements OnInit {
  @ViewChild('updateModalRef')
  updateModalRef!: ElementRef<any>;
  editEmp: employee = {} as employee;

  targetId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  AllEmployees:employee[]=[];
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
formModal: any;
  constructor(private ApiserviceService:ApiserviceService,
    private router: Router, private modalService: NgbModal,
    private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    // get AllData
    this.ApiserviceService.getAllemployee().subscribe(response=>{
      this.AllEmployees = response.data;
    });

    this.formModal = new window.bootstrap.modal(
      document.getElementById('exampleModal')
    )
  }
  updateEmployee(emp:employee,id:number){
    this.editEmp=emp;
    this.openModal;
    // this.openModal(this.updateModalRef);

  }
  openModal(modalRef: ElementRef<any>) {

    this.modalService.open(modalRef);
  }

  confirmUpdate(editEmp:employee){


  this.ApiserviceService.updateEmployee(editEmp,editEmp.id).subscribe((response) => {

  });
  this.formModal.hide();
}
deleteEmployee(emp:employee){
      this.editEmp=emp;
  this.openModal;
}


confirmDelete(id:number){
  this.ApiserviceService.deleteEmployee(id).subscribe((response)=>{
    this.ApiserviceService.getAllemployee().subscribe(response=>{
      this.AllEmployees = response.data;
      this.formModal.hide();
    });

  });


  };

  toggle(idd:any ,isActive:any ){
    isActive == 0 ? isActive = 1 : isActive = 0 ;

    this.ApiserviceService.ActivateEmployee({"isActive":isActive},idd).subscribe(data =>{
      this.router.navigate(["/employees"])

    });


    this.all()
}  all() {
    throw new Error('Method not implemented.');
  }
}
