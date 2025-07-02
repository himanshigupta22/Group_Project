import { Link } from "react-router";
import { useState } from "react";
import Header from "./Header";

// export default function StudyMaterialHome({ notes }) {
//   const [semesterFilter, setSemesterFilter] = useState("All");
//   const [branchFilter, setBranchFilter] = useState("All");
//   const [subjectFilter, setSubjectFilter] = useState("All");

//   const filteredNotes = notes.filter((note) => {
//     return (
//       (semesterFilter === "All" || note.semester === semesterFilter) &&
//       (branchFilter === "All" || note.branch === branchFilter) &&
//       (subjectFilter === "All" || note.code === subjectFilter)
//     );
//   });

//   // Create unique lists for dropdowns
//   const uniqueSemesters = [...new Set(notes.map((note) => note.semester))];
//   const uniqueBranches = [...new Set(notes.map((note) => note.branch))];
//   const uniqueSubjects = [...new Set(notes.map((note) => note.code))];

//   const [notesD, setnotesD] = useState([]);

//   useEffect(() => {

//       console.log("Calling backend...");

//       const fetchData = async () => {
//         try {
//           const response = await fetch(url);
//           console.log("Raw response:", response);

//           const data = await response.json();
//           console.log("Parsed JSON:", data);

//           setnotesD(data);
//         } catch (err) {
//           console.error("Fetch error:", err);
//         }
//       };

//       fetchData();
//     }, []);

//   if (!notesD || notesD.length === 0) return <div>Loading...</div>;


//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
//             📚 Study Material
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Your organized study resources
//           </p>
//           <Link
//             to="/addNotes"
//             className="mt-6 inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
//           >
//             + Add New Notes
//           </Link>
//         </div>
//         {/* Filters */}
//         <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 mb-10">
//           {/* Semester Dropdown */}
//           <select
//             className="border border-gray-300 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={semesterFilter}
//             onChange={(e) => setSemesterFilter(e.target.value)}
//           >
//             <option value="All">All Semesters</option>
//             {uniqueSemesters.map((sem, idx) => (
//               <option key={idx} value={sem}>
//                 {sem}
//               </option>
//             ))}
//           </select>

//           {/* Branch Dropdown */}
//           <select
//             className="border border-gray-300 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={branchFilter}
//             onChange={(e) => setBranchFilter(e.target.value)}
//           >
//             <option value="All">All Branches</option>
//             {uniqueBranches.map((branch, idx) => (
//               <option key={idx} value={branch}>
//                 {branch}
//               </option>
//             ))}
//           </select>

//           {/* Subject Dropdown */}
//           <select
//             className="border border-gray-300 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={subjectFilter}
//             onChange={(e) => setSubjectFilter(e.target.value)}
//           >
//             <option value="All">All Subjects</option>
//             {uniqueSubjects.map((subj, idx) => (
//               <option key={idx} value={subj}>
//                 {subj}
//               </option>
//             ))}
//           </select>
//         </div>
//         {/* Notes Grid */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {filteredNotes.length > 0 ? (
//             filteredNotes.map((note, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between border border-gray-100 hover:scale-[1.02]"
//               >
//                 {/* Title */}
//                 <div className="mb-4">
//                   <h2 className="text-2xl font-bold text-blue-800 mb-2">
//                     {note.title}
//                   </h2>
//                   <p className="text-gray-600 text-sm line-clamp-2">
//                     {note.content}
//                   </p>
//                 </div>

//                 {/* Details */}
//                 <div className="space-y-2 text-sm text-gray-700">
//                   <p>
//                     📘 <span className="font-semibold">Code:</span> {note.code}
//                   </p>
//                   <p>
//                     🎯 <span className="font-semibold">Semester:</span>{" "}
//                     {note.semester}
//                   </p>
//                   <p>
//                     🏛 <span className="font-semibold">Branch:</span>{" "}
//                     {note.branch}
//                   </p>
//                   <p>
//                     👨‍🏫 <span className="font-semibold">Teacher:</span>{" "}
//                     {note.teacherName}
//                   </p>
//                   <p>
//                     🙋‍♂ <span className="font-semibold">Uploaded By:</span>{" "}
//                     {note.uploadedBy}
//                   </p>
//                 </div>

//                 {/* View PDF Button */}
//                 {note.file && (
//                   <div className="mt-5">
//                     <a
//                       href={URL.createObjectURL(note.file)}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition"
//                     >
//                       📥 View PDF
//                     </a>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-3 text-lg">
//               No notes found for selected filters.
//             </p>
//           )}
//         </div>
      
//       </div>
//     </>
//   );
// }



import { useEffect, useState } from "react";

const url = "http://localhost:8080/action/find";

const StudyMaterialCards = () => {

  const [notesD, setnotesD] = useState([]);

  useEffect(() => {

      console.log("Calling backend...");

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          console.log("Raw response:", response);

          const data = await response.json();
          console.log("Parsed JSON:", data);

          setnotesD(data);
        } catch (err) {
          console.error("Fetch error:", err);
        }
      };

      fetchData();
    }, []);

  if (!notesD || notesD.length === 0) return <div>Loading...</div>;

  return (
    <>
     <Header />
    <div className="flex flex-wrap gap-4">
      {notesD.map((note, index) => (
        <div
          key={index}
          className= "bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between border border-gray-100 hover:scale-[1.02]"
          style={{ height: "220px", width: "300px" }}
        >
          <div className="p-4 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">{note.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{note.content}</p>
            </div>
            <div className="mt-4 text-sm text-gray-700 pb-2 mb-2.5">
              <p><span className="font-semibold">Code:</span> {note.code}</p>
              <p><span className="font-semibold">Teacher:</span> {note.teacherName}</p>
              <p><span className="font-semibold">Uploaded On:</span> {note.uploadedOn}</p>
               {/* View PDF Button */}
             <a
                  href={note.url}
                  target="_blank"
                  rel="noreferrer"
                 className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition"
                >
                  📥 View PDF
                </a>
               
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default StudyMaterialCards;
