const mongoose = require('mongoose');
const { Schema } = mongoose;

const VenueSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Venue name is required'],
      trim: true,
      unique: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    location: {
      type: String,
      required: [true, 'Location description is required'],
      trim: true,
    },
    capacity: {
      type: Number,
      required: [true, 'Capacity must be specified'],
      min: [1, 'Capacity must be at least 1'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Venue', VenueSchema);
