import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { employee } from 'src/Models/employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  newEmployee:employee ={} as employee ;
  constructor(private ApiserviceService:ApiserviceService,
    private router: Router, private modalService: NgbModal,
    ) { }

  ngOnInit(): void {


  }
  create(){


    this.ApiserviceService.createEmployee(this.newEmployee).subscribe(response=> {

      if (response){
        this.router.navigate(['/employees']);
      }
    })
  }

}
