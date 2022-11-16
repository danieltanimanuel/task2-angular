import { Component, OnInit } from '@angular/core';
import { Developer, DeveloperModel } from 'src/app/model/developer';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-addkontak',
  templateUrl: './addkontak.component.html',
  styleUrls: ['./addkontak.component.css']
})
export class AddkontakComponent implements OnInit {

  developers: Developer[] = [];
  constructor(
    private developerService: DeveloperService
  ) { }

  developerModel = new DeveloperModel('','','','')
  submitted = false

  onSubmit(): void {
    this.submitted = true;
    this.addContact()
  }

  addContact(
    name: string = this.developerModel.name,
    skill: string = this.developerModel.skill,
    phone: string = this.developerModel.phone,
    notes: string = this.developerModel.notes
  ): void{
    name = name.trim();
    if (!name) {return}
    if (!skill) {return}
    if (!phone) {return}
    if (!notes) {return}
    console.log({name,skill,phone,notes} as Developer)
    this.developerService.addDeveloper({name,skill,phone,notes} as Developer).subscribe(developer =>{this.developers.push(developer)});
  }

  ngOnInit(): void {
    console.log("addkontak")
  }

}
