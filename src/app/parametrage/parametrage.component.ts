import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametragesService } from '../services/parametrages.service';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css']
})
export class ParametrageComponent implements OnInit {

  public ville; 
  siteform:FormGroup;
  
  constructor(private ParametrageService:ParametragesService, private fb:FormBuilder) { }

  ngOnInit() {
     this.OnRazChamp();
     this.OnListSite();
  }
   
    OnRazChamp(){
      this.siteform = this.fb.group({
      oid : [],
      code : [],
      nom : []
    })
    }

    OnListSite(){
      this.ParametrageService.getsite()
    .subscribe(data=>{
         this.ville=data;
         console.log(this.ville);
    },err=>{
         console.log(err);
    })
    }

     onSelectSite(s){
     console.log(s)
     
        this.siteform.setValue({
           oid : s.oid,
           code : s.code,
           nom : s.name
        })
     
    }

    onSubmit(){
      console.log(this.siteform)
    }

}


