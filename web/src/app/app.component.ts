import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { AngularSplitModule } from 'angular-split';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, EditorComponent, AngularSplitModule],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  private editorInstance: any; // Store Monaco Editor instance
  private observer: MutationObserver | null = null; // MutationObserver for layout changes

  code: string = '';
  options = {
    theme: 'vs-light',
    language: 'sql',
  };

  ngOnInit() {}

  ngAfterViewInit(): void {
    // Observe changes in the pane layout
    const editorPane = document.querySelector('.editor-pane');
    if (editorPane) {
      this.observer = new MutationObserver(() => {
        if (this.editorInstance) {
          this.editorInstance.layout(); // Adjust Monaco Editor layout
        }
      });

      this.observer.observe(editorPane, {
        attributes: true,
        childList: false,
        subtree: false,
      });
    }
  }

  // Capture the Monaco Editor instance
  onInit(editor: any): void {
    this.editorInstance = editor;
  }

  // Clean up the MutationObserver when the component is destroyed
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
