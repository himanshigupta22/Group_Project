import Header from "./Header";
const About = () => {
  return (
    <>
      <Header />
      <div className="p-10  ">
        <div className="p-10 flex justify-cente mt-2 flex-col    justify-center align-center">
          {/* About notes */}
          <h2 className="flex justify-center text-5xl sec">About MyNoteBook</h2>
          <h3 className="flex justify-center mt-4">
            "Notes that Connect, Knowledge that Empowers."
          </h3>
          <p className="flex justify-center border  mt-3  bg-blue-100 p-3 rounded-full ">
            The Place fueled by the deep desire of introvert students or those
            having trouble asking for help, or those who want to share their
            knowledge to all those in need To exel in Academics.
          </p>
        </div>
        <div className="sec mt-3 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col items-center space-x-6">
          {/* What is this project all about */}
          <h2 className="mb-3 text-3xl">📚 What is My NoteBook?</h2>
          <p>
            My NoteBook is a student-driven platform built to help learners
            upload, discover, and share academic notes with ease. Whether you're
            preparing for exams, catching up on missed classes, or simply
            looking for different perspectives — My NoteBook empowers you with
            peer-contributed resources at your fingertips.
          </p>
        </div>
        <div>
          <div className=" sec mt-3 border max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col items-center space-x-6">
            {/* What are we tryning to do */}
            <h2 className="mb-3 text-2xl">What We Are Trying To Do</h2>
            <p>
              We are trying to bridge the gap between students by creating a
              central hub for notes and study resources. Our aim is to encourage
              peer-to-peer learning, where students can help each other by
              sharing their insights, summaries, and lecture notes. We believe
              that learning is better together, and by building this platform,
              we hope to make education more accessible, supportive, and
              community-driven.
            </p>
          </div>
          <div className="sec mt-3 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col items-center space-x-6">
            <h2 className="mb-3 text-2xl">🌟 Our Mission</h2>
            <p>
              Our mission is to make educational resources easily accessible and
              shareable across all colleges. We believe that knowledge grows
              when it's shared, and through collaboration, we aim to make
              learning more inclusive, supportive, and efficient for everyone.
            </p>
          </div>
          <div className="sec mt-3 max-w-4xl border mx-auto p-6 bg-white rounded-2xl shadow-md flex space-x-6 ">
            <div>
              <h2>🚀 Key Features</h2>
              <p>
                ✅ Upload and download academic notes easily<br></br>✅ Browse
                notes by course, subject, and semester<br></br>✅ Like, comment,
                and engage with fellow students<br></br>✅ Clean,
                distraction-free interface focused on learning<br></br>
              </p>
            </div>

            <div>
              <h2>💡 Our Unique Approach</h2>
              <p>
                ✔️ Free, simple, and fast platform designed for students
                <br></br>
                ✔️ Peer-verified notes and admin-reviewed content<br></br>
                ✔️ Fully responsive and mobile-friendly experience<br></br>
                ✔️ Built by students, for students — we know what you need!
                <br></br>
              </p>
            </div>
          </div>
          <div className="sec mt-2 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col items-center space-x-6">
            <h2>👥 Who is My NoteBook For?</h2>
            <p>
              College Students: Across all years and academic streams Busy
              Learners: Who need quick access to high-quality notes
              Contributors: Who love sharing their knowledge and helping others
              Knowledge Seekers: Looking for verified, well-organized study{" "}
            </p>
          </div>
          <div>{/* Team */}</div>
          <div className="max-w-4xl mx-auto ">
            <section id="team" className="mt-3">
              <h2>Our Team</h2>
              <div className="team-container flex ">
                <div className="sec team-member  m-3 p-2 border bg-amber-200  max-h-70">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Team Member 1"
                    style={{ height: "40%" }}
                  />
                  <h3 className="mt-4">John Doe</h3>
                  <p>CEO & Founder</p>
                  <p>
                    John is the visionary behind our company. He ensures
                    everything runs smoothly and leads the team with passion and
                    dedication.
                  </p>
                </div>
                <div className="sec team-member  m-3 p-2 border bg-amber-200  max-h-70">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Team Member 1"
                    style={{ height: "40%" }}
                  />
                  <h3 className="mt-4">Jane Smith</h3>
                  <p>Lead Developer</p>
                  <p>
                    Jane is responsible for overseeing the development team and
                    making key technical decisions for our projects.
                  </p>
                </div>
                <div className="sec team-member  m-3 p-2 border bg-amber-200  max-h-70">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Team Member 1"
                    style={{ height: "40%" }}
                  />
                  <h3 className="mt-4">Mike Johnson</h3>
                  <p>Marketing Manager</p>
                  <p>
                    Mike ensures our brand gets the attention it deserves by
                    leading our marketing efforts and reaching the right
                    audience.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
