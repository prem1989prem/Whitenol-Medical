import { Component, OnInit, ViewChild} from '@angular/core';

export interface contacts {
  full_name: string,
  email: string,
  mobile: number,
  comment: any
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{

  @ViewChild('flname') flname;
  @ViewChild('femail') femail;
  @ViewChild('fmobile') fmobile;
  @ViewChild('fcomment') fcomment;
  
  private contact: contacts;

  constructor() {


  }

  ngOnInit() {

    this.contact = {
      full_name: "",
      email: "",
      mobile: null,
      comment: ""

    }
  }

  addContact(data) {
    console.log(data);
   // console.log(this.flname.nativeElement);
    this.flname.nativeElement.value = '';
    this.femail.nativeElement.value = '';
    this.fmobile.nativeElement.value = '';
    this.fcomment.nativeElement.value = '';
  }




}
