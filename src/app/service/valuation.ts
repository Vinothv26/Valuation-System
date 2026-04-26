import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuationService {

  private key = 'sites';

  getSites() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  saveSites(data: any[]) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  addSite(site: any) {
    const sites = this.getSites();
    sites.push(site);
    this.saveSites(sites);
  }

  updateSite(index: number, data: any) {
    const sites = this.getSites();
    sites[index] = data;
    this.saveSites(sites);
  }

  deleteSite(index: number) {
    const sites = this.getSites();
    sites.splice(index, 1);
    this.saveSites(sites);
  }
}