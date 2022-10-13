# Testing 

Tests were done site wide, all tests undertaken are show below: 

## Contents 

- [Wave](#wave)
- [Validator Testing](#validator-testing)
  + [HTML](#html)
  + [CSS](#CSS)
- [Lighthouse](#lighthouse)
  + [Desktop Results](#desktop-results)
  + [Mobile Results](#mobile-results)
- [Colour Contrast](#colour-contrast)
- [Browser Compatibility](#browser-compatibility)
- [Responsivity](#responsivity)
- [Issues/ Bugs Found & Resolved](#issues-bugs-found--resolved)

## Wave 

[WAVE](https://wave.webaim.org/)

- This Chrome extention was used throughout the build of my webpage game to, make sure nothing was being missed along the build process. 

![Wave Results](documents/test/wave.png)

## Validator Testing 

### HTML 

[W3C HTML Validator](https://validator.w3.org/)

- Intially this showed three warnings, missing of alt image tag & to remove type from script tags. All these suggestions were completed. 

![HTML Validator Results](documents/test/html_validator.png)

### CSS 

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input+with_options)

- This check returned no issues. 

Back to [README.md](/README.md)

## Lighthouse 

- Lighthouse was used towards the end of the build, this is accessed through chrome developer tools analysing the following:

  - Performance 
  - Acessibility 
  - Best Practise 
  - SEO

- This was check for both desktop and mobile devices 

### Desktop Results 

![Desktop results](documents/test/lighthouse_desktop.png)

### Mobile Results 

![Mobile Results](documents/test/lighthouse_mobile.png)

## Colour Contrast

- A11y Color validator was used to check the contrasts of colour site wide. 

![A11y Color Contrast Validator Results](documents/test/colour_contrasts%20.png)

## Browser Compatibility 

- This site was tested on Chrome, Microsoft Edge, and Firefox on desktop.

- The website was tested in Chrome on mobile and tablet. 

- All tested devices were consistent across browsers.

## Responsivity 

Responsiveness was tested through Chrome Developer tools. The devices tested include:

- Iphone 6/7/8 plus 
- Iphone 12 Pro 
- Iphone XR 
- Ipad 
- Ipad Air 
- Ipad Mini
- Pixel 5
- Galaxy Fold 
- Galaxy S8+
- Surface Duo

The site was actively tested on my Galaxy Fold, Ipad Air & Blade 15 Razor Laptop.

## Issues/ Bugs Found & Resolved

**a) Making site responsive and section appear over the top of each other. 

- After diving into the project, it was quickly realised the basic design was not achieving desired outcome. This was when Bootstrap was introduced. Creating quick and easy resolve to issues that were created. 

**b) Phone resposivity 

- When using dev tools the whole alignment was thrown to the left, this again was resolved by correct div structures through the use of unicorn and bootstrap. 

**c) Back button restarting story 

- Syncing the back button to the restart the story from the start, caused me confustion and incorrect display with JavaScript functions. This was resolved by adding onClick function reload to the button within the index.html. 

**d) Image cycling through array, syncing with story narrations & buttons 

- This is still not perfect! But reloved through long winded else if function. 

## Unresolved 

**a) typeText() not progressing through the complete story narrations. 

**b) Removing the :hover when answers are showing whether they are correct or incorrect. 

**c) Last questions answers pausing to show results before progressing to thank you message. 