import React, { useState } from 'react';
import './App.css'; // Import your CSS file

// Dummy Data for demonstration
const emails = [
  { id: 1, sender: 'Sam Miller', subject: 'Portfolio', snippet: 'Stop wasting time looking for file buried in...', time: 'Today 08:45 PM', content: 'Hi Mike,\nLorem ipsum dolor sit amet...', attachments: ['./public/assest/bg1.png', './public/assest/bg2.png','./public/assest/bg3.png','./public/assest/bg4.png'],img: "./public/assest/emailuser1.png" },
  { id: 2, sender: 'Lily Jones', subject: 'Invitations', snippet: 'Its always a pleasure to have you all at my birthday...', time: 'Yesterday 01:15 PM', content: 'Its always a pleasure to have you all at my birthday parties. So, please dont be late for this one.', attachments: [],img: "./public/assest/emailuser2.png" },
  { id: 3, sender: 'Smith', subject: 'Assignment Submission', snippet: 'If you want to set up as assignment additional...', time: 'Monday 06:45 PM', content: 'If you want to set up as assignment additional reviews, you can enable Moderated', attachments: [],img: "./public/assest/emailuser3.png" },
  { id: 4, sender: 'Patrick', subject: 'Interview Scheduled', snippet: 'Hi Mike, thanks for applying for UX Designer...', time: 'Monday 05:15 PM', content: 'Hi Mike, thanks for applying for UX Designer. We are reviewing resume\'s and will follow up in...', attachments: [],img: "./public/assest/emailuser4.png" },
];

function App() {
  const [selectedEmail, setSelectedEmail] = useState(emails[0]); // Select the first email by default

  return (
    <div className="mailbox-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <img src="./public/assest/user1.png" alt="Profile" className="profile-pic" />
          <div>
            <p className="profile-name">Mike Manson</p>
            <p className="profile-email">iamkiran@gmail.com</p>
          </div>
        </div>

        <div className="search-input-sidebar">
            <input type="text" placeholder="Q Search" />
        </div>

        <nav className="navigation-section">
          <ul>
            <li className="nav-item active"><img src="./public/assest/icon1.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp;  Inbox <span className="notification-badge">20</span></li>
            <li className="nav-item"><img src="./public/assest/icon5.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Flagged</li>
            <li className="nav-item"><img src="./public/assest/icon6.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Draft</li>
            <li className="nav-item"><img src="./public/assest/icon7.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Sent</li>
            <li className="nav-item"><img src="./public/assest/icon8.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Trash</li>
            <li className="nav-item"><img src="./public/assest/icon1.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; More</li>
          </ul>
        </nav>

        <div className="folders-section">
          <h3>Folders <span className="add-button">Add</span></h3>
          <ul>
            <li> <img src="./public/assest/icon2.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Office</li>
            <li> <img src="./public/assest/icon3.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Personal</li>
            <li><img src="./public/assest/icon4.png" alt="Sender" className="sender-pic-icon" /> &nbsp;  &nbsp; Freelance</li>
          </ul>
        </div>

        <button className="compose-button">Compose</button>
      </aside>

      {/* Middle Email List */}
      <main className="email-list-area">
        <div className="email-list-header">
            <span className="email-count">1/180</span>
            <div className="pagination-arrows">
                <span>&lt;</span>
                <span>&gt;</span>
            </div>
        </div>
        <ul className="email-items">
          {emails.map((email) => (
            <li
              key={email.id}
              className={`email-item ${selectedEmail.id === email.id ? 'active' : ''}`}
              onClick={() => setSelectedEmail(email)}
            >
              <img src={email.img} alt="Sender" className="sender-pic" />
              <div className="email-info">
                <p className="sender-name">{email.sender}</p>
                <p className="email-subject">{email.subject}</p>
                <p className="email-snippet">{email.snippet}</p>
              </div>
              <span className="email-time">{email.time}</span>
            </li>
          ))}
        </ul>
      </main>

      {/* Right Email Detail */}
      <section className="email-detail-area">
        {selectedEmail && (
          <>
            <div className="email-detail-header">
              <div className="email-actions">
                <span>&lt; Back</span> {/* Placeholder for back icon */}
                <span>Archive</span> {/* Placeholder for archive icon */}
                <span>Delete</span> {/* Placeholder for delete icon */}
              </div>
            </div>
            <div className="email-detail-content">
              <div className="email-meta">
                <img src="./public/assest/emailuser1.png" alt="Sender" className="sender-pic-detail" />
                <div>
                  <p className="sender-name-detail">{selectedEmail.sender}</p>
                  <p className="sender-email-detail">iamkiran@gmail.com</p> {/* Assuming sender email is fixed for demo */}
                  <p className="email-time-detail">{selectedEmail.time}</p>
                </div>
              </div>
              <h2 className="email-detail-subject">{selectedEmail.subject}</h2>
              <p className="email-body">{selectedEmail.content}</p>

              {selectedEmail.attachments.length > 0 && (
                <div className="attachments-section">
                  <h4>Attachments</h4>
                  <div className="attachment-previews">
                    {selectedEmail.attachments.map((attachment, index) => (
                      <img key={index} src={attachment} alt="Attachment" className="attachment-thumbnail" />
                    ))}
                  </div>
                  <button className="download-button">Download</button>
                </div>
              )}
            </div>
            <div className="reply-area">
              <input type="text" placeholder="Type Message." className="reply-input" />
              <button className="send-button">Send</button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
