import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  
  @Input({ required: true }) solicitarImagen: string = "";
  @Output() clickPokemon = new EventEmitter<number>();

  pokemonIds: number[] = Array.from({ length: 151 }, (_, i) => i + 1); // Array de 1 a 151

  anteriorPokemon() {
    this.clickPokemon.emit(-1);
  }
  
  siguientePokemon() {
    this.clickPokemon.emit(1);
  }

  cambiarPokemon(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value; // Obtener el valor del select
    const id = parseInt(selectedId);
    if (!isNaN(id)) {
      this.clickPokemon.emit(id - 1); // Emitimos el evento con el ID seleccionado
      this.solicitarImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/${id}.png`; // Actualiza la imagen
    }
  }
}
