import React from "react";

function Contact() {
  return (
    <div class="container">
            <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="card">
                    <div class = "card-body">
                        <h2 class="card-title">Contact Me</h2>
                        <h5>My Email: <a href="mailto:bkim377@gatech.edu">bkim377@gatech.edu</a></h5>
                        <h5>My Phone Number: 770-557-7499</h5>
                        <hr></hr>
                    <div>
                        <form action="mailto:bkim377@gatech.edu" method="post" enctype="application/x-www-form-urlencoded">
                              <label for="exampleFormControlInput1">Name</label>
                              <input type="name" class="form-control mb-3" id="exampleFormControlInput1" placeholder="John Smith">
                            </input>

                              <label for="exampleFormControlInput1">Email</label>
                              <input type="email" class="form-control mb-3" id="exampleFormControlInput2" placeholder="example@gmail.com">
                            </input>

                              <label for="exampleFormControlTextarea1">Message</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              
                              <br></br>

                            <button type="submit" class="btn btn-primary">Send</button>
                            <button type="reset" class="btn btn-danger">Reset</button>
                            
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
        
  );
}

export default Contact;
