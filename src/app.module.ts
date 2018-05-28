import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { JokeListComponent } from './app/components/joke-list/joke-list.component';
import { JokeComponent } from './app/components/joke/joke.component';
import { JokeFormComponent } from './app/components/joke-form/joke-form.component';
import { CarouselComponent } from './app/components/carousel/carousel.component';
import { CarouselItemComponent } from './app/components/carousel-item/carousel-item.component';
import { RecentArticlesComponent } from './app/components/recent-articles/recent-articles.component';
import { CardHoverDirective } from './app/directives/card-hover/card-hover.directive';
import { RolloverDirective } from './app/directives/rollover/rollover.directive';
import { ImageRolloverActivityComponent } from './app/components/image-rollover-activity/image-rollover-activity.component';
import { SearchComponent } from './app/components/search/search.component';
import { SearchService } from './app/services/search/search.service';
import { PersonService } from './app/services/person/person.service';
import { HttpComponent } from './app/components/http/http.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './app/components/header/header.component';
import { HomeComponent } from './app/components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './app/components/person/person.component';
import { ArtistComponent } from './app/components/artist/artist.component';
import { ArtistTrackListComponent } from './app/components/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './app/components/artist-album-list/artist-album-list.component';
import { ArtistVideoListComponent } from './app/components/artist-video-list/artist-video-list.component';
import { AlwaysAuthGuard } from './app/guards/always-auth-guard';
import { AlwaysAuthChildrenGuard } from './app/guards/always-auth-children-guard';
import { OnlyLoggedInUsersGuard } from './app/guards/only-logged-in-users-guard';
import { UnsearchedTermGuard } from './app/guards/unsearched-term-guard';
import { UserService } from './app/services/user/user.service';
import { AuthService } from './app/services/auth/auth.service';
import { DefaultPipe } from './app/pipes/default.pipe';
import { LoginComponent } from './app/components/login/login.component';
import { ApplicantLoginComponent } from './app/components/applicant-login/applicant-login.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    { path: 'search', component: SearchComponent },
    {
        path: 'artist/:artistId',
        component: ArtistComponent,
        canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
        canActivateChild: [AlwaysAuthChildrenGuard],
        children: [
            { path: '', redirectTo: 'tracks', pathMatch: 'full' },
            { path: 'tracks', component: ArtistTrackListComponent },
            { path: 'albums', component: ArtistAlbumListComponent },
            { path: 'videos', component: ArtistVideoListComponent }
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: 'person', component: PersonComponent },
    { path: '**', component: HomeComponent }
];

@NgModule( {
    declarations: [
        AppComponent,
        JokeListComponent,
        JokeComponent,
        JokeFormComponent,
        CarouselComponent,
        CarouselItemComponent,
        RecentArticlesComponent,
        CardHoverDirective,
        RolloverDirective,
        ImageRolloverActivityComponent,
        HttpComponent,
        SearchComponent,
        HeaderComponent,
        HomeComponent,
        PersonComponent,
        ArtistComponent,
        ArtistTrackListComponent,
        ArtistAlbumListComponent,
        ArtistVideoListComponent,
        DefaultPipe,
        LoginComponent,
        ApplicantLoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        RouterModule.forRoot( routes, { useHash: true } )
    ],
    providers: [SearchService, PersonService, AlwaysAuthGuard, OnlyLoggedInUsersGuard, UserService, AuthService, AlwaysAuthChildrenGuard, UnsearchedTermGuard],
    bootstrap: [AppComponent]
} )
export class AppModule { }
