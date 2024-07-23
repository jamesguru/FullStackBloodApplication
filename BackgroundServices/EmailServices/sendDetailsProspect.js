const ejs = require("ejs");
const dotenv = require("dotenv");
const Prospect = require("../models/Prospect");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const sendDetailsProspectEmail = async () => {
  const prospects = await Prospect.find({ status: 0 });
  if (prospects.length > 0) {
    for (let prospect of prospects) {
      ejs.renderFile(
        "templates/BloodDonationProspect.ejs",
        { name: prospect.name },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: prospect.email,
            subject: "Blood Bridge, Than You",
            html: data,
          };

          try {
            sendMail(messageoption);
            await Prospect.findByIdAndUpdate(prospect._id, {
              $set: { status: 1 },
            });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { sendDetailsProspectEmail };
