const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

//api/users with get and post.
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// api/users/;id with get, out and delete.
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add and remove friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);


module.exports = router;