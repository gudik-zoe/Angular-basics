import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  public spells;
  constructor(private router: Router, private _spellsService: SpellsService) {}

  onSelect(spell) {
    this.router.navigate(['/spell-details', spell.id]);
  }
  ngOnInit() {
    this._spellsService.getSpells().subscribe((data) => (this.spells = data));
  }
}
