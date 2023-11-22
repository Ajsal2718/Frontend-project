import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card-product/card.component";
import { RouterModule } from "@angular/router";
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MatModule } from "../mat/mat.module";


@NgModule({
    declarations:[
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        CardComponent,
        AdminNavbarComponent
    ],
    imports:[   
        CommonModule,
        FormsModule,
        RouterModule,
        MatModule
    ],
    exports:[
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        CardComponent,
        AdminNavbarComponent
    ]
})

export class SharedModule{

}