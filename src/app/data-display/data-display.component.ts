import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data: string[] = [];

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }
}
