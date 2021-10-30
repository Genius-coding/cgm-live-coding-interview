import { Component } from '@angular/core';
import { ConsumeService } from './consume.service';
import { User } from './user.model';
import { UserData } from './userdata.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userDate : User[];

  userDataWithName : UserData [] = [];

  constructor(private consumeSercvice: ConsumeService) {

     this.consumeSercvice.getDateEndpoint().subscribe((data) =>{
        this.userDate = data;
        console.log(this.userDate); 
     } );

     this.consumeSercvice.getDataFromUsers().subscribe((data) => {
        data.forEach((element) => {
          this.userDataWithName.push(element);
        });
    })

    
    console.log('Second table',this.userDataWithName);


  
    }

    getNameById(id: number) : string {
      return this.userDataWithName.find(data => data.id === id)?.name;
    }
    
    ;

  }



