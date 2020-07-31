import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, first } from 'rxjs/operators';
import { Usuario } from '../registro/modelo/usuario';
import { Poesia } from '../registro/modelo/poesia';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<any>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {

      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
     }
  async getCurrentUser(): Promise<any> {
      try{
      
        return this.user.pipe(first()).toPromise();
  
      }catch(erro){
        console.log(erro)
      }
      
  }

  nuevoRegistro(usuario:Usuario){
    return new Promise((resolve, reject) =>{
      this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.password).then(res =>{
        
        usuario.uid = res.user.uid;
        this.insertUser(usuario);
        resolve(res)
      }).catch(erro => reject(erro))
    })
  }

  async entrarEmail(email:string, pass:string){

    return new Promise((resolve, reject) =>{
      this.afAuth.signInWithEmailAndPassword(email, pass).then(res =>{
        resolve(res)
      }).catch(error => reject(error))
    });

  }

   getUser(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`users/${uid}`);
    return itemDoc.valueChanges();
  }

  getPoesia(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`poesia/${uid}`);
    return itemDoc.valueChanges();
  }


  async insertUser(usuario: Usuario){
    console.log(usuario)
    const refEmpleo= this.afs.collection("users")
    const param=JSON.parse(JSON.stringify(usuario))
    refEmpleo.doc(usuario.uid).set(param),{merge: true}
  }

  insertPoesia(poesia: Poesia){
    const refEmpleo= this.afs.collection("poesia")
    poesia.uid=this.afs.createId()
    const param=JSON.parse(JSON.stringify(poesia))
    //console.log(param)
    refEmpleo.doc(poesia.uid).set(param),{merge: true}
  }

  getPoesias(): Observable<any[]>{
    return this.afs.collection('poesia', 
      ref => ref.orderBy('fecha', 'desc')).valueChanges();
  }

}
