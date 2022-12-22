import { Schema, models, model } from "mongoose";

const userSchema = new Schema({ // data base gonderilcek verilerin tipini belirtiyoruz Schema içinde
    name: String,
    avatar: String,
    email: String,
    salary: Number,
    date: String,
    status: String,
});

const Kenan = models.user || model('user', userSchema)

export default Kenan;