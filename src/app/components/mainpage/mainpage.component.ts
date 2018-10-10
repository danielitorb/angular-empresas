import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
  empresas: any = [];

  constructor(public rest: CompanyService) { }

  ngOnInit() {
    this.getCompanys();
  }

  getCompanys() {
    this.empresas = [];
    this.rest.getCompanys().subscribe(
                data => {
                    console.log(data);
                    this.empresas = data;
                },
                error => {
                  console.log(<any>error);
                }
    );
  }
}
