export class User {
    idOsoby: number;
    Login: string;
    Haslo: string;
    Imie: string;
    Nazwisko: string;
    DataUrodzenia: Date;
    Pesel:string;
    Wyksztalcenie: string;
    EMail:string;
    Plec:string;
    Dostep:number;
    Uprawnienia:string;
    token: string;
    Kwalifikacje:Kwalifikacje[]=[];
    Wniosek:Wniosek[]=[];
}
export class Kwalifikacje{
Nazwa:string;
}
export class Wniosek{
Opis:string;
}

