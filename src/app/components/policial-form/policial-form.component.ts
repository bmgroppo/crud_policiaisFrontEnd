import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PoliciaisService } from '../../services/policiais.service';

@Component({
  selector: 'app-policial-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './policial-form.component.html',
  styleUrl: './policial-form.component.css'
})
export class PolicialFormComponent implements OnInit {
  policialForm: FormGroup;
  isEdit: boolean = false;
  policialId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private policiaisService: PoliciaisService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.policialForm = this.fb.group({
      nome: ['', Validators.required],
      rg_civil: ['', Validators.required],
      rg_militar: ['', Validators.required],
      cpf: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      matricula:['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.policialId = +idParam;
      this.isEdit = true;
      this.policiaisService.getPoliciaisById(this.policialId).subscribe(policial => {
        this.policialForm.patchValue(policial);
      });
    }
  }
  onSubmit(): void {
    if (this.policialForm.invalid) {
      return;
    }
    const policialData = this.policialForm.value;
    if (this.isEdit && this.policialId) {
      this.policiaisService.updatePolicial(this.policialId, policialData).subscribe(() => {
        this.router.navigate(['/policiais']);
      });
    } else {
      this.policiaisService.createPolicial(policialData).subscribe(() => {
        this.router.navigate(['/policiais']);
      });
    }
  }
}
