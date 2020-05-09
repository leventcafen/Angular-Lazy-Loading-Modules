import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/model/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
