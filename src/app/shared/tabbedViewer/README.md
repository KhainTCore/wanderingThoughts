# Tabbed Viewer Component

Utilizes the Angular Tabs Module to display a tabbed body of items.

## Content API

The format of the `tabs` binding is exposed through a simple class API called `Tab`. This is exported and accessible to any caller.

| Attribute | Optional | Type    | Purpose                                 |
| --------- | -------  | ------- | --------------------------------------- |
| title     | No       | string  | Tab Title                               |
| content   | No       | string  | Tab body (not HTML formatted)           |
| code      | Yes      | boolean | Use a `code` tag instead of a `div` tag |
| css       | Yes      | string  | Not used?                               |

## Options

| Option         | Default | Purpose                                           |
| -------------- | ------- | ------------------------------------------------- |
| tabBodyStyle   | {}      | an ngStyle object applied to the content of a tab |
| tabs           | []      | the individual tabs of the tab view               |
