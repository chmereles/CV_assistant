import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { Language } from 'src/app/core/interfaces/language.interface';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { Experience } from 'src/app/core/interfaces/experience.interface';
import { ExperiencesService } from 'src/app/core/services/experiences.service';
import { FormationsService } from 'src/app/core/services/formations.service';
import { Formations } from 'src/app/core/interfaces/formation.interface';
import { Reference } from 'src/app/core/interfaces/reference.interface';
import { ReferencesService } from 'src/app/core/services/references.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CVComponent implements OnInit {
  listProfile: Profile[] = [];
  profileData: any; // Variable para almacenar los datos proporcionados

  constructor(
    public dataUser: UserDataService,
    public views: NavBarService,    
    private _profileServices: ProfileService,
    private _language: LanguagesService,
    private _experience: ExperiencesService,
    private _formation: FormationsService,
    private _reference: ReferencesService
  ) { }

  languages: Language[] = [];
  experiences: Experience[] = [];
  formations: Formations[] =[];
  references: Reference[] =[];

  ngOnInit(): void {

    this.languageGet();
    this.getExperience();
    this.getFormations();
    this.getReference();

  }  

  languageGet() {
    this._language.getLanguages(this.dataUser.userId).subscribe((languagesList: Language[]) => {
      this.languages = languagesList;
    })
  }

  getExperience() {
    this._experience.getExperience(this.dataUser.userId).subscribe((experieceList: Experience[])=>{
      this.experiences = experieceList;
    });
  }

  getFormations(){
    this._formation.getFormationByUser(this.dataUser.userId).subscribe((formationList: Formations[]) => {
      this.formations = formationList;
    } )
  }

  getReference() {
    this._reference.getReference(this.dataUser.userId).subscribe((referenceList) => {
      this.references = referenceList;
    });
  }

}




