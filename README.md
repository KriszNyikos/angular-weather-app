### Task

- Choose any public REST or GraphQL API, like by ex. weather data  
- Create an angular component  
- Fetch the API data async, manipulate it by using RxJS, and wire it into HTML  
- Last but not least, add a search field to the page which filters the data  

#### Tips

- Design just has to be functional, not beautiful  
- While we are aware that many of these can be achieved by a component library, we would encourage not to use those to solve the main issues (e.g. filtering)  
# KriszWeatherForecast

### Task

- Choose any public REST or GraphQL API, like by ex. weather data  
- Create an angular component  
- Fetch the API data async, manipulate it by using RxJS, and wire it into HTML  
- Last but not least, add a search field to the page which filters the data  

#### Tips

- Design just has to be functional, not beautiful  
- While we are aware that many of these can be achieved by a component library, we would encourage not to use those to solve the main issues (e.g. filtering)  

---

#### Milestones for development

 Components
- [] Actual day weather
- [] Weather forecast
- [] City selector input field

 Features
- [x] The application should use the weather API https://www.weatherapi.com/
- [] Actual weather of the selected city could be shown.
- [] 3 day forecast is available for the user (in a free weather api plan)
- [] Forecast and actual weather should be separate component.
- [] The app should show extra data (humidity, wind, etc.)
- [] User can type the selected city into the input field
- [] If the user start typing a city, a list pop up under the input field with the available cities.

#### Technical solutions
- [x] Needs a service for weather HTTP requests (Forecast and available cities)
- [] Needs a layer which is responsible for convert the data from the API to the approriate form.
- [] Needs a folder where the modells are stored (Which is includes the interfaces and the helper functions for convertint.)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
