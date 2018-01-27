import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  fn1() {
    console.log('fn1 invoked');
  }

  fn2() {
    console.log('fn2 invoked');
  }

  cb(data: any) {
    console.log('cb', data);
  }
}
