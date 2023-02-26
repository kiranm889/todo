import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  message = 'Some welcome msg';
  name = '';
  welcomeMsgFromService:any;
  // welcomeMsgFromService:string
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    console.log(this.message);
    this.route.snapshot.params['name'];
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );

    console.log("last-lne")
  }

  handleSuccessfulResponse(response:any){
    this.welcomeMsgFromService=response.message;
    // console.log(response)
    // console.log(response.message)
  }

  handleErrorResponse(error:any){
    // console.log(error)
    this.welcomeMsgFromService=error.error.message

  }

  //SecondUrl
  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldServiceWithPathVariable(this.name));
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );

    console.log("last-lne")
  }
}
