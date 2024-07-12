const ContactMessage = require("../Models/Contact");

const contact = async(req, res) => {
    const {name, email, message} = req.body;

    try {
        const contactMessage = new ContactMessage({
            name,
            email,
            message,
            user: req.user._id
        })
        await contactMessage.save();
        res.status(201).json({message: "Message sent successfully"})
    } catch (error) {
        res.status(201).json({message: "Failed to send message", error: error.message})
    }
}
module.exports = contact;