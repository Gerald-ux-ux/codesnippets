import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
// @ts-ignore
import mailGun from "nodemailer-mailgun-transport";
export async function POST(res: NextResponse, req: NextRequest) {
  try {
    const auth = {
      auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      },
    };

    const handleEmailResponse = (res: NextResponse, err: any) => {
      try {
        // Response when feedback was not successfully sent
        if (err) {
          console.log(err);
          return new NextResponse(
            JSON.stringify({
              success: false,
              message: err.message,
              data: {},
            })
          );
        }

        // On success
        return new NextResponse(
          JSON.stringify({
            success: true,
            message: "Feedback sent successfully",
            data: {},
          })
        );
      } catch (error: any) {
        return new NextResponse(
          JSON.stringify({
            success: false,
            message: `DBerror: ${error.message}`,
            data: error,
          })
        );
      }
    };

    // Transporter
    const transporter = nodemailer.createTransport(mailGun(auth));
    const body = await res.json();
    const { from, text }: any = req.body;

    const subject = process.env.FEEDBACK_SUBJECT;
    const to = process.env.MAIL_RECIPIENT;

    if (!from || !text) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Fill in all the required fields",
        })
      );
    }

    const mailOptions = {
      from,
      to,
      subject,
      text,
    };
    transporter.sendMail(mailOptions, (err: any) => {
      handleEmailResponse(res, err);
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: `DBerror: ${error.message}`,
        data: error,
      }),
      { status: 500 }
    );
  }
}
