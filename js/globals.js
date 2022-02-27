function random(min,max){
  return Math.floor((Math.random() * max) + min);
}
var nicks = ["Pedro", "Analia", "Susana", "German", "Pablo", "laura", "Pocho", "Hugo", "Walter", "Ornela", "Cecilia", "Rocio", "Soraya", "Francisco", "Ariana22", "Walter", "Pocho31", "Claudia02", "Chona", "Brian9", "Franzone", "Romi14", "Enrique", "Waldo", "Wildson", "lorena17", "Horacio", "FeniX", "Gremio", "BJunior", "Spartano", "Rockera", "RaulMania", "Sabrina_La-Pri", "Roxi", "Sagitariana", "TiPoMan", "Omega", "ninjamaster69xxx", "Carlito", "Heladeria Garay", "C9Mateo", "JannaMechanics", "Gustavo77", "Retiro", "NorDelta", "Marcelo_Rey", "@Jorge2000", "SocialBlack", "Michelena", "Juanmanuel", "Centro24", "Victoria56", "@Pizzeria900", "CiudadEvita", "Macdonal", "Lauriano13", "Lissa", "enriqueortega857", "ATRCentral", "DJTrance", "DuoDinamita", "HurlinghamCity", "Paranacito", "Samuray", "Isidro Casanova", "Fuerte Apache", "Biofrost", "Gatita", "CGT", "Moreno", "Tipazo", "Covid19", "LosMerlos", , "LaRenga", "Giuli_Bussines", "BandaMilitar", "Rosario",  "TuCumbiazo", "AdrianMa", "Guriza", "MorenoGotico", "Sanlorenzo", "BABY", "Romy Veraz", "dani", "Bang Bang", "Meteoro", "Rocho 100%", "Ambulanciero", "JoseCPaz", "pliz", "Sansalvador", "MarkPassion", "Manguera67", "Pache", "ZonaNorte", "La Matanza", "242", "MegaZero",  "ZonaSur", "Karina_55", "WifiCentro", "Fibertel", "Monoblock17", "Niqhtmarea", "L0L", "Telecentro", "Steffy", "Killer", "Leona", "Pachy aRaR", "Upu", "PelukeriaNilo", "Twiteame", "RosaBella", "Jaime", "OMikasaAckermanO", "MercadoCentral", "Seguridad 24/7", "Susana Cora", "SoyCuervo", "SandPaperX", "Curandero", "Kiosco_Neco", "AxelsFinalFlame", "Dra.Camila", "Gomeria@Lucas", ];


var disableInspectElement = function(){
	document.addEventListener('contextmenu', event => event.preventDefault());
	 document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            return false;
        }
    }
    document.onmousedown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            return false;
        }
    }
document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        } else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
        	return false;
        }
    }
}

//disableInspectElement();