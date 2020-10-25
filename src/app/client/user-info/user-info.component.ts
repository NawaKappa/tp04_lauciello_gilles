import { Component, Input, OnInit } from "@angular/core";
import { Utilisateur } from "../../Models/utilisateur";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  @Input() userToPrint: Utilisateur;

  constructor() {}

  ngOnInit() {}
}
