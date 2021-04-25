// document.addEventListener("DOMContentLoaded",function(){
//     let word = ["Abraham", "Edet", "Ikott", "Paul","David"]
//     for(i= word.length-1; i >= 0; i--){
//         console.log(word[i])
        
        
//     }
    
// })

document.addEventListener("DOMContentLoaded",function(){

    let quotesBank = [
        "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
        "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        "Don’t Let Yesterday Take Up Too Much Of Today.",
        "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
        "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",

    ]

    let quotesAuthor = [
        "Walt Disney",
        "Winston Churchill",
        "Will Rogers",
        "Mohnish Pabrai",
        "Johann Wolfgang Von Goethe"
    ]

    // Variables declaration for the DOM elements

    let quoteSection = document.querySelector(".quotes-section");
    let newQuoteBtn = document.querySelector(".newQuotes")
    let autoUpdate = document.querySelector(".autoUpdate");
    let author = document.querySelector(".quote-Author");
    let exitAutoUpdate = document.querySelector(".exitAutoUpdate")

    let randomQuote =  parseInt(Math.random() * quotesBank.length) 
    let randomAuthor = parseInt(Math.random() * quotesAuthor.length)

    quoteSection.innerHTML = quotesBank[randomQuote];
    author.innerHTML = "-" +" " + quotesAuthor[ randomQuote];

    setInterval(function timer(){
        let timer = document.querySelector(".timer");
        timer.style.width = "100%";
  
    },-1);

    //this function activates the autoupdate of quotes, this does not require the user to press any button for new quotes....

let setAutoUpdate;
  autoUpdate.addEventListener("click",function(){

         setAutoUpdate = setInterval(function updateQuotes(){
        let randomQuote =  parseInt(Math.random() * quotesBank.length) 
        let randomAuthor = parseInt(Math.random() * quotesAuthor.length)
    
        for(let i = 0; i < quotesBank.length; i++){
            quoteSection.innerHTML = quotesBank[randomQuote];
            author.innerHTML = "-" +" " + quotesAuthor[ randomQuote]
            // console.log(quotesBank[randomQuote],quotesAuthor[randomQuote])
        }
    
    }
    
    ,  10000);
    autoUpdate.innerHTML = "AUTO-UPDATING NOW"

  }) ;

  exitAutoUpdate.addEventListener("click", function(){
    clearInterval(setAutoUpdate)
    autoUpdate.innerHTML = "Click Here To Set To Auto Update";
   
  })

  

  



// this function upadtes quotes when the new quotes button is clicked....
function updateQuotes(){

    let randomQuote =  parseInt(Math.random() * quotesBank.length) 
    let randomAuthor = parseInt(Math.random() * quotesAuthor.length)

    console.log(randomAuthor,randomQuote)

    for(let i = 0; i < quotesBank.length; i++){
        quoteSection.innerHTML = quotesBank[randomQuote];
        author.innerHTML = "-" +" " + quotesAuthor[ randomQuote]
        console.log(quotesBank[randomQuote],quotesAuthor[randomQuote])
    }
    clearInterval(setAutoUpdate)

}
    newQuoteBtn.addEventListener("click",updateQuotes)
});
