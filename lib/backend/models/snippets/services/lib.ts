import CodeSnippetModel from "../snippets-model";

export const getCodeSnippets = () => CodeSnippetModel.find();

// GET BY ID
export const getCodeSnippetById = (id: string) => CodeSnippetModel.findById(id);

// CREATE
export const createCodeSnippet = (values: Record<string, any>): Promise<any> =>
  new CodeSnippetModel(values).save().then((snippet) => snippet.toObject());

// UPDATE
export const updateCodeSnippetById = (
  values: Record<string, any>,
  id: string
): Promise<any> => CodeSnippetModel.findByIdAndUpdate(id, values);

//DELETE THE SPECIFIC SNIPPET
export const deleteCodeObjectById = (snippetId: string, objId: string) => {
  return CodeSnippetModel.findByIdAndUpdate(
    objId,
    { $pull: { code: { _id: snippetId } } },
    { new: true }
  );
};

export const deleteCodeSnippetById = (snippetId: string) => {
  return CodeSnippetModel.findByIdAndDelete(snippetId);
};

// UPDATE SNIPPET COUNT
export const updateSnippetCount = (snippetId: string) => {
  return CodeSnippetModel.findOneAndUpdate(
    { "code._id": snippetId }, // Query to find the document containing the snippet with the given _id
    { $inc: { copy_count: 1 } }, // Increment the copy_count at the root of the document
    { new: true } // Option to return the updated document
  );
};

// GET SNIPPETS FOR A SPECIFIC USER
export const getCodeSnippetByUserId = (id: string) => {
  return CodeSnippetModel.find({ user_id: id });
};
