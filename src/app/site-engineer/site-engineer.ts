import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ValuationService } from '../service/valuation';

@Component({
  selector: 'app-site-engineer',
  templateUrl: './site-engineer.html',
  styleUrls: ['./site-engineer.css'],
  imports: [CommonModule, FormsModule]
})
export class SiteEngineer implements OnInit {

  siteName = '';
  engineer = '';
  value = '';

  sites: any[] = [];
  editIndex: number | null = null;

  constructor(
    private router: Router,
    private service: ValuationService
  ) {}

  ngOnInit() {
    this.loadSites();
  }

  // READ
  loadSites() {
    this.sites = this.service.getSites();
  }

  // CREATE + UPDATE
  saveSite() {

    const data = {
      siteName: this.siteName,
      engineer: this.engineer,
      value: this.value
    };

    let sites = this.service.getSites();

    if (this.editIndex === null) {
      sites.push(data);
    } else {
      sites[this.editIndex] = data;
    }

    this.service.saveSites(sites);

    this.loadSites();
    this.resetForm();
  }

  // EDIT
  editSite(index: number) {
    const item = this.sites[index];

    this.siteName = item.siteName;
    this.engineer = item.engineer;
    this.value = item.value;

    this.editIndex = index;
  }

  // DELETE
  deleteSite(index: number) {
    const sites = this.service.getSites();
    sites.splice(index, 1);

    this.service.saveSites(sites);
    this.loadSites();
  }

  // RESET
  resetForm() {
    this.siteName = '';
    this.engineer = '';
    this.value = '';
    this.editIndex = null;
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}