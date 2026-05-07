import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skyltar & Montering | Professionell Skyltning Stockholm',
  description: 'Högkvalitativa skyltar, foliering och montering för företag. Stockholm till hela Sverige.',
  keywords: 'skyltar, montering, foliering, stockholm, hantverkare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif' }}>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            --color-text-primary: #1a1a1a;
            --color-text-secondary: #666666;
            --color-text-tertiary: #999999;
            --color-background-primary: #ffffff;
            --color-background-secondary: #f5f5f5;
            --color-background-tertiary: #efefef;
            --color-border-primary: #e0e0e0;
            --color-border-secondary: #cccccc;
            --color-border-tertiary: #dcdcdc;
            --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            --border-radius-md: 6px;
            --border-radius-lg: 12px;
          }

          @media (prefers-color-scheme: dark) {
            html {
              --color-text-primary: #f0f0f0;
              --color-text-secondary: #b0b0b0;
              --color-text-tertiary: #808080;
              --color-background-primary: #1a1a1a;
              --color-background-secondary: #2a2a2a;
              --color-background-tertiary: #333333;
              --color-border-primary: #404040;
              --color-border-secondary: #555555;
              --color-border-tertiary: #383838;
            }
          }

          body {
            background: var(--color-background-primary);
            color: var(--color-text-primary);
            line-height: 1.6;
          }

          a {
            color: inherit;
            text-decoration: inherit;
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}
