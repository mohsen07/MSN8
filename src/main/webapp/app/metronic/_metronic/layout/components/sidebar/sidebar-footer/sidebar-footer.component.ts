import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss'],
})
export class SidebarFooterComponent implements OnInit {
  appPreviewChangelogUrl: string = "1.0.0";

  constructor() {}

  ngOnInit(): void {}
}
