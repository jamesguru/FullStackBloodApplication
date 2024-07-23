const ejs = require("ejs");
const dotenv = require("dotenv");
const Donor = require("../models/Donor");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const sendDonorDetailsEmail = async () => {
  const donors = await Donor.find({ status: 0 });

  if (donors.length > 0) {
    for (let donor of donors) {
      ejs.renderFile(
        "templates/BloodDonationDonor.ejs",
        {
          name: donor.name,
          email: donor.email,
          tel: donor.tel,
          address: donor.address,
          bloodgroup: donor.bloodgroup,
          diseases: donor.diseases,
          weight: donor.weight,
          bloodpressure: donor.bloodpressure,
          age: donor.age,
          date: donor.date,
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: donor.email,
            subject: "Hello, Blood Bridge Donor.",
            html: data,
          };

          try {
            await sendMail(messageoption);
            await Donor.findByIdAndUpdate(donor._id, {
              $set: {
                status: 1,
              },
            });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { sendDonorDetailsEmail };
