import React, {memo} from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  ja: "JA",
}

const Language = memo((props) => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: lang }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => {
                changeLocale(language)
              }}
              style={{
                color: lang === language ? `#2D3748` : `#CBD5E0`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
})

export default Language