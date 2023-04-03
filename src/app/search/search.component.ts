import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchTerm: String = '';
    constructor(private route:ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
          this.searchTerm = params.searchTerm;
        })
    }
}
