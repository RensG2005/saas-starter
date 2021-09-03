import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

const Map = (): JSX.Element => {
    return (
        <MapContainer center={[52.2, 6.7]} zoom={12} scrollWheelZoom={true} style={{height: "85vh", width: "100%", zIndex: 1}}>
            <TileLayer
                attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
