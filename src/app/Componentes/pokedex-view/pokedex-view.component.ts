import { Component, ViewChild } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  @ViewChild(GraficoComponent) graficoComponent!: GraficoComponent;

  pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/0.png'; // Empieza en 0
  pokemonId: number = 0; // Empieza en 0
  colores: string[] = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccee']; // Array de colores
  colorActual: number = 0; // Índice del color actual

  siguientepokemon(): void {
    this.pokemonId++;
    this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/' + this.pokemonId + '.png';
    this.actualizarEstadisticas(); // Actualizar defensa y velocidad
  }

  handlePokemon(event: number): void {
    this.pokemonId += event;
    this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/' + this.pokemonId + '.png';
    this.actualizarEstadisticas(); // Actualizar defensa y velocidad
  }

  actualizarEstadisticas(): void {
    if (this.graficoComponent) {
      this.graficoComponent.defense = this.graficoComponent.getRandomDefense();
      this.graficoComponent.speed = this.graficoComponent.getRandomSpeed();
    }
  }

  cambiarColor(): void {
    this.colorActual = (this.colorActual + 1) % this.colores.length; // Cambiar al siguiente color
    const pokedexElement = document.querySelector('.pokedex-view') as HTMLElement; // Casting aquí
    if (pokedexElement) {
      pokedexElement.style.backgroundColor = this.colores[this.colorActual]; // Cambiar color de fondo
    }
  }
}

