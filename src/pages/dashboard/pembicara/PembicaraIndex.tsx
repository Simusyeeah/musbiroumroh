import { Link } from "react-router-dom";

export default function PembicaraIndex() {
    return(
        <div>
            <h1 className="mb-6">Ini halaman Pembicara</h1>
            <Link to="/dashboard/pembicara/create" className="bg-fuchsia-200 rounded-2xl p-2">Create New</Link>
        </div>
    );
};