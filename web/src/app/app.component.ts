import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent} from 'ngx-monaco-editor-v2';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, EditorComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent implements OnInit {
  editor: any;

  code: string = '';

  options = {
    theme: 'vs-light',
    language: 'sql'
  };

  ngOnInit() {}

  onInit(editor: any) {
    // this.editor = editor;
  }
}
