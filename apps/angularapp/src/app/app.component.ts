import { Component, OnInit } from '@angular/core';
import { UserService } from '@elf-example/user-service';

@Component({
  selector: 'elf-example-root',
  template: '<h1>Angular Username = {{ username$ | async }}</h1>',
})
export class AppComponent implements OnInit {

  private service = new UserService();
  username$ = this.service.repo.username$;

  ngOnInit() {
    this.service.getUser().subscribe();
  }
}
