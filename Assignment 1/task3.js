const CSPIT = {
    yearOfEstablishment: 2000,
    location: "Gandhinagar, Gujarat, India",
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    getAllDetails: function () {
      console.log("Year of Establishment:", this.yearOfEstablishment);
      console.log("Location:", this.location);
      console.log("Departments:");
      for (const department of this.departments) {
        console.log(department);
      }
    }
  };
  
  CSPIT.CE = Object.create(CSPIT);
  CSPIT.CE.totStudents = 180;
  CSPIT.CE.totFaculty = 30;
  
  console.log("CSPIT Details:");
  for (const j in CSPIT) {
    if (typeof CSPIT[j] !== "function") {
      console.log(j + ":", CSPIT[j]);
    }
  }
  
  console.log("\nCE Department Details:");
  for (const j in CSPIT.CE) {
    if (typeof CSPIT.CE[j] !== "function") {
      console.log(j + ":", CSPIT.CE[j]);
    }
  }
  