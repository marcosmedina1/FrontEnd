import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../../assets/data';
import { AutosService } from '../Services/autos.service';
import { NgbPagination, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { Automovil } from 'src/assets/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  page = 1;
  pageSize = 10;
  collectionSize = 40;
  auto: Automovil = {} as Automovil;
  constructor(
    private autoSerive: AutosService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.autoSerive.getAutos().subscribe((response) => {
      this.autos = response.data;
    });
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
  }

  /*openModalAgregar() {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = this.auto;
    modalRef.componentInstance.accion = 'Agregar';
  }*/

  eliminarAuto(id: number) {
    try {
      this.autoSerive.getDelete(id).subscribe();
      window.alert('Se borro con exito recarge la pagina');
    } catch (error) {
      console.log(error);
    }

  }


}
