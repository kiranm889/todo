import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  message="Some welcome msg"
  name=''
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    console.log(this.message)
    this.route.snapshot.params['name']
    this.name=this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

}
