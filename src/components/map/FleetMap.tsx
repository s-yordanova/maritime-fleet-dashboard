import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

import { vessels } from "../../data/vessels";
import { manningAgents } from "../../data/manningAgents";
import { useDashboardStore } from "../../store/dashboardStore";

export function FleetMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const { selectedVessel, setSelectedVessel, setSelectedAgent } =
    useDashboardStore();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [15, 20],
      zoom: 1.5,
    });

    mapRef.current = map;

    map.on("load", () => {
      map.addSource("selected-route", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      map.addLayer({
        id: "selected-route-line",
        type: "line",
        source: "selected-route",
        paint: {
          "line-color": "#38bdf8",
          "line-width": 3,
          "line-opacity": 0.9,
          "line-dasharray": [1.5, 1.5],
          "line-blur": 0.5,
        },
      });
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    vessels.forEach((vessel) => {
      const markerElement = document.createElement("div");
      markerElement.className = "fleet-marker text-sky-400";

      markerElement.innerHTML = `
        <span class="fleet-marker-pulse vessel-pulse"></span>
        <span class="fleet-marker-dot vessel-dot"></span>
      `;

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 28,
      }).setHTML(`
        <div style="padding:8px;color:white;min-width:160px;">
          <div style="font-weight:700">${vessel.name}</div>
          <div style="opacity:.8">${vessel.type}</div>
          <div style="margin-top:4px">→ ${vessel.destination}</div>
        </div>
      `);

      new maplibregl.Marker({
        element: markerElement,
        anchor: "center",
      })
        .setLngLat([vessel.currentPosition.lng, vessel.currentPosition.lat])
        .addTo(map);

      markerElement.addEventListener("click", () => {
        setSelectedVessel(vessel);
      });

      markerElement.addEventListener("mouseenter", () => {
        popup
          .setLngLat([vessel.currentPosition.lng, vessel.currentPosition.lat])
          .addTo(map);
      });

      markerElement.addEventListener("mouseleave", () => {
        popup.remove();
      });
    });

    manningAgents.forEach((agent) => {
      const markerElement = document.createElement("div");
      markerElement.className = "fleet-marker text-emerald-400";

      markerElement.innerHTML = `
        <span class="fleet-marker-pulse agent-pulse"></span>
        <span class="fleet-marker-dot agent-dot"></span>
      `;

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 28,
      }).setHTML(`
        <div style="padding:8px;color:white;min-width:160px;">
          <div style="font-weight:700">${agent.name}</div>
          <div style="opacity:.8">${agent.city}, ${agent.country}</div>
          <div style="margin-top:4px">Pool: ${agent.totalPoolSize}</div>
        </div>
      `);

      new maplibregl.Marker({
        element: markerElement,
        anchor: "center",
      })
        .setLngLat([agent.coordinates.lng, agent.coordinates.lat])
        .addTo(map);

      markerElement.addEventListener("click", () => {
        setSelectedAgent(agent);

        const routeSource = map.getSource("selected-route") as
          | maplibregl.GeoJSONSource
          | undefined;

        const emptyData = {
          type: "FeatureCollection" as const,
          features: [],
        };

        routeSource?.setData(emptyData);
      });

      markerElement.addEventListener("mouseenter", () => {
        popup
          .setLngLat([agent.coordinates.lng, agent.coordinates.lat])
          .addTo(map);
      });

      markerElement.addEventListener("mouseleave", () => {
        popup.remove();
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [setSelectedVessel, setSelectedAgent]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map) return;
    if (!selectedVessel) return;

    const routeSource = map.getSource("selected-route") as
      | maplibregl.GeoJSONSource
      | undefined;

    if (!routeSource) return;

    const agent = manningAgents.find(
      (a) => a.id === selectedVessel.manningAgentId
    );

    if (!agent) return;

    routeSource.setData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [
            selectedVessel.currentPosition.lng,
            selectedVessel.currentPosition.lat,
          ],
          [agent.coordinates.lng, agent.coordinates.lat],
        ],
      },
    });
  }, [selectedVessel]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-sky-500/20 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
      <div ref={mapContainerRef} className="h-full w-full" />

      <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-slate-700 bg-slate-950/95 p-3 text-sm backdrop-blur">
        <div className="mb-2 font-semibold text-white">Map Legend</div>

        <div className="flex items-center gap-2 text-slate-300">
          <span className="h-3 w-3 rounded-full bg-sky-400" />
          Vessels
        </div>

        <div className="mt-2 flex items-center gap-2 text-slate-300">
          <span className="h-3 w-3 rounded-md bg-emerald-400" />
          Manning Agents
        </div>
      </div>
    </div>
  );
}
