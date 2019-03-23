const Max = require("max-api");
const path = require("path");
const { Chord, Note } = require("tonal");

// This will be printed directly to the Max console
Max.post(`Loaded the ${path.basename(__filename)} script`);

Max.addHandler("chord", (...notesIn) => {
  if (notesIn.length === 1) {
    const orderedNotes = notesIn.sort((a, b) => a - b);
    const root = Note.fromMidi(orderedNotes[0]);
    const chord = Chord.notes(root, "M");
    const midiNotes = chord.map(Note.midi);
    Max.outlet(midiNotes);
  }
  if (notesIn.length === 2) {
    const orderedNotes = notesIn.sort((a, b) => a - b);
    const root = Note.fromMidi(orderedNotes[0]);
    const chord = Chord.notes(root, "m");
    const midiNotes = chord.map(Note.midi);
    Max.outlet(midiNotes);
  }
  if (notesIn.length === 3) {
    const orderedNotes = notesIn.sort((a, b) => a - b);
    const root = Note.fromMidi(orderedNotes[0]);
    const chord = Chord.notes(root, "Maj7");
    const midiNotes = chord.map(Note.midi);
    Max.outlet(midiNotes);
  }
  if (notesIn.length === 4) {
    const orderedNotes = notesIn.sort((a, b) => a - b);
    const root = Note.fromMidi(orderedNotes[0]);
    const chord = Chord.notes(root, "m7");
    const midiNotes = chord.map(Note.midi);
    Max.outlet(midiNotes);
  }
});
