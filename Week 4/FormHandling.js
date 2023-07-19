const express = require("express");
const bodyParser = require("body-parser")

const hostname = '127.0.0.1';
const port = 3000;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/form.html");
});
  
app.post("/display", function(req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var studentid = req.body.studentid;
  var email = req.body.email;
  var colname = req.body.colname;
  var department = req.body.department;  
  var FullName = fname +" "+ lname ;
    
  res.send("Full Name is - " + FullName + "  Student id :" + studentid + "  Mail id : " + email + "  College Name : " + colname + "  Department : " + department);

});
  
app.listen(3000, function(){
  console.log(`server is running on http://${hostname}:${port}/`);
})