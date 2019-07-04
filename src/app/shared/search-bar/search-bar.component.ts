import { SearchComponent } from '../../modules/search/search/search.component';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() clickEvent: SearchComponent;
  @Input() placeholder: SearchComponent;
  @Output() searchTerm = '';

  constructor() { }

  ngOnInit() {
  }

}
