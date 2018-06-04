$(document).ready(function () {
$('.zaSRB').click(function () {
alert('Srbija (službeno Republika Srbija), država locirana u jugoistočnoj Evropi (na Balkanskom poluostrvu) i u srednjoj Evropi (Panonskoj niziji). U sastavu Republike Srbije se nalaze i dve autonomne pokrajine Vojvodina i Kosovo i Metohija. Glavni grad je Beograd. Sluzbeni jezik je srpski. Povrsina je 88.361 km2. Broj stanovnika 9.024.734.');
});
$('.zaMAD').click(function () {
alert('Mađarska (takođe Madžarska; mađarski Magyarország), država u srednjoj Evropi; Povrsine 93.030 km2. Graniči sa Slovačkom, Ukrajinom, Rumunijom, Srbijom, Hrvatskom, Slovenijom i Austrijom. Glavni grad je  Budimpešta. Zvanični jezik države je mađarski.');
});
$('.zaHRV').click(function () {
alert('Hrvatska, zvanično Republika Hrvatska, država je u južnoj Evropi. Ona je geografski panonska, sredozemna i balkanska zemlja, smeštena na prelazu iz srednje u jugoistočnu Evropu. Glavni i najveći grad je Zagreb. Broj stanovnika 4.284.889. Površina je 56.594 km2. Hrvatska se graniči sa Mađarskoj, Srbijom, Bosnom i Hercegovinom, Crnom Gorom, Slovenijom i Austrijom.');
});
$('.zaBIH').click(function () {
alert('Republika Bosna i Hercegovina je naziv bivše države koja je postojala za vrijeme Rata u BiH. Sve do 9.  aprila 1992. godine za ovu državu se zvanično koristio stari naziv Socijalistička Republika Bosna i  Hercegovina. Glavni grad je Sarajevo. Zauzima površinu od 51.209,2 km². Broj stanovnika je 3.531.159. ');
});
$('.zaMNE').click(function () {
alert('Crna Gora je država u južnoj Evropi, koja leži na obali Jadranskog mora na Balkanskom poluostrvu. Graniči se na istoku i sjeveroistoku sa Srbijom,[a] na zapadu i sjeverozapadu sa Hrvatskom i Bosnom i  Hercegovinom (Republikom Srpskom) i na jugu i jugoistoku sa Albanijom. Na jugozapadu je Jadransko more  dijeli od Italije. Glavni grad i ujedno najveći je Podgorica, dok Cetinje ima status prijestonice.');
});
$('.zaALB').click(function () {
alert('Albanija (alb. Shqipëria) ili službeno Republika Albanija (alb. Republika e Shqipërisë), je  južnoevropska država smeštena na Balkanu. Graniči se sa Srbijom na severoistoku, sa Crnom Gorom na  severu, sa Republikom Makedonijom na istoku, i Grčkom na jugu, izlazi na Jadransko more na zapadu, i na  Jonsko more na jugozapadu.Glani grad je Tirana. Broj stanovnika je 2.821.977. Površina je 28.748 km2.');
});
$('.zaMAK').click(function () {
alert('Republika Makedonija (ustavno ime) ili Bivša Jugoslovenska Republika Makedonija (BJRM) (prema UN) (mkd.  Poranešna Jugoslovenska Republika Makedonija (PJRM), skraćeno Makedonija), kontinentalna je država u  južnoj Evropi (na Balkanskom poluostrvu), sa površinom od 25.713 km² i oko 2 miliona stanovnika. Oko dve  trećine stanovništva čine Makedonci, a jednu četvrtinu Albanci.');
});
$('.zaBUG').click(function () {
alert('Bugarska (bug. България), zvanično Republika Bugarska (bug. Република България) je država u jugoistočnoj Evropi. Graniči s Grčkom i Turskom najugu, Srbijom i Republikom Makedonijom na zapadu i Rumunijom na severu. Glavni grad Bugarske je Sofija. Ukupno stanovništvo je 7.537.929. Od toga 83,9%su Bugari, 9,4% su Turci, i 4,7% su Romi. Najraširenija vera je pravoslavna. Članica je NATO-a i Evropske unije.');
});
$('.zaRUM').click(function () {
alert('Rumunija (rum. România) je država u jugoistočnoj, delimično u srednjoj Evropi. Na istoku izlazi na Crno  more, a graniči se na jugu sa Bugarskom, na jugozapadu sa Srbijom, na severozapadu sa Mađarskom, na  severu sa Ukrajinom i na severoistoku sa Moldavijom. Površina Rumunije iznosi 238.391 km². Po površini  ona je 78. država u svetu. Prema popisu iz 2011. godine Rumunija je imala 19.599.506 stanovnika. Glavni  i najveći grad Rumunije je Bukurešt, a ostali veći gradovi su Brašov, Temišvar, Kluž, Konstanca, Krajova i Jaši.');
});

var audioSrbija = document.getElementById("srbZvuk");
var audioMadjarska = document.getElementById("madZvuk");
var audioHrvatska = document.getElementById("hrvZvuk");
var audioBih = document.getElementById("bihZvuk");
var audioCrnagora = document.getElementById("mneZvuk");
var audioAlbanija = document.getElementById("albZvuk");
var audioMakedonija = document.getElementById("makZvuk");
var audioBugarska = document.getElementById("bugZvuk");
var audioRumunija = document.getElementById("rumZvuk");
$('.zaSRB').mouseover(function () {
audioSrbija.play();
});
$('.zaMAD').mouseover(function () {
audioMadjarska.play();
});
$('.zaHRV').mouseover(function () {
audioHrvatska.play();
});
$('.zaBIH').mouseover(function () {
audioBih.play();
});
$('.zaMNE').mouseover(function () {
audioCrnagora.play();
});
$('.zaALB').mouseover(function () {
audioAlbanija.play();
});
$('.zaMAK').mouseover(function () {
audioMakedonija.play();
});
$('.zaBUG').mouseover(function () {
audioBugarska.play();
});
$('.zaRUM').mouseover(function () {
audioRumunija.play();
});
});