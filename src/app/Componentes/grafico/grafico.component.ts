import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  hearts: number[] = [1, 1, 1, 1, 1]; // Inicialmente 5 corazones
  defense: number = this.getRandomDefense(); // Defensa inicial
  speed: number = this.getRandomSpeed(); // Velocidad inicial

  removeHeart() {
    if (this.hearts.length > 0) {
      this.hearts.pop(); // Quita el último elemento del array
    }
  }

  addHeart() {
    if (this.hearts.length < 5) {
      this.hearts.push(1); // Añade un corazón al array
    }
  }

  getRandomDefense() {
    return Math.floor(Math.random() * 5) + 1; // Defensa aleatoria entre 1 y 5
  }

  getRandomSpeed() {
    return Math.floor(Math.random() * 5) + 1; // Velocidad aleatoria entre 1 y 5
  }
}
