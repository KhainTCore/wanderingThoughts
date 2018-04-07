# Overview

Pages is a Feature Module that abstracts away each page into an isolated component.
These components act as Containers, and maintain the current state of the view.
This means that the state will referesh if the page is changed, since the component
instance of the previous page's component is destroyed.