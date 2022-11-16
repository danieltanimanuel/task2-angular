import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developer, DeveloperModel, DeveloperModelUpd } from 'src/app/model/developer';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  developer!: Developer;
  developers: Developer[] = [];

  constructor(
    private developerService: DeveloperService,
    private route: ActivatedRoute
  ) { }

  editMode=false
  submitted=false

  // developerModelUpd2 = new DeveloperModelUpd(this.developer.id,this.developer.name,this.developer.skill,this.developer.phone, this.developer.notes)

  developerModelUpd = new DeveloperModelUpd(1,'','','','')
  onSubmit(): void {
    this.submitted = true;
    this.updateContact()
  }

  toEditMode(){
    this.editMode=true;
  }

  toViewMode(){
    this.editMode=false;
  }

  getDetail(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id'));
    console.log(idParams)
    this.developerService.getDeveloper(idParams)
      .subscribe(developerRetrieved => this.developer = developerRetrieved)
    
  }

  refreshData(): void{
    this.developerService.getAllDeveloper()
      .subscribe(developers => this.developers = developers)
  }

  updateContact(
    id: number = Number(this.route.snapshot.paramMap.get('id')),
    name: string = this.developerModelUpd.name,
    skill: string = this.developerModelUpd.skill,
    phone: string = this.developerModelUpd.phone,
    notes: string = this.developerModelUpd.notes
  ): void{
    name = name.trim();
    if (!id) {return}
    if (!name) {return}
    if (!skill) {return}
    if (!phone) {return}
    if (!notes) {return}
    console.log({name,skill,phone,notes} as Developer)
    this.developerService.updateDeveloper({id,name,skill,phone,notes} as DeveloperModelUpd).subscribe();
    this.refreshData()
  }

  

  ngOnInit(): void {
    console.log("test")
    this.getDetail()
  }

  

}
