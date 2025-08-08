// controllers/portfolioController.js
const Contact = require("../models/contactModel"); // Import your model

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Save to MongoDB
    const contact = new Contact({ name, email, msg });
    await contact.save();

    return res.status(200).send({
      success: true,
      message: "Message saved to database successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error saving message",
      error,
    });
  }
};

module.exports = { sendEmailController };
