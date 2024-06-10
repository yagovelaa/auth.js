import { emailStyles } from '@/lib/emails-template/email-styles'

export const generatePasswordResetEmail = (name: string, resetLink: string) => `
  <!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reset Password</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <table class="container" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <table class="content" cellpadding="0" cellspacing="0">
              <tr>
                <td class="header">
                  <p class="title">Reset your password to log on to <b>auth.js</b></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="paragraph">Hello <b>${name}</b>,</p>
                  <p class="paragraph">
                    To complete the reset password process, click the button below:
                  </p>
                </td>
              </tr>
              <tr>
                <td class="container-button">
                  <a class="button" href="${resetLink}"><span class="text">RESET PASSWORD</span></a>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="paragraph">Or copy and paste this URL into a new tab of your browser:</p>
                  <a class="link" href="${resetLink}">${resetLink}</a>
                  <p class="paragraph">
                    If you are not resetting your password on our platform, ignore this email.
                  </p>
                  <p class="paragraph-ft">&copy; 2024 auth.js. All rights reserved</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`
