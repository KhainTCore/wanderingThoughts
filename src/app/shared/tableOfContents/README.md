# Table of Contents Component

Displays out a list of values that can be associated with an id/class name to link to different locations on the DOM. Exposes several settings for CSS control, a optional left hand border for style, and allows for nesting of links for a hierachy.

## Content API

This format of the `content` binding is exposed through a simple class APi called `Content`. This is exported and accessible to any caller.

| Attribute | Optional | Type    | Purpose                                   |
| --------- | -------  | ------- | ----------------------------------------- |
| Header    | Yes      | Boolean | If an ornamental header instead of a link |
| level     | No       | Number  | The indentation level of the content      |
| style     | Yes      | String  | CSS to override the general CSS           |
| target    | Yes      | String  | Links to a class/id on the DOM            |
| title     | No       | String  | The display value                         |

## Options

| Option       | Default | Purpose                                |
| ------------ | ------- | -------------------------------------- |
| border       | true    | Display a left hand border             |
| borderColour | #294F6D | The colour of the left hand border     |
| content      | none    | The items for the table of content     |
| indentSize   | 5       | The indent multiplier                  |
| textColour   | white   | The color of the content display names |

