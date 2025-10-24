const fs = require("fs");
const userRequestHandler = (req, res) => {
  // console.log(res);
  console.log(req.url, req.method);
  // process.exit();//stops events loop
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write(`<body>
  <h1>Enter Your Details</h1>
  <form action="/submit-details" method="POST">
    <input type="text" name="name" id="name" placeholder="Enter your name"><br><br>
    <label for="gender">Gender:</label>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male">
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="female">
    <button type="submit">Submit</button>
  </form>
</body>`);
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for(const [key, val] of params){
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile("user-details.txt", JSON.stringify(bodyObject), (err) => {
        if(err){
          console.log('error occured', err);
        }
        else{
        console.log("data written successfully");
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>404 page not found</h1></body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = userRequestHandler;
