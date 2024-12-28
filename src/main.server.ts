import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { MainComponent } from './app/pages/main/main.component';
const bootstrap = () => bootstrapApplication(MainComponent, config);

export default bootstrap;
