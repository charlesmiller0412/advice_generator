# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
    -   [Table of contents](#table-of-contents)
    -   [Overview](#overview)
        -   [The challenge](#the-challenge)
        -   [Screenshot](#screenshot)
        -   [Links](#links)
    -   [My process](#my-process)
        -   [Built with](#built-with)
        -   [What I learned](#what-i-learned)
    -   [Author](#author)
        -   [`npm run deploy`](#npm-run-deploy)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Generate a new piece of advice by clicking the dice icon

### Screenshot

![](../advice_generatorScreenshot.png)

### Links

-   Solution URL: [https://github.com/charlesmiller0412/advice_generator](https://github.com/charlesmiller0412/advice_generator)
-   Live Site URL: [https://charlesmiller0412.github.io/advice_generator/](https://charlesmiller0412.github.io/advice_generator/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   CSS Grid
-   JavaScript
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library

### What I learned

This was fun for me since I've been working with API's so much recently. I realized I'm now able to fetch data without needing to research methods and headers. I was also able to complete this project in just a couple of hours without the need of any documentation or searching. This was a good project to boost confidence and push me to move to the next levels within frontendmentor.io.

```js
const fetchQuote = async () => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`, {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        const quote = await response.json();
        setQuote(quote.slip);
        console.log(quote);
        return;
    } catch (err) {
        console.error(err);
    }
    return;
};
```

## Author

-   Website - [Charles Miller](https://www.charlesmiller.dev)
-   Frontend Mentor - [@charlesmiller0412](https://www.frontendmentor.io/profile/charlesmiller0412)

### `npm run deploy`

Updates GitHub pages deployment.
