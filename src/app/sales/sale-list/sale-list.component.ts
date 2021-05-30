import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Sale } from 'src/app/shared/sale.model';
import { SaleService } from 'src/app/shared/sale.service';


@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {

  list!: Sale[];
  constructor(private service: SaleService,
    private firestore: AngularFirestore) { }

  listsub!: Subscription;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.listsub = this.service.getSales().subscribe(actionArray => {
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()as Object
          } as Sale;
      })
    });
  }

  onEdit(sal:Sale){
      this.service.formData =Object.assign({},sal);
  }

  onDelete(id:string){
    this.firestore.doc('sales/'+id).delete();
  }
  ngOnDestroy(): void {
   this.listsub.unsubscribe()
  }

}
