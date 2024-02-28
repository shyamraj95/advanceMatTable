import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from '../highlight.directive';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-advance-data-table',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatInputModule, MatTableModule, MatCheckboxModule, 
    MatIconModule, HighlightDirective, MatPaginatorModule, MatDividerModule
  ],
  templateUrl: './advance-data-table.component.html',
  styleUrl: './advance-data-table.component.scss'
})

export class AdvanceDataTableComponent implements OnInit, AfterViewInit, AfterContentInit {
  filterValue!: string;
  objectKeys = Object.keys;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any[]>(true, []);
  @Output() selectedRowsEvent: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input({ required: true }) tableData !: any[];
  @Input({ required: true }) columnHeader !: { [key: string]: any };
  @Input({ required: false }) enableSelectionCol: boolean = false;
  @ViewChild(MatSort, { static: true }) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ContentChild(TemplateRef) actionButtons!: TemplateRef<any> | null;



  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    if (this.enableSelectionCol && this.columnHeader) {
      this.columnHeader = Object.assign({ select: 'select' }, this.columnHeader);
    }
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // set pagination
    this.dataSource.paginator = this.paginator;
  }

  ngAfterContentInit() {
    if (this.actionButtons && !this.columnHeader['actions']) {
      this.columnHeader['actions'] = 'Actions'

    }
  }
  clearFilter() {
    this.dataSource.filter = ''
    this.filterValue = ''
  }
  /* Apply Filter */
  applyFilter(filterStr: string) {
    this.dataSource.filter = (filterStr as string).trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.filter(row => !row['disable']).length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected() ?
      this.selection.clear() :
      // this.selection.select(... this.dataSource.data);
      this.dataSource.data.forEach(row => { 
        if (!row['disable']) {
          this.selection.select(row);
        }
      });
  }

  /** send select rows data to parent component */
  selectedRowsData() {
    this.selectedRowsEvent.emit(this.selection.selected);
  }
}