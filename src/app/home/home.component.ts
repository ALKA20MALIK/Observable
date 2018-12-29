import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observer, Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  myNumbersObsSubscription:Subscription;
  myCustomObsSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers=interval(1000)
    .pipe(map(
        (data:number)=>{
          return data * 2;
        }
    ));
  
     this.myNumbersObsSubscription =  myNumbers.subscribe(
            (number:Number)=>{
              console.log(number);
            }
          );
    const myObservable=Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package');
      },2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(()=>{
        observer.complete();
      },5000);

      setTimeout(() => {
        observer.next('Third package');
      }, 6000);
    });

  this.myCustomObsSubscription = myObservable.subscribe(
      (data:Data)=>{
        console.log(data);
      },
      (data:Data)=>{
        console.log(data);
      },
      
      ()=>{
        console.log('Completed');
      },
      (data:Data)=>{
        console.log(data);
      },
      
    );
  }

  ngOnDestroy(){
    this.myNumbersObsSubscription.unsubscribe();
    this.myCustomObsSubscription.unsubscribe();
  }
}
