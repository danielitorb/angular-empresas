import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'name', 'logo'];
  dataSource;
  searchText: String;
  showFiller = false;
  // empresas: any = [];

  constructor(public rest: CompanyService, private route: Router) { }

  ngOnInit() {
    // this.getCompanys();
    this.rest.getComp().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  /*getCompanys() {
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
  }*/

  goToCompany(company): void {
    this.rest.setSCompany(company);
    this.route.navigate(['/empresa/']);
  }

  /*new(): void {
    this.rest.setSCompany(new Company());
    this.route.navigate(['/empresa/']);
  }*/

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

}
