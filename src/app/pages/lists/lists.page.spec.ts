import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListsPage } from './lists.page';
import { RouterTestingModule } from '@angular/router/testing';
import { SocketService } from '../../services/socket.service';
import { of } from 'rxjs';
import { ListEntityService } from './services/list-entity.service';

describe('ListsPage', () => {
  let component: ListsPage;
  let fixture: ComponentFixture<ListsPage>;

  let socketSpy;
  let listEntityServiceSpy;

  beforeEach(async(() => {
    socketSpy = jasmine.createSpyObj('SocketService', {
      joinListsGroup: null,
      leaveListsGroup:  null,
      getListsChanges: of(null),
      getListCreated: of(null)
    });

    listEntityServiceSpy = jasmine.createSpyObj('ListEntityService', {
      updateOneInCache: of(null),
      addOneToCache: of(null)
    });

    TestBed.configureTestingModule({
      declarations: [ ListsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: SocketService, useValue: socketSpy},
        { provide: ListEntityService, useValue: listEntityServiceSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
