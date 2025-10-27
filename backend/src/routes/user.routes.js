import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1       
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secure routes
router.route("/logout").post(verifyJWT, logoutUser)

//refrshToken routes
router.route("/refresh-token").post(refreshAccessToken)

//changePassword
router.route("/change-password").post(verifyJWT, changeCurrentPassword)

//fetching current user
router.route("/current-user").get(verifyJWT, getCurrentUser)

//update account details
router.route("/update-account").patch(verifyJWT, upadteAccountDetails)

//update avatar image
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)

//update cover image
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

//get channel profile
router.route("/c/:username").get(verifyJWT, getUserChannelProfile)

//get user watch history
router.route("/history").get(verifyJWT, getWatchHistory)

export default router;
