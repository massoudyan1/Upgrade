import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../storage/upload.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private uploadService: UploadService) { }

  image = this.uploadService.url;

  ngOnInit(): void {
  }
}
