import { emailStyles } from '@/lib/emails-template/email-styles'

export const generateTwoFactorEmail = (name: string, token: string) => `
  <!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>2FA Code</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <table class="container" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <table class="content" cellpadding="0" cellspacing="0">
              <tr>
                <td class="header">
                  <p class="title">Your 2FA code to log in to <b>auth.js</b></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="paragraph">Hello <b>${name}</b>,</p>
                  <p class="paragraph">
                    To complete the two-factor authentication process, copy your code below:
                  </p>
                </td>
              </tr>
              <tr>
                <td class="container-button">
                  <div class="button">${token}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="paragraph">
                    If you are not prompted for two-factor authentication on our platform, change your password immediately.
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
