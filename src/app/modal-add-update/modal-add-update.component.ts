import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/assets/models';
import { AutosService } from '../Services/autos.service';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  accion: string;
  auto: Automovil;
  constructor(
    public activeModal: NgbActiveModal,
    private autoService: AutosService
  ) { }

  ngOnInit(): void {
  }
}
