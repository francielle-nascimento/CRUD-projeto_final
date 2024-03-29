const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const alunosSchema = new Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  materia: { type: String, required: true },
  dificuldade: [{type: Number,min: 0, max: 10, require: true}],
  dataAulas:[{type: Date, require: false}],
  grupo: { type: String, required: true }
})

const alunosModel = mongoose.model('alunos', alunosSchema);

module.exports = { alunosModel, alunosSchema };
