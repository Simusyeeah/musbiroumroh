import { Link } from "react-router-dom";

export default function EventIndex() {
    return(
        <div>
            <h1 className="mb-6">Ini halaman Event</h1>
            <Link to="/dashboard/event/create" className="bg-fuchsia-200 rounded-2xl p-2">Create New</Link>
        </div>
    );

};