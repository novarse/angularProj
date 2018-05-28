import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormComponent } from './joke-form.component';

xdescribe( 'JokeFormComponent', () => {
    let component: JokeFormComponent;
    let fixture: ComponentFixture<JokeFormComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [JokeFormComponent]
        } )
            .compileComponents();
    } ) );

    beforeEach(() => {
        fixture = TestBed.createComponent( JokeFormComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
