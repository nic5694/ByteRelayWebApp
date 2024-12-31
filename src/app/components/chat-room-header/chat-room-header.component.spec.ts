import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomHeaderComponent } from './chat-room-header.component';

describe('ChatRoomHeaderComponent', () => {
  let component: ChatRoomHeaderComponent;
  let fixture: ComponentFixture<ChatRoomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
