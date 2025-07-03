
import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router";
import StudyMaterialCards from "./StudyMaterialCards";
import { BeatLoader, BounceLoader, ClipLoader, PuffLoader, RingLoader, MoonLoader } from "react-spinners";

const url = "http://localhost:8080/action/find";

export default function StudyMaterialHome() {
  const [loading,setLoading]=useState(true);
  const [notesD, setnotesD] = useState([]);

  useEffect(() => {

    console.log("Calling backend...for data");

    const fetchData = async () => {
      try {

        console.log("before fetch ")
        const response = await fetch(`http://localhost:8080/action/find`);
        // console.log("Raw response:", response);
        console.log("after fetch ")

        const data = await response.json();
        // console.log("Parsed JSON:", data);

        setnotesD(data);
      } catch (err) {
        console.log("Fetch error:", err);
      }finally{
        setLoading(false);
      }

    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
            📚 Study Material
          </h1>
          <p className="text-gray-600 text-lg">
            Your organized study resources
          </p>
          <Link
            to="/addNotes"
            className="mt-6 inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
          >
            + Add New Notes
          </Link>
        </div>
        {/* Filters */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 mb-10">
          {/* Semester Dropdown */}
          <select
            className="border border-gray-300 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          // value={semesterFilter}
          // onChange={(e) => setSemesterFilter(e.target.value)}
          >
            {/* <option value="All">All Semesters</option> */}
            {/* {uniqueSemesters.map((sem, idx) => ( */}
            {/* <option key={idx} value={sem}> */}
            {/* {sem} */}
            {/* </option> */}
            {/* ))} */}
          </select>

          {/* Branch Dropdown */}
          <select
            className="border border-gray-300 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          // value={branchFilter}
          >

          </select>

          {/* Subject Dropdown */}
          <select
            className="border border-gray-300 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"

          >

          </select>
        </div>
        {/* Notes Grid */}
        
        {/* 🌀 Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <ClipLoader color="#3b82f6" size={50} />
            <span className="ml-4 text-gray-600">Loading notes...</span>
          </div>
        ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {notesD.length > 0 ? (
            notesD.map((note, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between border border-gray-100 hover:scale-[1.02]"
              >
                {/* Title */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {note.content}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    📘 <span className="font-semibold">Code:</span> {note.code}
                  </p>
                  <p>
                    🎯 <span className="font-semibold">Semester:</span>{" "}
                    {note.semester}
                  </p>
                  <p>
                    🏛 <span className="font-semibold">Branch:</span>{" "}
                    {note.branch}
                  </p>
                  <p>
                    👨‍🏫 <span className="font-semibold">Teacher:</span>{" "}
                    {note.teacherName}
                  </p>
                  <p>
                    🙋‍♂ <span className="font-semibold">Uploaded By:</span>{" "}
                    {note.uploadedBy}
                  </p>
                </div>

                {/* View PDF Button */}
                {note.url && (
                  <div className="mt-5">
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition"
                    >
                      📥 View PDF
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3 text-lg">
              No notes found for selected filters.
            </p>
          )}
        </div>
        )}
      </div>
    </>
  );
}



// export default StudyMaterialCards;
module.exports = StudyMaterialHome
