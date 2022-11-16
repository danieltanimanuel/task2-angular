import { Component, OnInit } from '@angular/core';
import { Developer, DeveloperModel } from 'src/app/model/developer';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  developers: Developer[] = [];

  constructor(private developerService: DeveloperService) { }

  refreshData(): void{
    this.developerService.getAllDeveloper()
      .subscribe(developers => this.developers = developers)
  }

  deleteDeveloper(id: number): void {
    
    this.developerService.deleteDeveloper(id).subscribe()
    this.refreshData()
  }

  ngOnInit(): void {
    this.refreshData()
  }

  

}
