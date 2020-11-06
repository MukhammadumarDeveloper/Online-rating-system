import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  key: string;
  vaqtincha: any;
  natija: any;

  name = new FormControl('');

  list = [];

  
  oquvchilar = [
    {
      ism_sharif: "Muhammadumar Mahmudov",
      togri_javoblar: 0,
      samaradorlik: 0
    },
    {
      ism_sharif: "Asadbek Abdullayev",
      togri_javoblar: 0,
      samaradorlik: 0
    },
    {
      ism_sharif: "Saidamin Boqijonov",
      togri_javoblar: 0,
      samaradorlik: 0
    },
    {
      ism_sharif: "Yaxyoxon Shukurillayev",
      togri_javoblar: 0,
      samaradorlik: 0
    },
    {
      ism_sharif: "Ziyoda Abdujalilova",
      togri_javoblar: 0,
      samaradorlik: 0
    },
    {
      ism_sharif: "Feruza Abdujalilova",
      togri_javoblar: 0,
      samaradorlik: 0
    }
  ] 

  reset() {
    for(let oquvchi of this.oquvchilar) {
      oquvchi.togri_javoblar = 0;
      oquvchi.samaradorlik = 0
    }
  }

  bajar(oquvchi) {
    oquvchi.togri_javoblar+=1;
    if(oquvchi.samaradorlik < 100) {
      oquvchi.samaradorlik+=20;
    }
  }

  // foo(event) {
  //   console.log(event)
    // this.vaqtincha = this.oquvchilar;
    // this.natija = this.vaqtincha.find((elem) => {
    //   return elem.ism_sharif === this.key;
    // });
    // // console.log(this.natija)
    // this.oquvchilar = this.natija;
  // }

  constructor() { }

  ngOnInit() {
    
    this.list = this.oquvchilar;


    this.name.valueChanges.subscribe(val => {
      this.list = this.oquvchilar.filter(elem => {
        return elem.ism_sharif.includes(val);
      })
    })
  }

}
