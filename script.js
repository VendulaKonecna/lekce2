/*Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty. */
const vstupne =  12
const navstevnici = 174
const predstaveni = 15
const prijem = vstupne * navstevnici * predstaveni
document.body.innerHTML += "<p>" + "Měsíční příjem divadla je " + prijem + " €" + "</p>"
const vstupneStudent = vstupne * 0.65
const navstevniciStudent = navstevnici * 0.4
const prijemStuden = vstupneStudent * navstevniciStudent * predstaveni
const navstevniciPlne = navstevnici * 0.6
const prijemPlne = vstupne * navstevniciPlne * predstaveni
const prijemSleva = prijemStuden + prijemPlne
document.body.innerHTML += "<p>" + "Měsíční přijem divadla se studentskou slevou je " + prijemSleva + " €" + "</p>"