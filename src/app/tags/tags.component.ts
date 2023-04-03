import {Component, Input} from '@angular/core';
import {Tag} from "../shared/modules/Tag";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
    @Input()
    foodPageTags?: String[];

    @Input()
    justifyContent: string = 'center';
    tags?: Tag[];
    constructor(private foodservice: FoodService) {
    }
    ngOnInit(): void {
      if(!this.foodPageTags)
      this.tags = this.foodservice.getAllTags()
    }
}
