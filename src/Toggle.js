const Toggle = ({ showPosts, setShowPosts }) => {
    return (
      <div >
        <button 
          className={`toggle-btn ${showPosts ? 'active' : ''}`}
          onClick={() => setShowPosts(true)}
        >
          Posts
        </button>
        <button 
          className={`toggle-btn ${!showPosts ? 'active' : ''}`}
          onClick={() => setShowPosts(false)}
        >
          Users
        </button>
      </div>
    )
  }
  
  export default Toggle
  