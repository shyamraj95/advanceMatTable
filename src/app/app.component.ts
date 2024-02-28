import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdvanceDataTableComponent } from './advance-data-table/advance-data-table.component';
import { MatIconModule } from '@angular/material/icon';
import { Elements } from './interface';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdvanceDataTableComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'advanceMatTable';

  columnHeader: Elements = { 'position': 'position', 'fname': 'Element Name', 'weight': 'Weight', 'symbol': 'Symbol', 'actions': 'Actions' };

  tableData: Elements[] = [
    { position: 1, fname: 'Hydrogen', weight: 1.0079, symbol: 'H', disable: true },
    { position: 2, fname: 'Helium', weight: 4.0026, symbol: 'He', disable: false },
    { position: 3, fname: 'Lithium', weight: 6.941, symbol: 'Li', disable: true },
    { position: 4, fname: 'Beryllium', weight: 9.0122, symbol: 'Be', disable: false },
    { position: 5, fname: 'Boron', weight: 10.811, symbol: 'B', disable: true },
    { position: 6, fname: 'Carbon', weight: 12.0107, symbol: 'C', disable: true },
    { position: 7, fname: 'Nitrogen', weight: 14.0067, symbol: 'N', disable: true },
    { position: 8, fname: 'Oxygen', weight: 15.9994, symbol: 'O', disable: false },
    { position: 9, fname: 'Fluorine', weight: 18.9984, symbol: 'F', disable: false },
    { position: 10, fname: 'Neon', weight: 20.1797, symbol: 'Ne', disable: true },
  ];

  selectedRowData(selectedRows: Elements[]) {
    console.log(selectedRows);

  }

  edit(row: any) {
    console.log(row);

  }
}
