import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({

    shortId: {

        type: String,
        required: true,
        unique: true,
    },

    redirectURL: {

        type: String,
        required: true,
        trim: true
    },

    shortUrl: {

        type: String,
        required: true
    },

    createdBy: {

        type: Schema.Types.ObjectId,
        ref: "User"
    },

    viewHistory: [

        {
            timestamps: {

                type: Number
            },
            device: {

                type: String
            },

            city: {

                type: String
            },

            country: {
                
                type: String
            }
        }
    ]
},
    {

        timestamps: true
    }
)

export const URL = mongoose.model("URL", urlSchema)