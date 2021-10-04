import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Andres'
  age = 24
  img = 'https://source.unsplash.com/random'
  btnDisabled = true
  person = {
    name: "Nicolas",
    age: 18,
    img: 'https://source.unsplash.com/daily'
  }

  toogleButton() {
    this.btnDisabled = !this.btnDisabled
  }

  incrementAge() {
    this.person.age += 1
  }

  onChange(event: Event) {
    const { value } = (event.target as HTMLInputElement)
    this.name = value
  }
}
