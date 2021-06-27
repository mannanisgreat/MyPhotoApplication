import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { FormsModule } from '@angular/forms';
import { RecentAlbumsComponent } from './recent-albums/recent-albums.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    AlbumDetailsComponent,
    CreateAlbumComponent,
    MyAlbumsComponent,
    PhotoDetailsComponent,
    UploadPictureComponent,
    RecentAlbumsComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,


    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
