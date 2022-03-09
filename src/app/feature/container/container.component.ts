import { Component, OnInit } from '@angular/core';
import { ContainerService } from './services/container.service';

@Component({
  selector: 'craft-web',
  template: `<button (click)="clikkkk()">Save</button>`,
})
export class WebComponent implements OnInit {
  constructor(private containerService: ContainerService) {}

  ngOnInit() {
    this.containerService.getInfo().subscribe((val) => {
      console.log(val);
    });
  }

  clikkkk() {
    let obj = {
      email: 'hadeel.atallah@hotmail.com',
      fullname: 'djndkjn kdd',
      request_detail: 'im pidsnjsodn',
    };

    this.containerService.postInfo(obj).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
