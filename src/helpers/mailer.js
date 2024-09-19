// import User from "@/models/usermodels";
// import nodemailer from "nodemailer";
// import bcryptjs from 'bcryptjs'

// export const sendEmail = async ({ email, emailType, userId }) => { 
//     console.log(email, emailType, userId,"email, emailType, userId");
    
//     try {
//         const hashedToken = await bcryptjs.hash(userId.toString(), 10)
        
//         if (emailType === "VERIFY") {
    
//             await User.findByIdAndUpdate(userId ,
//                 { $Set:{ verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 }})
//         }
//         else if (emailType === "RESET") { 
//             await User.findByIdAndUpdate(userId ,
//                 {$Set:{ forgotpasswordToken: hashedToken, forgotpasswordTokenExpiry: Date.now() + 3600000 }})
//         }


//         const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "456a0af4209e7a",
//     pass: "d28d551d9a9527"
//   }
// });

//          const mailOption={
//     from: 'vharkal16@gamil.com', // sender address
//     to: email, // list of receivers
//     subject:emailType=== "VERIFY" ? "Verify Your Email" : "Password Reset", // Subject line
//     // text: "Hello world?", // plain text body
//             html: `<p>Click <a href="${ process.env.DOMAIN }/
//         verifyemail ? token = ${ hashedToken } ">here</a> to
//          ${ emailType === "VERIFY" ? "verify your email" : "reset your password" } 
//     or copy and paste the link below in your browser.
//      < br > ${ process.env.DOMAIN } /verifyemail?token=${hashedToken} </p > `,
//             }
//         const mailResponse = await transporter.sendMail(mailOption);
//         console.log(mailResponse);
        
        
//     } catch (error ) {
//         throw new Error(error)
//         // console.log(error)
        
//     }
// }


