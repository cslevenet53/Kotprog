import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaleService } from 'src/app/shared/sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})

export class SaleComponent implements OnInit {

  constructor(public service : SaleService,
    public firestore:AngularFirestore,
    private snack:MatSnackBar) { }
  
  ngOnInit(): void {this.resetForm();}

  ngAfterViewInit(): void {
    
  }
  

  resetForm(form?:NgForm){
    if(form!= null)
      form.resetForm();
    this.service.formData={
    id: null,
    sid: '',
    href: '' ,
    creationDate: '',
    description: '' ,
    name: '',
    rating: '' ,
    type: '',
    priority: 'low' ,
    }
  }

  onSubmit(form : NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null){
      this.firestore.collection('sales').add(data);
      this.snack.open("Sikeres hozzáadás!","",{
        duration:2000
      });
    }else{
      this.firestore.doc('sales/'+form.value.id).update(data);
      this.snack.open("Sikeres szerkesztés!","",{
        duration:2000
      });
    }
      this.resetForm(form);
  }



}
