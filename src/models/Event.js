const mongoose = require('mongoose');

const EventSchema = mongoose.Schema(
  {
    title: String,
    date: Date,
    status: {
      type: String,
      enum: ['draft', 'confirmed', 'cancelled'],
      default: 'draft',
    },
    venue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venue',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Event', EventSchema);
