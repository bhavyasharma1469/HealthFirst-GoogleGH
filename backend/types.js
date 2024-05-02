const z = require("zod");

// Schema for appointment booking
const AppointmentSchema = z.object({
    patient_email: z.string().email(),
    date: z.date(),
    time: z.string(),
    purpose: z.string()
});

// Schema for rating a previous appointment
const RatingSchema = z.object({
    appointment_id: z.string(),
    patient_email: z.string().email(),
    doctor_name: z.string(),
    rating: z.number().int().min(1).max(5),
    feedback: z.string()
});

module.exports = {
    AppointmentSchema,
    RatingSchema
};
