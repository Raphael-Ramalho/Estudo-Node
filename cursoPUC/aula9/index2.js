//Nome: Raphael de Souza Ramalho Victor Ferreira

const th = ['','thousand','million', 'billion','trillion'];
const dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
const tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
const tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return undefined;
    let x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    let n = s.split(''); 
    let str = '';
    let sk = 0;
    for (let i=0;   i < x;  i++) {
        if ((x-i)%3==2) { 
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { 
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }
    
    if (x != s.length) {
        let y = s.length;
        str += 'point ';
        for (let i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }
    return str.replace(/\s+/g,' ');
}

function EhNegativo(valor) {
    if(valor < 0){
        return "less "
    } else ("")
}

function loopDoPrompt(){
    let valor
    let mensagem
    do {
        valor = +prompt("Type a number: ","0")
        mensagem = toWords(Math.abs(valor))
        if(valor == 0){
            mensagem = "zero"
        }
        if(mensagem === undefined){
            alert("Invalid Number. Try again!")
        }
    } while (mensagem === undefined)
    mensagem = [EhNegativo(valor), mensagem].join('')
    alert(mensagem)
}

loopDoPrompt()

