
function qouteGenerator()
{

    var qouteList = [

        {qoute : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain"
        },

        {qoute : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        author : "Marilyn Monroe"
        },
        {qoute : "So many books, so little time.",
        author : "Frank Zappa"
        },
        {qoute : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author : "Bernard M. Baruch"
        },
        {qoute : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
        },

        {qoute : "So many books, so little time",
        author : "Frank Zappa"
        },

        {qoute : "Be the change that you wish to see in the world",
        author : "Mahatma Gandhi"
        }
    ]

    var random = Math.floor(Math.random() * qouteList.length);

    document.getElementById("h4").innerHTML = `<i class="fas fa-quote-left"></i>  ${qouteList[random].qoute}  <i class="fas fa-quote-right"></i>`;
    
    document.getElementById("h5").innerHTML = "--" + " " +qouteList[random].author;
    console.log(random)
}
