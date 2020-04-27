import NoteEntity from "../../models/db/note";

/**
 * create a note
 * @param note
 */
export const createNote = async (note: NoteEntity) => {
    return NoteEntity.create<NoteEntity>({
        ...note,
    });
};

export const deleteNoteById = async (id: number) => {
    return NoteEntity.destroy({
        where: {
            id
        }
    });
};

export const getAllNotes = async (): Promise<NoteEntity[]> => {
    return NoteEntity.findAll({
        attributes: ['id', 'title', "content", "updatedAt"],
    });
};

export const getNoteById = async (id: number): Promise<NoteEntity | null> => {
    return NoteEntity.findOne({
        where: {
            id
        }
    });
};
