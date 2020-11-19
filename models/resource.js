const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  resourceInfo: [
    {
      resourceId: { type: String, required: true },
      resourceType: { type: String, required: true },
      resourceName: { type: String, trim: true, required: "please enter user name" },
      website: { type: String, required: true },
      email: { type: String, },
      phone: { type: String, },
      city: { type: String, },
      state: { type: String, },
      contactName: { type: String, },
      description: { type: String, },
      memberOwned:  { type: String, },
    }
  ]
});

const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource;
