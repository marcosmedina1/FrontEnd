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
  page: number;
  pageSize: number;
  DisplayProgressBar: boolean;
  collectionSize: number;
  pageAgregar: number;
  constructor(
    private autoSerive: AutosService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.page = +sessionStorage.getItem('currentPage');
    this.pageSize = 10;
    this.DisplayProgressBar = true;
    this.autoSerive.getAutos().subscribe((response) => {
      this.autos = response.data;
      this.DisplayProgressBar = false;
      this.collectionSize = this.autos.length;
      setTimeout(() => {
        this.DisplayProgressBar = false;
        this.autos = response.data;
      }, 1500);
    });
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    try {
      modalRef.result.then(
      (auto) => {
        this.autoSerive.UpdateAutos(auto).subscribe();
        window.alert('Se acutalizo con Exito');
        sessionStorage.setItem('currentPage', this.page.toString());
        this.ngOnInit();
      }
    );
    } catch (error) {
      console.log(error);
    }
  }

  openModalAgregar() {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = {
      _id: 0,
      modelos: [],
      marca: '',
      submarca: '',
      descripcion: '',

    };
    modalRef.componentInstance.accion = 'Agregar';

    try {
      modalRef.result.then(
        (auto) => {
          this.autoSerive.AgregarAutos(auto).subscribe();
          window.alert('Se agrego con Exito');
          this.pageAgregar = Math.ceil(this.collectionSize / this.pageSize);
          sessionStorage.setItem('currentPage', this.pageAgregar.toString());
          this.ngOnInit();
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  eliminarAuto(id: number) {
    try {
      this.autoSerive.DeleteAutos(id).subscribe( response => {
        sessionStorage.setItem('currentPage', this.page.toString());
        this.ngOnInit();
      });
      window.alert('Se borro con exito recarge la pagina');
    } catch (error) {
      console.log(error);
    }

  }


}
