import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValuationService } from '../service/valuation';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {

  totalProperties = 0;
  engineers = 0;
  reports = 0;

  valuationData: any[] = [];

  constructor(
    public router: Router,   // ✅ MUST be public (used in HTML)
    private service: ValuationService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.valuationData = this.service.getSites();

    this.totalProperties = this.valuationData.length;

    this.engineers = new Set(
      this.valuationData.map(x => x.engineer)
    ).size;

    this.reports = this.valuationData.length;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}