import { Component, OnInit } from '@angular/core';
import { ShareFacadeService } from '../../service/sharefacade.service';

@Component({
  selector: 'app-data-processing',
  templateUrl: './data-processing.component.html',
  styleUrls: ['./data-processing.component.scss']
})
export class DataProcessingComponent implements OnInit {
  public dataRecord;

  constructor(
    private shareFacadeService: ShareFacadeService
  ) { }

  ngOnInit(): void {
    const dataFromDatabase = [
      {
        item_id: 'abc001',
        item_category: 'pen',
        item_name: 'Brand A',
        item_price: 2
      },
      {
        item_id: 'abc002',
        item_category: 'pen',
        item_name: 'Brand B',
        item_price: 3
      },
      {
        item_id: 'abc003',
        item_category: 'ruler',
        item_name: 'Brand X',
        item_price: 2
      }
    ];
    this.dataRecord = this.shareFacadeService.convertCollectionToRecord(dataFromDatabase, 'item_id');
  }

}
