import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card-product/card.component";
@NgModule({
    declarations:[
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        CardComponent
    ],
    imports:[   
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports:[
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        CardComponent
    ]
})

export class SharedModule{

}