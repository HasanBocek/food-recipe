const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username: { type: String, uniqe: true, required: true }, // kullanıcı adı
    name: { type: String, required: true }, // tam isim
    surnmae: { type: String, required: true }, // soyisim
    dob: { type: Date, required: false }, // doğum tarihi
    profileImage: { type: String, required: false }, // profil resmi url
    gender: { type: String, required: true }, // cinsiyet
    phone: { type: Number, required: false }, // telefon numarası
    email: { type: String, unique: true, required: true }, // eposta adresi
    password: { type: String, required: true }, // şifre
    roles: [{ type: String, required: true }], // roller
    isEmailVerified: { type: Boolean, required: true, default: false }, // eposta doğrulaması
    bio: { type: String, required: false }, // profil sayfası açıklaması
    links: [{ // profil sayfası tıklanabilir bağlantılar
        name: { type: String, required: true }, // bağlantı adı
        link: { type: String, required: true } // bağlantı url
    }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // takip edenler _id
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // takip ettikleri _id
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }], // kaydettikleri _id
    createdAt: { type: Date, required: true, default: Date.now() } // hesap oluşturulma tarihi
});

module.exports = mongoose.model("Employee", employeeSchema);