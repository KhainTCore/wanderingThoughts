# Overview

Shared is a shared module that houses a bunch of reusable components. These components do not maintain the state of anything, and instead offer a variety of GUI formats, styles, and features.

## Feature Modules

Each component contains its own Feature Module in an attempt to keep the abstractions clean, and allow for a high-degree of plugability. The intention is that simply copying the Feature Folder for a component then importing it in any other Angular code will cause it to work immediately.