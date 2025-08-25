import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PoliciaisService } from '../../services/policiais.service';
import { Policiais } from '../../models/policiais.model';


@Component({
  selector: 'app-policial-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './policial-list.component.html',
  styleUrl: './policial-list.component.css'
})

export class PolicialListComponent implements OnInit {
  policiais: Policiais[] = [];

  constructor(private policiaisService: PoliciaisService) { }

  ngOnInit(): void {
    this.policiaisService.getPoliciais().subscribe(data => {
      this.policiais = data;
    });
  }
  deletePolicial(id: number): void {
    if (confirm('Tem certeza que deseja excluir este policial?'))
      this.policiaisService.deletePolicial(id).subscribe(() => {
        this.policiais = this.policiais.filter(policiais => policiais.id !== id);
      });
  }
}
