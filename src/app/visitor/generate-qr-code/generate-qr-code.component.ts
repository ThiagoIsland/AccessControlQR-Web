import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generate-qr-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generate-qr-code.component.html',
  styleUrl: './generate-qr-code.component.css'
})
export class GenerateQrCodeComponent {

}
