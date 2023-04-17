function consultarPalmares() {
  var palmares;
  var encontrado = false;

  do {
    var equipo = prompt(
      "Ingrese el nombre del club de fútbol que desea consultar su palmarés:\n Barcelona\n Real Madrid\n Bayern Munich\n Manchester United\n Liverpool\n Juventus\n AC Milan\n PSG\n Chelsea\n Borussia Dortmund\n:"
    );

    switch (equipo.toLowerCase()) {
      case "barcelona":
        palmares =
          "26 Ligas, 31 Copas del Rey, 5 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "real madrid":
        palmares =
          "34 Ligas, 19 Copas del Rey, 13 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "bayern munich":
        palmares =
          "31 Bundesligas, 20 Copas de Alemania, 6 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "manchester united":
        palmares =
          "20 Ligas, 12 Copas de Inglaterra, 3 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "liverpool":
        palmares =
          "19 Ligas, 8 Copas de Europa/Ligas de Campeones de la UEFA, 7 Copas de la UEFA";
        encontrado = true;
        break;
      case "juventus":
        palmares =
          "36 Ligas, 14 Copas de Italia, 2 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "ac milan":
        palmares =
          "18 Ligas, 5 Copas de Europa/Ligas de Campeones de la UEFA, 7 Copas de la UEFA";
        encontrado = true;
        break;
      case "psg":
        palmares =
          "9 Ligas, 14 Copas de Francia, 0 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "chelsea":
        palmares =
          "6 Ligas, 8 Copas de Inglaterra, 2 Ligas de Campeones de la UEFA";
        encontrado = true;
        break;
      case "borussia dortmund":
        palmares =
          "8 Bundesligas, 4 Copas de Alemania, 1 Liga de Campeones de la UEFA";
        encontrado = true;
        break;
      default:
        palmares = "Club de fútbol no encontrado.";
        encontrado = false;
        alert(palmares);
        break;
    }
  } while (!encontrado);

  alert("El palmarés del club " + equipo + " es: " + palmares);
}

consultarPalmares();
