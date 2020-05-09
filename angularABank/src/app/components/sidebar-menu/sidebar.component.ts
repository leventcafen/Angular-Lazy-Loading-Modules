import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/model/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService) { }
  menus:Menu[];
  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu().subscribe(
      data => {
        this.menus=data;
      }
    );
  }

}
