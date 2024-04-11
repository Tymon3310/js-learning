    console.log("wczytano");
    let x = 8;
    let y = 5;
    const wyn = document.getElementById('wyn') as HTMLLIElement;
    if (wyn) {
        wyn.innerHTML = "Wynik:" + (y^2 + x) / 4 * 2;
    }
function broke() {
    const body = document.getElementById('body') as HTMLElement; //psucie
    if (body) {
        body.style.fontSize = '10000px';
    }
    console.error("i co zrobiłeś??");
    setTimeout(() => {
        if (body) {
            body.style.fontSize = '14px';
        }
        alert("Naprawiono");
        console.warn("Naprawiono, i lepej nie rób tego więcej");
    }, 3000);
}
function mode() {
    const content = document.getElementById('content') as HTMLElement; //dark / white mode
    const btn = document.getElementById('modebtn') as HTMLElement;
    if (content.style.backgroundColor === 'white') {
        content.style.backgroundColor = 'black';
        btn.innerHTML = 'white mode';
    } else {
        content.style.backgroundColor = 'white';
        btn.innerHTML = 'dark mode';
    }
}

function image() {
    const img = document.getElementById('win') as HTMLImageElement; //zmień obrazek
    const btn = document.getElementById('winbtn') as HTMLElement;
    if (img.src.match('win10.png')) {
        img.src = 'win11.png';
        img.style.width = '100px';
        btn.innerHTML = 'Downgrade';
    } else {
        img.src = 'win10.png';
        img.style.width = '100px';
        btn.innerHTML = 'Upgrade';
    }
}
    const pi = 3.1459;
    // pi = 3.14
    console.log(pi);
    
{   let rez = 5 % 2; //reszta
    console.log(rez);

    
    let licz: number = 10 / 2 + 7 * 4 - 3 + (20 / 4);
    console.log(licz);
    
    let pot = 5**3; //potęgowanie
    console.log(pot);
}
{
    let xy = 0;
    console.log(xy); //wys
    console.log(++xy); //zwiększ i wys
    console.log(xy++); //wys i zwi
    console.log(xy); //wys

    console.log(--xy); //zmi i wys
    console.log(xy--); //wys i zmi
    console.log(xy); //wys
    xy+=5 //dodaj zwiększ xy o 5
    let xyz = 3
    let pow = Math.pow(xy,xyz) //potęgowanie
    console.log(pow);

    console.log(typeof xyz);
    let stri = "text"
    console.log(typeof stri)
}
{
    let BitA = 192; //binarny
    let BitB = 255;
    let BitC = BitA & BitB;
    console.log(BitC.toString(2));
    console.log(BitA & BitB);
}
// }



{ //kalkulator
function dod() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a + b).toString();
}

function odj() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a - b).toString();
}

function mnz() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a * b).toString();
}

function dze() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a / b).toString();
}

}

function old(): void {
    let wiek: number = parseInt(prompt("Podaj swój wiek:") || "0", 10);
    let wiekElement = document.getElementById("wiek");
    if (wiekElement) {
        wiekElement.innerHTML = (wiek <= 18) ? "Jesteś niepełnoletni" : "Możesz iść dalej".toString();
    }
}

{ //temp convert
{
function celsjusze(kelwin){
 let stopnie = kelwin + 273.15;
 return stopnie;
}
console.log(celsjusze(1));
}
{
function kelwiny(celsjusze){
    let stopnie = celsjusze - 273.15;
    return stopnie;
}
console.log(kelwiny(255))
}
}

function zmLocal(){ //zmenna 
    let xxx = 5;
    console.log(xxx);
}
zmLocal();

let xxx = 10 //zmienna globalna
console.log(xxx);

const auto = { //obiekt
    marka: "Oplel",
    model: "Astra",
    silnk: 1.6,
    paliwo: "disel",
    kolor: "czarny",
    rocznik: "2002",
    markaModel: function(){
        return "Marka samochodu to: " + this.marka + ", a model to: " + this.model;
    },
    cnsp: function(){
        console.log(this.markaModel())
    },
};

console.log(auto.markaModel())
auto.cnsp()

function zmn(){ //najedz
   document.getElementById("najed").innerHTML = "<img src='win11.png'>"
}

function zmn_p() { //najedz ale profesionalnie
  const p = document.getElementById('najedz');
  const img = document.createElement('img');
  img.src = 'win11.png';
  p.parentNode.replaceChild(img, p);

}

let text = "Ala ma kota"; //apostrofty w stringach
console.log(text.length);
let text2 = `'Ala' nie ma "kota"`;
console.log(text2);
let text3 = "\"Ala\" nie ma \'psa\'";
console.log(text3);

let text4 = "Caco DecoMoreno to najsmaczniejsza książka jaką piłem, jest nawet lepsza niż Pan Tadeusz, ale nie jest taka jak Harry Potter";
console.log(text4.length); //długość

console.log(text4.charAt(10)); //znak na
console.log(text4.at(6));
console.log(text4.at(-10));
console.log(text4[6]); //nie robimy tak

console.log(text4.charCodeAt(23));

console.log(text4.slice(5, 16)); //krojenie
console.log(text4.slice(5));
console.log(text4.slice(-11));
console.log(text4.slice(-11, -8));
console.log(text4.substring(-6, 16)); //if - = 0
console.log(text4.substr(5, 11)); //depricated

console.log(text4.toUpperCase()); //duże 
console.log(text4.toLowerCase()); //małe

console.log(text.concat(text4)); //łączenie

let text5 = "   Ala ma kota      ";
console.log("Dłudość przed: " + text5.length + ", a po: " + text5.trim().length); //usuwanie spacji
console.log("Bez spacji na początku: " + text5.trimStart().length + " a na końcu " + text5.trimEnd().length);

let text6 = "jaj"
console.log(text6.padEnd(10, "o")); //przedłuża koniec
console.log(text6.padStart(10, "j")); //przedłuża początek

console.log(text6.repeat(5)); //powtórz

console.log(text4.replace("Caco DecoMoreno", "Harry Potter")); //zamień
console.log(text4.replaceAll("a ", " Harry Potter ")); //zamień wszystkie

console.log(text5.trim().split(" ")[2]); //podziel na tablice i wybierz element

console.log(text4.indexOf("to")); //szukanie
console.log(text4.lastIndexOf("jest"));
console.log(text4.indexOf("jest", 20)); //szukanie od 20 znaku

console.log(text4.includes("Potter")); //true jeśli jest

console.log(text4.startsWith("C")); //true jeśli zaczyna sie od C
console.log(text4.endsWith("e")); //true jeśli kończy sie na e (tutaj będzie false)

let text7 = "krowę";

console.log(`Kupię ${text6 + "ka"} i ${text7}`); //Template string - string w stringu 
let r = 3;
console.log(`Pole koła o promieniu ${r} to ${(r * Math.PI).toFixed(2)}`);

let kodHTML = `<h2>Test</h2> 
<ol>
    <li>Raz</li> 
    <li>Dwa</li>
    <li>Trzy</li>
</ol>`;
document.getElementById("Template").innerHTML = kodHTML; //template HTML

let dec = 100;
console.log(dec + " do binarnego to: " + dec.toString(2)); //do binarnego
console.log(dec + " do ósemkowgo to: " + dec.toString(8)); //do ósemkowego
console.log(dec + " do dwunastkowego to: " + dec.toString(12)); // do dwunastkowego
console.log(dec + " do szestanstkowgo to: " + dec.toString(16)); //do szesnastkowego

let hex = 0xF21;
console.log(hex)
console.log("0xF21 do dziesiętnego to: " + hex.toString(10)); //z szesnastkowego do dziesiętnego

let bin = 0b01010101;
console.log("01010101 do dziesiętnego to: " + bin.toString(10)); // z binarnego do dziesiętnego
