import { Component } from "@angular/core";

import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  //save data
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  //on fetch data
  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}
