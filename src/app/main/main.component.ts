import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyStockDataService } from '../services/company-stock-data.service';
import { FinTech75Service } from '../services/fin-tech75.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    '../../assets/dark-theme-financial-chart.css',
    '../../assets/dark-theme-tooltips.css',
    './main.component.scss']
})

export class MainComponent implements OnInit {
  public companyStockDataCompanyFeed: any = null;
  public fakeStockDataStockData: any = null;
  public finTech75Positions: any = null;

  dataSource: any[] = [];
  originalStockSymbolData: any[] = [];
  filteredStockSymbolData: any[] = [];
  selectedItem: any;
  prevSelectedItem: any;
  searchText: string = "";

  constructor(
    private companyStockDataService: CompanyStockDataService,
    private finTech75Service: FinTech75Service,
  ) {}

  ngOnInit() {

    this.companyStockDataService.getCompanyFeed().subscribe({
      next: data => {
        this.filteredStockSymbolData = this.originalStockSymbolData = data;
        let firstItem = this.originalStockSymbolData[0];
        this.onItemClicked(firstItem);
        this.UpdateChart(firstItem);
      },
      error: error => {
        console.error('Error occurred while fetching company feed:', error);
      }
    })
    this.finTech75Service.getPositions().subscribe(data => this.finTech75Positions = data);
  }

  onItemClicked(item: any) {
    this.selectedItem = item;
    this.UpdateChart(item)

    if (this.prevSelectedItem) {
      this.prevSelectedItem.selected = false;
    }

    item.selected = true;
    this.prevSelectedItem = item;
  }

  onSearchClicked(value: string) {
    if (value) {
      this.filteredStockSymbolData = this.originalStockSymbolData.filter(item => item['stock_symbol'].startsWith(value.toUpperCase()));
    } else {
      this.filteredStockSymbolData = this.originalStockSymbolData;
    }

    if (this.filteredStockSymbolData.length == 0) {
     //this.toast.open(`No ticker found with ${value} symbol!`); 
    }
  }


/*   onSearchClicked(value: string) {
    let item = this.filteredStockSymbolData.find(item => item['stock_symbol'] === value);
    // Check for partial matches if no full matches found
    if (!item) {
      item = this.filteredStockSymbolData.find(item => item['stock_symbol'].startsWith(value));
    }
    if (item) {
      this.onItemClicked(item);
    } else {
      alert('No matching stock symbol found');
    }
  } */

  onClearSearch() {
    this.searchText = "";
    this.onSearchClicked(this.searchText);
  }

  UpdateChart(stockItem: any) {
    const { company_name: company, stock_symbol: symbol, avg_volume: volume, previous_close: price } = stockItem;
    const stockPriceDataItems = this.companyStockDataService.GenerateStockPriceData(price, volume);
    const title = `${company} (${symbol})`;
    (stockPriceDataItems as any).__dataIntents = { close: [`SeriesTitle/${title}`] };
    this.dataSource = stockPriceDataItems;
  }
}
