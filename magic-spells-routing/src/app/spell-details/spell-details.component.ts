import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css'],
})
export class SpellDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _spellsService: SpellsService
  ) {}
  public spells;
  public spellId;
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.spellId = id;
    this._spellsService.getSpells().subscribe((data) => (this.spells = data));
  }
}
