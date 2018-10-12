import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">About <i>VOX:MIX</i></h1>
            </div>
          </div>
          <div className="card card-body bg-light mb-3">
          <h3 className="text-center"><i className="fas fa-lightbulb"></i> Project Goals</h3>
          <p>It's a problem as old as the music industry:  <i>How do I find the team I need to get my music to where I want it to be?</i> Singers often have a difficult time finding motivated music producers, and producers often have a difficult time finding capable singers. However there is endless musical talent all around the world, and thanks to the internet everybody is accessible. In my music career some of my most effective teamwork has been with people who were not local, and it's something I see as an ongoing opportunity. No longer do ambitious musicians need to be confined by the small pond limits of their local talent pool.</p> 
            
            <p>With <i>Vox:Mix</i> you can seek out the most determined music talent who is also looking for you, see where your interests align and get in touch directly. Find your dream talent, create new music and take the world by storm!</p>
          <h3 className="text-center"><i className="fas fa-laptop"></i> Technology</h3>
          <p><i>Vox:Mix</i> is built using the MERN stack (Mongodb, Express, React, Node.Js) with Redux and mLab. The original concept came from heavily modifying the <a href="https://github.com/bradtraversy/devconnector">Devconnector</a> app in Brad Traversy’s MERN stack course on Udemy. It is currently hosted for free on Heroku temporarily due to the low volume of traffic. In a year from now mLab will also be deprecated which means the data storage will need to be rewritten.</p>
          <p>If this project gets developed further then I intend to replace the Image URL with a way to upload local images to a database. I haven’t done this yet because it will require some research, and I want to release what I have now because I have another project to start. Additionally I want to add a way to search singers and producers because as this database grows then it will be more difficult to sort through profiles. For now due to the low volume of users this is not an issue yet, so I’m not concerned about it right way.</p>
          <h3 className="text-center"><i className="fas fa-envelope"></i> Contact</h3>
          <p>Have a suggestion or want to get in touch? Contact me at: voxmixapp@gmail.com</p>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
