import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../../assets/data';
import { Automovil } from '../../assets/models';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }

  open(auto: Automovil, modalAutomovil): void {
    this.autoSeleccionado = auto;
    this.modalService.open(modalAutomovil, {ariaLabelledBy: 'modal-basic-title'});
  }
}
