# Issue Reproduction - Measure widget in Disconnected State

## Issue

When using the ArcGIS Maps SDK for JavaScript in a disconnected state, following the directions [here](https://developers.arcgis.com/javascript/latest/get-started-npm/#local-assets), the Measurement widget does not function as expected. The numbers showing the distance never render, and the line does not draw, or appears many seconds after the drag event. The console shows errors about a missing font from https://static.arcgis.com/fonts.

## Steps to Reproduce

1. Clone this repository.
2. Type `npm dev` in the console to start the application.
3. Test that the Measurement tool works as normal.
4. Turn off your internet connection.
5. Reload the page. The map will not show correctly, this would normally be provided by a disconnected ArcGIS server.
6. Try to use the Measurement tool again. Note that the text does not show, the line doesn't show or lags, and the errors in the console.