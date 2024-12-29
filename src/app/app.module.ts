import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { SocketService } from "./services/socket.service";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    ChatComponent,
  ],
  declarations: [
  ],
  providers: [SocketService],
})
export class AppModule {}
