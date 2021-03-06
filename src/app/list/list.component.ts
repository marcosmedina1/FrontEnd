import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../assets/models';
import { ModalDismissReasons, NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../Services/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';
  DisplayProgressBar: boolean;
  constructor(
    private modalService: NgbModal,
    private autoServie: AutosService
  ) { }

  ngOnInit() {
    this.DisplayProgressBar = true;
    this.autoServie.getAutos().subscribe((response) => {
      this.autos = response.data;
      this.DisplayProgressBar = false;
    });
  }

  open(auto: Automovil, modalAutomovil): void {
    this.autoSeleccionado = auto;
    this.modalService.open(modalAutomovil, {ariaLabelledBy: 'modal-basic-title'});
  }
}
