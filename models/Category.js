const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true }, // baslik
    description: { type: String, required: false }, // açıklama
    subCategories: [{ // alt kategoriler
        title: { type: String, required: true }, // alt kategori baslik
        description: { type: String, required: false }, // alt kategori açıklama
        imageUrl: { type: String, required: false }, // thumbnail url
        slug: { type: String, required: true } // kebap title: url
    }],
    imageUrl: { type: String, required: false }, // thumbnail url,
    slug: { type: String, required: true }, // kebap title: url
});

module.exports = mongoose.model('Category', categorySchema);