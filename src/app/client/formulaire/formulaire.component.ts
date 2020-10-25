import { Component, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { Utilisateur } from "../../Models/utilisateur";

@Component({
  selector: "app-formulaire",
  templateUrl: "./formulaire.component.html",
  styleUrls: ["./formulaire.component.css"]
})
export class FormulaireComponent implements OnInit {
  user: Utilisateur = new Utilisateur();
  model: any = {};
  isOk: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.user.nom = this.model.nom;
    this.user.prenom = this.model.prenom;
    this.user.sexe = this.model.sexe;
    this.user.adresse = this.model.adresse;
    this.user.ville = this.model.ville;
    this.user.codepostal = this.model.codepostal;
    this.user.telephone = this.model.telephone;
    this.user.email = this.model.email;
    this.user.login = this.model.login;
    this.user.password = this.model.password;

    this.isOk = true;
  }
}
