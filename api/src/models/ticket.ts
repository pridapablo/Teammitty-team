import { Schema, model } from 'mongoose';

const TicketSchema = new Schema({
    classification: { type: Schema.Types.ObjectId, ref: 'Classification' },
    subclassification: String,
    priority: Number,
    description: String,
    resolutionID: { type: Schema.Types.ObjectId, ref: 'Resolution' },
    closureTime: Date,
});

export default model('Ticket', TicketSchema);