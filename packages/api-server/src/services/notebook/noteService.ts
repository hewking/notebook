import NoteEntity from "../../models/db/note";
import * as NoteDao from "../../reposiories/db/noteDao";

/**
 * create a note
 * @param note
 */
export const createNote = async (note: NoteEntity) => {
    return NoteDao.createNote(note);
};

export const deleteNoteById = async (id: number) => {
    return NoteDao.deleteNoteById(id);
};

export const getAllNotes = async (): Promise<NoteEntity[]> => {
    return NoteDao.getAllNotes();
};

export const getNoteById = async (id: number): Promise<NoteEntity | null> => {
    return NoteDao.getNoteById(id);
};
