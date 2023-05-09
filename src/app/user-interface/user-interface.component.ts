import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { city } from '../data/city';
import { country } from '../data/country';
import { CityService } from '../Services/city.service';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit{
  form!:FormGroup
  forms!:FormGroup
  countryli!:country[]
  cityli!:city[]
  @ViewChild('txtname') txtname!:ElementRef
  constructor(private formbuild:FormBuilder,
            private countryservice:CountryService,
            private cityservices:CityService){}
ngOnInit(): void {
  this.buildform()
  this.buildformCity()

  this.GetCountries()
}
buildform(){
  this.form=this.formbuild.group({
    code:['',Validators.required],
    name:['',Validators.required]
  })
}
buildformCity(){
  this.forms=this.formbuild.group({
    countryId:['',Validators.required],
    name:['',Validators.required]
  })
}

OnSave(){
var obj=new country()
obj.name=this.form.value['name']
obj.code=this.form.value['code']
this.countryservice.SaveCountry(obj).subscribe({
  next:data=>{alert("Saved Successfully")},
error:err=>{alert("Error Happened")}
})
}
OnSaveCity(){
  var objcity=new city()
  objcity.name=this.form.value['name']
  objcity.countryId=this.form.value['countryId']
  this.cityservices.SaveCity(objcity).subscribe({
    next:data=>{alert("Saved Successfully")},
  error:err=>{alert("Error Happened")}
  })
  }
  
GetCountries(){
this.countryservice.GetCountry().subscribe({
  next:data=>{this.countryli=data},
  error:err=>{alert("Error Happened")}
})
}
Search(){

}
loadCity(id:number){
this.cityservices.LoadCity(id).subscribe({
  next:data=>{this.cityli=data},
  error:err=>{alert("Error Happened")}

})
}
Delete(id:number){
  this.cityservices.DeleteCity(id).subscribe({
    next:data=>{alert("Deleted Successfully")},
    error:err=>{alert("Error Happened")}
  
  })
}
}
