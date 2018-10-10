import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CompanyService } from '../../services/company.service';
import { MasterService } from '../../services/master.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-formcompany',
  templateUrl: './formcompany.component.html',
  styleUrls: ['./formcompany.component.css']
})
export class FormcompanyComponent implements OnInit {

  @Input() company: Company;

  constructor(
    private _route: ActivatedRoute,
    private _companyService: CompanyService,
    private _masterService: MasterService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    const companyt = this._companyService.getSCompany();
    this.company = companyt;
  }

  goBack(): void {
    this._location.back();
  }

  save(): void {
    this._companyService.createCompany(this.company).subscribe();
    this._masterService.addCompany(this.company);
    this._location.back();
  }

  delete(): void {
    this._companyService.deleteCompany(this.company.id).subscribe();
    this._location.back();
  }

}
