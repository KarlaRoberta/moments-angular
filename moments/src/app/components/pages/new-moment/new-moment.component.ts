import { MomentService } from './../../../services/moment.service';
import { Component } from '@angular/core';
import {Moment} from 'src/app/Moments';



@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText= "Compartilhar!";

  constructor(private momentService: MomentService){}

 async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append('image',moment.image);

    }

    //toDo

    await this.momentService.createMoment(formData).subscribe();

    //exibir msg

    //redirect

  }

}
