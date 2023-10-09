import { Component, OnInit, Renderer2, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-profile-three',
  templateUrl: './profile-three.component.html',
  styleUrls: ['./profile-three.component.css']
})
export class ProfileThreeComponent implements OnInit, AfterViewInit{

  listProfile: Profile[] = [];
  profileData: any; // Variable para almacenar los datos proporcionados
  selectedColor: string = 'rgb(208, 175, 219)';

  backgroundColor: string = this.selectedColor;
  textColor: string = this.selectedColor;
  borderColor: string = this.selectedColor;
  

  @ViewChildren('cambiarColor', { read: ElementRef }) elementos!: QueryList<ElementRef>;

  @ViewChildren('text-color', { read: ElementRef }) elementosConTexto!: QueryList<ElementRef>;

  @ViewChildren('border-color', { read: ElementRef }) elementosConBorde!: QueryList<ElementRef>;


  constructor(
    public userData: UserDataService,
    public views: NavBarService,
    private renderer: Renderer2    
  ) { }

  ngAfterViewInit() {
    this.applyColors();
  }

  applyColors() {
    // Aplicar color de fondo a elementos con clase 'conteiner-img'
    this.elementos.forEach((element) => {
      if (element.nativeElement.classList.contains('conteiner-img')) {
        this.renderer.setStyle(element.nativeElement, 'background-color', this.selectedColor);
      }
      
      // Aplicar color de texto a elementos <h3> dentro de la clase 'titulo-card'
      if (element.nativeElement.classList.contains('titulo-card')) {
        const h3Elements = element.nativeElement.querySelectorAll('h3');
        h3Elements.forEach((h3: HTMLElement) => { // Utilizamos HTMLElement aquí
          this.renderer.setStyle(h3, 'color', this.selectedColor);         
        });
      }
      
      // Cambiar el color del borde inferior de los elementos <h> dentro de la clase 'nombre'
      if (element.nativeElement.classList.contains('contenido-card')) {
        const h1Elements = element.nativeElement.querySelectorAll('h4');
        h1Elements.forEach((h4: HTMLElement) => {
          this.renderer.setStyle(h4, 'border-top-color', this.selectedColor);
        });
      }
    });
  }
  


  ngOnInit(): void {
    this.userData.getMyOptionals();
    this.userData.languageGet();
    this.userData.getExperience();
    this.userData.getListFormations();
    this.userData.getReference();
    this.userData.getSkill();
  }

   async downloadPDF() {
    // Selecciona el elemento con el ID 'profile-1' y captura su contenido
    const profileContainer: HTMLElement | null = document.getElementById('profile');
    
    if (!profileContainer) {
      console.error('No se encontró el elemento con el ID "profile-two".');
      return;
    }

    try {
      const canvas: HTMLCanvasElement = await html2canvas(profileContainer, {
        scale: 2,
        useCORS: true,
      });

      const imageDataUrl: string = canvas.toDataURL('image/jpeg');

      const doc = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      
      const marginLeft = 10; 
      const marginTop = 10; 

      doc.addImage(imageDataUrl, 'JPEG', marginLeft, marginTop, imgWidth, imgHeight);
      doc.save(`${new Date().toISOString()}_Curriculum.pdf`);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  }
}
