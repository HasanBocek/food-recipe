const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true }, // baslik
    components: [{ // tarifler: yemek, sos ...
        name: { type: String, required: true }, // tarifin adı
        ingredients: [{ // tarifin malzemeleri
            name: { type: String, required: true }, // malzemenin adı
            quantity: { type: Number, required: false }, // malzemenin miktarı
            unit: { type: String, required: false } // malzemenin birimi
        }],
        instructions: [{ // tarifin yapılışı
            step: { type: Number, required: true }, // adım sayısı
            description: { type: String, required: true }, // adımın yapılışı
            imageUrl: { type: String, required: false } // adıma dair fotoğraf
        }]
    }],
    informations: [{ // tarife dair notlar
        name: { type: String, required: true }, // notun adı
        items: [{ type: String, required: true }] // her bir notun elementi
    }],
    description: { type: String, required: true }, // açıklama
    category: { type: String, required: true }, // kategori: yemek, tatlı, sos ...
    subCategory: { type: String, required: true }, // alt kategori: köfte, kebap ...
    servings: { type: Number, required: true }, // porsiyon kişi sayısı
    nutrition: { // besin değerleri
        calories: { type: String, required: false }, // kalori
        protein: { type: String, required: false }, // protein
        carbs: { type: String, required: false }, // karbonhidrat
        fat: { type: String, required: false } // yağ
    },
    imageUrl: { type: String, required: false }, // thumbnail url
    rating: { type: Number, required: false, }, // oylama
    comments: [{ // yorumlar
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // yorum sahibi kullanıcı _id
        content: { type: String, required: true }, // içerik
        date: { type: Date, require: true, default: Date.now() }, // tarih
        likes: [{ // beğenmeler
            user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // beğenen kullanıcı _id
        }],
        replies: [{ // yanıtlar
            user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // yanıtlayan kullanıcı _id
            content: { type: String, required: true }, // içerik
            date: { type: Date, require: true, default: Date.now() }, // tarih
        }],
    }],
    gallery: [{ type: String, required: false }], // galeri resimler url
    slug: { type: String, require: true }, // kebap title: url
    time: { type: Number, required: true }, // hazırlanma süresi
    difficulty: { type: String, required: true }, // zorluk
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // gönderen _id
    createdAt: { type: Date, require: true, default: Date.now() }, // yaratılış tarih
    likes: { type: Number, required: false }, // beğenme sayısı
    favorite: { type: Number, required: false }, // favori sayısı
    updatedAt: { type: Date, require: false } // düzenlenme tarih
});

module.exports = mongoose.model('Recipe', recipeSchema);