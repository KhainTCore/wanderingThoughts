# Card Carousel Component

Utilizes the Angular Material Card Component to display a carousel animated body.

The default animation is for a slide out/page turn exit, and a fade in entrance. The body can be images and/or text. The animation and motion through the state is achieved by buttons that have a handful of aesthetic styles themselves. Any image is also "zoomable" by a simple click.

## Content API

The format of the `items` binding is exposed through a simple class API called `Item`. This is exported and accessible to any caller.

| Attribute | Optional | Type    | Purpose                                         |
| --------- | -------  | ------- | ----------------------------------------------- |
| content   | Yes      | String  | The body of text that will be placed in a p tag |
| image     | No       | String  | A link that will populate an img tag's href     |
| state     | Yes      | String  | Will default to 'unviewed'                      |

## Options

| Option         | Default         | Purpose                                  |
| -------------- | --------------- | ---------------------------------------- |
| albumHeight    | 300             | Height of the Card's body                |
| albumWidth     | 500             | Width of the Card                        |
| items          | []              | The content to be displayed              |
| navButtonIcons | none            | mat-icon svgIcon names                   |
| navButtonStyle | "overlay-sides" | CSS styles of the navigation buttons     |
| title          | "Album"         | Title of the Card                        |
| zoomIcon       | none            | mat-icon svgIcon name of the zoom button |
