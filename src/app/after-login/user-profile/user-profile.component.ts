import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../../storage/upload.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgAuthService } from 'src/app/auth/auth.service';
import { UserDataService } from '../../data/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    public uploadService: UploadService,
    public afStorage: AngularFireStorage,
    public ngAuthService: NgAuthService,
    public dataService: UserDataService
    ) { }

  editName: boolean = false;
  editMail: boolean = false;
  editDOB: boolean = false;
  editHeight: boolean = false;
  editWeight: boolean = false;

  ngOnInit() {
    this.uploadService.getUrl();
    this.dataService.getNameData();
    this.dataService.getEmailData();
    this.dataService.getDOB();
    this.dataService.getHeight();
    this.dataService.getWeight();
  }
}
