import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    const decider = 1;
    return new Promise((resolve, reject) => {
      if (decider === 1) {
        resolve(5);
      } else {
        reject(1);
      }
    })
    .then((response) => {
      console.log('obtained response: ' + response);
      return new Promise((resolve) => resolve(response));
    })
    .catch((err) => {
      console.log('error: ' + err);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    })
    .then(response => {
      console.log('obtained second response: ' + response);
    })
    .catch(err => {
      console.log('error2: ' + err);
    });
  }

}
