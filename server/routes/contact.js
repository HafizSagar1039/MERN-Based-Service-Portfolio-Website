import express from "express";
import { pool } from "../config/db.js";
import authMiddleware from "../middleware/auth.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Insert into database
    await pool.query(
      "INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, subject, message]
    );

    res.status(201).json({
      message:
        "Your message has been sent successfully! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Get all contact messages (protected route)
router.get("/", authMiddleware, async (req, res) => {
  try {
    // Get all messages
    const [rows] = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );

    res.json(rows);
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single contact message (protected route)
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    // Get message by ID
    const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Get contact error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update contact status (protected route)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["New", "Pending", "Responded", "Closed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    // Update status
    const [result] = await pool.query(
      "UPDATE contacts SET status = ? WHERE id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Update contact error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Respond to a contact message (protected route)
router.post("/:id/respond", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    // Validate response
    if (!response) {
      return res.status(400).json({ message: "Response message is required" });
    }

    // Get the contact message
    const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Message not found" });
    }

    const contact = rows[0];

    console.log(contact);
    await sendEmail({
      to: contact.email,
      subject: `Re: ${contact.subject}`,
      message: response, // this is the admin's reply
    });

    res.json({
      message: "Response sent successfully",
      to: contact.email,
      subject: `Re: ${contact.subject}`,
      responseMessage: response,
    });
  } catch (error) {
    console.error("Respond to contact error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a contact message (protected route)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    // Delete message
    const [result] = await pool.query("DELETE FROM contacts WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Delete contact error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
