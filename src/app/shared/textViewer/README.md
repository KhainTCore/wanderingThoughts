# Text Viewer Component

Takes an HTML formatted string and displays it out within a flex container. Also displays a title seperated by a mat-divider.
Nothing fancy here.

## Content API

The format of the `text` binding is exposed through a simple class API called `HTMLFile`. This is exported and accessible to any caller.

| Attribute       | Optional | Type    | Purpose                                                  |
| --------------- | -------  | ------- | -------------------------------------------------------- |
| body            | No       | String  | the html formatted string for display                    |
| style           | Yes      | Object  | an ngStyle object applied to a div containing the `body` |
| tableOfContents | Yes      | any[]   | I don't remember                                         |
| title           | Yes      | String  | title to be displayed (overrides the `title` binding)    |
| misc            | Yes      | any     | any attribute to associate with this specific file       |

## Options

| Option         | Default         | Purpose                                  |
| -------------- | --------------- | ---------------------------------------- |
| noTitle        | false           | Hide the title and title divider         |
| text           | HTMLFile        | The file and it's style to be displayed  |
| title          | "Title"         | The title displayed                      |
| style          | none            | CSS styles applied to an ngStyle         |
