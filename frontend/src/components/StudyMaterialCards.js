// // import { useEffect, useState } from "react";

// // const url = "http://localhost:8080/all/find";



// // const StudyMaterialCards =  () => {
// //   const [notesData, setNotesData] = useState();
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(url, {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         });
// //         const data = await response.json();
// //         setNotesData(data);
// //       } catch (err) {
// //         console.error("Error fetching data:", err);
// //       }
// //     };

// //     fetchData();
// //   }, []);
// //   if (!notesData) return <div>Loading...</div>;

// //   return (
// //     <div
// //       className={"rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"}
// //       style={{ height: "220px", width: "300px", }}
// //     >
// //       <div className="p-4 h-full flex flex-col justify-between">
// //         <div>
// //           <h2 className="text-lg font-bold text-gray-800 mb-1">{notesData.title}</h2>
// //           <p className="text-sm text-gray-600">{notesData.content}</p>
// //         </div>
// //         <div className="mt-4 text-sm text-gray-700">
// //           <p><span className="font-semibold">Code:</span> {notesData.code}</p>
// //           <p><span className="font-semibold">Teacher:</span> {notesData.teacherName}</p>
// //           <p><span className="font-semibold">Uploaded By:</span> {notesData.uploadedBy}</p>
// //           {notesData.file && (
// //             <a href={URL.createObjectURL(notesData.file)} target="_blank" rel="noreferrer" className="text-blue-600 underline">View PDF</a>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default StudyMaterialCards;


// import { useEffect, useState } from "react";

// const url = "http://localhost:8080/action/find";

// const StudyMaterialCards = () => {
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
//     <div className="flex flex-wrap gap-4">
//       {notesD.map((note, index) => (
//         <div
//           key={index}
//           className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//           style={{ height: "220px", width: "300px" }}
//         >
//           <div className="p-4 h-full flex flex-col justify-between">
//             <div>
//               <h2 className="text-lg font-bold text-gray-800 mb-1">{note.title}</h2>
//               <p className="text-sm text-gray-600">{note.content}</p>
//             </div>
//             <div className="mt-4 text-sm text-gray-700">
//               <p><span className="font-semibold">Code:</span> {note.code}</p>
//               <p><span className="font-semibold">Teacher:</span> {note.teacherName}</p>
//               <p><span className="font-semibold">Uploaded On:</span> {note.uploadedOn}</p>
//               {note.file && (
//                 <a
//                   href={note.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-600 underline"
//                 >
//                   View PDF
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudyMaterialCards;
