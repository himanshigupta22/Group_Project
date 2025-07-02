import { useState } from "react";
import Header from "./Header";
import PDFUploader from '../Utility/Utils'
import { Link } from "react-router";

const backend = "http://localhost:8080";

export default function AddNotes({ notes, setNotes }) {

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedOn, setUploadedOn] = useState("");
  const [url, setUrl] = useState('');

  const handleAddNote = async () => {

    if (!title || !content || !code || !branch || !semester || !teacherName || !file) {
      alert("Please fill in all fields and select a PDF file.");
      return;
    }

    // const newNote = {
    //   title,
    //   content,
    //   code,
    //   teacherName,
    //   semester,
    //   branch,
    //   uploadedOn,
    //   url
    // };
    const currDate = new Date().toISOString();

    const newurl = await PDFUploader(file);

    if (!newurl) {
      alert("Upload failed");
      return;
    }
    setUrl(newurl);
    setUploadedOn(currDate);

    const newNote = {
      title,
      content,
      code,
      teacherName,
      semester,
      branch,
      uploadedOn: currDate,
      url: newurl,
    };


    //send to backend

    try {
      const url = `${backend}/action/upload`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });
      const result = await response.json();
      const { success, message, error } = result;


      if (!success) {
        alert(`Backend error: ${error || message || "Unknown error"}`);
        return;
      }
      setNotes([...notes, newNote]);
      setUrl(uploadedUrl);
      setUploadedOn(currDate);

      alert("File uploaded ");

      setTitle("");
      setContent("");
      setCode("");
      setBranch("");
      setSemester("");
      setUploadedOn("");
      setTeacherName("");
      setFile(null);
    } catch (err) {
      console.log(err);
    }


  }
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Add a New Note
          </h1>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Code"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <select
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="" placeholder="Select Semester">
                Select Semester
              </option>
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="3rd">3rd Semester</option>
              <option value="4th">4th Semester</option>
              <option value="5th">5th Semester</option>
              <option value="6th">6th Semester</option>
              <option value="7th">7th Semester</option>
              <option value="8th">8th Semester</option>
            </select>

            <input
              type="text"
              placeholder="Branch"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />

            <input
              type="text"
              placeholder="Teacher Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />

            {/* <input
              type="text"
              placeholder="Uploaded On"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={uploadedOn}
              onChange={(e) => setUploadedOn(e.target.value)}
            /> */}

          </div>

          <div className="mt-6">
            <textarea
              placeholder="Content"
              rows="4"
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input
              type="file"
              accept="application/pdf"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleAddNote}
              className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Your Notes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {note.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Code:</strong> {note.code}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Semester:</strong> {note.semester}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Branch:</strong> {note.branch}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Teacher:</strong> {note.teacherName}
                </p>
                {/* <p className="text-gray-600 mb-1">
                  <strong>Uploaded On:</strong> {note.uploadedOn}
                </p> */}
                {/* <a href={notes.newurl}>Open the pdf</a> */}
                <Link to={note.url}>Open </Link>
                <p className="text-gray-700 mt-2">{note.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}