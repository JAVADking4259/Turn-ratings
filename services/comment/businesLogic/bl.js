const repo = require('../repository/repository');

async function addComment(inputData){
    await repo.addComment(inputData);
    delete inputData._id
    return{
        message:"success",
        result:inputData
    }
};
async function getComments(query) {
    const result = await repo.getComments(query);
    return {
        message: 'success',
        result
    }
};
async function deleteComment(inputData) {
    await repo.deleteComment(inputData);
    return {
        message: 'این کامنت با موفقیت حذف شد '
    }
};

module.exports={addComment,getComments,deleteComment};