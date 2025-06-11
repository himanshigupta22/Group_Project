const StudyMaterialCards = ({notesData}) => {
    return(
        <div
            className={"rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"}
            style={{ height: "220px", width: "300px" , }}
          >
            <div className="p-4 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">{notesData.title}</h2>
                <p className="text-sm text-gray-600">{notesData.content}</p>
              </div>
              <div className="mt-4 text-sm text-gray-700">
                <p><span className="font-semibold">Code:</span> {notesData.code}</p>
                <p><span className="font-semibold">Teacher:</span> {notesData.teacherName}</p>
                <p><span className="font-semibold">Uploaded By:</span> {notesData.uploadedBy}</p>
                {notesData.file && (
                  <a href={URL.createObjectURL(notesData.file)} target="_blank" rel="noreferrer" className="text-blue-600 underline">View PDF</a>
                )}
              </div>
            </div>
          </div>
    )
}

export default StudyMaterialCards;