import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DrawerService {
    public menuIconStatusBS = new BehaviorSubject<boolean>(false);
    private drawer: MatDrawer;

    setDrawer(drawer: MatDrawer): void {
        this.drawer = drawer;
    }

    toggleDrawer(): void {
        this.drawer.toggle();
    }

    public showMenuIcon(): void{
        this.menuIconStatusBS.next(true);
    }

    public hideMenuIcon(): void{
        this.menuIconStatusBS.next(false);
    }
}
