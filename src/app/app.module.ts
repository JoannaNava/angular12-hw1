import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from '@view/question/question.component';
import { TableComponent } from '@view/table/table.component';
import { PanelComponent } from '@view/panel/panel.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ExampleComponent } from './view/example/example.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TableComponent,
    PanelComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
