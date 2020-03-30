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

  editar(auto: Automovil) {
    try {
      this.autoService.getUpdate(auto).subscribe();
      window.alert('Se modifico con exito recarge la pagina');
    } catch (error) {
      console.log(error);
    }
  }
}
