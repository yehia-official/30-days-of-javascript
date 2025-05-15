 const btnEl = document.getElementById("btn");
    const quoteEl = document.getElementById("quote");
    const quotes = [
      "Happiness is not something ready-made. It comes from your own actions.",
      "The most important thing is to enjoy your life—to be happy—it's all that matters.",
      "Happiness depends upon ourselves.",
      "For every minute you are angry you lose sixty seconds of happiness.",
      "The purpose of our lives is to be happy.",
      "Happiness is only real when shared.",
      "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
      "Count your age by friends, not years. Count your life by smiles, not tears.",
      "Do more things that make you forget to check your phone.",
      "Happiness is not in the mere possession of money; it lies in the joy of achievement.",
      "The key to being happy is knowing you have the power to choose what to accept and what to let go.",
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
      "Success is not the key to happiness. Happiness is the key to success.",
      "If you want happiness for an hour — take a nap. If you want happiness for a lifetime — help someone else.",
      "Be happy for this moment. This moment is your life.",
      "The happiest people don't have the best of everything, they just make the best of everything."
    ];

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteEl.innerText = quotes[randomIndex];
    };

    getRandomQuote();
    btnEl.addEventListener("click", getRandomQuote);