function saveData() {
    const voorletters = document.getElementById("voorletters").value;
    const achternaam = document.getElementById("achternaam").value;
    const tussenvoegsel = document.getElementById("tussenvoegsel").value;
    const bsn = document.getElementById("bsn").value;
    const Overlijdensdatum = document.getElementById("Overlijdensdatum").value;

    // Opslaan in localStorage
    localStorage.setItem("voorletters", voorletters);
    localStorage.setItem("achternaam", achternaam);
    localStorage.setItem("tussenvoegsel", tussenvoegsel);
    localStorage.setItem("bsn", bsn);
    localStorage.setItem("Overlijdensdatum", Overlijdensdatum);
    alert("Data opgeslagen!");
}

function loadData() {
    // Ophalen van de data uit localStorage
    const voorletters = localStorage.getItem("voorletters");
    const achternaam = localStorage.getItem("achternaam");
    const tussenvoegsel = localStorage.getItem("tussenvoegsel");
    const bsn = localStorage.getItem("bsn");
    const Overlijdensdatum = localStorage.getItem("Overlijdensdatum");

    if (voorletters && achternaam) {
        document.getElementById("voorletters").value = voorletters;
        document.getElementById("achternaam").value = achternaam;
        document.getElementById("tussenvoegsel").value = tussenvoegsel;
        document.getElementById("bsn").value = bsn;
        document.getElementById("Overlijdensdatum").value = Overlijdensdatum;

        alert("Data geladen!");
    } else {
        alert("Geen data gevonden!");
    }
}

function clearData() {
    // Verwijderen van de data uit localStorage
    localStorage.removeItem("voorletters");
    localStorage.removeItem("achternaam");
    localStorage.removeItem("tussenvoegsel");
    localStorage.removeItem("bsn");
    localStorage.removeItem("Overlijdensdatum");

    document.getElementById("voorletters").value = "";
    document.getElementById("achternaam").value = "";
    document.getElementById("tussenvoegsel").value = "";
    document.getElementById("bsn").value = "";
    document.getElementById("Overlijdensdatum").value = "";

    alert("Data verwijderd!");
}