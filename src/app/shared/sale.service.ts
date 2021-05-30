import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sale } from './sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  formData!: Sale;

  constructor(private firestore:AngularFirestore) { }

  getSales(){
   return this.firestore.collection('sales').snapshotChanges();
  }
}
