import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidebarService {
    public sidebarStatusBS = new BehaviorSubject<boolean>(true);
    public menuIconStatusBS = new BehaviorSubject<boolean>(true);
    public openSidebar(): void{
        this.sidebarStatusBS.next(true);
    }

    public closeSidebar(): void{
        this.sidebarStatusBS.next(false);
    }

    public showMenuIcon(): void{
        this.menuIconStatusBS.next(true);
    }

    public hideMenuIcon(): void{
        this.menuIconStatusBS.next(false);
    }
}
