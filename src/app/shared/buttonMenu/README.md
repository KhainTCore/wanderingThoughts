# Button Menu Component

Utilizes the Angular Material Button Component to display a Button that toggles a dropdown menu of clickable items.

## Content API

The format of the `menuItems` binding is exposed through a simple class API called `MenuItem`. This is exported and accessible to any caller.

| Attribute    | Optional | Type    | Purpose                                                                |
| ------------ | -------  | ------- | ---------------------------------------------------------------------- |
| css          | Yes      | string  | CSS class names applied to a ngClass on each menuItem's `span` element |
| colspan      | No       | number  | Number of columns the item will span (not Implemented)                 |
| clickValue   | Yes      | string  | a value to return on a menuItem click                                  |
| displayValue | Yes      | string  | The string name of a menuItem                                          |
| icon         | Yes      | string  | The mat-icon svg name of a menuItem                                    |
| style        | Yes      | object  | A ngStyle object applied to the menuItem's `span` element              |

## Options

| Option      | Default                | Purpose                                                               |
| ------------| ---------------------- | --------------------------------------------------------------------- |
| buttonStyle | "b"                    | Style of menu Button                                                  |
| color       | ""                     | Color of the menu button (using the Angular material `color` binding) |
| menuItems   | []                     | items of the menu                                                     |
| title       | {displayValue: "Menu"} | String title and/or Icon of the menu                                  |
| onSelected  | EventEmitter           | notifies parent component of menuItem clicks                          |