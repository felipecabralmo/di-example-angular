import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string[] = ['Angular','é','incrível'];

  getData(): string[]{
    return this.data;
  }

  addData(newData: string): void {
    this.data.push(newData);
  }
}
