// import "../styles/teams.css"
// export default function teams() {
//     return (
//         <div id="teams">
//             <h1>Teams</h1>
//             <p>Welcome to the teams page!</p>
//             <div id="team-list">
//                 <div className="team-member">
//                     <img src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9397393/vpavic_171003_2029_0050.jpg?quality=90&strip=all&crop=0,5.5555555555556,100,88.888888888889" alt="Team Member 1" />
//                     <h2>Team Member 1</h2>
//                     <p>Role: Developer</p>

//                 </div>
//             </div>    
//         </div>
//     );
// }
import "../styles/teams.css";

export default function Teams() {
  const heads = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4eJ0PX5YrCuY_30sCRXHr9SP4FJNKZgkphQ&s",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/mahatma-gandhi-gettyimages-102701091-2048x2048-1?_a=BAVAZGDX0",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/mahatma-gandhi-gettyimages-102701091-2048x2048-1?_a=BAVAZGDX0",
        social: {
          linkedin: "#",
          twitter: "#",
          dribbble: "#"
        }
      },
      {
        name: "Jane Smith",
        role: "UI/UX Designer",
        image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/mahatma-gandhi-gettyimages-102701091-2048x2048-1?_a=BAVAZGDX0",
        social: {
          linkedin: "#",
          twitter: "#",
          dribbble: "#"
        }
      },
    {
      name: "Alex Johnson",
      role: "Product Manager",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        twitter: "#",
        dribbble: "#"
      }
    }


  ];

  return (
    <div id="teams">
      <h1>Heads</h1>
      <p>Meet the talented individuals who make our company thrive with creativity, innovation, and dedication.</p>
      
      <div className="team-list">
        {heads.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="orbit orbit1"></div>
             <div className="orbit orbit2"></div>

            <div className="image-container">
              <div className="star-shape"></div>
              <img src={member.image} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <p>Role: {member.role}</p>
            
            <div className="social-links">
              {member.social.linkedin && (
                <a href={member.social.linkedin} aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {member.social.dribbble && (
                <a href={member.social.dribbble} aria-label="Dribbble">
                  <i className="fab fa-dribbble"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h1>Tech Team</h1>
      <p>Meet the talented individuals who make our company thrive with creativity, innovation, and dedication.</p>
      
      <div className="team-list">
        {heads.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>
            <div className="image-container">
              <div className="star-shape"></div>
              <img src={member.image} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <p>Role: {member.role}</p>
            
            <div className="social-links">
              {member.social.linkedin && (
                <a href={member.social.linkedin} aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {member.social.dribbble && (
                <a href={member.social.dribbble} aria-label="Dribbble">
                  <i className="fab fa-dribbble"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}