import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValuationService } from '../service/valuation';

@Component({
  selector: 'app-report',
  templateUrl: './report-maker.html',
  styleUrl: './report-maker.css',
  imports: [CommonModule]
})
export class Report implements OnInit {

  reports: any[] = [];
  selectedItem: any = null;

  constructor(
    private router: Router,
    private service: ValuationService
  ) {}

  ngOnInit() {
    this.loadReports();
  }

  loadReports() {
    this.reports = this.service.getSites();
  }

  viewItem(item: any) {
    this.selectedItem = item;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}