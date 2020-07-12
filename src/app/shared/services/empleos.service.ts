import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Empleo } from '../model/empleo';
@Injectable({
  providedIn: 'root'
})
export class EmpleosService {
  constructor(private afs: AngularFirestore) { }

 getEmpleos(): Observable<any[]>{
    return this.afs.collection('hoja_vida', 
        ref => ref.orderBy('salario', 'asc')).valueChanges();
  }
  /*getEmpleosNombre(): Observable<any[]>{
    return this.afs.collection('hoja_vida', 
        ref => ref.where("titulo","==","ICC")
        .orderBy('fecha', 'asc')).valueChanges();
  }
*/
  getEmpleo(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`hoja_vida/${uid}`);
    return itemDoc.valueChanges();
  }

  insertEmpleo(empleo: Empleo){
    const refEmpleo= this.afs.collection("hoja_vida")
    empleo.uid=this.afs.createId()
    const param=JSON.parse(JSON.stringify(empleo))
    console.log(param)
    refEmpleo.doc(empleo.uid).set(param),{merge: true}
  }
  updateEmpleo(empleo: Empleo){
    const refEmpleo= this.afs.collection("hoja_vida")
    const param=JSON.parse(JSON.stringify(empleo))
    refEmpleo.doc(empleo.uid).set(param),{merge: true}
  }



//----------Transacciones ----------
/**
   * Transacción para persistir un empleo asignando un secuencial
   * @param empleo Objeto a persistit
   */
  async saveEmpleado2(empleo: Empleo) {
    let uidEmpleo = this.afs.createId();
    let refCount = this.afs.firestore.collection("params").doc("secuencias");
    let refEmpleo = this.afs.firestore.collection("hoja_vida").doc(uidEmpleo);

    return await this.afs.firestore
      .runTransaction(async transaction => {
        const doc = await transaction.get(refCount);

        let newEmpleoNumber = 1;
        // Si este no existe crea el registro con un valor inicial
        if (!doc.exists) {
          transaction.set(refCount, { empleoNumber: newEmpleoNumber });
        }else{
          //Si existe incrementa este en 1
          newEmpleoNumber = doc.data().empleoNumber + 1;
          transaction.update(refCount, {
            empleoNumber: newEmpleoNumber
          });
        }

        empleo.uid = uidEmpleo;//this.afs.createId();
        empleo.numero = newEmpleoNumber;

        //const param = JSON.parse(JSON.stringify(empleo));
        //transaction.set(refEmpleo, param);

        transaction.set(refEmpleo, Object.assign({}, empleo));

        // retorna el nuevo secuencial del registro ingresado
        return newEmpleoNumber;
      })
      .then(empleoNumber => {
        return empleoNumber;
      })
      .catch(error => {
        console.error("Error", JSON.stringify(error));
        throw error;
      });
  }
  //constructor() { }
}
