import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import "./style.css";
import esriConfig from "@arcgis/core/config.js";
import Measurement from "@arcgis/core/widgets/Measurement";

esriConfig.assetsPath = "./public/assets";

const map = new Map({
  basemap: "streets"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 4
});

const measurement = new Measurement({
  view: view,
  activeTool: "distance"
});

view.ui.add(measurement, "top-right");