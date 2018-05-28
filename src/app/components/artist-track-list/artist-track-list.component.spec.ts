import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTrackListComponent } from './artist-track-list.component';

xdescribe( 'ArtistTrackListComponent', () => {
    let component: ArtistTrackListComponent;
    let fixture: ComponentFixture<ArtistTrackListComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [ArtistTrackListComponent]
        } )
            .compileComponents();
    } ) );

    beforeEach(() => {
        fixture = TestBed.createComponent( ArtistTrackListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
