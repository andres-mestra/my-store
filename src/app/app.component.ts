import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  widthImg = 10
  name = 'Andres'
  age = 24
  img = 'https://source.unsplash.com/random'
  btnDisabled = true
  person = {
    name: "Nicolas",
    age: 18,
    img: 'https://source.unsplash.com/daily'
  }

  names: string[] = [
    'Nico',
    'lau',
    'Camilo',
    'Joha'
  ]
  newName = ''

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  addName(){
    this.newName.length > 0 && this.names.push(this.newName)
    this.newName = ''
  }

  removeName(index: number) {
    this.names.splice(index, 1)
  }
}
