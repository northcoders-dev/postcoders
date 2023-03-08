# put your "I would have done this with more time"-style comments here

I would spend more time on the CSS to make the error display neater. But, current form meets features.

I would spend more time to research what patterns a valid postcode follows. MVP is reached since app is working and show immediately an error message if something is wrong. Implemented a function to slice outcode if full postcode is provided rather than use regex restrictions. This might be more user friendly as I didn't even know what it was before starting this test. Since input isn't for a password regex is more an additional featuree

I would spend more time spiking the Material UI technology. At the moment, it seems different to what was in the Dev Docs. My MUI Cards are displayed in a basic way, which meets MVP, but probably not getting the best results from it.

Code is functional and meets MVP. But, I would consider refactoring to make it easier for others to read and understand the code. For example, the "areasByPostcode" variable could be made into state, as that might be clearer.

I need to debug an unexpected behaviour. When console log used in API.js, the objects appear with a postcode. The original data does not have a key for postcode, it was created by my code to filter out results to display. Unsure whether this is mutation or an async issue. But, the code works as expected otherwise so does not affect the function. But, it would be good to debug this as it may cause issues when more features are added in the future.

I would also consider making the url reflect the search so people can share links.